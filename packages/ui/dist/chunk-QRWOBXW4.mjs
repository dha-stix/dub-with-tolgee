"use client"
import{q as r}from"./chunk-OQCPKGEH.mjs";import*as e from"@radix-ui/react-accordion";import{ChevronDown as m}from"lucide-react";import*as c from"react";import{jsx as n,jsxs as l}from"react/jsx-runtime";var v=e.Root,d=c.forwardRef(({className:o,...t},i)=>n(e.Item,{ref:i,className:r("border-b border-b-slate-200 py-3 last:border-none",o),...t}));d.displayName="AccordionItem";var s=c.forwardRef(({className:o,children:t,...i},a)=>n(e.Header,{className:"flex",children:l(e.Trigger,{ref:a,className:r("flex flex-1 items-center justify-between font-medium transition-all sm:text-lg [&[data-state=open]>svg]:rotate-180",o),...i,children:[t,n(m,{className:"h-5 w-5 flex-none transition-transform duration-300"})]})}));s.displayName=e.Trigger.displayName;var f=c.forwardRef(({className:o,children:t,...i},a)=>n(e.Content,{ref:a,className:r("data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-gray-500 transition-all sm:text-base",o),...i,children:t}));f.displayName=e.Content.displayName;export{v as a,d as b,s as c,f as d};
