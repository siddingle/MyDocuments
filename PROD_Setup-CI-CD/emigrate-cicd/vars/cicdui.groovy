def checkoutScm = {
        git branch: 'dev-k8-poc',
        credentialsId: '692bbda9-3741-4662-8371-92df1ccfcac3',
        url: 'https://apps.trigyn.com/gitlab/emigrate/emigrate.git'
}

def checkoutCdn() {
    dir('emigratecdn') {
        git branch: 'master',
            credentialsId: '692bbda9-3741-4662-8371-92df1ccfcac3',
            url: 'https://apps.trigyn.com/gitlab/emigrate/emigratecdn.git'
    }
}
def addPdf() {
        sh 'sudo cp -r emigratecdn/assets/pdfs src/assets'
}

def build() {
       
       nodejs('NPM') {
        sh '''
            npm install --force --cache ~/.npm
            npm run package
            npm run build:stqc
           '''
           }    
       
    }

def dockerImagePushToNexus() {

       def environment = env.ENVIRONMENT
               def lowerenv = environment.toLowerCase()
                sh """
                echo "${ENVIRONMENT}"
                echo ${lowerenv}
                 docker build -f ./ui-Dockerfile -t ${HTTP_PROXY_NEXUS_HOST}/emigrate-ui-${lowerenv}:${BUILD_NUMBER} .
                 docker push ${HTTP_PROXY_NEXUS_HOST}/emigrate-ui-${lowerenv}:${BUILD_NUMBER}
                 docker rmi -f ${HTTP_PROXY_NEXUS_HOST}/emigrate-ui-${lowerenv}:${BUILD_NUMBER}
                """

   }

def deploymentToKuberentes() {

                  def environment = env.ENVIRONMENT
                  def lowerenv = environment.toLowerCase()


                withCredentials([file(credentialsId: 'emigrate_kube_configfile', variable: 'KUBECONFIG')]) {

                    sh """
                   # kubectl get nodes
                   # kubectl get pod -A
                    cd k8s/dev

                    sed -i 's|'192.168.70.16:5081/emigrate-ui:latest'|'${HTTP_PROXY_NEXUS_HOST}/emigrate-ui-${lowerenv}:${BUILD_NUMBER}'|g' ./emigrate-ui-deployment.yaml

                    kubectl apply -f emigrate-ui-deployment.yaml
                   # kubectl get pod -A

                    """

                }
            }

def monitoringDeployment() {

      def serviceName = env.SERVICE_NAME
       def lowerServiceName = serviceName.toLowerCase()
                
            // Wait for a few seconds to allow pods to start
            sleep 15
              sh 'kubectl get pod -n emigrate-dev-ns' 
            // Check pod status
            def podStatus = sh(script: "kubectl get pods -n emigrate-dev-ns -o json", returnStdout: true).trim()

            // Parse JSON response using jsonSlurper
            def podStatusObject = new groovy.json.JsonSlurper().parseText(podStatus)

            // Check the status of each pod
            boolean allRunning = true
            podStatusObject.items.each { pod ->
                def podName = pod.metadata.name
                def podPhase = pod.status.phase
                
                if (podPhase != "Running") {
                    allRunning = false
                   // echo "Pod ${podName} is not running. Phase: ${podPhase}"

                    if (podName.contains(lowerServiceName)) {
                               // echo "Pod ${podName} contains the service name ${env.SERVICE_NAME}. Failing the build."
                                currentBuild.result = 'FAILURE'
                                error("Build failure: Pod '${podName}' is not running in service '${env.SERVICE_NAME}'. Please check the pod's status and logs for more details.")

                            }
                }
            }

}   



