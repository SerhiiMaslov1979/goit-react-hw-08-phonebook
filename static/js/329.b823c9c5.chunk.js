"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[329],{8329:function(e,n,t){t.r(n),t.d(n,{ContactsPage:function(){return _}});var a=t(1413),s=t(2791),r=t(5705),c=t(6727),o=t(9434),i=function(e){return e.contacts.items},m=function(e){return e.filter},u=function(e){var n=i(e),t=m(e);return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},l=t(8893),d=t(184),h=c.Ry().shape({name:c.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan").required(),number:c.Z_().matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}),x={name:"",number:""},p=function(){var e=(0,o.I0)(),n=(0,o.v9)(i);return(0,d.jsx)(r.J9,{initialValues:x,validationSchema:h,onSubmit:function(t,s){var r=s.resetForm;n.some((function(e){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(t.name," is already in contacts")):(e((0,l.uK)((0,a.Z)({},t))),r())},children:(0,d.jsxs)(r.l0,{autoComplete:"off",className:"ContactsForm__Form",children:[(0,d.jsxs)("label",{htmlFor:"name",className:"ContactsForm__name",children:["Name",(0,d.jsx)(r.gN,{type:"text",name:"name"}),(0,d.jsx)(r.Bc,{name:"name",component:"div"})]}),(0,d.jsxs)("label",{htmlFor:"number",className:"ContactsForm__number",children:["Number",(0,d.jsx)(r.gN,{type:"text",name:"number"}),(0,d.jsx)(r.Bc,{name:"number",component:"div"})]}),(0,d.jsx)("button",{type:"submit",className:"ContactsForm__btn",children:"Add contact"})]})})},f=t(425);function j(){var e=(0,o.v9)(m),n=(0,o.I0)();return(0,d.jsx)("input",{type:"text",onChange:function(e){return n((0,f.T)(e.target.value))},value:e})}var b=function(){var e=(0,o.I0)(),n=(0,o.v9)(u);return(0,d.jsx)("ul",{className:"ContactsList__list",children:n.map((function(n){var t=n.id,a=n.name,s=n.number;return(0,d.jsxs)("li",{className:"ContactsList__item",children:[(0,d.jsxs)("p",{className:"ContactsList__text",children:[a,": ",s]}),(0,d.jsx)("button",{onClick:function(){return e((0,l.GK)(t))},children:"Delete"})]},t)}))})};function _(){var e=(0,o.v9)(i),n=(0,o.I0)();return(0,s.useEffect)((function(){n((0,l.yF)())}),[n]),(0,d.jsxs)("div",{className:"App__container",children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(p,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)("h3",{children:"Find contacts by name"}),e.length>0?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(j,{}),(0,d.jsx)(b,{})]}):(0,d.jsx)("p",{children:"No contacts"})]})}}}]);
//# sourceMappingURL=329.b823c9c5.chunk.js.map