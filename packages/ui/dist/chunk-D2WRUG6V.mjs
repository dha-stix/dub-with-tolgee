"use client"
import{a as q}from"./chunk-7WRLUAQI.mjs";import{c as C}from"./chunk-ZXIVOSYM.mjs";import{a as I}from"./chunk-P66RRXER.mjs";import{a as U}from"./chunk-7JVJURUJ.mjs";import{a as H}from"./chunk-TP6GCAKN.mjs";import{a as F}from"./chunk-NWME2ANF.mjs";import{j as T}from"./chunk-6IZLSA2Z.mjs";import{enUS as Z}from"date-fns/locale";import{useEffect as N,useMemo as B,useState as S}from"react";import{format as M}from"date-fns";import{createContext as W}from"react";var A=W({isOpen:!1,setIsOpen:()=>{}}),X=()=>{let a=typeof window<"u"?window.navigator.language:"en-US",l=new Intl.DateTimeFormat(a,{hour:"numeric"}).format();return Number.isInteger(Number(l))},Y=(a,l,s=!1)=>{let i=!X(),e;return s?e=i?M(a,"d MMM, yyyy h:mm a",{locale:l}):M(a,"d MMM, yyyy HH:mm",{locale:l}):e=M(a,"d MMM, yyyy",{locale:l}),e},L=(a,l)=>{let{toYear:s,fromYear:i,fromMonth:e,toMonth:h,fromDay:y,toDay:P}=l;if(a&&a.length>0){let v=i,u=s;a.forEach(t=>{var R,$,x,g,E,D;if("date"in t){let d=t.date.getFullYear();if(i&&d<i)throw new Error(`Preset ${t.label} is before fromYear ${v}.`);if(s&&d>s)throw new Error(`Preset ${t.label} is after toYear ${u}.`);if(e&&t.date.getMonth()<e.getMonth())throw new Error(`Preset ${t.label} is before fromMonth ${e}.`);if(h&&t.date.getMonth()>h.getMonth())throw new Error(`Preset ${t.label} is after toMonth ${h}.`);if(y&&t.date.getDate()<y.getDate())throw new Error(`Preset ${t.label} is before fromDay ${y}.`);if(P&&t.date.getDate()>P.getDate())throw new Error(`Preset ${t.label} is after toDay ${M(P,"MMM dd, yyyy")}.`)}if("dateRange"in t){let d=(R=t.dateRange.from)==null?void 0:R.getFullYear(),f=($=t.dateRange.to)==null?void 0:$.getFullYear();if(d&&i&&d<i)throw new Error(`Preset ${t.label}'s 'from' is before fromYear ${v}.`);if(f&&s&&f>s)throw new Error(`Preset ${t.label}'s 'to' is after toYear ${u}.`);if(e){let n=(x=t.dateRange.from)==null?void 0:x.getMonth();if(n&&n<e.getMonth())throw new Error(`Preset ${t.label}'s 'from' is before fromMonth ${M(e,"MMM, yyyy")}.`)}if(h){let n=(g=t.dateRange.to)==null?void 0:g.getMonth();if(n&&n>h.getMonth())throw new Error(`Preset ${t.label}'s 'to' is after toMonth ${M(h,"MMM, yyyy")}.`)}if(y){let n=(E=t.dateRange.from)==null?void 0:E.getDate();if(n&&n<y.getDate())throw new Error(`Preset ${t.dateRange.from}'s 'from' is before fromDay ${M(y,"MMM dd, yyyy")}.`)}if(P){let n=(D=t.dateRange.to)==null?void 0:D.getDate();if(n&&n>P.getDate())throw new Error(`Preset ${t.label}'s 'to' is after toDay ${M(P,"MMM dd, yyyy")}.`)}}})}};import{jsx as m,jsxs as j}from"react/jsx-runtime";var _=({value:a,defaultValue:l,presetId:s,onChange:i,presets:e,disabled:h,disableNavigation:y,disabledDays:P,showYearNavigation:v=!1,locale:u=Z,placeholder:t="Select date range",hasError:R,align:$="center",className:x,...g})=>{let{isDesktop:E}=F(),[D,d]=S(!1),[f,n]=S(e&&s?e==null?void 0:e.find(({id:r})=>r===s):void 0),[o,w]=S((f==null?void 0:f.dateRange)??a??l??void 0),[K,k]=S(o==null?void 0:o.to),Q=B(()=>o,[D]);N(()=>{w(a)},[a]),N(()=>{let r=e==null?void 0:e.find(({id:b})=>b===s);n(r),w((r==null?void 0:r.dateRange)??a??l)},[e,s]),N(()=>{D?o&&k(o.to):k(o==null?void 0:o.to)},[D]);let V=(r,b)=>{let c=(o==null?void 0:o.from)&&(o==null?void 0:o.to)?{from:b}:r;w(c),n(void 0),(c==null?void 0:c.from)&&(c==null?void 0:c.to)&&(i==null||i(c),d(!1))},O=r=>{w(r.dateRange),n(r),i==null||i(r.dateRange,r),d(!1)},z=()=>{w(Q),d(!1)},G=r=>{r||z(),d(r)},J=B(()=>o?`${o.from?Y(o.from,u):""} - ${o.to?Y(o.to,u):""}`:null,[o,u]);return C((e==null?void 0:e.filter(r=>r.shortcut).map(r=>r.shortcut))??[],r=>{let b=e==null?void 0:e.find(c=>c.shortcut===r.key);b&&O(b)}),m(A.Provider,{value:{isOpen:D,setIsOpen:d},children:m(H,{align:$,openPopover:D,setOpenPopover:G,popoverContentClassName:"rounded-xl",content:m("div",{className:"flex w-full",children:j("div",{className:"scrollbar-hide flex w-full flex-col overflow-x-scroll sm:flex-row-reverse sm:items-start",children:[e&&e.length>0&&m("div",{className:T("relative flex h-16 w-full items-center sm:h-full sm:w-48","border-b border-gray-200 sm:border-b-0 sm:border-l","scrollbar-hide overflow-auto"),children:m("div",{className:"absolute px-3 sm:inset-0 sm:left-0 sm:p-3",children:m(U,{currentValue:o,presets:e,onSelect:O})})}),m("div",{className:"scrollbar-hide overflow-x-scroll",children:m(I,{mode:"range",selected:o,onSelect:V,month:K,onMonthChange:k,numberOfMonths:E?2:1,disabled:P,disableNavigation:y,showYearNavigation:v,locale:u,className:"scrollbar-hide overflow-x-scroll",classNames:{months:"flex flex-row divide-x divide-gray-200 overflow-x-scroll scrollbar-hide"},...g})})]})}),children:m(q,{placeholder:t,disabled:h,className:x,hasError:R,"aria-required":g.required||g["aria-required"],"aria-invalid":g["aria-invalid"],"aria-label":g["aria-label"],"aria-labelledby":g["aria-labelledby"],children:(f==null?void 0:f.label)??J})})})};function he({presets:a,...l}){return a&&L(a,l),m(_,{presets:a,...l})}export{A as a,he as b};
