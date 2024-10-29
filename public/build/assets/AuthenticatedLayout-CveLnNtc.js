import{r as i,j as e,a as g,q as N}from"./app-BXt_hrfz.js";import{A as w}from"./ApplicationLogo-tQLSnZ1g.js";import{z as C}from"./transition-CxnqNrx_.js";import{P as k}from"./PrimaryButton-BD8oMcmo.js";import{S as L}from"./SecondaryButton-D_RV3iZu.js";const f=i.createContext(),c=({children:t})=>{const[n,s]=i.useState(!1),r=()=>{s(l=>!l)};return e.jsx(f.Provider,{value:{open:n,setOpen:s,toggleOpen:r},children:e.jsx("div",{className:"relative",children:t})})},S=({children:t})=>{const{open:n,setOpen:s,toggleOpen:r}=i.useContext(f);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:r,children:t}),n&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},F=({align:t="right",width:n="48",contentClasses:s="py-1 bg-white",children:r})=>{const{open:l,setOpen:d}=i.useContext(f);let a="origin-top";t==="left"?a="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(a="ltr:origin-top-right rtl:origin-top-left end-0");let x="";return n==="48"&&(x="w-48"),e.jsx(e.Fragment,{children:e.jsx(C,{show:l,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${a} ${x}`,onClick:()=>d(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:r})})})})},A=({className:t="",children:n,...s})=>e.jsx(g,{...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+t,children:n});c.Trigger=S;c.Content=F;c.Link=A;function h({active:t=!1,className:n="",children:s,...r}){return e.jsx(g,{...r,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+n,children:s})}function m({active:t=!1,className:n="",children:s,...r}){return e.jsx(g,{...r,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${t?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${n}`,children:s})}const M=()=>{const[t,n]=i.useState([]),[s,r]=i.useState(null),[l,d]=i.useState(""),[a,x]=i.useState(null),p="I-Coin",b=async()=>{try{const o=await fetch("/currencies");if(o.ok){const u=await o.json();n(u),r(u[0])}else console.error("Échec du chargement des devises")}catch(o){console.error("Erreur lors de la récupération des devises:",o)}};i.useEffect(()=>{b()},[]);const j=()=>{if(s&&l){const o=parseFloat(s.value_in_i_coin),u=l*o;x(u)}},v=()=>{d(""),x(null),r(t[0])};return e.jsxs("div",{className:"p-4 mx-auto max-w-4xl bg-white shadow rounded",children:[e.jsxs("h2",{className:"text-lg font-semibold mb-4",children:["Convertir en ",p]}),a!==null&&e.jsxs("div",{className:"mt-4 p-2 mb-4 rounded-md bg-[#cd8b76] text-base font-semibold text-white shadow-md",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx("span",{children:"Montant converti :"}),e.jsxs("span",{className:"font-bold text-xl",children:[a.toFixed(2)," ",p]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"amount",className:"block text-sm font-medium text-gray-700",children:"Montant :"}),e.jsx("input",{type:"number",id:"amount",value:l,onChange:o=>d(o.target.value),className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"currency",className:"block text-sm font-medium text-gray-700",children:"Devise :"}),e.jsx("select",{id:"currency",value:s?s.id:"",onChange:o=>{const u=t.find(y=>y.id===parseInt(o.target.value));r(u)},className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2",children:t.map(o=>e.jsxs("option",{value:o.id,children:[o.name," (",o.code,")"]},o.id))})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(k,{onClick:j,className:"w-full flex justify-center items-center",children:"Convertir"}),e.jsx(L,{onClick:v,className:"w-full flex justify-center items-center",children:"Réinitialiser"})]})]})};function I({header:t,children:n}){const s=N().props.auth.user,[r,l]=i.useState(!1),d=a=>a.charAt(0).toUpperCase()+a.slice(1);return e.jsxs("div",{className:"min-h-screen bg-gray-100 pb-12",children:[e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center mt-6 mb-6",children:e.jsx(g,{href:"/",children:e.jsx(w,{className:"block h-6 w-4 fill-current text-gray-800"})})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Tableau de bord"}),e.jsx(h,{href:route("courses"),active:route().current("courses"),children:"Formations"}),e.jsx(h,{href:route("bots"),active:route().current("bots"),children:"Bots"}),e.jsx(h,{href:route("network"),active:route().current("network"),children:"Réseau"})]})]}),e.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[e.jsx("img",{src:"/img/user.png",alt:"User",className:"h-6 w-6 rounded-full"}),e.jsx("span",{className:"ms-2",children:d(s.username)}),e.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(c.Content,{children:[e.jsx(c.Link,{href:route("profile.edit"),children:"Profil"}),e.jsx(c.Link,{href:route("logout"),method:"post",as:"button",children:"Se déconnecter"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>l(a=>!a),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:r?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:r?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(r?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[e.jsx(m,{href:route("dashboard"),active:route().current("dashboard"),children:"Tableau de bord"}),e.jsx(m,{href:route("courses"),active:route().current("courses"),children:"Formations"}),e.jsx(m,{href:route("bots"),active:route().current("bots"),children:"Bots"}),e.jsx(m,{href:route("network"),active:route().current("network"),children:"Réseau"})]}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:s.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(m,{href:route("profile.edit"),children:"Profil"}),e.jsx(m,{method:"post",href:route("logout"),as:"button",children:"Se déconnecter"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:t})}),e.jsxs("main",{children:[n,e.jsx(M,{})]})]})}export{I as A};
