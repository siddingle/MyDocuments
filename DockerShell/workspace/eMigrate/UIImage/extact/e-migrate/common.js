"use strict";(self.webpackChunke_migrate=self.webpackChunke_migrate||[]).push([[8592],{6388:(O,D,o)=>{o.r(D),o.d(D,{EmigrateCommonModule:()=>v});var d=o(6895),t=o(3599),s=o(1571);const p=[{path:"pbby-claim",loadChildren:()=>o.e(9862).then(o.bind(o,9862)).then(r=>r.PbbyPolicyModule)},{path:"application",loadChildren:()=>o.e(163).then(o.bind(o,163)).then(r=>r.ApplicationStatusModule)},{path:"payment",loadChildren:()=>Promise.all([o.e(8592),o.e(9126)]).then(o.bind(o,9126)).then(r=>r.OnlinePaymentModule)}];let m=(()=>{var r;class a{}return(r=a).\u0275fac=function(n){return new(n||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[t.Bz.forChild(p),t.Bz]}),a})();var c=o(4006),g=o(1358),i=o(6270),l=o(2498);let v=(()=>{var r;class a{}return(r=a).\u0275fac=function(n){return new(n||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[d.ez,c.u5,m,c.UX,g.uR,t.Bz,i.g,l.xC]}),a})()},9561:(O,D,o)=>{o.d(D,{i:()=>l});var i,d=o(655),t=o(8505),s=o(262),p=o(8513),m=o(1135),c=o(1571),g=o(2976);class l{constructor(r){this.paymentService=r,this.paymentArnDetails$=new m.X(null),this.getpaymentArnDetail$=this.paymentArnDetails$.asObservable()}generatePayuHash(r){return this.paymentService.generatePayuHash(r).pipe((0,t.b)(()=>{}),(0,s.K)(a=>{throw a}))}setPaymentArnValue(r){this.paymentArnDetails$.next(r)}}(i=l).\u0275fac=function(r){return new(r||i)(c.LFG(g.h26))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),(0,d.gn)([(0,p.PS)()],l.prototype,"generatePayuHash",null)},3249:(O,D,o)=>{o.d(D,{d:()=>r});var v,d=o(5861),t=o(655),s=o(8505),p=o(262),m=o(3900),c=o(8513),g=o(1135),i=o(1571),l=o(2976);class r{constructor(e,n,y){this.locationService=e,this.registration=n,this.pincodeservice=y,this.directorListData=new g.X([]),this.arrayDatalist=[],this.radioButtonvalues=[{key:"Yes",value:"Y"},{key:"No",value:"N"}]}setdirectorListData(e,n){-1==n?this.directorListData.next(this.directorListData.getValue().concat([e])):this.directorListData.value.filter((y,R)=>{R==n&&this.directorListData.value.splice(n,1,e)})}removedirectorListData(e){this.directorListData.next(this.directorListData.value.filter((n,y)=>y!=e))}restrictUserToTypeMoreThanLength(e,n){const y=e.target.value;y.length>n&&(e.srcElement.value=y.substring(0,n),e.stopPropagation())}registrationtabForm(e){return this.registration.saveRecuritingAgentTab(e).pipe((0,s.b)(n=>{}),(0,p.K)(n=>{throw n}))}registrationForm(e){return this.registration.saveRecuritingAgentForm(e).pipe((0,s.b)(()=>{}),(0,p.K)(n=>{throw n}))}validatePincode(e){return this.pincodeservice.validatePincode(e).pipe((0,s.b)(n=>{}),(0,p.K)(n=>{throw n}))}getPdf(e){return this.registration.getPdf(e).pipe((0,s.b)(()=>{}),(0,p.K)(n=>{throw n}))}validateEmail(e){return this.registration.validateEmaiId(e).pipe((0,s.b)(()=>{}),(0,p.K)(n=>{throw n}))}validatePhoneNumber(e){return this.registration.validatePhoneNumber(e).pipe((0,s.b)(()=>{}),(0,p.K)(n=>{throw n}))}fetchDistrict(e){return this.locationService.fetchDistrict(e).pipe((0,m.w)(function(){var n=(0,d.Z)(function*(y){return y});return function(y){return n.apply(this,arguments)}}()),(0,p.K)(n=>{throw n}))}}(v=r).\u0275fac=function(e){return new(e||v)(i.LFG(l.aUv),i.LFG(l.vtX),i.LFG(l.oVN))},v.\u0275prov=i.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),(0,t.gn)([(0,c.PS)()],r.prototype,"registrationtabForm",null),(0,t.gn)([(0,c.PS)()],r.prototype,"registrationForm",null),(0,t.gn)([(0,c.PS)()],r.prototype,"validatePincode",null),(0,t.gn)([(0,c.PS)()],r.prototype,"getPdf",null),(0,t.gn)([(0,c.PS)()],r.prototype,"validateEmail",null),(0,t.gn)([(0,c.PS)()],r.prototype,"validatePhoneNumber",null)},6900:(O,D,o)=>{o.d(D,{H:()=>r});var v,d=o(5861),t=o(655),s=o(8513),p=o(1135),m=o(8505),c=o(262),g=o(3900),i=o(1571),l=o(2976);class r{constructor(e,n,y){this.monthlyReturnService=e,this.pinService=n,this.locationService=y,this.passportType$=new p.X(null),this.selectedPassportType$=this.passportType$.asObservable(),this.yearMonthData$=new p.X(null),this.yearMonthFormData$=this.yearMonthData$.asObservable(),this.searchJobId$=new p.X(null),this.jobId$=this.searchJobId$.asObservable(),this.jobIdResponseData$=new p.X(null),this.jobDetailsResponseData$=this.jobIdResponseData$.asObservable(),this.passportTypes=[{type:"ecr-ecr",label:"Emigrant with ECR Passport to ECR Country",passType:"ECR",countryType:"ECR"},{type:"ecnr-ecr",label:"Emigrant with ECNR Passport to ECR Country",passType:"ECNR",countryType:"ECR"},{type:"ecr-ecnr",label:"Emigrant with ECR Passport to ECNR Country",passType:"ECR",countryType:"ECNR"},{type:"ecnr-ecnr",label:"Emigrant with ECNR Passport to ECNR Country",passType:"ECNR",countryType:"ECNR"}]}setPassportType(e){let y=this.passportTypes.find(R=>R.type===e);localStorage.setItem("passportType",JSON.stringify(y)),this.passportType$.next(y)}setMonthYearData(e){localStorage.setItem("yearMonthData",JSON.stringify(e)),this.yearMonthData$.next(e)}setJobValue(e){this.searchJobId$.next(e)}setJobResponseData(e){this.jobIdResponseData$.next(e)}validate(e){return localStorage.setItem("yearMonthData",JSON.stringify(e.yearMonth)),this.yearMonthData$.next(e.yearMonth),this.monthlyReturnService.validateJobId(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}add(e){return this.monthlyReturnService.addToList(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchEmigrantsList(e){return this.monthlyReturnService.fetchEmigrantsList(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}submitEmigrants(e){return this.monthlyReturnService.submitEmigrants(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}deleteEmigrants(e){return this.monthlyReturnService.deleteEmigrants(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}updateEmigrant(e){return this.monthlyReturnService.updateEmigrant(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchJobs(e){return this.monthlyReturnService.fetchJobs(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchValueFromMaster(e,n){const y=n.find(R=>R.value==e);return y?y.label:null}fetchPincode(e){return this.pinService.validatePincode(e).pipe((0,g.w)(function(){var n=(0,d.Z)(function*(y){return y});return function(y){return n.apply(this,arguments)}}()),(0,c.K)(n=>{throw n}))}validatePincode(){return e=>e.value&&6==String(e.value).length?this.pinService.checkPincodeExist(e.value).pipe((0,g.w)(function(){var n=(0,d.Z)(function*(y){return y});return function(y){return n.apply(this,arguments)}}())):null}fetchDistrict(e){return this.locationService.fetchDistrict(e).pipe((0,g.w)(function(){var n=(0,d.Z)(function*(y){return y});return function(y){return n.apply(this,arguments)}}()),(0,c.K)(n=>{throw n}))}fetchCity(e){return this.locationService.fetchCity(e).pipe((0,g.w)(function(){var n=(0,d.Z)(function*(y){return y});return function(y){return n.apply(this,arguments)}}()),(0,c.K)(n=>{throw n}))}searchCountry(e){return this.monthlyReturnService.searchCountry(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchEmployerList(e){return this.monthlyReturnService.searchEmployer(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchJobRole(e){return this.monthlyReturnService.searchJobRole(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}searchEmigrants(e){return this.monthlyReturnService.searchDeployedEmigrants(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchDeployedEmigrantDetails(e){return this.monthlyReturnService.fetchDeployedEmigrantDetails(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}draftDeployedEmigrantDetails(e){return this.monthlyReturnService.draftDeployedEmigrantDetails(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchDeployedEmigrantsList(e){return this.monthlyReturnService.fetchDeployedEmigrantsList(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}saveDeployedEmigrants(e){return this.monthlyReturnService.saveDeployedEmigrants(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}addFormIvData(e){return this.monthlyReturnService.addFormIvData(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchGrievanceDetails(e){return this.monthlyReturnService.fetchGrievanceDetails(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}submitGrievanceDetails(e){return this.monthlyReturnService.submitGrievanceDetails(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchConsolidatedReportData(e){return this.monthlyReturnService.fetchConsolidatedReportData(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}submitConsolidatedReport(e){return this.monthlyReturnService.submitConsolidatedReport(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}sendReportMail(e){return this.monthlyReturnService.sendMailReport(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}fetchRaList(){return this.monthlyReturnService.fetchRaList().pipe((0,m.b)(e=>{}),(0,c.K)(e=>{throw e}))}getMonthlyReturnReportFile(e){return this.monthlyReturnService.getMonthlyReturnReportFile(e).pipe((0,m.b)(n=>{}),(0,c.K)(n=>{throw n}))}}(v=r).\u0275fac=function(e){return new(e||v)(i.LFG(l.zIe),i.LFG(l.oVN),i.LFG(l.aUv))},v.\u0275prov=i.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),(0,t.gn)([(0,s.PS)()],r.prototype,"validate",null),(0,t.gn)([(0,s.PS)()],r.prototype,"add",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchEmigrantsList",null),(0,t.gn)([(0,s.PS)()],r.prototype,"submitEmigrants",null),(0,t.gn)([(0,s.PS)()],r.prototype,"deleteEmigrants",null),(0,t.gn)([(0,s.PS)()],r.prototype,"updateEmigrant",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchJobs",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchPincode",null),(0,t.gn)([(0,s.PS)()],r.prototype,"validatePincode",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchDistrict",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchCity",null),(0,t.gn)([(0,s.PS)()],r.prototype,"searchCountry",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchEmployerList",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchJobRole",null),(0,t.gn)([(0,s.PS)()],r.prototype,"searchEmigrants",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchDeployedEmigrantDetails",null),(0,t.gn)([(0,s.PS)()],r.prototype,"draftDeployedEmigrantDetails",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchDeployedEmigrantsList",null),(0,t.gn)([(0,s.PS)()],r.prototype,"saveDeployedEmigrants",null),(0,t.gn)([(0,s.PS)()],r.prototype,"addFormIvData",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchGrievanceDetails",null),(0,t.gn)([(0,s.PS)()],r.prototype,"submitGrievanceDetails",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchConsolidatedReportData",null),(0,t.gn)([(0,s.PS)()],r.prototype,"submitConsolidatedReport",null),(0,t.gn)([(0,s.PS)()],r.prototype,"sendReportMail",null),(0,t.gn)([(0,s.PS)()],r.prototype,"fetchRaList",null),(0,t.gn)([(0,s.PS)()],r.prototype,"getMonthlyReturnReportFile",null)},814:(O,D,o)=>{o.d(D,{S:()=>A});var d=o(1358),t=o(1571),s=o(2123),p=o(805),m=o(3599),c=o(1550),g=o(9561),i=o(6895),l=o(5593),v=o(1740),r=o(2453),a=o(4006);let e=(()=>{var f;class C{constructor(E,S){this.nurseRecruitmentService=E,this.router=S}ngOnInit(){this.initForm()}initForm(){this.nurseRecruitmentService.getDemandDetail$.subscribe(E=>{E&&(this.values=E)})}OnCloseClick(){this.router.navigate(["admin/dashboard"])}}return(f=C).\u0275fac=function(E){return new(E||f)(t.Y36(c.e),t.Y36(m.F0))},f.\u0275cmp=t.Xpm({type:f,selectors:[["emigrate-payment-success"]],decls:10,vars:3,consts:[[1,"border","p-3"],[1,"content"],[1,"row"],[3,"pageSubTitle"],[1,"mb-3","text-green",2,"line-height","24px"],[1,"text-left"],["label","Close","styleClass","btn-format btn-blue mr-2",3,"click"]],template:function(E,S){1&E&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"emigrate-sh-page-sub-title",3),t.qZA(),t.TgZ(4,"p",4),t._uU(5),t._UZ(6,"br"),t._uU(7),t.qZA(),t.TgZ(8,"div",5)(9,"p-button",6),t.NdJ("click",function(){return S.OnCloseClick()}),t.qZA()()()()),2&E&&(t.xp6(3),t.Q6J("pageSubTitle","Payment Confirmation"),t.xp6(2),t.hij(" Payment successfully done for nurse recruitment with DM",S.values.demandId,""),t.xp6(2),t.hij(" Your ARN ",S.values.arn," is under process by approval PGoE executive "))},dependencies:[l.zx,d.jZ]}),C})();function n(f,C){1&f&&t._UZ(0,"emigrate-sh-page-instructions",10),2&f&&t.Q6J("instructionsText","Fields marked with * (asterisk) are mandatory. ")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions.")}function y(f,C){if(1&f){const _=t.EpF();t.TgZ(0,"form",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"emigrate-sh-html-input",15),t._UZ(5,"input",16),t.qZA()()(),t.TgZ(6,"div",13)(7,"div",14)(8,"emigrate-sh-html-input",17),t._UZ(9,"input",18),t.qZA()()(),t.TgZ(10,"div",13)(11,"div",14)(12,"emigrate-sh-html-input",19),t._UZ(13,"input",20),t.qZA()()(),t.TgZ(14,"div",21),t._UZ(15,"button",22),t.TgZ(16,"button",23),t.NdJ("click",function(){t.CHM(_);const S=t.oxw();return t.KtG(S.payOnline())}),t.qZA()()()()}if(2&f){const _=t.oxw();t.xp6(4),t.Q6J("inputFormControl",_.onlinePaymentForm.controls.cardNo),t.xp6(1),t.Q6J("formControl",_.onlinePaymentForm.controls.cardNo),t.xp6(3),t.Q6J("inputFormControl",_.onlinePaymentForm.controls.cvv),t.xp6(1),t.Q6J("formControl",_.onlinePaymentForm.controls.cvv),t.xp6(3),t.Q6J("inputFormControl",_.onlinePaymentForm.controls.amount),t.xp6(1),t.Q6J("formControl",_.onlinePaymentForm.controls.amount)}}function R(f,C){1&f&&(t.TgZ(0,"div"),t._UZ(1,"emigrate-payment-success"),t.qZA())}let A=(()=>{var f;class C extends d.H6{constructor(E,S,T,M,K){super(S),this.formHelper=E,this.router=T,this.nurseRecruitmentService=M,this.paymentService=K,this.isPaymentSuccess=!1}ngOnInit(){this.initForm(),this.paymentService.setPaymentArnValue({amount:"2000",productInfo:"nurse",arnNo:"12345678"})}initForm(){this.onlinePaymentForm=this.formHelper.createOnlinePaymentForm({})}payOnline(){this.onlinePaymentForm.markAllAsTouched(),this.onlinePaymentForm.valid&&(this.showSuccessToast("Submitted successfully"),this.onlinePaymentForm.disable(),this.isPaymentSuccess=!0)}}return(f=C).\u0275fac=function(E){return new(E||f)(t.Y36(s.n),t.Y36(p.ez),t.Y36(m.F0),t.Y36(c.e),t.Y36(g.i))},f.\u0275cmp=t.Xpm({type:f,selectors:[["emigrate-online-payment"]],features:[t.qOj],decls:13,vars:4,consts:[[1,"row_box"],[3,"instructionsText","toolTipText",4,"ngIf"],[1,"clearfix"],[1,"border","p-3","mb-3"],[1,"content"],[3,"pageSubTitle"],[1,"red-bg","mb-3"],[1,"form"],["class","",4,"ngIf"],[4,"ngIf"],[3,"instructionsText","toolTipText"],[1,""],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","s","","inputLabel","ARN","inputId","arn",1,"block",3,"inputFormControl"],["id","arn","type","text","pInputText","","placeholder","","maxlength","16",3,"formControl"],["for","1","inputLabel","Name","inputId","country",1,"block",3,"inputFormControl"],["id","country","type","text","pInputText","","placeholder","","maxlength","3",3,"formControl"],["for","1","inputLabel","Amount","inputId","personalIdNo",1,"block",3,"inputFormControl"],["id","personalIdNo","type","text","pInputText","","placeholder","",3,"formControl"],[1,"buttons"],["pButton","","type","button","label","Cancel",1,"btn-blue","btn-format","mr-2"],["pButton","","type","button","label","Pay",1,"btn-blue","btn-format","mr-2",3,"click"]],template:function(E,S){1&E&&(t.TgZ(0,"div",0),t._UZ(1,"p-toast"),t.YNc(2,n,1,2,"emigrate-sh-page-instructions",1),t._UZ(3,"div",2),t.TgZ(4,"div")(5,"div",3)(6,"div",4),t._UZ(7,"emigrate-sh-page-sub-title",5),t.TgZ(8,"div",6),t._uU(9,"That is test server, please do not use your live card or bank account here."),t.qZA(),t.TgZ(10,"div",7),t.YNc(11,y,17,6,"form",8),t.YNc(12,R,2,0,"div",9),t.qZA()()()()()),2&E&&(t.xp6(2),t.Q6J("ngIf",!S.isPaymentSuccess),t.xp6(5),t.Q6J("pageSubTitle","Online Payment"),t.xp6(4),t.Q6J("ngIf",!S.isPaymentSuccess),t.xp6(1),t.Q6J("ngIf",S.isPaymentSuccess))},dependencies:[i.O5,l.Hq,v.o,r.FN,a._Y,a.Fj,a.JJ,a.JL,a.nD,a.F,d.KR,d.jZ,d.dB,a.oH,e],styles:[".red-bg[_ngcontent-%COMP%]{background-color:red;padding:5px;color:#fff;font-weight:500}"]}),C})()},1550:(O,D,o)=>{o.d(D,{e:()=>l});var i,d=o(655),t=o(8513),s=o(1135),p=o(8505),m=o(262),c=o(1571),g=o(2976);class l{constructor(r){this.nurseDemandService=r,this.demandDetails$=new s.X(null),this.getDemandDetail$=this.demandDetails$.asObservable()}getData(){return[{arn:"PT5007171",employerName:"Sanjeev Yadav",feId:"FE5000339",country:"USA",vacancies:"50",demandRaiseDate:"2023-09-12"},{arn:"PT5007172",employerName:"Sanjeev Yadav",feId:"FE5000340",country:"SAUDI ARABIA",vacancies:"30",demandRaiseDate:"2023-09-13"},{arn:"PT5007173",employerName:"Sanjeev Yadav",feId:"FE5000351",country:"IRAQ",vacancies:"20",demandRaiseDate:"2023-08-12"},{arn:"PT5007174",employerName:"Anjum Mohd",feId:"FE5000339",country:"UAE",vacancies:"45",demandRaiseDate:"2023-07-12"},{arn:"PT5007175",employerName:"Anjum Mohd",feId:"FE5000100",country:"CANADA",vacancies:"5",demandRaiseDate:"2023-06-02"},{arn:"PT5007176",employerName:"Raj Kale",feId:"FE5000129",country:"UK",vacancies:"20",demandRaiseDate:"2023-03-01"},{arn:"PT5007177",employerName:"Sagar Kale",feId:"FE5000039",country:"KUWAIT",vacancies:"10",demandRaiseDate:"2023-01-01"},{arn:"PT5007178",employerName:"Vibhor Sen",feId:"FE5000839",country:"KUWAIT",vacancies:"1",demandRaiseDate:"2023-09-12"},{arn:"PT5007179",employerName:"Kishore Soundrajan",feId:"FE5000839",country:"KUWAIT",vacancies:"11",demandRaiseDate:"2023-09-12"},{arn:"PT5007180",employerName:"Kishore Soundrajan",feId:"FE5000439",country:"KUWAIT",vacancies:"9",demandRaiseDate:"2023-09-12"},{arn:"PT5007181",employerName:"Vibhor Sen",feId:"FE5000379",country:"KUWAIT",vacancies:"15",demandRaiseDate:"2023-09-12"},{arn:"PT5007182",employerName:"Sagar Kale",feId:"FE5000329",country:"KUWAIT",vacancies:"10",demandRaiseDate:"2023-09-12"},{arn:"PT5007183",employerName:"Vibhor Sen",feId:"FE5000300",country:"KUWAIT",vacancies:"10",demandRaiseDate:"2023-09-12"}]}getDemandData(r){return this.nurseDemandService.getDemands(r).pipe((0,p.b)(a=>{}),(0,m.K)(a=>{throw a}))}setDemandValue(r){this.demandDetails$.next(r)}add(r){return this.nurseDemandService.addDemands(r).pipe((0,p.b)(a=>{}),(0,m.K)(a=>{throw a}))}paymentDetails(){return{payu_url:"https://test.payu.in/_payment",first_name:"Test",email:"test@example.com",mobile:"9999999999",callback_url:"http://localhost:4200/#/emigrate",payu_cancel_url:"http://localhost:4200/#/emigrate",payu_fail_url:"http://localhost:4200/#/emigrate",payu_merchant_key:"gIbTiz",payu_sha_token:"260e5370a3b0c4beaea4ac06bc017c95276f2b0463903338f2f5b63eb86a67129b304f743d8369e55faa8963f4f3596e4dc7c33e223316e46d68841a4026fb67",txnid:"abcd1239",plan_name:"Test",amount:100}}}(i=l).\u0275fac=function(r){return new(r||i)(c.LFG(g.nbj))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),(0,d.gn)([(0,t.PS)()],l.prototype,"getDemandData",null),(0,d.gn)([(0,t.PS)()],l.prototype,"add",null)},2123:(O,D,o)=>{o.d(D,{n:()=>p});var d=o(4006),t=o(2976),s=o(1571);let p=(()=>{var m;class c{constructor(i){this.fb=i}createNurseRecruitementForm(i,l){return this.fb.group({agentId:this.fb.control({value:l?.agentId,disabled:i},d.kI.required),arn:this.fb.control({value:l?.arn,disabled:i},d.kI.required),employerName:this.fb.control({value:l?.employerName,disabled:i}),feId:this.fb.control({value:l?.feId,disabled:i}),country:this.fb.control({value:l?.country,disabled:i}),vacancies:this.fb.control({value:l?.vacancies,disabled:i}),dateOfRaiseDemand:this.fb.control({value:l?.demandRaiseDate,disabled:i}),crNo:this.fb.control({value:l?.personalId,disabled:i}),signedDocForm:this.fb.array([],d.kI.required),raId:this.fb.control({value:l?.raId,disabled:i}),demandId:this.fb.control({value:l?.demandId,disabled:i}),isSigned:this.fb.control({value:l?.isSigned,disabled:i}),countryLabel:this.fb.control({value:l?.countryLabel,disabled:i}),isChecked:this.fb.control({value:!1,disabled:!1})})}createOnlinePaymentForm(i){return this.fb.group({arn:this.fb.control(null),type:this.fb.control(null),endDate:this.fb.control(null),cardNo:this.fb.control(null),cvv:this.fb.control(null),amount:this.fb.control({value:100,disabled:!0})})}onlinePaymentFormData(i){i.getRawValue()}nurseRecruitmentFormData(i,l,v){const r=i.getRawValue();return console.log(r),(new t.Jkp).deserialize({demandId:r.demandId,arn:r.arn,country:r.country,employerName:r.employerName,raUserId:l,raLocationId:v,crNo:r.crNo,dateOfRaiseDemand:r.dateOfRaiseDemand,listOfNurseDocument:r?.signedDocForm?.map(a=>this.documenToList(a))})}documenToList(i){return{docTypeCd:i.docType,docName:i.name,docContent:i.file,docExtension:"pdf"}}}return(m=c).\u0275fac=function(i){return new(i||m)(s.LFG(d.qu))},m.\u0275prov=s.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),c})()},1017:(O,D,o)=>{o.d(D,{g:()=>m});var p,d=o(655),t=o(8513),s=o(1571);let m=((p=class extends t.cf{constructor(){super({filter:"ALL"})}}).\u0275fac=function(g){return new(g||p)},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p);m=(0,d.gn)([(0,t.yC)({name:"internal"})],m)},8600:(O,D,o)=>{o.d(D,{N:()=>l});var i,d=o(655),t=o(8513),s=o(4004),p=o(262),m=o(8505),c=o(1571),g=o(2976);class l{constructor(r,a){this.workflowservices=r,this.claimGrievancesService=a}getDetailByArn(r,a){return this.workflowservices.getDetailsByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getApprovedDetailByArn(r,a){return this.workflowservices.getApprovedStatusDetailsByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getViewFormDetailByArn(r,a){return this.workflowservices.getViewFormDetailByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getEmigrantPassportDetails(r){return this.workflowservices.getPassportDetailsByArn(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}getEmigrantJobDetails(r){return this.workflowservices.getJobDetailsByArn(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}getWorkItemDetails(r,a){return this.workflowservices.getWorkItemDetailsByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getGrievanceDetailsByArn(r,a){return this.workflowservices.getGrievanceDetailsByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getRaHistoryDetails(r,a){return this.workflowservices.getRaDetailsByArn(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}processEmigrant(r,a){return this.workflowservices.processApplication(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}rejectApplication(r,a){return this.workflowservices.rejectApplication(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}approveApplication(r,a){return this.workflowservices.approveApplication(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getDocuments(r,a,e){return this.workflowservices.getDocumentsByArn(r,a,e).pipe((0,s.U)(n=>n),(0,p.K)(n=>{throw n}))}getEmigrantDocument(r){return this.workflowservices.getDocumentByArn(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}forwardApplicationToNext(r,a){return this.workflowservices.forwardApplicationNext(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}forwardApplicationToSame(r,a){return this.workflowservices.forwardApplicationSame(r,a).pipe((0,s.U)(e=>e),(0,p.K)(e=>{throw e}))}getInspectionDetails(r){return this.workflowservices.getInspectionDetailsByArn(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}getDownloadApplicationDetails(r){return this.workflowservices.getDownloadApplicationData(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}getCorrespondenceDetails(r){return this.workflowservices.getCorrespondenceDetailsByArn(r).pipe((0,s.U)(a=>a),(0,p.K)(a=>{throw a}))}sendCorrespondance(r){return this.claimGrievancesService.sendCorrespondance(r).pipe((0,m.b)(a=>{}),(0,p.K)(a=>{throw a}))}getViewCorrespondanceList(r,a){return this.claimGrievancesService.getViewCorrespondanceList(r,a).pipe((0,m.b)(e=>{}),(0,p.K)(e=>{throw e}))}getViewCorrespondanceById(r,a,e){return this.claimGrievancesService.getViewCorrespondanceById(r,a,e).pipe((0,m.b)(n=>{}),(0,p.K)(n=>{throw n}))}}(i=l).\u0275fac=function(r){return new(r||i)(c.LFG(g.gAE),c.LFG(g.P0I))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),(0,d.gn)([(0,t.PS)()],l.prototype,"getDetailByArn",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getApprovedDetailByArn",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getViewFormDetailByArn",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getEmigrantPassportDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getEmigrantJobDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getWorkItemDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getGrievanceDetailsByArn",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getRaHistoryDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"processEmigrant",null),(0,d.gn)([(0,t.PS)()],l.prototype,"rejectApplication",null),(0,d.gn)([(0,t.PS)()],l.prototype,"approveApplication",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getDocuments",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getEmigrantDocument",null),(0,d.gn)([(0,t.PS)()],l.prototype,"forwardApplicationToNext",null),(0,d.gn)([(0,t.PS)()],l.prototype,"forwardApplicationToSame",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getInspectionDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getDownloadApplicationDetails",null),(0,d.gn)([(0,t.PS)()],l.prototype,"getCorrespondenceDetails",null)},9933:(O,D,o)=>{o.d(D,{c:()=>E,t:()=>F});var d=o(7579),t=o(727),s=o(2076),p=o(515),m=o(1571),c=o(5577),g=o(2722);const i=m.GuJ,v=Symbol("__destroy"),r=Symbol("__decoratorApplied");function a(u){return"string"==typeof u?Symbol(`__destroy__${u}`):v}function n(u,h){u[h]||(u[h]=new d.x)}function y(u,h){u[h]&&(u[h].next(),u[h].complete(),u[h]=null)}function R(u){u instanceof t.w0&&u.unsubscribe()}function f(u,h){return function(){if(u&&u.call(this),y(this,a()),h.arrayName&&function A(u){Array.isArray(u)&&u.forEach(R)}(this[h.arrayName]),h.checkProperties)for(const P in this)h.blackList?.includes(P)||R(this[P])}}function E(u={}){return h=>{!function l(u){return!!u[i]}(h)?function C(u,h){u.prototype.ngOnDestroy=f(u.prototype.ngOnDestroy,h)}(h,u):function _(u,h){const P=u.\u0275pipe;P.onDestroy=f(P.onDestroy,h)}(h,u),function e(u){u.prototype[r]=!0}(h)}}const S=7,T=Symbol("CheckerHasBeenSet");function L(u){const h=m.dqk.Zone;return h&&"function"==typeof h.root?.run?h.root.run(u):u()}const U=!1;function F(u,h){return P=>{const b=a(h);"string"==typeof h?function B(u,h,P){const b=u[h];if(U&&"function"!=typeof b)throw new Error(`${u.constructor.name} is using untilDestroyed but doesn't implement ${h}`);n(u,P),u[h]=function(){b.apply(this,arguments),y(this,P),u[h]=b}}(u,h,b):(U&&function N(u){const h=Object.getPrototypeOf(u);if(!(r in h))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(u),n(u,b));const I=u[b];return U&&function M(u,h){u[T]||function K(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(L(()=>(0,s.D)(Promise.resolve()).pipe((0,c.z)(()=>{let P;try{P=(0,m.EEQ)(u)}catch{P=null}const b=P?.lView;if(null==b)return p.E;const I=b[S]||(b[S]=[]),w=new d.x;return I.push(function(){L(()=>{w.next(),w.complete()})}),w}),(0,c.z)(()=>Promise.resolve())).subscribe(()=>{(h.observed??h.observers.length>0)&&console.warn(function x(u){return`\n  The ${u.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(u))})),u[T]=!0)}(u,I),P.pipe((0,g.R)(I))}}}}]);