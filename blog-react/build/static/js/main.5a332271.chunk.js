(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},21:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),a=t(13),r=t.n(a),s=t(5),c=t(6),d=t(9),l=t(7),w=t(10),h=t(28),u=t(29),p=function(){var e=navigator.userAgent,n=/(?:Windows Phone)/.test(e),t=/(?:SymbianOS)/.test(e)||n,i=/(?:Android)/.test(e),o=/(?:Firefox)/.test(e),a=/(?:Chrome|CriOS)/.test(e),r=/(?:iPad|PlayBook)/.test(e)||i&&!/(?:Mobile)/.test(e)||o&&/(?:Tablet)/.test(e),s=/(?:iPhone)/.test(e)&&!r;return{isPad:r,isPhone:s,isAndroid:i,isPc:!s&&!i&&!t,isChrome:a}},g=t(11),m=t(2),b={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(n){return!1}}(),webgl2:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(n){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var n,t,i;n=void 0!==(e=e||{}).parent?e.parent:document.body,t=void 0!==e.id?e.id:"oldie",(i=this.getWebGLErrorMessage()).id=t,n.appendChild(i)}},f=(t(21),function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(d.a)(this,Object(l.a)(n).call(this))).state={container:null,camera:null,scene:null,renderer:null,spheres:[],mouseX:0,mouseY:0,windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,arrStr:[],loader:null},e.onWindowResize=e.onWindowResize.bind(Object(g.a)(Object(g.a)(e))),e}return Object(w.a)(n,e),Object(c.a)(n,[{key:"onWindowResize",value:function(){this.setState({windowHalfX:window.innerWidth/2,windowHalfY:window.innerHeight/2,camera:{aspect:window.innerWidth/window.innerHeight}}),this.state.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}},{key:"onDocumentMouseMove",value:function(e){var n=this.state,t=n.windowHalfX,i=n.windowHalfY;this.setState({mouseX:10*(e.clientX-t),mouseY:10*(e.clientY-i)})}},{key:"init",value:function(){var e=this,n=this.refs.container,t=window.innerWidth/window.innerHeight,i=new m.g(60,t,1,1e4);i.position.z=3200;var o=new m.h;o.background=(new m.b).setPath("".concat("http://api.huzhihui.org.cn","/file/image?name=")).load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);var a=new m.i(100,32,16),r=new m.e({color:16777215,envMap:o.background,refractionRatio:.95});r.envMap.mapping=m.a;var s=["TigerZH","HzH","PRN","Ethan","wechat:huibikuile","TigerZH","HzH","HzH"];this.setState({camera:i,scene:o,material:r,arrStr:s,container:n},function(){(new m.c).load("https://easy-mock.com/mock/5a1fe521583969285ab1fa9a/getaway/typefont#!method=get",function(e){s.forEach(function(n){var t=new m.j(n,{font:e,size:300,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:8,bevelSegments:5}),i=new m.f({color:16711680,envMap:o.background,refractionRatio:.95}),a=new m.d(t,i);a.castShadow=!0,a.position.x=1e4*Math.random()-5e3,a.position.y=1e4*Math.random()-5e3,a.position.z=1e4*Math.random()-5e3,a.scale.z=3*Math.random()+1,a.scale.y=a.scale.z,a.scale.x=a.scale.y})});for(var n=0;n<400;n++){var t=new m.d(a,r);t.position.x=1e4*Math.random()-5e3,t.position.y=1e4*Math.random()-5e3,t.position.z=1e4*Math.random()-5e3,t.scale.z=3*Math.random()+1,t.scale.y=t.scale.z,t.scale.x=t.scale.y}var i=new m.k;i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",e.onWindowResize,!1)})}},{key:"animate",value:function(){this.render()}},{key:"componentDidMount",value:function(){var e,n,t,i;b.webgl||b.addGetWebGLMessage();var o=[],a=0,r=0,s=window.innerWidth/2,c=window.innerHeight/2;function d(){s=window.innerWidth/2,c=window.innerHeight/2,n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}document.addEventListener("mousemove",function(e){a=10*(e.clientX-s),r=10*(e.clientY-c)},!1),e=this.refs.container,function(){(n=new m.g(60,window.innerWidth/window.innerHeight,1,1e5)).position.z=3200,(t=new m.h).background=(new m.b).setPath("http://api.huzhihui.org.cn/file/image?name=").load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);var a=new m.i(100,32,16),r=new m.e({color:16777215,envMap:t.background,refractionRatio:.95});r.envMap.mapping=m.a;var s=["TigerZH","TigerZH","TigerZH","TigerZH","TigerZH","TigerZH","TigerZH","TigerZH"];(new m.c).load("https://easy-mock.com/mock/5a1fe521583969285ab1fa9a/getaway/typefont#!method=get",function(e){s.forEach(function(n){var i=new m.j(n,{font:e,size:300,height:5,curveSegments:12,bevelEnabled:!0,bevelThickness:10,bevelSize:8,bevelSegments:5}),a=new m.f({color:16711680,envMap:t.background,refractionRatio:.95}),r=new m.d(i,a);r.castShadow=!0,r.position.x=1e4*Math.random()-5e3,r.position.y=1e4*Math.random()-5e3,r.position.z=1e4*Math.random()-5e3,r.scale.z=3*Math.random()+1,r.scale.y=r.scale.z,r.scale.x=r.scale.y,t.add(r),o.push(r)})});for(var c=0;c<400;c++){var l=new m.d(a,r);l.position.x=1e4*Math.random()-5e3,l.position.y=1e4*Math.random()-5e3,l.position.z=1e4*Math.random()-5e3,l.scale.z=3*Math.random()+1,l.scale.y=l.scale.z,l.scale.x=l.scale.y,t.add(l),o.push(l)}(i=new m.k).setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),e.appendChild(i.domElement),window.addEventListener("resize",d,!1)}(),function e(){requestAnimationFrame(e),function(){for(var e=1e-4*Date.now(),s=0,c=o.length;s<c;s++){var d=o[s];d.position.x=5e3*Math.cos(e+s),d.position.y=5e3*Math.sin(e+1.1*s)}n.position.x+=.05*(a-n.position.x),n.position.y+=.05*(-r-n.position.y),n.lookAt(t.position),i.render(t,n)}()}()}},{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("div",{ref:"container"}))}}]),n}(i.Component)),v=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,null))}}]),n}(i.Component),y=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"\u6211\u662f\u4e3b\u9875")}}]),n}(i.Component),j=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(w.a)(n,e),Object(c.a)(n,[{key:"component",value:function(){var e;return e=p().isPc?v:y,e}},{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(u.a,{component:this.component()}))}}]),n}(i.Component);r.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.5a332271.chunk.js.map