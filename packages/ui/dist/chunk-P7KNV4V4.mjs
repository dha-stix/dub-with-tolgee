"use client"
import{a as T}from"./chunk-TOIWRG7I.mjs";import{a as E}from"./chunk-ISWAR6A5.mjs";import{a as H}from"./chunk-6A3WESLG.mjs";import{a as _,d as L,e as V}from"./chunk-VW5E4FCQ.mjs";import{a as D}from"./chunk-NCVYFOCZ.mjs";import{a as x}from"./chunk-SFS4HLTS.mjs";import{a as W}from"./chunk-QPNBXJIF.mjs";import{k as S}from"./chunk-5P67N5YK.mjs";import{b as k,d as P,i as M,j as n,l as w}from"./chunk-6IZLSA2Z.mjs";import*as a from"@radix-ui/react-navigation-menu";import{cva as tt}from"class-variance-authority";import et from"js-cookie";import h from"next/link";import{useParams as ot,useSelectedLayoutSegment as rt}from"next/navigation";import{createContext as at}from"react";import it from"swr";import{useCallback as Z,useEffect as I,useState as U}from"react";function C(r){let[t,m]=U(!1),i=Z(()=>{m(window.scrollY>r)},[r]);return I(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[i]),I(()=>{i()},[i]),t}import*as d from"@radix-ui/react-popover";import{BoxSelect as j,Home as z,LayoutGrid as F,Type as $}from"lucide-react";import{useParams as K}from"next/navigation";import{useCallback as Y,useContext as q,useState as J}from"react";import{toast as R}from"sonner";import{jsx as o,jsxs as A}from"react/jsx-runtime";var Q=`<svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5 64C50.1731 64 64.5 49.6731 64.5 32C64.5 20.1555 58.0648 9.81393 48.5 4.28099V31.9999V47.9998H40.5V45.8594C38.1466 47.2207 35.4143 47.9999 32.5 47.9999C23.6634 47.9999 16.5 40.8364 16.5 31.9999C16.5 23.1633 23.6634 15.9999 32.5 15.9999C35.4143 15.9999 38.1466 16.779 40.5 18.1404V1.00812C37.943 0.350018 35.2624 0 32.5 0C14.8269 0 0.500038 14.3269 0.500038 32C0.500038 49.6731 14.8269 64 32.5 64Z" fill="black"/>
</svg>`,X=`<svg width="46" height="24" viewBox="0 0 46 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 2H14V13.9332L14.0003 13.9731L14.0003 14C14.0003 14.0223 14.0002 14.0445 14 14.0668V21H11V19.7455C9.86619 20.5362 8.48733 21 7.00016 21C3.13408 21 0 17.866 0 14C0 10.134 3.13408 7 7.00016 7C8.48733 7 9.86619 7.46375 11 8.25452V2ZM7 17.9998C9.20914 17.9998 11 16.209 11 13.9999C11 11.7908 9.20914 10 7 10C4.79086 10 3 11.7908 3 13.9999C3 16.209 4.79086 17.9998 7 17.9998ZM32 2H35V8.25474C36.1339 7.46383 37.5128 7 39.0002 7C42.8662 7 46.0003 10.134 46.0003 14C46.0003 17.866 42.8662 21 39.0002 21C35.1341 21 32 17.866 32 14V2ZM39 17.9998C41.2091 17.9998 43 16.209 43 13.9999C43 11.7908 41.2091 10 39 10C36.7909 10 35 11.7908 35 13.9999C35 16.209 36.7909 17.9998 39 17.9998ZM19 7H16V14C16 14.9192 16.1811 15.8295 16.5329 16.6788C16.8846 17.5281 17.4003 18.2997 18.0503 18.9497C18.7003 19.5997 19.472 20.1154 20.3213 20.4671C21.1706 20.8189 22.0809 21 23.0002 21C23.9194 21 24.8297 20.8189 25.679 20.4671C26.5283 20.1154 27.3 19.5997 27.95 18.9497C28.6 18.2997 29.1157 17.5281 29.4675 16.6788C29.8192 15.8295 30.0003 14.9192 30.0003 14H30V7H27V14C27 15.0608 26.5785 16.0782 25.8284 16.8283C25.0783 17.5784 24.0609 17.9998 23 17.9998C21.9391 17.9998 20.9217 17.5784 20.1716 16.8283C19.4215 16.0782 19 15.0608 19 14V7Z" fill="black"/>
</svg>`;async function B(r){try{await navigator.clipboard.writeText(r),R.success("Copied to clipboard!")}catch(t){console.error("Failed to copy to clipboard.",t),R.error("Failed to copy to clipboard.")}}function O({variant:r="full",isInApp:t,className:m}){let{domain:i="dub.co"}=K(),{theme:s}=q(N),[g,u]=J(!1),b=Y(l=>{l.preventDefault(),u(!0)},[]);return A(d.Root,{open:g,onOpenChange:u,children:[o(d.Anchor,{asChild:!0,children:o("div",{onContextMenu:b,className:"max-w-fit",children:r==="full"?o(D,{className:m}):o(x,{className:n("h-8 w-8 transition-all duration-75 active:scale-95",m)})})}),o(d.Portal,{children:o(d.Content,{sideOffset:14,align:"start",className:n("z-50 -mt-1.5 -translate-x-10",s==="dark"&&"dark"),onClick:l=>{l.stopPropagation(),u(!1)},children:A("div",{className:"grid gap-1 rounded-lg border border-gray-200 bg-white p-2 drop-shadow-sm sm:min-w-[240px] dark:border-white/[0.15] dark:bg-black",children:[o(p,{text:"Copy Logo as SVG",variant:"outline",onClick:()=>B(Q),icon:o(x,{className:"h-4 w-4"})}),o(p,{text:"Copy Wordmark as SVG",variant:"outline",onClick:()=>B(X),icon:o($,{strokeWidth:2,className:"h-4 w-4"})}),o(p,{text:"Brand Guidelines",variant:"outline",onClick:()=>window.open("https://dub.co/brand","_blank"),icon:o(j,{strokeWidth:2,className:"h-4 w-4"})}),t||i!="dub.co"?o(p,{text:"Home Page",variant:"outline",onClick:()=>window.open(`https://dub.co${t?"/home":""}`,"_blank"),icon:o(z,{strokeWidth:2,className:"h-4 w-4"})}):o(p,{text:"Dashboard",variant:"outline",onClick:()=>window.open("https://app.dub.co","_blank"),icon:o(F,{strokeWidth:2,className:"h-4 w-4"})})]})})})]})}function p({className:r,...t}){return o(S,{className:n("h-9 justify-start px-3 font-medium hover:text-gray-700 dark:text-white/70 dark:hover:bg-white/[0.15] dark:hover:text-white",r),...t})}import{Fragment as lt,jsx as e,jsxs as c}from"react/jsx-runtime";var N=at({theme:"light"}),nt=[{name:"Product",content:E,childItems:_},{name:"Solutions",content:T,childItems:L},{name:"Customers",href:"/customers"},{name:"Pricing",href:"/pricing"},{name:"Resources",content:H,childItems:V}],G=tt(["block rounded-md px-3 py-1.5 text-sm text-gray-900/60 hover:text-gray-900/80","dark:text-white/70 dark:hover:text-white","transition-colors ease-out"],{variants:{isActive:{true:"text-gray-900/80 dark:text-white"}}});function Bt({theme:r="light"}){let{domain:t="dub.co"}=ot(),m=C(80),i=C(40),s=rt(),{data:g,isLoading:u}=it(t==="dub.co"&&"/api/auth/session",M,{dedupingInterval:6e4}),b=!!(t==="dub.co"&&et.get("dub_id"));return e(N.Provider,{value:{theme:r},children:c("div",{className:n("sticky inset-x-0 top-0 z-30 w-full transition-all",r==="dark"&&"dark"),children:[e("div",{className:n("absolute inset-0 block transition-all lg:hidden",i&&(s&&w.includes(s)?"bg-white dark:bg-black":"bg-white/75 backdrop-blur-md dark:bg-black/75"))}),e(W,{className:"relative",children:c("div",{className:"flex h-14 items-center justify-between",children:[e(h,{className:"grow basis-0",href:k("/",t,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:t,utm_content:"Logo"}),children:e(O,{})}),c(a.Root,{delayDuration:0,className:"relative hidden lg:block",children:[c(a.List,{className:"relative flex flex-row gap-2 px-2 py-0.5",children:[e("div",{className:"absolute inset-0 -z-[1]",children:e("div",{className:n("absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-200 drop-shadow-sm transition-all dark:border-white/10",s&&w.includes(s)?"bg-white dark:bg-black":"bg-white/75 backdrop-blur-lg dark:bg-black/75",m&&"h-14 w-screen rounded-none drop-shadow-none")})}),nt.map(({name:l,href:v,content:f})=>{let y=v===`/${s}`||v==="/"&&s===null;return c(a.Item,{children:[e(st,{trigger:!!f,children:v!==void 0?e(h,{id:`nav-${v}`,href:k(v,t,{utm_source:"Custom Domain",utm_medium:"Navbar",utm_campaign:t,utm_content:l}),className:G({isActive:y}),children:l}):e("button",{className:G({isActive:y}),children:l})}),f&&e(a.Content,{className:"data-[motion=from-start]:animate-enter-from-left data-[motion=from-end]:animate-enter-from-right data-[motion=to-start]:animate-exit-to-left data-[motion=to-end]:animate-exit-to-right absolute left-0 top-0",children:e(f,{domain:t})})]},l)})]}),e("div",{className:"absolute left-1/2 top-full mt-3 -translate-x-1/2",children:e(a.Viewport,{className:n("relative flex origin-[top_center] justify-start overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-md dark:border-white/[0.15] dark:bg-black","data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content","h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] transition-[width,height]")})})]}),e("div",{className:"hidden grow basis-0 justify-end lg:flex",children:g&&Object.keys(g).length>0?e(h,{href:P,className:"animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 dark:border-white dark:bg-white dark:text-gray-600 dark:hover:bg-white dark:hover:text-gray-800 dark:hover:hover:shadow-[0_0_25px_5px_rgba(256,256,256,0.2)] dark:hover:ring-0",children:"Dashboard"}):u?null:c(lt,{children:[e(h,{href:b?"https://app.dub.co/login":"https://d.to/login",className:"animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black dark:text-white dark:hover:text-white/70",children:"Log in"}),e(h,{href:b?"https://app.dub.co/register":"https://d.to/try",className:"animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-gray-800 hover:ring-4 hover:ring-gray-200 dark:border-white dark:bg-white dark:text-gray-600 dark:hover:bg-white dark:hover:text-gray-800 dark:hover:hover:shadow-[0_0_25px_5px_rgba(256,256,256,0.2)] dark:hover:ring-0",children:"Sign Up"})]})})]})})]})})}function st({trigger:r,children:t}){return r?e(a.Trigger,{asChild:!0,children:t}):t}export{C as a,N as b,nt as c,Bt as d,O as e};
