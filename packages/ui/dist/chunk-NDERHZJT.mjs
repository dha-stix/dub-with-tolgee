"use client"
import{d as s}from"./chunk-OQCPKGEH.mjs";import{Slot as R}from"@radix-ui/react-slot";import y,{useEffect as F,useState as V}from"react";import{jsxs as T}from"react/jsx-runtime";var E=y.forwardRef(({asChild:m,className:u,children:e,prefix:c,duration:t=250,as:i="span",variant:l="compact",...p},f)=>{let[n,N]=V(Number(e));return F(()=>{if(isNaN(Number(e))){console.warn("CountingNumbers expects a numeric value as children.");return}let d=Number(e),o=n,b=d,C=performance.now(),r=()=>{let g=performance.now(),a=Math.min((g-C)/t,1),w=o+(b-o)*a;N(Math.round(w)),a<1&&requestAnimationFrame(r)};requestAnimationFrame(r)},[e,t]),T(m?R:i,{ref:f,className:u,...p,children:[c,s(n,l==="full"?{full:!0}:void 0)]})});E.displayName="CountingNumbers";export{E as a};
