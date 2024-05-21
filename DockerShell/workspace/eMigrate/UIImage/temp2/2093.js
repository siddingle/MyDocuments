"use strict";(self.webpackChunke_migrate=self.webpackChunke_migrate||[]).push([[2093],{2093:(O,f,s)=>{s.r(f),s.d(f,{UpdateEmigrantAssociationDetailsModule:()=>B});var b=s(6895),v=s(3599),t=s(1571),r=s(4006),l=s(1358);let d=(()=>{var e;class n{constructor(i){this.fb=i}createEmigrantAssociationDetailsForm(i,o){return this.fb.group({passportNumber:this.fb.control("",r.kI.compose([r.kI.required,l.YO.passportNumberValidator()])),wantToUpdtVisaDetails:this.fb.control({value:o?.wantToUpdtVisaDetails?o?.wantToUpdtVisaDetails:null,disabled:!1},r.kI.required),wantToUpdtAssocDetails:this.fb.control({value:o?.wantToUpdtAssocDetails?o?.wantToUpdtAssocDetails:null,disabled:!1},r.kI.required),emigrantAssociationDetailsForm:this.fb.group({name:this.fb.control({value:o?.name,disabled:!0},r.kI.compose([r.kI.required,r.kI.maxLength(200),l.YO.fullNameValidator()])),jobId:this.fb.control({value:o?.jobId,disabled:!0},r.kI.compose([r.kI.required,l.YO.jobIDValidator()])),jobCategory:this.fb.control({value:o?.jobId,disabled:!0},r.kI.compose([r.kI.required,l.YO.characterValidator()])),demandId:this.fb.control({value:o?.jobId,disabled:!0},r.kI.compose([r.kI.required,l.YO.alphaNumericValidator()])),wantToUpdtContactDetails:this.fb.control({value:o?.wantToUpdtContactDetails?o?.wantToUpdtContactDetails:null,disabled:!1},r.kI.required),contractExpiryDate:this.fb.control({value:o?.contractExpiryDate?new Date(o?.contractExpiryDate):null,disabled:!0},r.kI.required)}),visaDetailsForm:this.fb.group({visaNo:this.fb.control({value:o?.name,disabled:!0},r.kI.compose([r.kI.required,r.kI.maxLength(200),l.YO.alphaNumericValidator()])),visaType:this.fb.control({value:o?.name,disabled:!0},r.kI.compose([r.kI.required,r.kI.maxLength(200),l.YO.characterValidator()])),visaValidFrom:this.fb.control({value:o?.validForm?new Date(o?.validForm):null,disabled:!0},r.kI.required),visaValidTo:this.fb.control({value:o?.validTo?new Date(o?.validTo):null,disabled:!0},r.kI.required)}),newVisaDetailsForm:this.fb.group({visaNo:this.fb.control({value:o?.name,disabled:i},r.kI.compose([r.kI.required,r.kI.maxLength(200),l.YO.alphaNumericValidator()])),visaType:this.fb.control({value:o?.name,disabled:i},r.kI.required),visaValidFrom:this.fb.control({value:o?.validForm?new Date(o?.validForm):null,disabled:i},r.kI.required),visaValidTo:this.fb.control({value:o?.validTo?new Date(o?.validTo):null,disabled:i},r.kI.required)}),associationDetailsForm:this.fb.group({associationDetails:this.fb.control({value:o?.passportType,disabled:i},r.kI.required),terminationDate:this.fb.control({value:o?.dateOfTermination?new Date(o?.dateOfTermination):null,disabled:i},r.kI.required),terminationReason:this.fb.control({value:o?.reasonOfTermination,disabled:i},r.kI.compose([r.kI.required,r.kI.maxLength(1e3)])),associationCompliance:this.fb.control({value:o?.complianceToInsurance,disabled:i},r.kI.compose([r.kI.required,r.kI.maxLength(1e3)]))})})}}return(e=n).\u0275fac=function(i){return new(i||e)(t.LFG(r.qu))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),n})();var D=s(1740),C=s(613),h=s(8645);let T=(()=>{var e;class n{constructor(i){this.formHelper=i,this.defaultDateFormat="dd-mm-yy",this.breadcrumb=[{label:"Admin",routerLink:["/admin"]},{label:"Administration",routerLink:["/admin/administration"]},{label:"Update Emigrant Association Details",routerLink:["/admin/administration/emigrant-association-details/association-details"]}]}ngOnInit(){this.initForm(),this.minDate=new Date}initForm(){}onCheckContractDetailBtn(i){"Y"==i.value?this.entityFormGroup.controls.contractExpiryDate.enable():this.entityFormGroup.controls.contractExpiryDate.disable()}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-emigrant-association-details"]],inputs:{entityFormGroup:"entityFormGroup"},decls:29,vars:17,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","emigrantName","inputId","emigrantName","inputLabel","Name",1,"block",3,"inputFormControl"],["id","emigrantName","type","text","pInputText","",3,"formControl"],["for","jobId","inputId","jobId","inputLabel","Job ID",1,"block",3,"inputFormControl"],["id","jobId","type","text","pInputText","",3,"formControl"],["for","jobCategory","inputId","jobCategory","inputLabel","Job Category",1,"block",3,"inputFormControl"],["id","jobCategory","type","text","pInputText","",3,"formControl"],["for","demandId","inputId","demandId","inputLabel","Demand ID",1,"block",3,"inputFormControl"],["id","demandId","type","text","pInputText","",3,"formControl"],["inputLabel","Whether you want to update the contract details?","inputId","wantToUpdtContactDetails",1,"block",3,"inputFormControl"],[1,"d-flex","align-items-center"],["name","wantToUpdtContactDetails","value","Y","inputId","Y",1,"mr-40",3,"formControl","label","onClick"],["name","wantToUpdtContactDetails","value","N","inputId","N",3,"formControl","label","onClick"],["for","contractExpDate","inputLabel","Contract Expiry Date","inputId","contractExpDate",1,"block",3,"inputFormControl"],["appendTo","body","inputId","contractExpDate",3,"dateFormat","formControl","minDate"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"input",8),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"emigrate-sh-html-input",9),t._UZ(16,"input",10),t.qZA()()(),t.TgZ(17,"div",1)(18,"div",2)(19,"emigrate-sh-html-input",11)(20,"div",12)(21,"span")(22,"p-radioButton",13),t.NdJ("onClick",function(p){return o.onCheckContractDetailBtn(p)}),t.qZA()(),t.TgZ(23,"span")(24,"p-radioButton",14),t.NdJ("onClick",function(p){return o.onCheckContractDetailBtn(p)}),t.qZA()()()()()(),t.TgZ(25,"div",1)(26,"div",2)(27,"emigrate-sh-html-input",15),t._UZ(28,"p-calendar",16),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.name),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.name),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.jobId),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.jobId),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.jobCategory),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.jobCategory),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.demandId),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.demandId),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.wantToUpdtContactDetails),t.xp6(3),t.Q6J("formControl",o.entityFormGroup.controls.wantToUpdtContactDetails)("label","Yes"),t.xp6(2),t.Q6J("formControl",o.entityFormGroup.controls.wantToUpdtContactDetails)("label","No"),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.contractExpiryDate),t.xp6(1),t.Q6J("dateFormat",o.defaultDateFormat)("formControl",o.entityFormGroup.controls.contractExpiryDate)("minDate",o.minDate))},dependencies:[r.Fj,r.JJ,r.oH,D.o,C.EU,h.f,l.KR]}),n})();var A=s(2210),U=s(3054);let y=(()=>{var e;class n{constructor(i){this.formHelper=i,this.breadcrumb=[{label:"Admin",routerLink:["/admin"]},{label:"Administration",routerLink:["/admin/administration"]},{label:"Update Emigrant Association Details",routerLink:["/admin/administration/emigrant-association-details/association-details"]}],this.status=[{label:"Employed with Us",value:"EASS_EWU"},{label:"Contract Terminated",value:"EASS_CT"},{label:"Contract Expired",value:"EASS_CE"}]}ngOnInit(){this.maxDate=new Date}initForm(){}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-association-details"]],inputs:{entityFormGroup:"entityFormGroup"},decls:17,vars:12,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","state","inputLabel","Association Status","inputId","State",1,"block",3,"inputFormControl"],["id","state","placeholder","Select Status",3,"formControl","options","disabled"],["for","terminationDate","inputLabel","Date of Termination","inputId","terminationDate",1,"block",3,"inputFormControl"],["appendTo","body","inputId","terminationDate",3,"formControl","disabled","maxDate"],[1,"col-md-12","col-sm-12"],["for","terminationReason","inputId","terminationReason","inputLabel","Reason of Termination",1,"block",3,"inputFormControl"],["rows","3","cols","30","pInputTextarea","",3,"formControl"],["for","associationCompliance","inputId","associationCompliance","inputLabel","Compliance to Insurance required as per \n                destination country \n                labour law",1,"block",3,"inputFormControl"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"p-dropdown",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"p-calendar",6),t.qZA()()(),t.TgZ(9,"div",7)(10,"div",2)(11,"emigrate-sh-html-input",8),t._UZ(12,"textarea",9),t.qZA()()(),t.TgZ(13,"div",7)(14,"div",2)(15,"emigrate-sh-html-input",10),t._UZ(16,"textarea",9),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.associationDetails),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.associationDetails)("options",o.status)("disabled",!0),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.terminationDate),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.terminationDate)("disabled",!0)("maxDate",o.maxDate),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.terminationReason),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.terminationReason),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.associationCompliance),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.associationCompliance))},dependencies:[r.Fj,r.JJ,r.oH,A.Lt,h.f,U.g,l.KR]}),n})(),x=(()=>{var e;class n{constructor(i){this.formHelper=i,this.defaultDateFormat="dd-mm-yy"}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(d))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-emigrant-visa-details"]],inputs:{entityFormGroup:"entityFormGroup"},decls:17,vars:10,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputId","visaNo","inputLabel","Visa Number",1,"block",3,"inputFormControl"],["id","visaNo","type","text","pInputText","",3,"formControl"],["for","1","inputId","visaType","inputLabel","Visa Type",1,"block",3,"inputFormControl"],["id","visaType","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","Valid Form","inputId","visaValidFrom",1,"block",3,"inputFormControl"],["appendTo","body","inputId","validForm",3,"dateFormat","formControl"],["for","6","inputLabel","Valid To","inputId","visaValidTo",1,"block",3,"inputFormControl"],["appendTo","body","inputId","visaValidTo",3,"dateFormat","formControl"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"p-calendar",8),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"emigrate-sh-html-input",9),t._UZ(16,"p-calendar",10),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaNo),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.visaNo),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaType),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.visaType),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaValidFrom),t.xp6(1),t.Q6J("dateFormat",o.defaultDateFormat)("formControl",o.entityFormGroup.controls.visaValidFrom),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaValidTo),t.xp6(1),t.Q6J("dateFormat",o.defaultDateFormat)("formControl",o.entityFormGroup.controls.visaValidTo))},dependencies:[r.Fj,r.JJ,r.oH,D.o,h.f,l.KR]}),n})();var c=s(2976),k=s(1754);let E=(()=>{var e;class n{constructor(i,o){this.formHelper=i,this.routerQuery=o,this.defaultDateFormat="dd-mm-yy",this.visaData=[]}ngOnInit(){this.initForm(),this.entityFormGroup.controls.visaValidTo.valueChanges.subscribe(i=>{this.DateValidator("todate")}),this.entityFormGroup.controls.visaValidFrom.valueChanges.subscribe(i=>{this.DateValidator("fromdate")}),this.officeData=this.routerQuery.getData(),this.visaData=this.officeData[0][c.kcK.VISA_TYPE]}DateValidator(i){const o=this.entityFormGroup.controls?.visaValidFrom.value,m=this.entityFormGroup.controls?.visaValidTo.value;if("todate"==i)this.entityFormGroup.controls?.visaValidTo.setErrors(m>o?null:{greaterthanpreviousdate:!0}),"INVALID"==this.entityFormGroup.controls.visaValidFrom.status&&this.DateValidator("fromdate");else{if(o&&o<this.visaDetailsFormGroup.controls.visaValidFrom.value)return void this.entityFormGroup.controls?.visaValidFrom.setErrors({fromdatelessthanprefilledfromdate:!0});o&&m&&this.entityFormGroup.controls?.visaValidFrom.setErrors(m>o?null:{lessthanpreviousdate:!0})}}initForm(){}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(d),t.Y36(k.dt))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-emigrant-new-visa-details"]],inputs:{entityFormGroup:"entityFormGroup",visaDetailsFormGroup:"visaDetailsFormGroup"},decls:17,vars:12,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputId","visaNo","inputLabel","Visa Number",1,"block",3,"inputFormControl"],["id","visaNumber","type","text","pInputText","",3,"formControl","maxlength"],["for","1","inputId","visaType","inputLabel","Visa Type",1,"block",3,"inputFormControl"],["id","visaData","placeholder","Select an option","EmigrateShDropdown","",3,"options","formControl"],["for","6","inputLabel","Valid Form","inputId","visaValidFrom",1,"block",3,"inputFormControl"],["appendTo","body","inputId","visaValidFrom",3,"dateFormat","formControl"],["for","6","inputLabel","Valid To","inputId","visaValidTo",1,"block",3,"inputFormControl"],["appendTo","body","inputId","visaValidTo",3,"dateFormat","formControl"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"p-dropdown",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"p-calendar",8),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"emigrate-sh-html-input",9),t._UZ(16,"p-calendar",10),t.qZA()()()()),2&i&&(t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaNo),t.xp6(1),t.Q6J("formControl",o.entityFormGroup.controls.visaNo)("maxlength",20),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaType),t.xp6(1),t.Q6J("options",o.visaData)("formControl",o.entityFormGroup.controls.visaType),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaValidFrom),t.xp6(1),t.Q6J("dateFormat",o.defaultDateFormat)("formControl",o.entityFormGroup.controls.visaValidFrom),t.xp6(3),t.Q6J("inputFormControl",o.entityFormGroup.controls.visaValidTo),t.xp6(1),t.Q6J("dateFormat",o.defaultDateFormat)("formControl",o.entityFormGroup.controls.visaValidTo))},dependencies:[r.Fj,r.JJ,r.nD,r.oH,A.Lt,D.o,h.f,l.KR,l.lC]}),n})();var u,I=s(655),G=s(4004),Z=s(262),w=s(8513);class g{constructor(n){this.associationDetApiService=n}getAssociationDetail(n,a){return this.associationDetApiService.getAssociationDetail(n,a).pipe((0,G.U)(i=>i.data),(0,Z.K)(i=>{throw i}))}updateAssociationDetail(n,a){return this.associationDetApiService.updateAssociationDetail(n,a).pipe((0,G.U)(i=>i),(0,Z.K)(i=>{throw i}))}}(u=g).\u0275fac=function(n){return new(n||u)(t.LFG(c.QHA))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),(0,I.gn)([(0,w.PS)()],g.prototype,"getAssociationDetail",null),(0,I.gn)([(0,w.PS)()],g.prototype,"updateAssociationDetail",null);var V=s(6945),J=s(805),_=s(5593),N=s(2453);let S=(()=>{var e;class n{constructor(i,o){this.router=i,this.uiService=o,this.uiService.initPageSetup([],"Update Emigrant Association Details")}OnCloseClick(){this.router.navigate(["admin/dashboard"])}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(v.F0),t.Y36(V.n))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-success"]],inputs:{message:"message"},decls:10,vars:1,consts:[[1,"content"],[1,"border","gray-bg","p-3"],[1,"row_box"],[1,"form","mt-3","text-green"],[1,"successMsg"],[1,"text-left","mt-3"],["label","Close","styleClass","btn-format btn-blue mr-2",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h4"),t._uU(4,"Status"),t.qZA(),t.TgZ(5,"div",3)(6,"p",4),t._uU(7),t.qZA()()()(),t.TgZ(8,"div",5)(9,"p-button",6),t.NdJ("click",function(){return o.OnCloseClick()}),t.qZA()()()),2&i&&(t.xp6(7),t.Oqu(o.message))},dependencies:[_.zx],styles:[".successMsg[_ngcontent-%COMP%]{text-align:center;font-weight:700}"]}),n})();function Q(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",17)(1,"div",5)(2,"div",18)(3,"h4",19),t._uU(4,"Emigrant Association Details"),t.qZA(),t.TgZ(5,"div",20),t._UZ(6,"emigrate-emigrant-association-details",21),t.qZA()(),t.TgZ(7,"div",22)(8,"div",23)(9,"emigrate-sh-html-input",24)(10,"div",25)(11,"span")(12,"p-radioButton",26),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.wantToUpdtVisa("Y"))}),t.qZA()(),t.TgZ(13,"span")(14,"p-radioButton",27),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.wantToUpdtVisa("N"))}),t.qZA()()()()()(),t.TgZ(15,"div",22)(16,"h4",19),t._uU(17,"Visa Details"),t.qZA(),t.TgZ(18,"div",20),t._UZ(19,"emigrate-emigrant-visa-details",21),t.qZA()(),t.TgZ(20,"div",28)(21,"h4",19),t._uU(22,"New Visa Details"),t.qZA(),t.TgZ(23,"div",20),t._UZ(24,"emigrate-emigrant-new-visa-details",29),t.qZA()(),t.TgZ(25,"div",22)(26,"div",23)(27,"emigrate-sh-html-input",30)(28,"div",25)(29,"span")(30,"p-radioButton",31),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.wantToUpdtAssocDetail("Y"))}),t.qZA()(),t.TgZ(31,"span")(32,"p-radioButton",32),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.wantToUpdtAssocDetail("N"))}),t.qZA()()()()()(),t.TgZ(33,"div",28)(34,"h4",19),t._uU(35,"Association Details"),t.qZA(),t.TgZ(36,"div",20),t._UZ(37,"emigrate-association-details",21),t.qZA()()(),t.TgZ(38,"div",33)(39,"div",34)(40,"div",35)(41,"button",36),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.backToDashboard())}),t.qZA(),t.TgZ(42,"button",37),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.clear())}),t.qZA(),t.TgZ(43,"button",15),t.NdJ("click",function(){t.CHM(a);const o=t.oxw(2);return t.KtG(o.submit())}),t.qZA()()()()()}if(2&e){const a=t.oxw(2);t.xp6(6),t.Q6J("entityFormGroup",a.emigrantAssociationDetailsFormGroup),t.xp6(3),t.Q6J("inputFormControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails),t.xp6(3),t.Q6J("formControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails)("label","Yes"),t.xp6(2),t.Q6J("formControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails)("label","No"),t.xp6(5),t.Q6J("entityFormGroup",a.visaDetailsFormGroup),t.xp6(1),t.Q6J("hidden",!a.updtVisaDetails),t.xp6(4),t.Q6J("visaDetailsFormGroup",a.visaDetailsFormGroup)("entityFormGroup",a.newVisaDetailsForm),t.xp6(3),t.Q6J("inputFormControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails),t.xp6(3),t.Q6J("formControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails)("label","Yes"),t.xp6(2),t.Q6J("formControl",a.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails)("label","No"),t.xp6(1),t.Q6J("hidden",!a.updtAssocDetails),t.xp6(4),t.Q6J("entityFormGroup",a.associationDetailsForm),t.xp6(6),t.Q6J("disabled",!a.submitBtnValidation())}}function Y(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5),t._UZ(3,"emigrate-sh-page-instructions",6),t.TgZ(4,"form")(5,"div",7)(6,"h4",8),t._uU(7,"Extract Details"),t.qZA(),t.TgZ(8,"div",9)(9,"div",10)(10,"div",11)(11,"emigrate-sh-html-input",12),t._UZ(12,"input",13),t.qZA()()()(),t.TgZ(13,"div",14)(14,"button",15),t.NdJ("click",function(){t.CHM(a);const o=t.oxw();return t.KtG(o.validate())}),t.qZA()()(),t.YNc(15,Q,44,18,"div",16),t.qZA()()()()}if(2&e){const a=t.oxw();t.xp6(3),t.Q6J("instructionsText",a.pageInstructionText)("toolTipText",a.pageInstructionHelpText),t.xp6(8),t.Q6J("inputFormControl",a.updateEmiAssoDetailsFormGroup.controls.passportNumber),t.xp6(1),t.Q6J("formControl",a.updateEmiAssoDetailsFormGroup.controls.passportNumber),t.xp6(2),t.Q6J("disabled",a.updateEmiAssoDetailsFormGroup.controls.passportNumber.invalid),t.xp6(1),t.Q6J("ngIf",a.extractDetails)}}function q(e,n){if(1&e&&(t.TgZ(0,"div",38),t._UZ(1,"emigrate-success",39),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("message",a.statusMessage)}}const L=[{path:"extract-association-details",pathMatch:"full",component:(()=>{var e;class n extends l.H6{constructor(i,o,m,p,F,H){super(F),this.formHelper=i,this.associationDetailsService=o,this.uiService=m,this.router=p,this.sessionQuery=H,this.breadcrumb=[{label:"Administration",routerLink:["/admin/administration"]},{label:"Update Emigrant Association Details",routerLink:["/admin/administration/emigrant-association-details/association-details"]}],this.extractDetails=!1,this.updtVisaDetails=!1,this.updtAssocDetails=!1,this.pageInstructionText=c.Xef.PAGE_INSTRUCTION_TEXT,this.pageInstructionHelpText=c.Xef.PAGE_INSTRUCTION_TEXT}ngOnInit(){this.userName=this.sessionQuery.user.loginUsername,this.initForm()}initForm(){this.updateEmiAssoDetailsFormGroup=this.formHelper.createEmigrantAssociationDetailsForm(!1,{})}validate(){const i=this.updateEmiAssoDetailsFormGroup.controls.passportNumber.getRawValue();this.getAssociationDetail(i)}wantToUpdtVisa(i){this.updtVisaDetails="Y"==i}wantToUpdtAssocDetail(i){this.updtAssocDetails="Y"==i}submit(){let i={emigrantArn:this.associationData.emigrantArn,jobId:this.associationData.jobId};if("Y"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails.value){const o=this.newVisaDetailsForm.getRawValue();i=Object.assign(o,i),i.visaFlag="Y"}if("Y"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails.value){const o=this.associationDetailsForm.getRawValue();i=Object.assign(o,i),i.assocFlag="Y",i.visaNo="Y"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails?.value?i.visaNo:this.associationData.visaNo}if("Y"==this.emigrantAssociationDetailsFormGroup.controls.wantToUpdtContactDetails.value){const o=this.formatDateToYYYYMMDD(this.emigrantAssociationDetailsFormGroup.controls.contractExpiryDate.value);i=Object.assign({contractExpiryDate:o},i),i.contractFlag="Y"}this.updateAssociationDetail(i,this.associationData.passportNo)}submitBtnValidation(){return!!(("Y"==this.emigrantAssociationDetailsFormGroup.controls.wantToUpdtContactDetails.value&&this.emigrantAssociationDetailsFormGroup.controls.contractExpiryDate.valid||"N"==this.emigrantAssociationDetailsFormGroup.controls.wantToUpdtContactDetails.value)&&("Y"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails.value&&this.newVisaDetailsForm.valid||"N"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails.value)&&("Y"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails.value&&this.associationDetailsForm.valid||"N"===this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails.value))}get emigrantAssociationDetailsFormGroup(){return this.updateEmiAssoDetailsFormGroup.controls.emigrantAssociationDetailsForm}get visaDetailsFormGroup(){return this.updateEmiAssoDetailsFormGroup.controls.visaDetailsForm}get newVisaDetailsForm(){return this.updateEmiAssoDetailsFormGroup.controls.newVisaDetailsForm}get associationDetailsForm(){return this.updateEmiAssoDetailsFormGroup.controls.associationDetailsForm}getAssociationDetail(i){this.uiService.showSpinner(),this.associationDetailsService.getAssociationDetail(i,this.userName).subscribe({next:o=>{this.uiService.hideSpinner(),this.extractDetails=!0,this.associationData=o,this.patchForm(o)},error:o=>{this.uiService.hideSpinner(),this.showErrorToast(o?.error?.error?.errorMessage)},complete:()=>{this.uiService.hideSpinner()}})}updateAssociationDetail(i,o){this.uiService.showSpinner(),this.associationDetailsService.updateAssociationDetail(i,o).subscribe({next:m=>{this.uiService.hideSpinner(),this.ShowStatus=!0,this.statusMessage=m.message},error:m=>{this.uiService.hideSpinner(),this.showErrorToast(m?.error?.error?.errorMessage)},complete:()=>{this.uiService.hideSpinner()}})}patchForm(i){this.updateEmiAssoDetailsFormGroup.controls.emigrantAssociationDetailsForm.patchValue({name:i?.firstName,jobId:i?.jobId,jobCategory:i?.jobCategory,demandId:i?.demandId,contractExpiryDate:i?.contractExpiryDate?new Date(i?.contractExpiryDate):null}),this.updateEmiAssoDetailsFormGroup.controls.visaDetailsForm.patchValue({visaNo:i?.visaNo,visaType:i?.visaType,visaValidFrom:i?.visaValidFrom?new Date(i?.visaValidFrom):null,visaValidTo:i?.visaValidTo?new Date(i?.visaValidTo):null})}backToDashboard(){this.router.navigate(["admin/dashboard"])}clear(){this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtVisaDetails.reset(),this.updateEmiAssoDetailsFormGroup.controls.wantToUpdtAssocDetails.reset(),this.emigrantAssociationDetailsFormGroup.controls.wantToUpdtContactDetails.reset(),this.newVisaDetailsForm.reset(),this.associationDetailsForm.reset(),this.updtVisaDetails=!1,this.updtAssocDetails=!1,this.emigrantAssociationDetailsFormGroup.patchValue({contractExpiryDate:this.associationData?.contractExpiryDate?new Date(this.associationData?.contractExpiryDate):null}),this.emigrantAssociationDetailsFormGroup.controls.contractExpiryDate.disable()}formatDateToYYYYMMDD(i){const o=new Date(i);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}}return(e=n).\u0275fac=function(i){return new(i||e)(t.Y36(d),t.Y36(g),t.Y36(V.n),t.Y36(v.F0),t.Y36(J.ez),t.Y36(c.U_o))},e.\u0275cmp=t.Xpm({type:e,selectors:[["emigrate-extract-emigrant-association-details"]],features:[t.qOj],decls:4,vars:2,consts:[[1,"container"],["class","content mb-5",4,"ngIf"],["class","content mb-3",4,"ngIf"],[1,"content","mb-5"],[1,"row_box","p-0","m-0"],[1,"form"],[3,"instructionsText","toolTipText"],[1,"border","p-3"],[1,"mt-2"],[1,"row","align-items-center"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputLabel","Passport Number","inputId","passportNo",1,"block",3,"inputFormControl"],["id","passportNo","type","text","pInputText","","placeholder","",3,"formControl"],[1,"col-md-2"],["pButton","","type","submit","label","Submit",1,"btn-format","btn-blue",3,"disabled","click"],["class","content",4,"ngIf"],[1,"content"],[1,"border","p-3","mb-4","mt-5"],[1,"mt-0"],[1,"row"],[3,"entityFormGroup"],[1,"border","p-3","mb-4"],[1,"col-md-12","col-sm-12"],["inputLabel","Whether you want to update the Visa details?","inputId","",1,"block","inlineRadioBtn",3,"inputFormControl"],[1,"d-flex","align-items-center","ml-5"],["name","wantToUpdtVisaDetails","value","Y","inputId","Y",1,"mr-40",3,"formControl","label","click"],["name","wantToUpdtVisaDetails","value","N","inputId","N",3,"formControl","label","click"],[1,"border","p-3","mb-4",3,"hidden"],[3,"visaDetailsFormGroup","entityFormGroup"],["inputLabel","Whether you want to update the Association details?","inputId","",1,"block","inlineRadioBtn",3,"inputFormControl"],["name","wantToUpdtAssocDetails","value","Y","inputId","Y",1,"mr-40",3,"formControl","label","click"],["name","wantToUpdtAssocDetails","value","N","inputId","N",3,"formControl","label","click"],[1,"row","mb-5"],[1,"col-12"],[1,"buttons"],["pButton","","type","button","label","Cancel",1,"btn-blue","mr-2","btn-format",3,"click"],["pButton","","type","submit","label","Clear",1,"btn-format","btn-blue","mr-2",3,"click"],[1,"content","mb-3"],[3,"message"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"p-toast"),t.YNc(2,Y,16,6,"div",1),t.YNc(3,q,2,1,"div",2),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngIf",!o.ShowStatus),t.xp6(1),t.Q6J("ngIf",o.ShowStatus))},dependencies:[b.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,_.Hq,D.o,N.FN,C.EU,r.F,l.KR,l.dB,T,x,E,y,S]}),n})(),resolve:[c.c_s]},{path:"emigrant-ass-details",pathMatch:"full",component:T},{path:"emigrant-visa-details",pathMatch:"full",component:x},{path:"emigrant-newvisa-details",pathMatch:"full",component:E},{path:"association-details",pathMatch:"full",component:y}];let j=(()=>{var e;class n{}return(e=n).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[v.Bz.forChild(L),v.Bz]}),n})();var M=s(6270);let B=(()=>{var e;class n{}return(e=n).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.ez,r.UX,j,M.g,l.uR]}),n})()}}]);