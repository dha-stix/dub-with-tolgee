"use client"
import{e as _}from"./chunk-P7KNV4V4.mjs";import{a as v}from"./chunk-VW5E4FCQ.mjs";import{a as N}from"./chunk-QPNBXJIF.mjs";import{a as x}from"./chunk-53GPIIBD.mjs";import{a as y}from"./chunk-GJAPZPRF.mjs";import{a as b}from"./chunk-OKTE2ZBK.mjs";import{a as f}from"./chunk-ALEYOCBW.mjs";import{b as o,i as d,j as n,m as g,n as p,o as h}from"./chunk-6IZLSA2Z.mjs";import T from"next/image";import s from"next/link";import{useParams as E}from"next/navigation";import{useEffect as F,useState as w}from"react";import A from"swr";import{jsx as e,jsxs as r}from"react/jsx-runtime";var m={features:v.map(({title:a,href:t})=>({name:a,href:t})),product:[{name:"Blog",href:"/blog"},{name:"Brand",href:"/brand"},{name:"Changelog",href:"/changelog"},{name:"Customers",href:"/customers"},{name:"Enterprise",href:"/enterprise"},{name:"Pricing",href:"/pricing"},{name:"Help Center",href:"/help"}],compare:p.map(({name:a,slug:t})=>({name:a,href:`/compare/${t}`})),legal:h.map(({name:a,slug:t})=>({name:a,href:`/legal/${t}`})),tools:g.map(({name:a,slug:t})=>({name:a,href:`/tools/${t}`}))};function Y(){let{domain:a="dub.co"}=E();return e("footer",{children:r(N,{className:"relative z-10 overflow-hidden border border-b-0 border-gray-200 bg-white/50 pb-60 pt-16 backdrop-blur-lg md:rounded-t-2xl",children:[r("div",{className:"xl:grid xl:grid-cols-3 xl:gap-8",children:[r("div",{className:"space-y-6",children:[r(s,{href:o("/",a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:"Logo"}),className:"block max-w-fit",children:[r("span",{className:"sr-only",children:[process.env.NEXT_PUBLIC_APP_NAME," Logo"]}),e(_,{className:"h-8 text-gray-800"})]}),e("p",{className:"max-w-xs text-sm text-gray-500",children:"Giving modern marketing teams superpowers with short links that stand out."}),r("p",{className:"text-sm leading-5 text-gray-400",children:["\xA9 ",new Date().getFullYear()," Dub Technologies, Inc."]}),r("div",{className:"flex items-center space-x-3",children:[r("a",{href:"https://twitter.com/dubdotco",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"Twitter"}),e(x,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-black"})]}),r("a",{href:"https://github.com/dubinc/dub",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"Github"}),e(f,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-black"})]}),r("a",{href:"https://www.linkedin.com/company/dubinc",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"LinkedIn"}),e(b,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-[#0077b5]"})]}),r("a",{href:"https://www.youtube.com/@dubdotco",target:"_blank",rel:"noreferrer",className:"group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100",children:[e("span",{className:"sr-only",children:"YouTube"}),e(y,{className:"h-4 w-4 text-gray-600 transition-colors group-hover:text-[#ff0000]"})]})]}),e(D,{})]}),r("div",{className:"mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0",children:[r("div",{className:"md:grid md:grid-cols-2",children:[r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Features"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.features.map(t=>e("li",{children:e(s,{href:o(t.href,a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:t.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:t.name})},t.name))})]}),r("div",{className:"mt-10 md:mt-0",children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Product"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.product.map(t=>e("li",{children:e(s,{href:o(t.href,a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:t.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:t.name})},t.name))})]})]}),r("div",{className:"md:grid md:grid-cols-2",children:[r("div",{className:"flex flex-col space-y-8",children:[r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Compare"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.compare.map(t=>e("li",{children:e(s,{href:o(t.href,a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:t.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:t.name})},t.name))})]}),r("div",{children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Legal"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.legal.map(t=>e("li",{children:e(s,{href:o(t.href,a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:t.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:t.name})},t.name))})]})]}),r("div",{className:"mt-10 md:mt-0",children:[e("h3",{className:"text-sm font-semibold text-gray-800",children:"Tools"}),e("ul",{role:"list",className:"mt-4 space-y-4",children:m.tools.map(t=>e("li",{children:e(s,{href:o(t.href,a,{utm_source:"Custom Domain",utm_medium:"Footer",utm_campaign:a,utm_content:t.name}),className:"text-sm text-gray-500 hover:text-gray-800",children:t.name})},t.name))})]})]})]})]}),e(T,{src:"https://assets.dub.co/footer.png",alt:"Dub Technologies, Inc. Logo",width:1959,height:625,className:"pointer-events-none absolute inset-x-0 bottom-0 z-0"})]})})}function D(){let{data:a}=A("https://status.dub.co/api/v1/summary",d),[t,l]=w("bg-gray-200"),[i,c]=w("Loading status...");return F(()=>{if(!a)return;let{ongoing_incidents:u}=a;if(u.length>0){let{current_worst_impact:k,name:L}=u[0],C=k==="degraded_performance"?"bg-yellow-500":"bg-red-500";c(L),l(C)}else c("All systems operational"),l("bg-green-500")},[a]),r(s,{href:"https://status.dub.co",target:"_blank",className:"group flex max-w-fit items-center space-x-2 rounded-md border border-gray-200 bg-white px-3 py-2 transition-colors hover:bg-gray-100",children:[r("div",{className:"relative h-3 w-3",children:[e("div",{className:n("absolute inset-0 m-auto h-3 w-3 animate-ping items-center justify-center rounded-full group-hover:animate-none",t,i==="Loading status..."&&"animate-none")}),e("div",{className:n("absolute inset-0 z-10 m-auto h-3 w-3 rounded-full",t)})]}),e("p",{className:"text-sm font-medium text-gray-800",children:i})]})}export{Y as a};
