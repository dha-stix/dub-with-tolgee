"use client"
import{jsx as e,jsxs as a}from"react/jsx-runtime";function o({icon:s,title:n,description:t,learnMore:r,children:i}){return a("div",{className:"flex flex-col items-center justify-center gap-y-4",children:[e("div",{className:"flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50",children:e(s,{className:"h-8 w-8 text-black",strokeWidth:.75})}),e("p",{className:"text-center text-base font-medium text-gray-950",children:n}),t&&a("p",{className:"max-w-sm text-center text-sm text-gray-500",children:[t," ",r&&e("a",{href:r,target:"_blank",className:"underline underline-offset-2 hover:text-gray-800",children:"Learn more \u2197"})]}),i]})}export{o as a};
