(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__2fZZK",label:"ContactForm_label__BEPyy",title:"ContactForm_title__oGAJc",input:"ContactForm_input__3BG6S",btn:"ContactForm_btn__1CDod",glowing:"ContactForm_glowing__1sKR_"}},11:function(t,e,n){t.exports={label:"Filter_label__28Yvi",input:"Filter_input__qMMzG"}},13:function(t,e,n){t.exports={container:"Container_container__3dDsN"}},14:function(t,e,n){t.exports={form:"Form_form__lX974"}},23:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(2),r=n.n(c),o=n(12),i=n.n(o),s=(n(22),n(23),n(16)),l=n(6),u=n(7),m=n(9),b=n(8),h=n(3),d=n.n(h),j=n(13),f=n.n(j);function p(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})}var _=n(14),C=n.n(_);function O(t){var e=t.children;return Object(a.jsx)("div",{className:C.a.form,children:e})}var v=n(15),x=n(1),g=n.n(x),N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:g.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:g.a.label,children:[Object(a.jsx)("span",{className:g.a.title,children:"Name"}),Object(a.jsx)("input",{className:g.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,placeholder:"Rosie Simpson"})]}),Object(a.jsxs)("label",{className:g.a.label,children:[Object(a.jsx)("span",{className:g.a.title,children:"Number"}),Object(a.jsx)("input",{className:g.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,placeholder:"123-45-67"})]}),Object(a.jsx)("button",{className:g.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),y=n(11),w=n.n(y);function S(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:w.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:w.a.input,type:"text",value:e,onChange:n,name:"filter",placeholder:"input name"})]})}var F=n(4),k=n.n(F);function L(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:k.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:k.a.item,children:[Object(a.jsxs)("p",{className:k.a.info,children:[c,": ",r]}),Object(a.jsx)("button",{className:k.a.btn,type:"button",onClick:function(){return n(e)}})]},e)}))})}var A=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:d.a.generate(),name:"Rosie Simpson",number:"459-12-56"},{id:d.a.generate(),name:"Hermione Kline",number:"443-89-12"},{id:d.a.generate(),name:"Eden Clements",number:"645-17-79"},{id:d.a.generate(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:d.a.generate(),name:n,number:a},r=t.state.contacts;r.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert("".concat(n," is already in contacts.")):r.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts.")):""===n.trim()||""===a.trim()?alert("Enter the contact's name and number phone!"):/\d{3}[-]\d{2}[-]\d{2}/g.test(a)?t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}})):alert("Enter the correct number phone!")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getVisibleContacts();return Object(a.jsx)(p,{children:Object(a.jsxs)(O,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(N,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(a.jsx)(S,{value:e,onChange:this.changeFilter}),n.length>0?Object(a.jsx)(L,{contacts:c,onDeleteContact:this.deleteContact}):Object(a.jsx)("p",{children:"Your phonebook is empty. Please add contact."})]})})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={info:"ContactList_info__1wwWh",list:"ContactList_list__3TVpx",item:"ContactList_item__1fXtF",btn:"ContactList_btn__3036s"}}},[[32,1,2]]]);
//# sourceMappingURL=main.2101662c.chunk.js.map