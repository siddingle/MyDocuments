"use strict";(self.webpackChunke_migrate=self.webpackChunke_migrate||[]).push([[7612],{5717:(S,_,p)=>{p.d(_,{b:()=>U});var n=p(1571),u=p(6895),e=p(1358);function G(d,c){if(1&d&&n._UZ(0,"emigrate-sh-page-sub-title",4),2&d){const m=n.oxw();n.Q6J("pageSubTitle",m.subTitle)}}function T(d,c){1&d&&(n.TgZ(0,"p",5),n._uU(1,"Grievance Updated"),n.qZA())}function h(d,c){if(1&d&&(n.TgZ(0,"p",6)(1,"b"),n._uU(2),n.qZA()()),2&d){const m=n.oxw();n.xp6(2),n.hij("",m.message," ")}}let U=(()=>{var d;class c{constructor(){this.isFromTrackApp=!1}}return(d=c).\u0275fac=function(o){return new(o||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["emigrate-arn-status"]],inputs:{isFromTrackApp:"isFromTrackApp",message:"message",subTitle:"subTitle"},decls:4,vars:3,consts:[["class","sub-title-no-margin",3,"pageSubTitle",4,"ngIf"],[1,"border","text-center"],["class","mb-0 pt-5 pb-5 text-green",4,"ngIf"],["class","mb-0 pt-5 pb-5",4,"ngIf"],[1,"sub-title-no-margin",3,"pageSubTitle"],[1,"mb-0","pt-5","pb-5","text-green"],[1,"mb-0","pt-5","pb-5"]],template:function(o,v){1&o&&(n.YNc(0,G,1,1,"emigrate-sh-page-sub-title",0),n.TgZ(1,"div",1),n.YNc(2,T,2,0,"p",2),n.YNc(3,h,3,1,"p",3),n.qZA()),2&o&&(n.Q6J("ngIf",v.subTitle),n.xp6(2),n.Q6J("ngIf",!v.isFromTrackApp),n.xp6(1),n.Q6J("ngIf",v.isFromTrackApp))},dependencies:[u.O5,e.jZ]}),c})()},5580:(S,_,p)=>{p.d(_,{F:()=>T});var n=p(4006),u=p(2976),e=p(1358),G=p(1571);let T=(()=>{var h;class U{constructor(c){this.fb=c}createUpdateGrievanceSignleFormm(c){return this.fb.group({updateGrievanceDetails:this.fb.group({grievanceReferenceNumber:this.fb.control("",n.kI.compose([n.kI.required,e.YO.minLenValidator(6,"Min length should be 6"),e.YO.alphaNumericValidator()])),captcha:this.fb.control("",n.kI.required)})})}createUpdateGrievanceOtpForm(c){return this.fb.group({otpDetails:this.fb.group({otp:this.fb.control("",n.kI.compose([n.kI.required]))})})}createUpdateGrievanceMultiFormm(c){return this.fb.group({documents:this.fb.array([]),remarksDetails:this.fb.control("",n.kI.compose([n.kI.required]))})}referenceFormToGrievance(c){const m=c.getRawValue();return(new u.KZx).deserialize({grievanceReferenceNumber:m.updateGrievanceDetails.grievanceReferenceNumber,captcha:m.updateGrievanceDetails.captcha})}otpFormToGrievance(c){const m=c.getRawValue();return(new u.BfO).deserialize({oneTimePassword:m.otpDetails.otp})}documentFormToUpdateGrievance(c){const m=c.getRawValue();return(new u.mX5).deserialize({documentList:m?.documents?.map(o=>this.documenToList(o))})}documenToList(c){return{fileName:c.fileName,fileContent:c.fileContent,docExtension:c.docExtension,docVersionNumber:c.docVersionNumber,fkDocTypeCd:c.fkDocTypeCd}}}return(h=U).\u0275fac=function(c){return new(c||h)(G.LFG(n.qu))},h.\u0275prov=G.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),U})()},2338:(S,_,p)=>{p.d(_,{d:()=>c});var d,n=p(655),u=p(8505),e=p(262),G=p(8513),T=p(1135),h=p(1571),U=p(2976);class c{constructor(o){this.updateGrievancesService=o,this.getOTPDetails=new T.X({})}validateUpdateGrievance(o,v=!1){return this.updateGrievancesService.validateUpdateGrievance(o,v).pipe((0,u.b)(f=>{}),(0,e.K)(f=>{throw f}))}resendOtp(o,v=!1){return this.updateGrievancesService.resendOtp(o,v).pipe((0,u.b)(f=>{}),(0,e.K)(f=>{throw f}))}UpdateGrievanceList(o){return this.updateGrievancesService.UpdateGrievanceList(o).pipe((0,u.b)(v=>{}),(0,e.K)(v=>{throw v}))}validateUpdateGrievanceOtp(o){return this.updateGrievancesService.validateOtp(o).pipe((0,u.b)(v=>{}),(0,e.K)(v=>{throw v}))}add(o,v){return this.updateGrievancesService.saveDocuments(o,v).pipe((0,u.b)(f=>{}),(0,e.K)(f=>{throw f}))}addInternal(o,v){return this.updateGrievancesService.addInternal(o,v).pipe((0,u.b)(f=>{}),(0,e.K)(f=>{throw f}))}passOTPDetails(o){this.getOTPDetails.next(o)}}(d=c).\u0275fac=function(o){return new(o||d)(h.LFG(U.Y26))},d.\u0275prov=h.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),(0,n.gn)([(0,G.PS)()],c.prototype,"validateUpdateGrievance",null),(0,n.gn)([(0,G.PS)()],c.prototype,"resendOtp",null),(0,n.gn)([(0,G.PS)()],c.prototype,"UpdateGrievanceList",null),(0,n.gn)([(0,G.PS)()],c.prototype,"validateUpdateGrievanceOtp",null),(0,n.gn)([(0,G.PS)()],c.prototype,"add",null),(0,n.gn)([(0,G.PS)()],c.prototype,"addInternal",null)},7612:(S,_,p)=>{p.d(_,{X:()=>q});var n=p(2976),u=p(1358),e=p(1571),G=p(1754),T=p(3599),h=p(2338),U=p(805),d=p(5580),c=p(6945),m=p(6895),o=p(4006),v=p(5593),f=p(2453),b=p(1740);let y=(()=>{var a;class l{}return(a=l).\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-update-grievance-form"]],inputs:{entityFormGroup:"entityFormGroup"},decls:8,vars:3,consts:[[1,"table-border"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputLabel","Grievance Reference Number","inputId","grievanceReferenceNumber",1,"block",3,"inputFormControl"],["id","grievanceReferenceNumber","maxlength","8","type","text","pInputText","","placeholder","Grievance Reference Number",1,"w-60",3,"formControl"],[1,"col-md-4","col-sm-6","ml-2"],[3,"entityFormGroup"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"emigrate-sh-html-input",4),e._UZ(5,"input",5),e.qZA()()(),e.TgZ(6,"div",6),e._UZ(7,"emigrate-sh-recaptcha",7),e.qZA()()()),2&i&&(e.xp6(4),e.Q6J("inputFormControl",t.entityFormGroup.controls.grievanceReferenceNumber),e.xp6(1),e.Q6J("formControl",t.entityFormGroup.controls.grievanceReferenceNumber),e.xp6(2),e.Q6J("entityFormGroup",t.entityFormGroup))},dependencies:[o.Fj,o.JJ,o.nD,o.oH,u.KR,u.wT,b.o],styles:[".inputWidth[_ngcontent-%COMP%]{width:100%}"]}),l})(),F=(()=>{var a;class l{constructor(){this.updateGrievanceList=[]}}return(a=l).\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-ug-list"]],inputs:{updateGrievanceList:"updateGrievanceList"},decls:10,vars:5,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputLabel","Grievance reference number","inputId","grievanceReferenceNumber",1,"block"],["id","grievanceReferenceNumber","type","text","pInputText","","placeholder","Grievance reference number","readonly","",3,"value"],["for","1","inputLabel","Raised date","inputId","raiseDate",1,"block"],["id","raiseDate","type","text","pInputText","","placeholder","Raised date","readonly","",3,"value"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),e._UZ(4,"input",4),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),e._UZ(8,"input",6),e.ALo(9,"date"),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("value","GR"+(null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceArn)),e.xp6(4),e.Q6J("value",e.xi3(9,2,null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.raisedDate,"dd-MM-YYYY")))},dependencies:[u.KR,b.o,m.uU]}),l})();function O(a,l){if(1&a&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"emigrate-sh-html-input",6),e._UZ(4,"input",7),e.qZA()()(),e.TgZ(5,"div",4)(6,"div",5)(7,"emigrate-sh-html-input",8),e._UZ(8,"input",9),e.qZA()()()()),2&a){const r=l.$implicit;e.xp6(4),e.Q6J("value",null==r?null:r.partnerName),e.xp6(4),e.Q6J("value",null!=r&&r.partnerTypeCode?r.partnerTypeCode+r.partnerId:null==r?null:r.partnerId)}}function A(a,l){if(1&a&&(e.ynx(0),e.YNc(1,O,9,2,"div",2),e.BQk()),2&a){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==r.updateGrievanceList||null==r.updateGrievanceList.arn?null:r.updateGrievanceList.arn.grievanceAgentList)}}function D(a,l){1&a&&(e.TgZ(0,"div",10)(1,"div",11)(2,"p",12),e._uU(3,"NA"),e.qZA()()())}let C=(()=>{var a;class l{constructor(){this.updateGrievanceList=[]}}return(a=l).\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-ug-against-both-raand-employer"]],inputs:{updateGrievanceList:"updateGrievanceList"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noDataAvailable",""],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputLabel","Employer/Recruiting Agent/Project Exporter Name","inputId","emigrantName",1,"block"],["id","emigrantName","type","text","pInputText","","readonly","",3,"value"],["for","1","inputLabel","Employer/Recruiting Agent/Project Exporter ID","inputId","passportNumber",1,"block"],["id","passportNumber","type","text","pInputText","","readonly","",3,"value"],[1,"row","my-3"],[1,"col-md-12","col-sm-6","mb-2"],[1,"mb-1","info-text"]],template:function(i,t){if(1&i&&(e.YNc(0,A,2,1,"ng-container",0),e.YNc(1,D,4,0,"ng-template",null,1,e.W1O)),2&i){const s=e.MAs(2);e.Q6J("ngIf",(null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceAgentList)&&(null==t.updateGrievanceList||null==t.updateGrievanceList.arn||null==t.updateGrievanceList.arn.grievanceAgentList?null:t.updateGrievanceList.arn.grievanceAgentList.length)>0)("ngIfElse",s)}},dependencies:[m.sg,m.O5,u.KR,b.o]}),l})(),Z=(()=>{var a;class l{constructor(){this.updateGrievanceList={}}}return(a=l).\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-ug-grievence-details"]],inputs:{updateGrievanceList:"updateGrievanceList"},decls:13,vars:3,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputLabel","Grievance Type","inputId","grievenceType",1,"block"],["id","grievenceType","type","text","pInputText","","placeholder","Grievance type","readonly","",3,"value"],["for","1","inputLabel","Grievance Description","inputId","grievanceDescription",1,"block"],["id","grievanceDescription","type","text","pInputText","","placeholder","Grievance description","readonly","",3,"value"],["for","1","inputLabel","Grievance Status","inputId","grievanceStatus",1,"block"],["id","grievanceStatus","type","text","pInputText","","placeholder","Grievance status ","readonly","",3,"value"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),e._UZ(4,"input",4),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),e._UZ(8,"input",6),e.qZA()()(),e.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),e._UZ(12,"input",8),e.qZA()()()()),2&i&&(e.xp6(4),e.Q6J("value",null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceTypeDisplayName),e.xp6(4),e.Q6J("value",null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceDescription),e.xp6(4),e.Q6J("value",null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceStatusDisplayName))},dependencies:[u.KR,b.o]}),l})();var k=p(5861);let E=(()=>{var a;class l{constructor(i,t,s){this.messageService=i,this.fb=t,this.sessionQuery=s,this.isDocumentUploaded=!1,this.documents=[],this.documentUpload=new e.vpe,this.maxFileSize=n.Xef.MAX_FILE_SIZE_512KB}ngOnInit(){this.loginUsername=this.sessionQuery.user}clearFilesArray(){this.child.forEach(i=>i.clearFile())}documentData(i,t){var s=this;return(0,k.Z)(function*(){if(s.documents=[],i){if(i?.data?.size>512)return s.messageService.add({severity:"error",summary:"File size should not be more than 512KB"}),void s.clearFilesArray();switch(i.action){case n.Xef.ACTION.ADD:s.documents.push({documentVersionNumber:i.data.id,fileName:i.data.name,filePath:i.data.name,documentExtension:i?.data?.type?.split("/")[1],documentSize:i.data.size,fileContent:i.data.file,documentTypeCode:t,locatorNum:"",date:new Date,createdBy:s.loginUsername?.loginUsername}),s.updateGrievance();break;case n.Xef.ACTION.REMOVE:s.documents?.length>0&&s.documents.removeAt(s.documents.findIndex(g=>g.id===i.data.id)),s.updateGrievance()}}})()}updateGrievance(){let i=0;this.documents.forEach(t=>{i+=t.documentSize}),i>this.maxFileSize?this.messageService.add({severity:"error",summary:"combined file size not more than 4MB"}):(this.isDocumentUploaded=!0,this.documentUpload.emit(this.documents))}}return(a=l).\u0275fac=function(i){return new(i||a)(e.Y36(U.ez),e.Y36(o.qu),e.Y36(n.U_o))},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-ug-upload-document"]],viewQuery:function(i,t){if(1&i&&e.Gf(u.Yr,5),2&i){let s;e.iGM(s=e.CRH())&&(t.child=s)}},inputs:{entityFormGroup:"entityFormGroup",isDocumentUploaded:"isDocumentUploaded"},outputs:{documentUpload:"documentUpload"},decls:8,vars:2,consts:[[1,"table-border"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"mr-5"],[1,"col-md-4"],[3,"documentId","maxFileSize","uploadedFile"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3)(4,"span"),e._uU(5,"Optional Document"),e.qZA()()(),e.TgZ(6,"div",4)(7,"emigrate-sh-file-upload",5),e.NdJ("uploadedFile",function(g){return t.documentData(g,"OPT")}),e.qZA()()()()),2&i&&(e.xp6(7),e.Q6J("documentId",3)("maxFileSize",t.maxFileSize))},dependencies:[u.Yr]}),l})();var w=p(4826),x=p(3054);function I(a,l){1&a&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Remarks"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Given By"),e.qZA()())}function N(a,l){if(1&a&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA()()),2&a){const r=l.$implicit;e.xp6(2),e.Oqu(null==r?null:r.remark),e.xp6(2),e.Oqu(e.xi3(5,3,null==r?null:r.createdDttm,"dd-MM-YYYY hh:mm:ss a")),e.xp6(3),e.Oqu(null==r?null:r.createdBy)}}function J(a,l){if(1&a&&(e.TgZ(0,"div",6)(1,"form",7)(2,"emigrate-sh-html-input",8),e._UZ(3,"textarea",9),e.qZA()()()),2&a){const r=e.oxw();e.xp6(1),e.Q6J("formGroup",r.entityFormGroup),e.xp6(1),e.Q6J("inputFormControl",r.entityFormGroup.controls.remarksDetails)}}let M=(()=>{var a;class l{constructor(){this.updateGrievanceList=[]}}return(a=l).\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-ug-remarks"]],inputs:{updateGrievanceList:"updateGrievanceList",entityFormGroup:"entityFormGroup",intUser:"intUser"},decls:6,vars:2,consts:[[1,"table-border"],[3,"value"],["myTab",""],["pTemplate","header"],["pTemplate","body"],["class","mt-2 mb-2",4,"ngIf"],[1,"mt-2","mb-2"],[3,"formGroup"],["for","remark","inputLabel","Remark",3,"inputFormControl"],["maxlength","1000","rows","5","cols","30","pInputTextarea","","placeholder","Enter Your Remark","formControlName","remarksDetails"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"p-table",1,2),e.YNc(3,I,7,0,"ng-template",3),e.YNc(4,N,8,6,"ng-template",4),e.qZA()(),e.YNc(5,J,4,2,"div",5)),2&i&&(e.xp6(1),e.Q6J("value",null==t.updateGrievanceList||null==t.updateGrievanceList.arn?null:t.updateGrievanceList.arn.grievanceRemarksList),e.xp6(4),e.Q6J("ngIf",t.intUser))},dependencies:[m.O5,o._Y,o.Fj,o.JJ,o.JL,o.nD,o.sg,o.u,u.KR,U.jx,w.iA,x.g,m.uU]}),l})(),P=(()=>{var a;class l{constructor(i,t,s,g,L){this.sessionQuery=i,this.formHelper=t,this.messageService=s,this._updateGrievanceService=g,this.uiService=L,this.isDocumentUploaded=!1,this.arnStatus=new e.vpe,this.backClick=new e.vpe,this.updateGrievanceList=[],this.documents=[],this.today=new Date}ngOnInit(){this.userName=this.sessionQuery.user?.loginUsername,this.UpdateGrievanceMultiFormGroup=this.formHelper.createUpdateGrievanceMultiFormm(!1)}saveDocument(){if(1==this.intUser){if(this.UpdateGrievanceMultiFormGroup.markAllAsTouched(),!this.UpdateGrievanceMultiFormGroup.valid)return void this.showErrorToast("Please fill the mandetory fileds");{const i={loginUsername:this.userName,grievanceWorkflowRemark:{remarkId:0,workItemId:0,remark:this.UpdateGrievanceMultiFormGroup.value.remarksDetails,modifiedDate:"",modifiedBy:""},grievanceDocumentDetailsList:this.documents?this.documents:[]};this.uiService.showSpinner(),this._updateGrievanceService.addInternal(this.updateGrievanceList?.arn?.grievanceArn,i).subscribe(t=>{this.uiService.hideSpinner(),t.status.toLowerCase()!=n.Xef.SUCCESS?this.showErrorToast(t.message):(this.showSuccessToast(t.message),setTimeout(()=>{this.arnStatus.emit(!0)},3e3))},t=>{let s=t?.error?.error?.errorMessage?t.error.error.errorMessage:t.message;this.uiService.hideSpinner(),this.showErrorToast(s)})}}else{if(!this.documents||0===this.documents?.length)return void this.showErrorToast("Document should not be empty");const i={grievanceDocumentDetailsList:this.documents};this.uiService.showSpinner(),this._updateGrievanceService.add(this.updateGrievanceList?.arn?.grievanceArn,i).subscribe(t=>{this.uiService.hideSpinner(),t.status.toLowerCase()!=n.Xef.SUCCESS?this.showErrorToast(t.message):(this.showSuccessToast(t.message),setTimeout(()=>{this.arnStatus.emit(!0)},3e3))},t=>{let s=t?.error?.error?.errorMessage?t.error.error.errorMessage:t.message;this.uiService.hideSpinner(),this.showErrorToast(s)})}}showErrorToast(i){this.messageService.add({severity:"error",summary:"Update Grievance",detail:i})}showSuccessToast(i){this.messageService.add({severity:"success",summary:"Update Grievance",detail:i})}checkDocumentUploaded(i){console.log("documents",i),this.isDocumentUploaded=!0,this.documents=i}onBackClick(){this.backClick.emit(!0)}uploadDoc(){this.saveDocument()}}return(a=l).\u0275fac=function(i){return new(i||a)(e.Y36(n.U_o),e.Y36(d.F),e.Y36(U.ez),e.Y36(h.d),e.Y36(c.n))},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-update-grievance-list"]],inputs:{isUpdateGrievanceList:"isUpdateGrievanceList",updateGrievanceList:"updateGrievanceList",intUser:"intUser"},outputs:{arnStatus:"arnStatus",backClick:"backClick"},decls:22,vars:13,consts:[[3,"formGroup"],[3,"pageSubTitle"],[1,"form","table-border"],[3,"updateGrievanceList"],[1,"mb-0"],[1,"row"],[3,"entityFormGroup","isDocumentUploaded","documentUpload"],[3,"updateGrievanceList","entityFormGroup","intUser"],[1,"col-12"],[1,"buttons","mt-3"],["pButton","","type","submit","label","Back",1,"btn-format","btn-blue","mr-2",3,"click"],["pButton","","type","submit","label","Update",1,"btn-format","btn-blue",3,"click"]],template:function(i,t){1&i&&(e.TgZ(0,"form",0),e._UZ(1,"emigrate-sh-page-sub-title",1),e.TgZ(2,"div",2),e._UZ(3,"emigrate-ug-list",3),e.qZA(),e._UZ(4,"emigrate-sh-page-sub-title",1),e.TgZ(5,"div",2),e._UZ(6,"emigrate-ug-against-both-raand-employer",3),e.qZA(),e._UZ(7,"emigrate-sh-page-sub-title",1),e.TgZ(8,"div",2),e._UZ(9,"emigrate-ug-grievence-details",3),e.qZA(),e.TgZ(10,"h4",4),e._uU(11,"Upload Document"),e.qZA(),e.TgZ(12,"div",5)(13,"emigrate-ug-upload-document",6),e.NdJ("documentUpload",function(g){return t.checkDocumentUploaded(g)}),e.qZA()(),e._UZ(14,"emigrate-sh-page-sub-title",1),e.TgZ(15,"div",5),e._UZ(16,"emigrate-ug-remarks",7),e.qZA(),e.TgZ(17,"div",5)(18,"div",8)(19,"div",9)(20,"button",10),e.NdJ("click",function(){return t.onBackClick()}),e.qZA(),e.TgZ(21,"button",11),e.NdJ("click",function(){return t.uploadDoc()}),e.qZA()()()()()),2&i&&(e.Q6J("formGroup",t.UpdateGrievanceMultiFormGroup),e.xp6(1),e.Q6J("pageSubTitle","Update Grievance"),e.xp6(2),e.Q6J("updateGrievanceList",t.updateGrievanceList),e.xp6(1),e.Q6J("pageSubTitle","Emigrant Details"),e.xp6(2),e.Q6J("updateGrievanceList",t.updateGrievanceList),e.xp6(1),e.Q6J("pageSubTitle","Grievance Details"),e.xp6(2),e.Q6J("updateGrievanceList",t.updateGrievanceList),e.xp6(4),e.Q6J("entityFormGroup",t.UpdateGrievanceMultiFormGroup)("isDocumentUploaded",t.isDocumentUploaded),e.xp6(1),e.Q6J("pageSubTitle","Remarks"),e.xp6(2),e.Q6J("updateGrievanceList",t.updateGrievanceList)("entityFormGroup",t.UpdateGrievanceMultiFormGroup)("intUser",t.intUser))},dependencies:[o._Y,o.JL,o.sg,u.jZ,v.Hq,F,C,Z,E,M]}),l})();var Q=p(5717);function R(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.saveUpdateGrievance())}),e.qZA()}}function Y(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.saveUpdateGrievance())}),e.qZA()}}function B(a,l){if(1&a){const r=e.EpF();e.TgZ(0,"div",21)(1,"div",3)(2,"div",4),e._UZ(3,"emigrate-sh-page-title",5),e.qZA(),e.TgZ(4,"div",6),e._UZ(5,"emigrate-sh-page-instructions",7),e.qZA(),e._UZ(6,"emigrate-sh-page-sub-title",8),e.TgZ(7,"div",22)(8,"div",23)(9,"div",24)(10,"emigrate-sh-otp-verification",25),e.NdJ("verifiedOtp",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.otpDetails(t))})("cancel",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.cancelOtp(t))})("resendingOtp",function(t){e.CHM(r);const s=e.oxw();return e.KtG(s.resendOtp(t))}),e.qZA()()()()()()}if(2&a){const r=e.oxw();e.xp6(3),e.Q6J("pageTitle","Update Grievance"),e.xp6(2),e.Q6J("instructionsText","Fields marked with * (asterisk) are mandatory. To avoid mistakes,\n        please refer guidelines & instructions")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions."),e.xp6(1),e.Q6J("pageSubTitle","OTP Verification"),e.xp6(4),e.Q6J("entityFormGroup",r.updateGrievanceOtpFormGroup)("inputFormControlName",r.updateGrievanceOtpFormGroup.controls.otp)("subTitleName",r.subTitleForOtp)("emailId",r.OtpDetails.email)}}function K(a,l){1&a&&e._UZ(0,"emigrate-sh-page-instructions",7),2&a&&e.Q6J("instructionsText","Fields marked with * (asterisk) are mandatory. To avoid mistakes,\n        please refer guidelines & instructions")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions.")}let q=(()=>{var a;class l extends u.H6{constructor(i,t,s,g,L,H,X){super(g),this.routerQuery=i,this.router=t,this._updateGrievanceService=s,this.formHelper=L,this.uiService=H,this.sessionQuery=X,this.isUpdateGrievance=!0,this.isOtp=!1,this.isUpdateGrievanceList=!1,this.isARNStatus=!1,this.OtpDetails={},this.updateGrievanceList=[],this.subTitle="We have sent a mail to your email Id {email}. It contains an OTP. Please check your mail and enter the same below. Also check your Spam/Junk folder before making more attempt",this.subTitleForOtp="",this.intUser=!1,this.getOTPDetails={arnNumber:"",email:"",mobileNumber:""}}ngOnInit(){this.user=this.sessionQuery.user,this.UpdateGrievanceSignleFormGroup=this.formHelper.createUpdateGrievanceSignleFormm(!1),this.UpdateGrievanceOtpFormGroup=this.formHelper.createUpdateGrievanceOtpForm(!1),this.intUser="internalUser"===this.routerQuery.getData("userTyp")}updateSubTitle(){this.subTitleForOtp=this.subTitle,this.subTitleForOtp=this.OtpDetails.email?this.subTitleForOtp.replace("{email}",this.OtpDetails.email):""}saveUpdateGrievance(){if(1==this.intUser)this.UpdateGrievanceList();else{if(this.UpdateGrievanceSignleFormGroup.markAllAsTouched(),!this.UpdateGrievanceSignleFormGroup.valid)return void this.showErrorToast(n.rmt.TOAST_FILL_ALL_FIELDS);const i=Object.assign(new n.KZx,this.formHelper.referenceFormToGrievance(this.UpdateGrievanceSignleFormGroup));this.uiService.showSpinner(),this._updateGrievanceService.validateUpdateGrievance(i).subscribe(t=>{this.uiService.hideSpinner(),t.status.toLowerCase()!==n.Xef.SUCCESS?this.showErrorToast(t.message,"Update Grievance"):(this.getOTPDetails=t.data,this.isOtp=!0,this.OtpDetails=JSON.parse(JSON.stringify(t.data)),this.showSuccessToast(t.message,"Update Grievance"),this.message=t.message,this.isUpdateGrievance=!1,this.updateGrievanceOtpFormGroup.controls.otp.reset(),this.updateSubTitle())},t=>{let s=t?.error?.error?.errorMessage?t.error.error.errorMessage:t.message;this.uiService.hideSpinner(),this.isOtp=!1,this.isUpdateGrievance=!0,this.showErrorToast(s,"Update Grievance")})}}saveUpdateGrievanceList(){this.UpdateGrievanceOtpFormGroup.markAllAsTouched(),this.UpdateGrievanceOtpFormGroup.valid&&(this.UpdateGrievanceOtpFormGroup.getRawValue(),Object.assign(new n.BfO,this.formHelper.otpFormToGrievance(this.UpdateGrievanceOtpFormGroup)),this.getOTPDetails.hasOwnProperty("email"))}otpDetails(i){if(this.UpdateGrievanceOtpFormGroup.markAllAsTouched(),this.UpdateGrievanceOtpFormGroup.valid){const t=Object.assign(new n.BfO,this.formHelper.otpFormToGrievance(this.UpdateGrievanceOtpFormGroup));if(this.getOTPDetails.hasOwnProperty("email")&&""!=this.getOTPDetails.email){const s={email:this.getOTPDetails.email,otp:t.oneTimePassword};this.uiService.showSpinner(),this._updateGrievanceService.validateUpdateGrievanceOtp(s).subscribe(g=>{this.uiService.hideSpinner(),g.status.toLowerCase()===n.Xef.SUCCESS?(this.showSuccessToast(g.message,"Update Grievance"),this.isUpdateGrievance=!1,this.isOtp=!1,this.isUpdateGrievanceList=!0,this.UpdateGrievanceList()):this.showErrorToast(g.message,"Update Grievance")},g=>{this.uiService.hideSpinner(),this.showErrorToast(g,"Update Grievance"),this.isUpdateGrievance=!1,this.isOtp=!0,this.isUpdateGrievanceList=!1})}}}resendOtp(i){this.uiService.showSpinner();const t=Object.assign(new n.KZx,this.formHelper.referenceFormToGrievance(this.UpdateGrievanceSignleFormGroup));this._updateGrievanceService.resendOtp(t?.grievanceReferenceNumber).subscribe(s=>{this.uiService.hideSpinner(),this.getOTPDetails=s.data,s.status.toLowerCase()===n.Xef.SUCCESS?(this.OtpDetails=s.data,this.showSuccessToast(s.message,"Update Grievance"),this.isUpdateGrievance=!1,this.isOtp=!0):this.showErrorToast(s.message,"Update Grievance")},s=>{this.uiService.hideSpinner(),this.isOtp=!1,this.isUpdateGrievance=!0,this.showErrorToast(s,"Update Grievance")})}cancelOtp(i){i&&(this.isOtp=!1,this.isUpdateGrievance=!0),Object.keys(this.getOTPDetails).map(t=>this.getOTPDetails[t]="")}resetGrn(){this.updateGrievanceFormGroup.get("grievanceReferenceNumber").reset()}onBack(i){!0===i&&(this.isUpdateGrievance=!0,this.isOtp=!1,this.isUpdateGrievanceList=!1,this.updateGrievanceOtpFormGroup.reset(),window.scroll(0,150))}UpdateGrievanceList(){if(this.UpdateGrievanceSignleFormGroup.markAllAsTouched(),this.intUser){if(!this.UpdateGrievanceSignleFormGroup.valid)return void this.showErrorToast(n.rmt.TOAST_FILL_ALL_FIELDS);this.uiService.showSpinner();const i=Object.assign(new n.KZx,this.formHelper.referenceFormToGrievance(this.UpdateGrievanceSignleFormGroup));this._updateGrievanceService.UpdateGrievanceList(i.grievanceReferenceNumber).subscribe(t=>{this.uiService.hideSpinner(),t.status.toLowerCase()!==n.Xef.SUCCESS?this.showErrorToast(t.message,"Update Grievance"):(this.isUpdateGrievance=!1,this.isOtp=!1,this.isUpdateGrievanceList=!0,this.updateGrievanceList=t.data)},t=>{let s=t?.error?.error?.errorMessage?t.error.error.errorMessage:t.message;this.uiService.hideSpinner(),this.isOtp=!1,this.showErrorToast(s,"Update Grievance")})}else this.OtpDetails?.arnNumber&&this._updateGrievanceService.UpdateGrievanceList(this.OtpDetails?.arnNumber).subscribe(i=>{this.uiService.hideSpinner(),this.updateGrievanceList=i.data},i=>{this.uiService.hideSpinner(),this.isOtp=!1,this.showErrorToast(i,"Update Grievance")})}showARNStatus(i){this.isUpdateGrievance=!1,this.isOtp=!1,this.isUpdateGrievanceList=!1,this.isARNStatus=i}get updateGrievanceFormGroup(){return this.UpdateGrievanceSignleFormGroup.controls.updateGrievanceDetails}get updateGrievanceOtpFormGroup(){return this.UpdateGrievanceOtpFormGroup.controls.otpDetails}cancel(){this.router.navigate(this.user?.userId?["admin/dashboard"]:["emigrate"])}}return(a=l).\u0275fac=function(i){return new(i||a)(e.Y36(G.dt),e.Y36(T.F0),e.Y36(h.d),e.Y36(U.ez),e.Y36(d.F),e.Y36(c.n),e.Y36(n.U_o))},a.\u0275cmp=e.Xpm({type:a,selectors:[["emigrate-update-grievance"]],features:[e.qOj],decls:34,vars:19,consts:[[1,"middle_section"],[1,"container",3,"hidden"],[3,"formGroup"],[1,"content","info-table"],[1,"row","header-background"],[3,"pageTitle"],[1,"row"],[3,"instructionsText","toolTipText"],[3,"pageSubTitle"],[3,"entityFormGroup"],[1,"col-12"],[1,"buttons"],["pButton","","type","submit","label","Submit","class","btn-format btn-blue",3,"click",4,"ngIf"],["class","container",4,"ngIf"],[3,"instructionsText","toolTipText",4,"ngIf"],[3,"isUpdateGrievanceList","intUser","updateGrievanceList","arnStatus","backClick"],[1,"mb-0"],[3,"message"],[1,"col-12","mt-2"],["pButton","","type","button","label","Close",1,"btn-format","btn-blue","mr-2",3,"click"],["pButton","","type","submit","label","Submit",1,"btn-format","btn-blue",3,"click"],[1,"container"],[1,"table-border"],[1,"form"],[1,"row","mb-2"],["descriptionFormControlName","otp",3,"entityFormGroup","inputFormControlName","subTitleName","emailId","verifiedOtp","cancel","resendingOtp"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"div",1)(3,"form",2)(4,"div",3)(5,"div",4),e._UZ(6,"emigrate-sh-page-title",5),e.qZA(),e.TgZ(7,"div",6),e._UZ(8,"emigrate-sh-page-instructions",7),e.qZA(),e._UZ(9,"emigrate-sh-page-sub-title",8)(10,"emigrate-update-grievance-form",9),e.TgZ(11,"div",6)(12,"div",10)(13,"div",11),e.YNc(14,R,1,0,"button",12),e.YNc(15,Y,1,0,"button",12),e.qZA()()()()()(),e.YNc(16,B,11,8,"div",13),e.TgZ(17,"div",1)(18,"div",4),e._UZ(19,"emigrate-sh-page-title",5),e.qZA(),e.TgZ(20,"div",6),e.YNc(21,K,1,2,"emigrate-sh-page-instructions",14),e.qZA(),e.TgZ(22,"div",3)(23,"emigrate-update-grievance-list",15),e.NdJ("arnStatus",function(g){return t.showARNStatus(g)})("backClick",function(g){return t.onBack(g)}),e.qZA()()(),e.TgZ(24,"div",1)(25,"div",3)(26,"div",4),e._UZ(27,"emigrate-sh-page-title",5),e.qZA(),e.TgZ(28,"h4",16),e._uU(29,"Success"),e.qZA(),e._UZ(30,"emigrate-arn-status",17),e.qZA(),e.TgZ(31,"div",6)(32,"div",18)(33,"button",19),e.NdJ("click",function(){return t.cancel()}),e.qZA()()()()()),2&i&&(e.xp6(2),e.Q6J("hidden",!t.isUpdateGrievance),e.xp6(1),e.Q6J("formGroup",t.UpdateGrievanceSignleFormGroup),e.xp6(3),e.Q6J("pageTitle","Update Grievance"),e.xp6(2),e.Q6J("instructionsText","Fields marked with * (asterisk) are mandatory. To avoid mistakes,\n    please refer guidelines & instructions")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions."),e.xp6(1),e.Q6J("pageSubTitle","Update Grievance"),e.xp6(1),e.Q6J("entityFormGroup",t.updateGrievanceFormGroup),e.xp6(4),e.Q6J("ngIf",!t.intUser),e.xp6(1),e.Q6J("ngIf",t.intUser),e.xp6(1),e.Q6J("ngIf",t.isOtp),e.xp6(1),e.Q6J("hidden",!t.isUpdateGrievanceList),e.xp6(2),e.Q6J("pageTitle","Update Grievance"),e.xp6(2),e.Q6J("ngIf",t.intUser),e.xp6(2),e.Q6J("isUpdateGrievanceList",t.isUpdateGrievanceList)("intUser",t.intUser)("updateGrievanceList",t.updateGrievanceList),e.xp6(1),e.Q6J("hidden",!t.isARNStatus),e.xp6(3),e.Q6J("pageTitle","ARN Satus"),e.xp6(3),e.Q6J("message",t.message))},dependencies:[m.O5,o._Y,o.JL,o.sg,u.n0,u.TM,u.jZ,u.dB,v.Hq,f.FN,y,P,Q.b]}),l})()}}]);