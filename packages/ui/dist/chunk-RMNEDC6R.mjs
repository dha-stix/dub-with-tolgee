"use client"
import{j as a}from"./chunk-6IZLSA2Z.mjs";import*as e from"@radix-ui/react-dialog";import{X as l}from"lucide-react";import*as s from"react";import{jsx as o,jsxs as n}from"react/jsx-runtime";var R=e.Root,y=e.Trigger,g=e.Close,c=e.Portal,h=s.forwardRef(({className:t,children:i,...r},m)=>o(c,{children:n(e.Content,{ref:m,className:a("fixed inset-y-0 right-0 z-50 h-full w-3/4 gap-4 border-l border-gray-200 bg-white p-6 shadow-xl transition ease-in-out sm:max-w-sm","data-[state=closed]:animate-slide-out-to-right data-[state=open]:animate-slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500",t),...r,children:[n(e.Close,{className:"absolute right-4 top-4 rounded-md p-1 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-0 disabled:pointer-events-none data-[state=open]:bg-gray-100",children:[o(l,{className:"size-4"}),o("span",{className:"sr-only",children:"Close"})]}),i]})}));h.displayName=e.Content.displayName;var p=({className:t,...i})=>o("div",{className:a("flex flex-col space-y-2 text-center sm:text-left",t),...i});p.displayName="SheetHeader";var d=({className:t,...i})=>o("div",{className:a("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...i});d.displayName="SheetFooter";var f=s.forwardRef(({className:t,...i},r)=>o(e.Title,{ref:r,className:a("text-foreground text-lg font-semibold",t),...i}));f.displayName=e.Title.displayName;var S=s.forwardRef(({className:t,...i},r)=>o(e.Description,{ref:r,className:a("text-muted-foreground text-sm",t),...i}));S.displayName=e.Description.displayName;export{R as a,y as b,g as c,c as d,h as e,p as f,d as g,f as h,S as i};
