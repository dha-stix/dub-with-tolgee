"use client"
import{c as b}from"./chunk-EHG4EVKD.mjs";import{a as h}from"./chunk-KEVPFK5U.mjs";import{a as f,c as p,p as g,q as i}from"./chunk-OQCPKGEH.mjs";import{ChevronDown as w,Menu as x,X as C}from"lucide-react";import r from"next/link";import{useParams as N}from"next/navigation";import{useEffect as _,useState as v}from"react";import z from"swr";import{Fragment as D,jsx as e,jsxs as s}from"react/jsx-runtime";function j({theme:n="light"}){let{domain:m="dub.co"}=N(),[a,o]=v(!1);_(()=>{a?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[a]);let{data:t}=z(m==="dub.co"&&"/api/auth/session",g,{dedupingInterval:6e4});return s("div",{className:i(n==="dark"&&"dark"),children:[e("button",{onClick:()=>o(!a),className:i("fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden dark:hover:bg-white/20 dark:active:bg-white/30",a&&"hover:bg-gray-100 active:bg-gray-200"),children:a?e(C,{className:"h-5 w-5 text-gray-600 dark:text-white/70"}):e(x,{className:"h-5 w-5 text-gray-600 dark:text-white/70"})}),e("nav",{className:i("fixed inset-0 z-20 hidden w-full bg-white px-5 py-16 lg:hidden dark:bg-black dark:text-white/70",a&&"block"),children:s("ul",{className:"grid divide-y divide-gray-200 dark:divide-white/[0.15]",children:[b.map(({name:l,href:u,childItems:d},c)=>e(L,{name:l,href:u,childItems:d,setOpen:o},c)),t&&Object.keys(t).length>0?e("li",{className:"py-3",children:e(r,{href:f,className:"flex w-full font-semibold capitalize",children:"Dashboard"})}):s(D,{children:[e("li",{className:"py-3",children:e(r,{href:`${f}/login`,className:"flex w-full font-semibold capitalize",children:"Log in"})}),e("li",{className:"py-3",children:e(r,{href:`${f}/register`,className:"flex w-full font-semibold capitalize",children:"Sign Up"})})]})]})})]})}var L=({name:n,href:m,childItems:a,setOpen:o})=>{let{domain:t="dub.co"}=N(),[l,u]=v(!1);return a?e("li",{className:"py-3",children:s(h,{height:!0,children:[s("button",{className:"flex w-full justify-between",onClick:()=>u(!l),children:[e("p",{className:"font-semibold",children:n}),e(w,{className:i("h-5 w-5 text-gray-500 transition-all dark:text-white/50",l&&"rotate-180")})]}),l&&e("div",{className:"grid gap-4 overflow-hidden py-4",children:a.map(({title:d,href:c,icon:y,iconClassName:k})=>s(r,{href:p(c,t,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:t,utm_content:d}),onClick:()=>o(!1),className:"flex w-full space-x-2",children:[e(y,{className:i("h-5 w-5 text-gray-500 dark:text-white/80",k)}),e("span",{className:"text-sm",children:d})]},c))})]})}):m?e("li",{className:"py-3",children:e(r,{href:p(m,t,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:t,utm_content:n}),onClick:()=>o(!1),className:"flex w-full font-semibold capitalize",children:n})}):null};export{j as a};
