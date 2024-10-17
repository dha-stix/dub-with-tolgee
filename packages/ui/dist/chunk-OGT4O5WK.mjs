"use client"
import{q as v}from"./chunk-OQCPKGEH.mjs";import{useEffect as U,useRef as w,useState as _}from"react";import{jsx as S}from"react/jsx-runtime";var y=`
attribute vec2 position;

void main() 
{
    gl_Position = vec4(position, 0.0, 1.0);
}
`,z=`
precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform float dotSize;
uniform float cellSize;
uniform float speed;

// Gold noise: https://stackoverflow.com/a/28095165
float PHI = 1.61803398874989484820459; 
float random(in vec2 xy){
    return fract(tan(distance(xy*PHI, xy))*xy.x);
}

void main(void) {
  vec2 uv = gl_FragCoord.xy;

  vec2 cellUv = vec2(int(uv.x / cellSize), int(uv.y / cellSize));
  float id = random(cellUv + 1.0);

  float fadeEffect = (sin(time * speed + id * 20.0) + 1.0) * 0.5;
  
  vec2 dotUv = fract(uv / cellSize);
  float dot = step(max(dotUv.x, dotUv.y), dotSize / cellSize);

  float opacity = dot * fadeEffect;

  vec4 fragColor = vec4(vec3(0.0), opacity);
  fragColor.rgb *= fragColor.a;

  gl_FragColor = fragColor;
}
`,I=60,C=1e3/I;function H({dotSize:c=1,cellSize:l=3,speed:s=5,className:p}){let f=w(null),[h,A]=_(!1);return U(()=>{let o=f.current;if(!o||!o.parentElement)return;let m=o.parentElement,d=window.devicePixelRatio||1;o.width=m.clientWidth*d,o.height=m.clientHeight*d;let e=o.getContext("webgl",{powerPreference:"low-power",depth:!1,stencil:!1});if(e===null){alert("Failed to initialize WebGL");return}let t=e.createProgram();if(!t){console.error("Failed to create shader program");return}for(let r=0;r<2;++r){let T=r===0?y:z,i=e.createShader(r===0?e.VERTEX_SHADER:e.FRAGMENT_SHADER);if(!i){console.error("Failed to create shader");return}e.shaderSource(i,T),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)||console.error(e.getShaderInfoLog(i)),e.attachShader(t,i),e.linkProgram(t)}e.getProgramParameter(t,e.LINK_STATUS)||console.error(e.getProgramInfoLog(t));let u=e.getAttribLocation(t,"position"),R=e.getUniformLocation(t,"time"),F=e.getUniformLocation(t,"resolution"),E=e.getUniformLocation(t,"dotSize"),x=e.getUniformLocation(t,"cellSize"),P=e.getUniformLocation(t,"speed");e.useProgram(t);let L=[1,1,-1,1,1,-1,-1,-1],b=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,new Float32Array(L),e.STATIC_DRAW),e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0),e.uniform1f(E,c*window.devicePixelRatio),e.uniform1f(x,l*window.devicePixelRatio),e.uniform1f(P,s);let n,g=0;function a(r){if(r-g<C){n=requestAnimationFrame(a);return}g=r,e&&o&&t&&(e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.uniform1f(R,r/1e3),e.uniform2f(F,o.width,o.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)),n=requestAnimationFrame(a)}return n=requestAnimationFrame(a),o.addEventListener("webglcontextlost",r=>{r.preventDefault(),A(!0),cancelAnimationFrame(n)}),()=>{cancelAnimationFrame(n),o.removeEventListener("webglcontextlost",()=>{})}},[c,l,s]),S("div",{className:v("absolute inset-0",p,h&&"opacity-0"),children:S("canvas",{ref:f,width:"100%",height:"100%",className:"size-full"})})}export{H as a};
