window.bubbly=function(t={}){t=generateConfig(t);const e=()=>{let e=t.bubbles.radius();const a=t.bubbles.shadow(),i=t.bubbles.stroke(),o=2+2*(a?.blur??0)+2*(i?.width??0),l=document.createElement("canvas");l.width=l.height=2*e+o;const r=l.getContext("2d");a&&(r.shadowColor=a.color,r.shadowBlur=a.blur),r.fillStyle=t.bubbles.fill(),r.beginPath(),r.arc(e+o/2,e+o/2,e,0,2*Math.PI),r.fill(),i&&(r.strokeStyle=i.color,r.lineWidth=i.width,r.stroke()),n.push({img:createImage(l),r:e+o,x:Math.random()*t.cv.width,y:Math.random()*t.cv.height,a:t.bubbles.angle(),v:t.bubbles.velocity()})};let n=[];for(let n=0;n<t.bubbles.count;n++)e();t.ctx.globalCompositeOperation=t.compose,requestAnimationFrame((function e(){if(t.ctx.fillStyle=t.background(t.ctx),null===t.cv.parentNode)return n=[],cancelAnimationFrame(e);t.animate&&requestAnimationFrame(e);t.ctx.clearRect(0,0,t.cv.width,t.cv.height),t.ctx.fillRect(0,0,t.cv.width,t.cv.height),n.forEach((e=>{t.ctx.drawImage(e.img,e.x-e.r,e.y-e.r),e.x+=Math.cos(e.a)*e.v,e.y+=Math.sin(e.a)*e.v,e.x-e.r>t.cv.width&&(e.x=-e.r),e.x+e.r<0&&(e.x=t.cv.width+e.r),e.y-e.r>t.cv.height&&(e.y=-e.r),e.y+e.r<0&&(e.y=t.cv.height+e.r)}))}))};const createImage=t=>{const e=new Image;return e.src=t.toDataURL(),e};function generateConfig(t){let e=t.canvas||(()=>{let t=document.createElement("canvas");return t.setAttribute("style","position:fixed;z-index:-1;left:0;top:0;min-width:100vw;min-height:100vh;"),t.width=window.innerWidth,t.height=window.innerHeight,document.body.appendChild(t),t})();return{cv:e,compose:t.compose??"lighter",bubbles:{count:t.bubbles?.count??Math.floor(.02*(e.width+e.height)),radius:t.bubbles?.radius??(()=>4+Math.random()*window.innerWidth/25),fill:t.bubbles?.fill??(()=>`hsla(0, 0%, 100%, ${.1*Math.random()})`),angle:t.bubbles?.angle??(()=>Math.random()*Math.PI*2),velocity:t.bubbles?.velocity??(()=>.1+.5*Math.random()),shadow:t.bubbles?.shadow??(()=>null),stroke:t.bubbles?.stroke??(()=>null)},background:t.background??(()=>"#2AE"),animate:!1!==t.animate,ctx:e.getContext("2d")}}