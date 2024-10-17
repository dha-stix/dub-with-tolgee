"use client"
import{a as Q}from"./chunk-VJOR3A7F.mjs";import{a as D}from"./chunk-GVBIGY6N.mjs";import{a as B}from"./chunk-NWME2ANF.mjs";import{a as F}from"./chunk-KEVPFK5U.mjs";import{k as K}from"./chunk-ZLUU5SZU.mjs";import{a as H}from"./chunk-WMTXO7RT.mjs";import{a as $}from"./chunk-JOLDVN3E.mjs";import{a as V}from"./chunk-IHTRL6TU.mjs";import{a as L}from"./chunk-JW75YDRU.mjs";import{a as M}from"./chunk-YJANHNDK.mjs";import{q as m}from"./chunk-OQCPKGEH.mjs";import{Command as b,CommandEmpty as le,CommandInput as re,CommandItem as ie}from"cmdk";import{ChevronDown as ce}from"lucide-react";import{isValidElement as me,useCallback as de,useEffect as v,useRef as pe,useState as f}from"react";import{Fragment as T,jsx as e,jsxs as i}from"react/jsx-runtime";function ue(s,a){return s===!0}function Pe({multiple:s,selected:a,setSelected:r,options:o,icon:d,placeholder:Z="Select...",searchPlaceholder:q="Search...",emptyState:x,createLabel:y,onCreate:g,buttonProps:c,shortcutHint:I,caret:G,side:J,open:X,onOpenChange:Y,onSearchChange:N,shouldFilter:P=!0,optionClassName:z,matchTriggerWidth:R,children:_}){let E=ue(s,r),n=Array.isArray(a)?a:a?[a]:[],{isMobile:ee}=B(),[te,se]=f(!1),C=X??te,h=Y??se,[l,w]=f(""),[W,O]=f(!1),[k,ae]=f(void 0),[oe,A]=f(!1),ne=t=>{var p;if(E){let S=n.some(({value:u})=>u===t.value);r(S?n.filter(({value:u})=>u!==t.value):[...n,t])}else r(n.length&&((p=n[0])==null?void 0:p.value)===t.value?null:t),h(!1)},j=de((t,p)=>p===""?[...n,...t.filter(S=>n.findIndex(u=>u.value===S.value)===-1)]:t,[n]);return v(()=>{W&&(ae(o&&j(o,l)),O(!1))},[W,o,j,l]),v(()=>{O(!0)},[o]),v(()=>{C||(w(""),O(!0))},[C]),v(()=>N==null?void 0:N(l),[l]),e(Q,{openPopover:C,setOpenPopover:h,align:"start",side:J,onWheel:t=>{t.stopPropagation()},popoverContentClassName:m(R&&"sm:w-[var(--radix-popover-trigger-width)]"),content:e(F,{width:!ee&&!R,height:!0,style:{transform:"translateZ(0)"},transition:{ease:"easeInOut",duration:.1},children:i(b,{loop:!0,shouldFilter:P,children:[i("div",{className:"flex items-center overflow-hidden rounded-t-lg border-b border-gray-200",children:[e(re,{placeholder:q,value:l,onValueChange:w,className:"grow border-0 py-3 pl-4 pr-2 outline-none placeholder:text-gray-400 focus:ring-0 sm:text-sm",onKeyDown:t=>{(t.key==="Escape"||t.key==="Backspace"&&!l)&&(t.preventDefault(),t.stopPropagation(),h(!1))}}),I&&e("kbd",{className:"mr-2 hidden shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-light text-gray-500 md:block",children:I})]}),e(fe,{children:e(b.List,{className:m("flex w-full min-w-[100px] flex-col gap-1 p-1"),children:k!==void 0?i(T,{children:[k.map(t=>e(xe,{option:t,multiple:E,selected:n.some(({value:p})=>p===t.value),onSelect:()=>ne(t),className:z},`${t.label}, ${t.value}`)),l.length>0&&g&&i(ie,{className:m("flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-md px-3 py-2 text-left text-sm text-gray-700","data-[selected=true]:bg-gray-100",z),onSelect:async()=>{A(!0),await(g==null?void 0:g(l))&&(w(""),h(!1)),A(!1)},children:[oe?e(M,{className:"size-4 shrink-0"}):e(H,{className:"size-4 shrink-0"}),e("div",{className:"grow truncate",children:(y==null?void 0:y(l))||`Create "${l}"`})]}),P?e(le,{className:"flex h-12 items-center justify-center text-sm text-gray-500",children:x||"No matches"}):k.length===0?e("div",{className:"flex h-12 items-center justify-center text-sm text-gray-500",children:x||"No matches"}):null]}):e(b.Loading,{children:e("div",{className:"flex h-12 items-center justify-center",children:e(M,{})})})})})]})}),children:e(K,{variant:"secondary",...c,className:m(c==null?void 0:c.className,"flex gap-2"),textWrapperClassName:m(c==null?void 0:c.textWrapperClassName,"w-full flex items-center justify-start"),text:i(T,{children:[e("div",{className:"min-w-0 grow truncate text-left",children:_||n.map(t=>t.label).join(", ")||Z}),G&&e(ce,{className:"ml-1 size-4 shrink-0 text-gray-400 transition-transform duration-75 group-data-[state=open]:rotate-180"})]}),icon:d?U(d)?d:e(d,{className:"size-4"}):void 0})})}var fe=({children:s})=>{let a=pe(null),{scrollProgress:r,updateScrollProgress:o}=D(a);return i(T,{children:[e("div",{className:"scrollbar-hide max-h-[min(50vh,240px)] w-screen overflow-y-scroll sm:w-auto",ref:a,onScroll:o,children:s}),e("div",{className:"pointer-events-none absolute bottom-0 left-0 hidden h-16 w-full rounded-b-lg bg-gradient-to-t from-white sm:block",style:{opacity:1-Math.pow(r,2)}})]})};function xe({option:s,onSelect:a,multiple:r,selected:o,className:d}){return i(b.Item,{className:m("flex cursor-pointer items-center gap-3 whitespace-nowrap rounded-md px-3 py-2 text-left text-sm","data-[selected=true]:bg-gray-100",d),onSelect:a,value:s.label+(s==null?void 0:s.value),children:[r&&e("div",{className:"shrink-0 text-gray-600",children:o?e($,{className:"size-4 text-gray-600"}):e(V,{className:"size-4 text-gray-400"})}),i("div",{className:"flex min-w-0 grow items-center gap-1",children:[s.icon&&e("span",{className:"shrink-0 text-gray-600",children:U(s.icon)?s.icon:e(s.icon,{className:"h-4 w-4"})}),e("span",{className:"grow truncate",children:s.label})]}),!r&&o&&e(L,{className:"size-4 shrink-0 text-gray-600"})]})}var U=s=>me(s);export{Pe as a};
