(this["webpackJsonpregister-form-wizard"]=this["webpackJsonpregister-form-wizard"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/Blank-Profile-Icon.e32bba19.jpg"},,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t.n(l),m=(t(15),t(16),t(3)),c=t(4),s=t(5),i=t(9),u=t(7),d=function(e){var a=e.onPrevStep,t=e.onNextStep,n=e.step,l=e.onConfirmForm,o=e.confirmed;return 4===n?r.a.createElement("div",{className:"d-flex justify-content-around mt-2"},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-block btn-sm mt-1",onClick:a,disabled:1===n},"Prev"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block btn-sm mt-1 ml-1",onClick:function(){return l()},disabled:o},o?"Confirmed":"Confirm")):r.a.createElement("div",{className:"d-flex justify-content-around mt-2"},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-block btn-sm mt-1",onClick:a,disabled:1===n},"Prev"),r.a.createElement("button",{type:"submit",className:"btn btn-secondary btn-block btn-sm mt-1 ml-1",onClick:t},"Next"))},p=function(e){var a=e.page,t=e.confirmed;return r.a.createElement("div",{className:"col-8 w-50"},r.a.createElement("ul",{className:"progressbar"},r.a.createElement("li",{className:a>1?"active":null},"Step 1"),r.a.createElement("li",{className:a>2?"active":null},"Step 2"),r.a.createElement("li",{className:a>3?"active":null},"Step 3"),r.a.createElement("li",{className:t?"active":null},"Step 4")))},f=function(e){var a=e.id,t=e.label,n=e.type,l=e.name,o=e.placeholder,m=e.value,c=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group form-group-sm m-1"},r.a.createElement("label",{htmlFor:a,className:"m-1"},t),r.a.createElement("input",{type:n,className:s?"form-control form-control-sm is-invalid":"form-control form-control-sm",id:a,name:l,placeholder:o,value:m,onChange:c}),s?r.a.createElement("small",{id:a,className:"form-text text-danger"},s):null)};function v(e){var a=e.firstName,t=e.lastName,n=e.password,l=e.repeatPassword,o=e.gender,m=e.onChangeInput,c=e.errors;return r.a.createElement("div",null,r.a.createElement(f,{type:"text",id:"firstName",name:"firstName",label:"FirstName",placeholder:"Firstname",value:a,onChange:m,error:c.firstName}),r.a.createElement(f,{type:"text",id:"lastName",name:"lastName",label:"LastName",placeholder:"Lastname",value:t,onChange:m,error:c.lastName}),r.a.createElement(f,{type:"password",id:"password",name:"password",label:"Password",placeholder:"Password",value:n,onChange:m,error:c.password}),r.a.createElement(f,{type:"password",id:"repeatPassword",name:"repeatPassword",label:"Repeat password",placeholder:"Repeat password",value:l,onChange:m,error:c.repeatPassword}),r.a.createElement("div",null,r.a.createElement("label",{className:"mb-0 mt-1"},"Gender")),r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input",type:"radio",id:"genderMale",name:"gender",value:"male",checked:"male"===o,onChange:m}),r.a.createElement("label",{className:"form-check-label",htmlFor:"genderMale"},"Male")),r.a.createElement("div",{className:"form-check form-check-sm"},r.a.createElement("input",{className:"form-check-input ",type:"radio",id:"genderFemale",name:"gender",value:"female",checked:"female"===o,onChange:m}),r.a.createElement("label",{className:"form-check-label",htmlFor:"genderFemale"},"Female")))}var b=t(8),y=[{id:1,name:"Ukraine"},{id:2,name:"Germany"},{id:3,name:"France"},{id:4,name:"Spain"},{id:5,name:"USA"}],h={1:{country:1,name:"Kyiv"},2:{country:1,name:"Lviv"},3:{country:1,name:"Odessa"},4:{country:1,name:"Dnipro"},5:{country:1,name:"Kharkiv"},6:{country:2,name:"Berlin"},7:{country:2,name:"Dortmund"},8:{country:2,name:"Drezden"},9:{country:2,name:"Hamburg"},10:{country:2,name:"Koln"},11:{country:3,name:"Paris"},12:{country:3,name:"Lyon"},13:{country:3,name:"Toulouse"},14:{country:3,name:"Marseille"},15:{country:3,name:"Bordeaux"},16:{country:4,name:"Madrid"},17:{country:4,name:"Barcelona"},18:{country:4,name:"Sevilla"},19:{country:4,name:"Bilbo"},20:{country:4,name:"Malaga"},21:{country:5,name:"Washington"},22:{country:5,name:"San-Francisco"},23:{country:5,name:"New-York"},24:{country:5,name:"Las-Vegas"},25:{country:5,name:"Miami"}},E=function(e){var a=e.id,t=e.name,n=e.label,l=e.defaultOption,o=e.value,m=e.options,c=e.error,s=e.onChange;return r.a.createElement("div",{className:"form-group form-group-sm m-1"},r.a.createElement("label",{htmlFor:a,className:"m-1"},n),r.a.createElement("select",{className:c?"form-control form-control-sm is-invalid":"form-control form-control-sm",id:a,name:t,onChange:s,value:o},r.a.createElement("option",{id:"0",value:""},l),m.map((function(e){return r.a.createElement("option",{key:e.id,id:e.id,value:e.id},e.name)}))),c&&r.a.createElement("small",{id:"country",className:"form-text text-danger"},c))};function g(e){var a=e.email,t=e.mobile,n=e.country,l=e.city,o=e.onChangeInput,m=e.errors;return r.a.createElement("div",null,r.a.createElement(f,{type:"text",id:"email",name:"email",label:"Email",placeholder:"Email",value:a,onChange:o,error:m.email}),r.a.createElement(f,{type:"tel",id:"mobile",name:"mobile",label:"Mobile",placeholder:"Mobile",value:t,onChange:o,error:m.mobile}),r.a.createElement(E,{id:"country",name:"country",options:y,label:"Country",defaultOption:"Select country",value:n,onChange:o,error:m.country}),r.a.createElement(E,{id:"city",name:"city",options:Object.entries(h).filter((function(e){return e[1].country===Number(n)})).map((function(e){var a=Object(b.a)(e,2);return{id:a[0],name:a[1].name}})),label:"City",defaultOption:"Select city",value:l,onChange:o,error:m.city}))}var N=t(6),w=t.n(N);function C(e){var a=e.avatar,t=e.onChangeInput,n=e.errors;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"img-thumbnail",alt:"default icon",src:a||w.a})),r.a.createElement("div",{className:"custom-file mt-1"},r.a.createElement("input",{type:"file",className:n?"custom-file-input custom-file-input-sm is-invalid":"custom-file-input custom-file-input-sm",id:"avatar",name:"avatar",onChange:function(e){var a=new FileReader;a.onload=function(e){t({target:{name:"avatar",value:e.target.result}})},a.readAsDataURL(e.target.files[0])}}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"avatar"},"Choose avatar..."),n&&r.a.createElement("small",{id:"avatar",className:"form-text text-danger"},n)))}function k(e){var a=e.firstName,t=e.lastName,n=e.email,l=e.mobile,o=e.countryId,m=e.city,c=e.avatar;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{className:"img-thumbnail mb-1",alt:"default icon",src:""===c?"./images/Blank-Profile-Icon.jpg":c})),r.a.createElement("div",{className:"col-6"},r.a.createElement("strong",null,a,r.a.createElement("p",null,t))),r.a.createElement("div",{className:"m-1"},r.a.createElement("span",{style:{fontWeight:"bold"}},"Email:")," ",n),r.a.createElement("div",{className:"m-1"},r.a.createElement("strong",null,"Mobile:")," ",l),r.a.createElement("div",{className:"m-1"},r.a.createElement("strong",null,"Location: "),y.filter((function(e){return e.id===+o}))[0].name,",",h[m].name))}function S(e){var a=e.step,t=e.fields,n=e.errors,l=e.onChangeInput;return r.a.createElement("div",null,1===a&&r.a.createElement(v,{firstName:t.firstName,lastName:t.lastName,password:t.password,repeatPassword:t.repeatPassword,gender:t.gender,errors:n,onChangeInput:l}),2===a&&r.a.createElement(g,{email:t.email,mobile:t.mobile,country:t.country,city:t.city,errors:n,onChangeInput:l}),3===a&&r.a.createElement(C,{avatar:t.avatar,errors:n.avatar,onChangeInput:l}),4===a&&r.a.createElement(k,{firstName:t.firstName,lastName:t.lastName,email:t.email,mobile:t.mobile,countryId:t.country,city:t.city,avatar:t.avatar}))}var x=/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,P=/(^[+]{0,1}((38){0,1}|8{0,1})0[1-9]{9}$)/i,F=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).validation=function(){var a=e.state.step,t={},n=e.state.fields,r=n.firstName,l=n.lastName,o=n.password,m=n.repeatPassword,c=n.gender,s=n.email,i=n.mobile,u=n.country,d=n.city,p=n.avatar;switch(a){case 1:r.length<5&&(t.firstName="Must be 5 characters or more"),l.length<5&&(t.lastName="Must be 5 characters or more"),o.length<6&&(t.password="Must be 6 characters or more"),m===o&&0!==m.length||(t.repeatPassword="Must be equal password"),""===c&&(t.gender="Required");break;case 2:s.match(x)||(t.email="Email not valid"),i.match(P)||(t.mobile="mobile"),0===u.length&&(t.country="Select your country"),0===d.length&&(t.city="Select your city");break;case 3:""===p&&(t.avatar="Upload your photo")}return t},e.onPrevStep=function(){e.setState({step:e.state.step-1})},e.onNextStep=function(a){a.preventDefault();var t=e.validation();0===Object.keys(t).length&&e.setState({step:e.state.step+1}),e.setState({errors:t})},e.onConfirmForm=function(){e.setState({confirmed:!0})},e.onChangeInput=function(a){var t=e.state.errors;delete t[a.target.name];var n=a.target,r=n.name,l=n.value;"country"===r&&e.setState({fields:Object.assign(e.state.fields,{city:""})}),e.setState({fields:Object.assign(e.state.fields,Object(m.a)({},r,l)),errors:t})},e.state={fields:{firstName:"",lastName:"",gender:"male",password:"",repeatPassword:"",email:"",mobile:"",country:"",city:"",avatar:""},errors:{},step:1,confirmed:!1},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,a=e.step,t=e.fields,n=e.errors,l=e.confirmed;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1 mr-5"}),r.a.createElement(p,{step:this.state.step,confirmed:this.state.confirmed}),r.a.createElement("div",{className:"col-3"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12 "}),r.a.createElement("div",{className:"col-md-4 col-sm-4 col-xs-12 "},r.a.createElement("form",null,r.a.createElement(S,{step:a,fields:t,errors:n,onChangeInput:this.onChangeInput}),r.a.createElement(d,{onPrevStep:this.onPrevStep,onNextStep:this.onNextStep,step:a,onConfirmForm:this.onConfirmForm,confirmed:l})))))}}]),t}(r.a.Component);var I=function(){return r.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(17),t(18);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bfad2d15.chunk.js.map