"use strict";(self.webpackChunke_migrate=self.webpackChunke_migrate||[]).push([[2480],{2480:(K,y,s)=>{s.r(y),s.d(y,{JobDesignationModule:()=>z});var c=s(6895),C=s(3599),l=s(2976);class Z{deserialize(n){return Object.assign(this,n),this}}var u=s(1358),t=s(1571),m=s(805),r=s(4006);let J=(()=>{var o;class n{constructor(i){this.fb=i}createDesignation(i){return this.fb.group({country:this.fb.control({value:null,disabled:i},r.kI.compose([r.kI.required])),category:this.fb.control({value:null,disabled:i},r.kI.compose([r.kI.required])),designation:this.fb.control({value:null,disabled:i},r.kI.compose([r.kI.required])),effectiveDate:this.fb.control({value:null,disabled:i},r.kI.compose([r.kI.required])),updateDesignation:this.fb.control({value:null,disabled:i})})}jobDesignationApiPayload(i){const a=i.getRawValue();return(new Z).deserialize({country:a.country,category:a.category,designation:a.designation,effectiveDate:a.effectiveDate})}}return(o=n).\u0275fac=function(i){return new(i||o)(t.LFG(r.qu))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})();var p,F=s(1754),g=s(655),b=s(8513),f=s(8505),D=s(262);class d{constructor(n){this.designationService=n}saveDesignationData(n){return this.designationService.addDesignation(n).pipe((0,f.b)(e=>{}),(0,D.K)(e=>{throw e}))}updateDesignationData(n){return this.designationService.updateDesignation(n).pipe((0,f.b)(e=>{}),(0,D.K)(e=>{throw e}))}removeDesignationData(n){return this.designationService.deleteDesignationDetails(n).pipe((0,f.b)(e=>{}),(0,D.K)(e=>{throw e}))}}(p=d).\u0275fac=function(n){return new(n||p)(t.LFG(l.bdu))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),(0,g.gn)([(0,b.PS)()],d.prototype,"saveDesignationData",null),(0,g.gn)([(0,b.PS)()],d.prototype,"updateDesignationData",null),(0,g.gn)([(0,b.PS)()],d.prototype,"removeDesignationData",null);var T=s(5593),A=s(2210),x=s(1740),I=s(2453),h=s(4826),S=s(8645),U=s(2137);function j(o,n){if(1&o&&(t.TgZ(0,"div",9)(1,"div",10)(2,"emigrate-sh-html-input",26),t._UZ(3,"p-dropdown",27),t.qZA()()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("inputFormControl",e.jobDesignationFormGroup.controls.updateDesignation),t.xp6(1),t.Q6J("formControl",e.jobDesignationFormGroup.controls.updateDesignation)("options",e.designation)}}function M(o,n){if(1&o&&(t.TgZ(0,"div",9)(1,"div",10)(2,"emigrate-sh-html-input",28),t._UZ(3,"input",29),t.qZA()()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("inputRequired",!1)("inputFormControl",e.jobDesignationFormGroup.controls.designation),t.xp6(1),t.Q6J("formControl",e.jobDesignationFormGroup.controls.designation)}}function Q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"p-button",30),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.showDialog("Add"))}),t.qZA()}}function E(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"p-button",31),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.showDialog("Edit"))}),t.qZA()}}function w(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"p-button",32),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.showDialog("Delete"))}),t.qZA()}}function N(o,n){1&o&&(t.TgZ(0,"tr")(1,"th",37),t._uU(2,"S. No."),t._UZ(3,"p-sortIcon",38),t.qZA(),t.TgZ(4,"th",39),t._uU(5,"Job Category"),t._UZ(6,"p-sortIcon",38),t.qZA(),t.TgZ(7,"th",40),t._uU(8,"Designation Name"),t._UZ(9,"p-sortIcon",41),t.qZA(),t.TgZ(10,"th",42),t._uU(11,"Action"),t._UZ(12,"p-sortIcon",43),t.qZA()())}function L(o,n){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA()()),2&o){const e=n.$implicit;t.xp6(2),t.Oqu(e.serialNo),t.xp6(2),t.Oqu(e.category),t.xp6(2),t.Oqu(e.designation),t.xp6(2),t.Oqu(e.action)}}const G=function(){return{"min-width":"50rem"}};function k(o,n){1&o&&(t.TgZ(0,"div",33)(1,"p-table",34),t.YNc(2,N,13,0,"ng-template",35),t.YNc(3,L,9,4,"ng-template",36),t.qZA()()),2&o&&(t.xp6(1),t.Q6J("tableStyle",t.DdM(1,G)))}const Y=function(){return{width:"40vw"}};let v=(()=>{var o;class n extends u.H6{constructor(i,a,R,B,P){super(P),this.confirmService=i,this.formHelper=a,this.routerQuery=R,this.jobDesignationService=B,this.addDesignation=!1,this.showList=!1,this.country=[],this.category=[],this.designation=[]}updateDesignation(){}deleteDesignation(){}showDialog(i){this.confirmService.confirm({message:this.confirmMessage,header:this.mainheaderLabel,accept:()=>{"Add"==i?this.addJobDesignation():"Edit"==i?this.updateDesignation():"Delete"==i&&this.deleteDesignation()},reject:()=>{}})}ngOnInit(){this.country=this.routerQuery.getData()[0][l.F75.COUNTRY],this.category=this.routerQuery.getData()[0][l.F75.PROFICIENT_CATEGORY],this.designation=this.routerQuery.getData()[0][l.F75.DESIGNATION],this.jobDesignationFormGroup=this.formHelper.createDesignation(!1),this.operation=this.routerQuery.getData().mode,"ADD"===this.operation?(this.mainheaderLabel="Add Consulate Details",this.confirmMessage="Are you sure you want to Add Consulate Details?",this.addDesignation=!0,this.showList=!0):"EDIT"===this.operation?(this.mainheaderLabel=" Update Consulate Details",this.confirmMessage="Are you sure you want to Update Consulate Details?",this.addDesignation=!1,this.showList=!1):"DELETE"===this.operation?(this.mainheaderLabel="Delete Consulate Details",this.confirmMessage="Are you sure you want to Delete Consulate Details?",this.addDesignation=!1,this.showList=!1):this.mainheaderLabel="",this.jobDesignationFormGroup=this.formHelper.createDesignation(!1)}addJobDesignation(){if(this.jobDesignationFormGroup.markAllAsTouched(),this.jobDesignationFormGroup.valid){const i=Object.assign(new Z,this.formHelper.jobDesignationApiPayload(this.jobDesignationFormGroup));this.jobDesignationService.saveDesignationData(i).subscribe({next:a=>{this.showSuccessToast(a.message)}})}}}return(o=n).\u0275fac=function(i){return new(i||o)(t.Y36(m.YP),t.Y36(J),t.Y36(F.dt),t.Y36(d),t.Y36(m.ez))},o.\u0275cmp=t.Xpm({type:o,selectors:[["emigrate-job-designation"]],features:[t.qOj],decls:40,vars:19,consts:[[1,"middle_section"],[1,"container"],[1,"row"],[3,"pageTitle"],[1,"content"],[3,"instructionsText","toolTipText"],[1,"mb-0"],[1,"border","p-3"],[1,"form"],[1,"col-md-4","col-sm-6"],[1,"field"],["inputLabel","Country","inputId","country",1,"block",3,"inputFormControl"],["id","country","placeholder","Select Country",3,"formControl","options"],["inputLabel","Job Category","inputId","category",1,"block",3,"inputFormControl"],["id","category","placeholder","Select Category",3,"formControl","options"],["class","col-md-4 col-sm-6",4,"ngIf"],["inputLabel","Date of Expiry","inputId","dateOfExpiry",1,"block",3,"inputFormControl"],["appendTo","body","inputId","dateOfExpiry",3,"formControl"],[1,"col-12"],[1,"buttons","mb-3"],["type","submit","label","Add","class","btn-format btn-blue mr-2","styleClass","btn-format btn-blue mr-2",3,"click",4,"ngIf"],["type","submit","label","Update","class","btn-format btn-blue mr-2","styleClass","btn-format btn-blue mr-2",3,"click",4,"ngIf"],["type","submit","label","Delete","class","btn-format btn-blue mr-2","styleClass","btn-format btn-blue mr-2",3,"click",4,"ngIf"],["pButton","","type","submit","label","Clear",1,"btn-format","btn-blue","mr-2"],["pButton","","type","button","label","Cancel",1,"p-button-secondary","mr-2","btn-format"],["class","card table",4,"ngIf"],["inputLabel","Designation Name","inputId","designation",1,"block",3,"inputFormControl"],["id","designation","optionLabel","name","optionValue","id","placeholder","Select DesignationName",3,"formControl","options"],["inputLabel","Designation Name","inputId","designations",1,"block",3,"inputRequired","inputFormControl"],["id","designations","type","text","pInputText","","maxlength","50",3,"formControl"],["type","submit","label","Add","styleClass","btn-format btn-blue mr-2",1,"btn-format","btn-blue","mr-2",3,"click"],["type","submit","label","Update","styleClass","btn-format btn-blue mr-2",1,"btn-format","btn-blue","mr-2",3,"click"],["type","submit","label","Delete","styleClass","btn-format btn-blue mr-2",1,"btn-format","btn-blue","mr-2",3,"click"],[1,"card","table"],["styleClass","p-datatable-gridlines",3,"tableStyle","value"],["pTemplate","header"],["pTemplate","body"],["pSortableColumn","serialNo",2,"width","10%"],["field","processName"],["pSortableColumn","jobCategory",2,"width","20%"],["pSortableColumn","designation",2,"width","25%"],["field","processId"],["pSortableColumn","action",2,"width","20%"],["field","processDescription"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0),t._UZ(1,"p-toast"),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"emigrate-sh-page-title",3),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"emigrate-sh-page-instructions",5),t.TgZ(7,"h4",6),t._uU(8,"Search Criteria"),t.qZA(),t.TgZ(9,"div",7),t.ynx(10),t.TgZ(11,"div",8)(12,"form")(13,"div",2)(14,"div",9)(15,"div",10)(16,"emigrate-sh-html-input",11),t._UZ(17,"p-dropdown",12),t.qZA()()(),t.TgZ(18,"div",9)(19,"div",10)(20,"emigrate-sh-html-input",13),t._UZ(21,"p-dropdown",14),t.qZA()()(),t.YNc(22,j,4,3,"div",15),t.YNc(23,M,4,3,"div",15),t.TgZ(24,"div",9)(25,"div",10)(26,"emigrate-sh-html-input",16),t._UZ(27,"p-calendar",17),t.qZA()()()(),t._UZ(28,"div",2)(29,"div",2),t.qZA(),t.TgZ(30,"div",2)(31,"div",18)(32,"div",19),t.YNc(33,Q,1,0,"p-button",20),t.YNc(34,E,1,0,"p-button",21),t.YNc(35,w,1,0,"p-button",22),t._UZ(36,"button",23)(37,"button",24),t.qZA()()()(),t.BQk(),t.qZA()()(),t.YNc(38,k,4,2,"div",25),t.qZA(),t._UZ(39,"p-confirmDialog")),2&i&&(t.xp6(6),t.Q6J("instructionsText","1. Fields marked with * (asterisk) are mandatory.\n                         2. Please do not press F5 or back button.")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions."),t.xp6(10),t.Q6J("inputFormControl",a.jobDesignationFormGroup.controls.country),t.xp6(1),t.Q6J("formControl",a.jobDesignationFormGroup.controls.country)("options",a.country),t.xp6(3),t.Q6J("inputFormControl",a.jobDesignationFormGroup.controls.category),t.xp6(1),t.Q6J("formControl",a.jobDesignationFormGroup.controls.category)("options",a.category),t.xp6(1),t.Q6J("ngIf",!a.addDesignation),t.xp6(1),t.Q6J("ngIf",a.addDesignation),t.xp6(3),t.Q6J("inputFormControl",a.jobDesignationFormGroup.controls.effectiveDate),t.xp6(1),t.Q6J("formControl",a.jobDesignationFormGroup.controls.effectiveDate),t.xp6(6),t.Q6J("ngIf","ADD"===a.operation),t.xp6(1),t.Q6J("ngIf","EDIT"===a.operation),t.xp6(1),t.Q6J("ngIf","DELETE"===a.operation),t.xp6(3),t.Q6J("ngIf",a.showList),t.xp6(1),t.Akn(t.DdM(18,Y)))},dependencies:[c.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.oH,r.F,m.jx,T.Hq,T.zx,A.Lt,x.o,I.FN,h.iA,h.lQ,h.fz,S.f,U.Q,u.KR,u.TM,u.dB]}),n})();const _=[{path:"add",pathMatch:"full",component:v,data:{mode:"ADD"},resolve:[l.MXM]},{path:"edit",pathMatch:"full",component:v,data:{mode:"EDIT"},resolve:[l.MXM]},{path:"delete",pathMatch:"full",component:v,data:{mode:"DELETE"},resolve:[l.MXM]}];let O=(()=>{var o;class n{}return(o=n).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.Bz.forChild(_),C.Bz]}),n})();var q=s(6388),H=s(6270);let z=(()=>{var o;class n{}return(o=n).\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,O,r.UX,r.u5,q.EmigrateCommonModule,c.ez,H.g,u.uR]}),n})()}}]);