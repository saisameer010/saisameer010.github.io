(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var i=s(7),a=s(1),c=s(0);const n=Object(a.createContext)(),r=e=>{let{children:t}=e;const[s,i]=Object(a.useState)(localStorage.getItem("themeName")||"dark");Object(a.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches?"light":"dark"),e.addEventListener("change",(e=>{i(e.matches?"dark":"light")}))}),[]);return Object(c.jsx)(n.Provider,{value:[{themeName:s,toggleTheme:()=>{const e="dark"===s?"light":"dark";localStorage.setItem("themeName",e),i(e)}}],children:t})},l={homepage:"https://saisameer010.github.io",title:"YSS."},o={name:"Yanamandra Sai Sameer",role:"Fullstack Engineer",description:"I am Sai Sameer Yanamandra, a Master's student in Computer Science at San Jose State University, graduating in May 2024. With a robust background in programming, cloud technologies, and internships at companies like Arkoz.ai and ScoutBetter, I am actively seeking full-time opportunities where I can contribute and further develop my skills in software development and cloud.",resume:"https://drive.google.com/file/d/1k0i__NE4NmoEvM60RNmOxhFGfYvm1F_6/view?usp=sharing",social:{linkedin:"https://www.linkedin.com/in/saisameery/",github:"https://github.com/saisameer010",website:"https://www.saisameery.com"}},j=[{name:"Gesture Recognition with LSTM Neural Network",description:"A LSTM neural network for precise gesture recognition using polar angle data ",stack:["Python","LSTM","Tensorflow","Keras"],sourceCode:"https://github.com/saisameer010/Gesture-Recognition-with-LSTM-Neural-Network",livePreview:"https://github.com/saisameer010/Gesture-Recognition-with-LSTM-Neural-Network"},{name:"Image Upscaling Using GANs",description:"An end-to-end application for image upscaling through GANs and TensorFlow",stack:["Flask","GAN","Docker","Tensorflow","React"],sourceCode:"https://github.com/saisameer010/GAN-upscaler",livePreview:"https://github.com/saisameer010/GAN-upscaler"},{name:"Learning Based Approach for Hindi Text Sentiment Analysis",description:"A Natural Language Processing (NLP) model using Naive Bayes Classifier to perform Sentiment Analysis in the Hindi Language",stack:["Python","NLP"],sourceCode:"https://repo.ijiert.org/index.php/ijiert/article/view/161/149",livePreview:"https://repo.ijiert.org/index.php/ijiert/article/view/161/149"},{name:"Resume Parser",description:"A Web Application to parse Resumes and extract Information Using NLP",stack:["Flask","NLP","Spacy","React"],sourceCode:"https://github.com/saisameer010",livePreview:"https://github.com/saisameer010"},{name:"DB2 Query Optimizer",description:"Query Optimizer for DB2",stack:["Java","DB2"],sourceCode:"https://github.com/saisameer010/Query-optimizer-db2",livePreview:"https://github.com/saisameer010/Query-optimizer-db2"},{name:"Vehicle Detection and Tracking",description:"A Python-based solution to detect vehicles and track in a situation with low video clarity",stack:["Python","OpenCV"],sourceCode:"https://github.com/saisameer010/Vehicle-detection-and-tracking-Using-OpenCv",livePreview:"https://github.com/saisameer010/Vehicle-detection-and-tracking-Using-OpenCv"}],h=[{name:"AWS Solutions Architect",date:"Nov-2023",validity:"3 years"}],d=["HTML","CSS","JavaScript","TypeScript","React","Next.js","Redux","SASS","Material UI","Git","CI/CD","Jira","Python","Flask","Django","Docker","Kubernetes","AWS","Azure"],m="saisameeryanamandra@gmail.com";var b=s(13),u=s.n(b),p=s(11),O=s.n(p),x=s(15),g=s.n(x),v=s(14),k=s.n(v);s(25);var N=()=>{const[{themeName:e,toggleTheme:t}]=Object(a.useContext)(n),[s,i]=Object(a.useState)(!1),r=()=>i(!s);return Object(c.jsxs)("nav",{className:"center nav",children:[Object(c.jsxs)("ul",{style:{display:s?"flex":null},className:"nav__list",children:[j.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#projects",onClick:r,className:"link link--nav",children:"Projects"})}):null,d.length?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#skills",onClick:r,className:"link link--nav",children:"Skills"})}):null,m?Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsx)("a",{href:"#contact",onClick:r,className:"link link--nav",children:"Contact"})}):null]}),Object(c.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(c.jsx)(O.a,{}):Object(c.jsx)(u.a,{})}),Object(c.jsx)("button",{type:"button",onClick:r,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:s?Object(c.jsx)(k.a,{}):Object(c.jsx)(g.a,{})})]})};s(29);var f=()=>{const{homepage:e,title:t}=l;return Object(c.jsxs)("header",{className:"header center",children:[Object(c.jsx)("h3",{children:e?Object(c.jsx)("a",{href:e,className:"link",children:t}):t}),Object(c.jsx)(N,{})]})},_=s(8),w=s.n(_),S=s(16),y=s.n(S);s(30);var C=()=>{const{name:e,role:t,description:s,resume:i,social:a}=o;return Object(c.jsxs)("div",{className:"about center",children:[e&&Object(c.jsxs)("h1",{children:["Hi, I am ",Object(c.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(c.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(c.jsx)("p",{className:"about__desc",children:s&&s}),Object(c.jsxs)("div",{className:"about__contact center",children:[i&&Object(c.jsx)("a",{href:i,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(c.jsxs)(c.Fragment,{children:[a.github&&Object(c.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(c.jsx)(w.a,{})}),a.linkedin&&Object(c.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(c.jsx)(y.a,{})})]})]})]})},A=s(6),P=s.n(A),L=s(17),T=s.n(L);s(32);var I=e=>{let{project:t}=e;return Object(c.jsxs)("div",{className:"project",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(c.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(c.jsx)("li",{className:"project__stack-item",children:e},P()())))}),t.sourceCode&&Object(c.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(c.jsx)(w.a,{})}),t.livePreview&&Object(c.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(c.jsx)(T.a,{})})]})};s(33);var M=()=>j.length?Object(c.jsxs)("section",{id:"projects",className:"section projects",children:[Object(c.jsx)("h2",{className:"section__title",children:"Projects"}),Object(c.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(c.jsx)(I,{project:e},P()())))})]}):null;s(34);var R=e=>{let{project:t}=e;return Object(c.jsxs)("div",{className:"certificate",children:[Object(c.jsx)("h3",{children:t.name}),Object(c.jsxs)("p",{className:"certificate_date",children:["Acquired: ",t.date]}),Object(c.jsxs)("p",{className:"certificate_validity",children:["Validity: ",t.validity]})]})};s(35);var E=()=>h.length?Object(c.jsxs)("section",{id:"certificates",className:"section certificates",children:[Object(c.jsx)("h2",{className:"section__title",children:"Certificates"}),Object(c.jsx)("div",{className:"certificates__grid",children:h.map((e=>Object(c.jsx)(R,{project:e},P()())))})]}):null;s(36);var G=()=>d.length?Object(c.jsxs)("section",{className:"section skills",id:"skills",children:[Object(c.jsx)("h2",{className:"section__title",children:"Skills"}),Object(c.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(c.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},P()())))})]}):null,B=s(18),D=s.n(B);s(37);var F=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(c.jsx)("div",{className:"scroll-top",children:Object(c.jsx)("a",{href:"#top",children:Object(c.jsx)(D.a,{fontSize:"large"})})}):null};s(38);var z=()=>m?Object(c.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(c.jsx)("h2",{className:"section__title",children:"Contact"}),Object(c.jsx)("a",{href:`mailto:${m}`,children:Object(c.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;s(39);var U=()=>Object(c.jsx)("footer",{className:"footer",children:Object(c.jsx)("a",{href:"https://github.com/saisameer010",className:"link footer__link",children:"Created By Sai Sameer"})});s(40);var J=()=>{const[{themeName:e}]=Object(a.useContext)(n);return Object(c.jsxs)("div",{id:"top",className:`${e} app`,children:[Object(c.jsx)(f,{}),Object(c.jsxs)("main",{children:[Object(c.jsx)(C,{}),Object(c.jsx)(M,{}),Object(c.jsx)(E,{}),Object(c.jsx)(G,{}),Object(c.jsx)(z,{})]}),Object(c.jsx)(F,{}),Object(c.jsx)(U,{})]})};s(41);Object(i.render)(Object(c.jsx)(r,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d076ca5c.chunk.js.map