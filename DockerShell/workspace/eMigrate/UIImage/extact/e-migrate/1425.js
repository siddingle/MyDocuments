"use strict";(self.webpackChunke_migrate=self.webpackChunke_migrate||[]).push([[1425],{1425:(K,D,p)=>{p.r(D),p.d(D,{SelfRegistrationModule:()=>j});var y=p(6895),s=p(1358),i=p(4006),b=p(3599),m=p(2976),t=p(1571);let S=(()=>{var r;class a{constructor(o,e){this.fb=o,this.datePipe=e,this.otpRequired=m.Xef.OTPREQUIRED}createEmigrantSingleForm(o){return this.fb.group({emigrateSingleDetails:this.fb.group({firstname:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.fullNameValidator()])),lastname:this.fb.control({value:null,disabled:o},i.kI.compose([s.YO.fullNameValidator()])),passportno:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.passportNumberValidator()])),captcha:this.fb.control("",i.kI.required)})})}emigrantSelfDetailsForm(o){return this.fb.group({emigrantOverseasDetails:this.fb.group({firstName:this.fb.control({value:null,disabled:!0},i.kI.compose([i.kI.required,s.YO.fullNameValidator()])),lastName:this.fb.control({value:null,disabled:!0},i.kI.compose([i.kI.required,s.YO.fullNameValidator()])),gender:this.fb.control("",i.kI.required),passportNo:this.fb.control({value:null,disabled:!0},i.kI.compose([i.kI.required,s.YO.passportNumberValidator()])),emailid:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.emailValidator()])),stateOfResidence:this.fb.control("",i.kI.required),district:this.fb.control("",i.kI.required),educationalQualification:this.fb.control("",i.kI.required),mobileNo:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.mobileNumberValidator()]))}),visaTravelDetails:this.fb.group({destinationCountry:this.fb.control("",i.kI.required),purposeOfVisit:this.fb.control("",i.kI.required),visaNumber:this.fb.control("",i.kI.compose([i.kI.required,s.YO.alphaNumericValidator()])),travelDate:this.fb.control("",i.kI.required),workCategory:this.fb.control("",i.kI.required),raName:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.fullNameValidator()])),raAddress:this.fb.control("",[i.kI.compose([i.kI.required,s.YO.addressValidator()])]),raMobileNo:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.mobileNumberValidator()]))}),contactDetails:this.fb.group({mobileNumber:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.mobileNumberValidator()])),nameOfPerson:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.fullNameValidator()])),addressOfPerson:this.fb.control("",[i.kI.compose([i.kI.required,s.YO.addressValidator()])])}),forginEmployerDetails:this.fb.group({nameofOrganisation:this.fb.control({value:null,disabled:o},i.kI.compose([i.kI.required,s.YO.characterValidator()])),nameofContactPerson:this.fb.control({value:null,disabled:o},i.kI.compose([s.YO.fullNameValidator()])),contactNumber:this.fb.control({value:null,disabled:o},i.kI.compose([s.YO.intMobileNumberValidator()])),mailingAddress:this.fb.control("",[i.kI.compose([s.YO.addressValidator()])]),mailingAddress1:this.fb.control("",[i.kI.compose([s.YO.addressValidator()])]),emailId:this.fb.control({value:null,disabled:o},i.kI.compose([s.YO.emailValidator]))})})}createSelfRegistrationOtpForm(o){return this.fb.group({otpDetails:this.fb.group({otp:this.fb.control({value:null,disabled:o},i.kI.required)})})}emigrateSelfDetailsValue(o){const e=o.getRawValue();return(new m.wGm).deserialize({firstname:e.emigrateSingleDetails?.firstname,lastname:e.emigrateSingleDetails?.lastname,passportno:e.emigrateSingleDetails?.passportno})}selfRegistrationTabDetailsValue(o){const e=o.getRawValue();return(new m.lTD).deserialize({firstName:e.emigrantOverseasDetails?.firstName,lastName:e.emigrantOverseasDetails?.lastName,gender:e.emigrantOverseasDetails?.gender,passportNumber:e.emigrantOverseasDetails?.passportNo,emailId:e.emigrantOverseasDetails?.emailid,stateOfResidence:e.emigrantOverseasDetails?.stateOfResidence,district:e.emigrantOverseasDetails?.district,educationalQualification:e.emigrantOverseasDetails?.educationalQualification,mobileNumber:e.emigrantOverseasDetails?.mobileNo,destinationCountry:e.visaTravelDetails?.destinationCountry,purposeOfVisit:e.visaTravelDetails?.purposeOfVisit,visaNumber:e.visaTravelDetails?.visaNumber,travelDate:e.visaTravelDetails?.travelDate?this.datePipe.transform(e.visaTravelDetails?.travelDate,"yyyy-MM-dd"):null,workCategory:e.visaTravelDetails?.workCategory,immigrationConsultant:e.visaTravelDetails?.raName,addressOfImmigrationConsultant:e.visaTravelDetails?.raAddress,raMobileNo:e.visaTravelDetails?.raMobileNo,mobileNoIndia:e.contactDetails?.mobileNumber,nameOfPersonInIndia:e.contactDetails?.nameOfPerson,addressOfPersonInIndia:e.contactDetails?.addressOfPerson,employerName:e.forginEmployerDetails?.nameofOrganisation,contactPersonName:e.forginEmployerDetails?.nameofContactPerson,contactNumber:e.forginEmployerDetails?.contactNumber,addressLine1:e.forginEmployerDetails?.mailingAddress,addressLine2:e.forginEmployerDetails?.mailingAddress1,contactPersonEmailId:e.forginEmployerDetails?.emailId,otpRequired:this.otpRequired})}otpselfRegistration(o,e){const l=o.getRawValue();return(new m.Kje).deserialize({email:l.emailid,otp:e})}}return(r=a).\u0275fac=function(o){return new(o||r)(t.LFG(i.qu),t.LFG(y.uU))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),a})();var c,G=p(5861),g=p(655),F=p(8505),f=p(262),O=p(3900),h=p(8513);class u{constructor(a,n){this.slefRegistrationDetailsService=a,this.locationService=n}validateEmigrateDetails(a){return this.slefRegistrationDetailsService.validateEmigrate(a).pipe((0,F.b)(n=>{}),(0,f.K)(n=>{throw n}))}validateOtp(a){return this.slefRegistrationDetailsService.validateSelfOtp(a).pipe((0,F.b)(n=>{}),(0,f.K)(n=>{throw n}))}resendOTP(a){return this.slefRegistrationDetailsService.resendOTP(a).pipe((0,F.b)(n=>{}),(0,f.K)(n=>{throw n}))}validateEmigrateSelfRegistration(a){return this.slefRegistrationDetailsService.validateEmigrateSelf(a).pipe((0,F.b)(n=>{}),(0,f.K)(n=>{throw n}))}fetchDistrict(a){return this.locationService.fetchDistrict(a).pipe((0,O.w)(function(){var n=(0,G.Z)(function*(o){return o});return function(o){return n.apply(this,arguments)}}()),(0,f.K)(n=>{throw n}))}}(c=u).\u0275fac=function(a){return new(a||c)(t.LFG(m.DeZ),t.LFG(m.aUv))},c.\u0275prov=t.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),(0,g.gn)([(0,h.PS)()],u.prototype,"validateEmigrateDetails",null),(0,g.gn)([(0,h.PS)()],u.prototype,"validateOtp",null),(0,g.gn)([(0,h.PS)()],u.prototype,"resendOTP",null),(0,g.gn)([(0,h.PS)()],u.prototype,"validateEmigrateSelfRegistration",null),(0,g.gn)([(0,h.PS)()],u.prototype,"fetchDistrict",null);var C=p(805),N=p(6945),T=p(5593),J=p(2453),v=p(1740);let R=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-contact-details-in-india"]],inputs:{entityFormGroup:"entityFormGroup"},decls:13,vars:6,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","6","inputLabel","1. Name","inputId","nameAddress",1,"block",3,"inputFormControl"],["id","nameOfPerson","maxlength","200","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","2. Address","inputId","nameAddress",1,"block",3,"inputFormControl"],["id","addressOfPerson","maxlength","200","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","3. Mobile Number","inputId","mobileno",1,"block",3,"inputFormControl"],["id","mobileno","type","number","pInputText","","placeholder","Mobile Number",3,"formControl"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"input",8),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.nameOfPerson),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.nameOfPerson),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.addressOfPerson),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.addressOfPerson),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.mobileNumber),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.mobileNumber))},dependencies:[i.Fj,i.wV,i.JJ,i.nD,i.oH,s.KR,v.o]}),a})(),E=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-details-of-foregin-empolyer"]],inputs:{entityFormGroup:"entityFormGroup"},decls:25,vars:12,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","6","inputLabel","1. Name of Organisation/Employer","inputId","nameofOrganisation",1,"block",3,"inputFormControl"],["id","nameofOrganisation","type","text","maxlength","200","pInputText","",3,"formControl"],["for","6","inputLabel","2. Name of Contact Person","inputId","nameofContactPerson",1,"block",3,"inputFormControl"],["id","nameofContactPerson","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","3. Contact Number","inputId","contactnumber",1,"block",3,"inputFormControl"],["id","contactnumber","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","4. Address Line1","inputId","addressline1",1,"block",3,"inputFormControl"],["id","addressline1","maxlength","200","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","5. Address Line2","inputId","addressline2",1,"block",3,"inputFormControl"],["id","addressline2","maxlength","200","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","5. Email Id of Contact Person","inputId","emailId",1,"block",3,"inputFormControl"],["id","emailId","maxlength","100","type","text","pInputText","",3,"formControl"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"input",8),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"emigrate-sh-html-input",9),t._UZ(16,"input",10),t.qZA()()(),t.TgZ(17,"div",1)(18,"div",2)(19,"emigrate-sh-html-input",11),t._UZ(20,"input",12),t.qZA()()(),t.TgZ(21,"div",1)(22,"div",2)(23,"emigrate-sh-html-input",13),t._UZ(24,"input",14),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.nameofOrganisation),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.nameofOrganisation),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.nameofContactPerson),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.nameofContactPerson),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.contactNumber),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.contactNumber),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.mailingAddress),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.mailingAddress),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.mailingAddress1),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.mailingAddress1),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.emailId),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.emailId))},dependencies:[i.Fj,i.JJ,i.nD,i.oH,s.KR,v.o]}),a})();var I=p(1754),Z=p(2210),Q=p(613);let x=(()=>{var r;class a{constructor(o,e,l){this.routerQuery=o,this.selfRegistrationService=l,this.state=[],this.district=[],this.gender=[],this.education=[]}ngOnInit(){this.subscribeToFormValueChanges(),this.entityFormGroup.controls.firstName.patchValue(this.emigrateprefilledres.firstName),this.entityFormGroup.controls.lastName.patchValue(this.emigrateprefilledres.lastName),this.entityFormGroup.controls.passportNo.patchValue(this.emigrateprefilledres.passportNumber),this.masterData=this.routerQuery.getData(),this.state=this.masterData[0][m.kWm.STATE],this.gender=this.masterData[0][m.kWm.GENDER],this.education=this.masterData[0][m.kWm.QUALIFICATION]}subscribeToFormValueChanges(){this.entityFormGroup.controls.stateOfResidence.valueChanges.subscribe(o=>{const e=Number(o);e&&this.selfRegistrationService.fetchDistrict(e).subscribe({next:l=>{this.district=l.length>0?l:[]},error:()=>{},complete:()=>{}})})}}return(r=a).\u0275fac=function(o){return new(o||r)(t.Y36(I.dt),t.Y36(C.ez),t.Y36(u))},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-details-of-overseas"]],inputs:{entityFormGroup:"entityFormGroup",masterData:"masterData",emigrateprefilledres:"emigrateprefilledres"},decls:40,vars:26,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputId","firstname","inputLabel","1. Given Name (as on Passport)",1,"block",3,"inputFormControl"],["readonly","","id","firstname","type","text","pInputText","",3,"formControl"],["for","1","inputId","lastname","inputLabel","2. Last Name (as on Passport)",1,"block",3,"inputFormControl"],["id","lastname","type","text","pInputText","",3,"formControl"],["inputLabel","3. Gender","inputId","",1,"block",3,"inputFormControl"],[1,"d-flex","align-items-center"],["name","gender","inputId","1",1,"mr-40",3,"formControl","label","value"],["name","gender","inputId","2",3,"formControl","label","value"],["for","1","inputId","passportNumber","inputLabel","4. Passport Number",1,"block",3,"inputFormControl"],["id","passportNumber","type","text","pInputText","","placeholder","Passport Number",3,"formControl"],["for","6","inputLabel","5. Email Id","inputId","emailId",1,"block",3,"inputFormControl"],["id","emailId","type","text","pInputText","",3,"formControl"],["for","13","inputLabel","6. State of Residence","inputId","State",1,"block",3,"inputFormControl"],["id","state","placeholder","Select State","EmigrateShDropdown","",3,"formControl","options"],["for","13","inputLabel","7. District","inputId","District",1,"block",3,"inputFormControl"],["id","District","placeholder","Select District","EmigrateShDropdown","",3,"formControl","options"],["for","13","inputLabel","8. Educational Qualification","inputId","educationalQualification ",1,"block",3,"inputFormControl"],["id","educationalQualification","placeholder","Select","EmigrateShDropdown","",3,"formControl","options"],["for","6","inputLabel","9. Mobile No.","inputId","mobileno",1,"block",3,"inputFormControl"],["id","mobileno","type","number","pInputText","","placeholder","Mobile No.",3,"formControl"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"emigrate-sh-html-input",7)(11,"div",8)(12,"span"),t._UZ(13,"p-radioButton",9),t.qZA(),t.TgZ(14,"span"),t._UZ(15,"p-radioButton",10),t.qZA()()()(),t.TgZ(16,"div",1)(17,"div",2)(18,"emigrate-sh-html-input",11),t._UZ(19,"input",12),t.qZA()()(),t.TgZ(20,"div",1)(21,"div",2)(22,"emigrate-sh-html-input",13),t._UZ(23,"input",14),t.qZA()()(),t.TgZ(24,"div",1)(25,"div",2)(26,"emigrate-sh-html-input",15),t._UZ(27,"p-dropdown",16),t.qZA()()(),t.TgZ(28,"div",1)(29,"div",2)(30,"emigrate-sh-html-input",17),t._UZ(31,"p-dropdown",18),t.qZA()()(),t.TgZ(32,"div",1)(33,"div",2)(34,"emigrate-sh-html-input",19),t._UZ(35,"p-dropdown",20),t.qZA()()(),t.TgZ(36,"div",1)(37,"div",2)(38,"emigrate-sh-html-input",21),t._UZ(39,"input",22),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.firstName),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.firstName),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.lastName),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.lastName),t.xp6(2),t.Q6J("inputFormControl",e.entityFormGroup.controls.gender),t.xp6(3),t.Q6J("formControl",e.entityFormGroup.controls.gender)("label","Male")("value",1),t.xp6(2),t.Q6J("formControl",e.entityFormGroup.controls.gender)("label","Female")("value",2),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.passportNo),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.passportNo),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.emailid),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.emailid),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.stateOfResidence),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.stateOfResidence)("options",e.state),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.district),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.district)("options",e.district),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.educationalQualification),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.educationalQualification)("options",e.education),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.mobileNo),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.mobileNo))},dependencies:[i.Fj,i.wV,i.JJ,i.oH,s.KR,s.lC,Z.Lt,v.o,Q.EU]}),a})();var A=p(8645);let k=(()=>{var r;class a extends s.H6{constructor(o,e){super(e),this.routerQuery=o,this.minimumDate=new Date,this.country=[],this.workCategory=[],this.visit=[{label:"Employment",value:"Employment"},{label:"Study",value:"Study"},{label:"Business Visit",value:"Business Visit"},{label:"Short term Entry",value:"Short term Entry"},{label:"Others",value:"Others"}]}ngOnInit(){this.masterData=this.routerQuery.getData(),this.country=this.masterData[0][m.kWm.COUNTRY],this.workCategory=this.masterData[0][m.kWm.JOB_ROLE],this.removeIndiaFromCountryArr(this.country)}removeIndiaFromCountryArr(o){o.length&&o.splice(o.findIndex(e=>"INDIA"===e.label.toUpperCase()),1)}}return(r=a).\u0275fac=function(o){return new(o||r)(t.Y36(I.dt),t.Y36(C.ez))},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-visa-and-travel-details"]],inputs:{entityFormGroup:"entityFormGroup",masterData:"masterData"},features:[t.qOj],decls:33,vars:21,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","13","inputLabel","1. Destination Country","inputId","Country",1,"block",3,"inputFormControl"],["id","Country","placeholder","Select Country","EmigrateShDropdown","",3,"formControl","options"],["for","13","inputLabel","2. Purpose of Visit","inputId"," Purposeofvisit",1,"block",3,"inputFormControl"],["id","Purposeofvisit","placeholder","Select","EmigrateShDropdown","",3,"formControl","options"],["for","6","inputLabel","3. Visa Number","inputId","visaNo",1,"block",3,"inputFormControl"],["id","visaNo","maxlength","15","type","text","pInputText","",3,"formControl"],["for","6","inputLabel","4. Travel Date","inputId","traveldate",1,"block",3,"inputFormControl"],["appendTo","body","inputId","traveldate",3,"minDate","dateFormat","formControl"],["for","6","inputLabel","5. Profession/Work Category","inputId"," professioncategory",1,"block",3,"inputFormControl"],["id","professioncategory","placeholder","Select","EmigrateShDropdown","",3,"formControl","options"],["for","6","inputLabel","6. Name of Recruiting Agent/Immigration Consultant","inputId","raName",1,"block",3,"inputFormControl"],["id","raName","type","text","maxlength","200","pInputText","",3,"formControl"],["for","6","inputLabel","7. Address of Recruiting Agent/Immigration Consultant","inputId","raAddress",1,"block",3,"inputFormControl"],["id","raAddress","type","text","maxlength","200","pInputText","",3,"formControl"],["for","6","inputLabel","8. Mobile Number of Recruiting Agent/Immigration Consultant","inputId","raMobileNo",1,"block",3,"inputFormControl"],["id","raMobileNo","type","text","pInputText","",3,"formControl"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"p-dropdown",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"p-dropdown",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"input",8),t.qZA()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"emigrate-sh-html-input",9),t._UZ(16,"p-calendar",10),t.qZA()()(),t.TgZ(17,"div",1)(18,"div",2)(19,"emigrate-sh-html-input",11),t._UZ(20,"p-dropdown",12),t.qZA()()(),t.TgZ(21,"div",1)(22,"div",2)(23,"emigrate-sh-html-input",13),t._UZ(24,"input",14),t.qZA()()(),t.TgZ(25,"div",1)(26,"div",2)(27,"emigrate-sh-html-input",15),t._UZ(28,"input",16),t.qZA()()(),t.TgZ(29,"div",1)(30,"div",2)(31,"emigrate-sh-html-input",17),t._UZ(32,"input",18),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.destinationCountry),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.destinationCountry)("options",e.country),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.purposeOfVisit),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.purposeOfVisit)("options",e.visit),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.visaNumber),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.visaNumber),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.travelDate),t.xp6(1),t.Q6J("minDate",e.minimumDate)("dateFormat",e.defaultDateFormat)("formControl",e.entityFormGroup.controls.travelDate),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.purposeOfVisit),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.workCategory)("options",e.workCategory),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.raName),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.raName),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.raAddress),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.raAddress),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.raMobileNo),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.raMobileNo))},dependencies:[i.Fj,i.JJ,i.nD,i.oH,s.KR,s.lC,Z.Lt,v.o,A.f]}),a})(),w=(()=>{var r;class a{constructor(o,e,l,d){this.router=o,this.formHelper=e,this.selfRegistrationService=l,this.messageService=d,this.registrationOtpDetails=new t.vpe,this.arn=new t.vpe}ngOnInit(){this.initForm()}initForm(){}saveDetails(){if(this.EmigrantSelfDetailFormGroup.markAllAsTouched(),this.EmigrantSelfDetailFormGroup.valid){const o=Object.assign(new m.lTD,this.formHelper.selfRegistrationTabDetailsValue(this.EmigrantSelfDetailFormGroup));this.selfRegistrationService.validateEmigrateSelfRegistration(o).subscribe({next:e=>{this.showSuccessToast(e.message),this.arn.emit(e.data.arn),this.registrationOtpDetails.emit(!0)},error:e=>{this.showErrorToast(e.error.error.errorMessage)},complete:()=>{}})}else this.showErrorToast("Please fill all required fields.")}showErrorToast(o){this.messageService.add({severity:"error",summary:"Self Registration",detail:o})}showSuccessToast(o){this.messageService.add({severity:"success",summary:"Self Registration",detail:o})}get overseasDetailFormGroup(){return this.EmigrantSelfDetailFormGroup.controls.emigrantOverseasDetails}get visaDetailFormGroup(){return this.EmigrantSelfDetailFormGroup.controls.visaTravelDetails}get contactDetailFormGroup(){return this.EmigrantSelfDetailFormGroup.controls.contactDetails}get forignEmpolyerDetailFormGroup(){return this.EmigrantSelfDetailFormGroup.controls.forginEmployerDetails}resetForm(){this.EmigrantSelfDetailFormGroup.reset()}}return(r=a).\u0275fac=function(o){return new(o||r)(t.Y36(b.F0),t.Y36(S),t.Y36(u),t.Y36(C.ez))},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-self-registration-emigrant-details"]],inputs:{EmigrantSelfDetailFormGroup:"EmigrantSelfDetailFormGroup",emigrantPrefilData:"emigrantPrefilData"},outputs:{registrationOtpDetails:"registrationOtpDetails",arn:"arn"},decls:20,vars:12,consts:[[3,"formGroup"],[1,"content"],[3,"pageSubTitle"],[1,"form"],[1,"row"],[3,"entityFormGroup","emigrateprefilledres"],[3,"entityFormGroup"],[3,"pageNote","pageNoteContent"],[1,"col-12"],[1,"buttons"],["pButton","","type","submit","label","Submit",1,"btn-format","btn-blue",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"form",0)(1,"div",1),t._UZ(2,"emigrate-sh-page-sub-title",2),t.TgZ(3,"div",3)(4,"div",4),t._UZ(5,"emigrate-details-of-overseas",5),t.qZA(),t._UZ(6,"emigrate-sh-page-sub-title",2),t.TgZ(7,"div",4),t._UZ(8,"emigrate-visa-and-travel-details",6),t.qZA(),t._UZ(9,"emigrate-sh-page-sub-title",2),t.TgZ(10,"div",4),t._UZ(11,"emigrate-contact-details-in-india",6),t.qZA(),t._UZ(12,"emigrate-sh-page-sub-title",2),t.TgZ(13,"div",4),t._UZ(14,"emigrate-details-of-foregin-empolyer",6),t.qZA(),t._UZ(15,"emigrate-sh-page-note",7),t.qZA(),t.TgZ(16,"div",4)(17,"div",8)(18,"div",9)(19,"button",10),t.NdJ("click",function(){return e.saveDetails()}),t.qZA()()()()()()),2&o&&(t.Q6J("formGroup",e.EmigrantSelfDetailFormGroup),t.xp6(2),t.Q6J("pageSubTitle","Details of Emigrants going overseas "),t.xp6(3),t.Q6J("entityFormGroup",e.overseasDetailFormGroup)("emigrateprefilledres",e.emigrantPrefilData),t.xp6(1),t.Q6J("pageSubTitle","Visa and Travel Details "),t.xp6(2),t.Q6J("entityFormGroup",e.visaDetailFormGroup),t.xp6(1),t.Q6J("pageSubTitle","Contact Details in India "),t.xp6(2),t.Q6J("entityFormGroup",e.contactDetailFormGroup),t.xp6(1),t.Q6J("pageSubTitle","Details of Foreign Employer/Sponsor in the Destination Country "),t.xp6(2),t.Q6J("entityFormGroup",e.forignEmpolyerDetailFormGroup),t.xp6(1),t.Q6J("pageNote","Note")("pageNoteContent","All communication from e-Migrate system will be made over your operational office mail id ( which you have provided above ). An OTP will be sent to you on the mail id provided above, please use this OTP for proceeding further with your registration form."))},dependencies:[i._Y,i.JL,i.sg,s.jZ,s.GN,T.Hq,R,E,x,k]}),a})(),_=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-registration-emigrant-details"]],inputs:{entityFormGroup:"entityFormGroup"},decls:15,vars:7,consts:[[1,"row"],[1,"col-md-4","col-sm-6"],[1,"field"],["for","1","inputId","firstName","inputLabel","1. Given Name (as on passport)",1,"block",3,"inputFormControl"],["id","firstName","type","text","pInputText","",3,"formControl"],["for","1","inputId","lastName","inputLabel","2. Last Name (as on passport)",1,"block",3,"inputFormControl"],["id","lastName","type","text","pInputText","",3,"formControl"],["for","1","inputId","passportNumber","inputLabel","3. Passport Number",1,"block",3,"inputFormControl"],["id","passportNumber","type","text","pInputText","",3,"formControl"],[3,"entityFormGroup"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"emigrate-sh-html-input",3),t._UZ(4,"input",4),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",2)(7,"emigrate-sh-html-input",5),t._UZ(8,"input",6),t.qZA()()(),t.TgZ(9,"div",1)(10,"div",2)(11,"emigrate-sh-html-input",7),t._UZ(12,"input",8),t.qZA()()(),t.TgZ(13,"div",1),t._UZ(14,"emigrate-sh-recaptcha",9),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.firstname),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.firstname),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.lastname),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.lastname),t.xp6(3),t.Q6J("inputFormControl",e.entityFormGroup.controls.passportno),t.xp6(1),t.Q6J("formControl",e.entityFormGroup.controls.passportno),t.xp6(2),t.Q6J("entityFormGroup",e.entityFormGroup))},dependencies:[i.Fj,i.JJ,i.oH,s.KR,s.wT,v.o]}),a})(),U=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-self-registration-success"]],inputs:{arn:"arn"},decls:11,vars:2,consts:[[1,"content"],[1,"row"],[3,"pageSubTitle"],[2,"line-height","24px"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"emigrate-sh-page-sub-title",2),t.qZA(),t.TgZ(3,"p",3),t._uU(4," Your details have been submitted and passport details are under validation."),t._UZ(5,"br"),t._uU(6),t._UZ(7,"br"),t._uU(8," In case of any query please contact the "),t.TgZ(9,"b"),t._uU(10,"helpline +91-011-26885021"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("pageSubTitle","Registration from submitted successfully"),t.xp6(4),t.hij(" Your Application Reference Number is ",e.arn,".You can check your details using 'Track Application Status' from www.emigrate.gov.in"))},dependencies:[s.jZ]}),a})();function q(r,a){if(1&r){const n=t.EpF();t.ynx(0),t._UZ(1,"emigrate-sh-page-sub-title",10),t.TgZ(2,"div",11)(3,"div",12),t._UZ(4,"emigrate-registration-emigrant-details",13),t.qZA(),t._UZ(5,"emigrate-sh-page-note",14),t.qZA(),t.TgZ(6,"div",2)(7,"div",15)(8,"div",16)(9,"button",17),t.NdJ("click",function(){t.CHM(n);const e=t.oxw();return t.KtG(e.savePassport())}),t.qZA()()()(),t.BQk()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("pageSubTitle","Emigrant Details"),t.xp6(3),t.Q6J("entityFormGroup",n.emigrantSingleDetailsFormGroup),t.xp6(1),t.Q6J("pageNote","Note")("pageNoteContent","All communication from e-Migrate system will be made over your operational office mail id ( which you have provided above ). An OTP will be sent to you on the mail id provided above, please use this OTP for proceeding further with your registration form.")}}function P(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div",7)(1,"emigrate-self-registration-emigrant-details",18),t.NdJ("registrationOtpDetails",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.registrationOtp(e))})("arn",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.getArn(e))}),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("emigrantPrefilData",n.emigrateResult)("EmigrantSelfDetailFormGroup",n.EmigrantSelfDetailFormGroup)}}function V(r,a){if(1&r){const n=t.EpF();t.TgZ(0,"div",7)(1,"emigrate-sh-otp-verification",19),t.NdJ("verifiedOtp",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.registrationOtpsuccess(e))})("resendingOtp",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.registrationReSendOtp(e))})("cancel",function(e){t.CHM(n);const l=t.oxw();return t.KtG(l.cancelOtp(e))}),t.qZA()()}if(2&r){const n=t.oxw();t.xp6(1),t.Q6J("entityFormGroup",n.otpDetailsFormGroup)("inputFormControlName",n.otpDetailsFormGroup.controls.otp)}}function Y(r,a){if(1&r&&(t.TgZ(0,"div",7),t._UZ(1,"emigrate-self-registration-success",20),t.qZA()),2&r){const n=t.oxw();t.xp6(1),t.Q6J("arn",n.arn)}}const L=[{path:"self",pathMatch:"full",component:(()=>{var r;class a extends s.H6{constructor(o,e,l,d,B){super(d),this.router=o,this.formHelper=e,this.selfRegidtrationService=l,this.uiService=B,this.passportDetails=!0,this.registrationDetails=!1,this.registrationOtpDetails=!1,this.registrationSuccess=!1,this.isOtpValidated=!1}ngOnInit(){this.EmigrantSingleFormGroup=this.formHelper.createEmigrantSingleForm(!1),this.EmigrantSelfDetailFormGroup=this.formHelper.emigrantSelfDetailsForm(!1),this.EmigrantSelfOtpFormGroup=this.formHelper.createSelfRegistrationOtpForm(!1)}savePassport(){if(this.EmigrantSingleFormGroup.markAllAsTouched(),this.EmigrantSingleFormGroup.valid){this.EmigrantSingleFormGroup.getRawValue();const e=Object.assign(new m.V_8,this.formHelper.emigrateSelfDetailsValue(this.EmigrantSingleFormGroup));this.selfRegidtrationService.validateEmigrateDetails(e).subscribe({next:l=>{this.emigrateResult=l.data,this.EmigrantSelfDetailFormGroup=this.formHelper.emigrantSelfDetailsForm(!1),this.showSuccessToast(l.message,"emigrate"),this.passportDetails=!1,this.registrationDetails=!0},error:l=>{this.showErrorToast(l.error.error.errorMessage),this.passportDetails=!0,this.registrationDetails=!1},complete:()=>{}})}else this.showErrorToast("Please fill all required fields.")}redirectToHome(){this.router.navigate(["/"])}reset(){this.ngOnInit()}getArn(o){this.arn=o}registrationOtp(o){this.passportDetails=!1,this.registrationDetails=!1,this.registrationOtpDetails=!0}registrationReSendOtp(o){if(o){const l={email:this.overseasDetailFormGroup.getRawValue().emailid};this.selfRegidtrationService.resendOTP(l).subscribe({next:d=>{this.passportDetails=!1,this.registrationDetails=!1,this.registrationOtpDetails=!0,this.uiService.hideSpinner(),this.showSuccessToast(d.message),setTimeout(()=>{},2e3)},error:d=>{this.uiService.hideSpinner(),this.showErrorToast(d.message)},complete:()=>{this.uiService.hideSpinner()}})}}registrationOtpsuccess(o){let e=Object.assign(new m.CQT,this.formHelper.otpselfRegistration(this.overseasDetailFormGroup,o.otp));this.selfRegidtrationService.validateOtp(e).subscribe({next:l=>{l.status.toLowerCase()===m.Xef.SUCCESS.toLowerCase()?(this.showSuccessToast(l.message),this.passportDetails=!1,this.registrationDetails=!1,this.registrationOtpDetails=!1,this.registrationSuccess=!0,this.isOtpValidated=!0,this.uiService.hideSpinner()):(this.showErrorToast(l.message),this.uiService.hideSpinner(),this.isOtpValidated=!1)},error:l=>{this.showErrorToast(l.error.message),this.uiService.hideSpinner(),this.isOtpValidated=!1},complete:()=>{this.uiService.hideSpinner()}})}cancelOtp(o){this.router.navigateByUrl(this.user?"/admin/dashboard":"/")}get emigrantSingleDetailsFormGroup(){return this.EmigrantSingleFormGroup.controls.emigrateSingleDetails}get overseasDetailFormGroup(){return this.EmigrantSelfDetailFormGroup.controls.emigrantOverseasDetails}get otpDetailsFormGroup(){return this.EmigrantSelfOtpFormGroup.controls.otpDetails}}return(r=a).\u0275fac=function(o){return new(o||r)(t.Y36(b.F0),t.Y36(S),t.Y36(u),t.Y36(C.ez),t.Y36(N.n))},r.\u0275cmp=t.Xpm({type:r,selectors:[["emigrate-registration-self"]],features:[t.qOj],decls:13,vars:8,consts:[[1,"middle_section"],[1,"container"],[1,"row"],[3,"pageTitle"],[1,"border","p-3"],[3,"instructionsText","toolTipText"],[3,"formGroup"],[1,"content"],[4,"ngIf"],["class","content",4,"ngIf"],[3,"pageSubTitle"],[1,"form"],[1,"row","mb-3"],[3,"entityFormGroup"],[3,"pageNote","pageNoteContent"],[1,"col-12"],[1,"buttons"],["pButton","","type","submit","label","Validate",1,"btn-format","btn-blue",3,"click"],[3,"emigrantPrefilData","EmigrantSelfDetailFormGroup","registrationOtpDetails","arn"],["subTitleName","Please enter the OTP sent to your registered Email id",3,"entityFormGroup","inputFormControlName","verifiedOtp","resendingOtp","cancel"],[3,"arn"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"p-toast"),t.TgZ(2,"div",1)(3,"div",2),t._UZ(4,"emigrate-sh-page-title",3),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"emigrate-sh-page-instructions",5),t.TgZ(7,"form",6)(8,"div",7),t.YNc(9,q,10,4,"ng-container",8),t.qZA()(),t.YNc(10,P,2,2,"div",9),t.YNc(11,V,2,2,"div",9),t.YNc(12,Y,2,1,"div",9),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("pageTitle","Self Registration by Emigrants/ Online Purchase of PBBY Policy  "),t.xp6(2),t.Q6J("instructionsText","Fields marked with * (asterisk) are mandatory. To avoid mistakes,\nplease refer guidelines & instructions")("toolTipText","1. Fields marked with * (asterisk) are mandatory. To avoid mistakes, please refer guidelines & instructions."),t.xp6(1),t.Q6J("formGroup",e.EmigrantSingleFormGroup),t.xp6(2),t.Q6J("ngIf",e.passportDetails),t.xp6(1),t.Q6J("ngIf",e.registrationDetails),t.xp6(1),t.Q6J("ngIf",e.registrationOtpDetails&&!e.isOtpValidated),t.xp6(1),t.Q6J("ngIf",e.registrationSuccess&&e.isOtpValidated))},dependencies:[y.O5,i._Y,i.JL,i.sg,s.n0,s.TM,s.jZ,s.dB,s.GN,T.Hq,J.FN,w,_,U]}),a})(),resolve:[m.tpM]}];let M=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[b.Bz.forChild(L),b.Bz]}),a})();var H=p(6270);let j=(()=>{var r;class a{}return(r=a).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[y.ez,i.UX,s.uR,i.u5,M,H.g]}),a})()}}]);