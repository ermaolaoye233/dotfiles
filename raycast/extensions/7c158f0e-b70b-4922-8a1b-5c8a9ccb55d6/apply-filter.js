"use strict";var Sn=Object.create;var j=Object.defineProperty;var wn=Object.getOwnPropertyDescriptor;var Cn=Object.getOwnPropertyNames;var xn=Object.getPrototypeOf,Pn=Object.prototype.hasOwnProperty;var l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Fn=(e,t)=>{for(var n in t)j(e,n,{get:t[n],enumerable:!0})},Ne=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Cn(t))!Pn.call(e,i)&&i!==n&&j(e,i,{get:()=>t[i],enumerable:!(r=wn(t,i))||r.enumerable});return e};var Te=(e,t,n)=>(n=e!=null?Sn(xn(e)):{},Ne(t||!e||!e.__esModule?j(n,"default",{value:e,enumerable:!0}):n,e)),vn=e=>Ne(j({},"__esModule",{value:!0}),e);var Ge=l((Ni,Re)=>{Re.exports=Me;Me.sync=Tn;var Ee=require("fs");function Nn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var i=n[r].toLowerCase();if(i&&e.substr(-i.length).toLowerCase()===i)return!0}return!1}function De(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Nn(t,n)}function Me(e,t,n){Ee.stat(e,function(r,i){n(r,r?!1:De(i,e,t))})}function Tn(e,t){return De(Ee.statSync(e),e,t)}});var $e=l((Ti,Oe)=>{Oe.exports=Ae;Ae.sync=En;var Be=require("fs");function Ae(e,t,n){Be.stat(e,function(r,i){n(r,r?!1:ke(i,t))})}function En(e,t){return ke(Be.statSync(e),t)}function ke(e,t){return e.isFile()&&Dn(e,t)}function Dn(e,t){var n=e.mode,r=e.uid,i=e.gid,a=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),o=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),s=parseInt("100",8),u=parseInt("010",8),p=parseInt("001",8),m=s|u,g=n&p||n&u&&i===o||n&s&&r===a||n&m&&a===0;return g}});var qe=l((Di,_e)=>{var Ei=require("fs"),U;process.platform==="win32"||global.TESTING_WINDOWS?U=Ge():U=$e();_e.exports=ie;ie.sync=Mn;function ie(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,i){ie(e,t||{},function(a,o){a?i(a):r(o)})})}U(e,t||{},function(r,i){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,i=!1),n(r,i)})}function Mn(e,t){try{return U.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var He=l((Mi,ze)=>{var v=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",Le=require("path"),Rn=v?";":":",We=qe(),je=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Ue=(e,t)=>{let n=t.colon||Rn,r=e.match(/\//)||v&&e.match(/\\/)?[""]:[...v?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],i=v?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",a=v?i.split(n):[""];return v&&e.indexOf(".")!==-1&&a[0]!==""&&a.unshift(""),{pathEnv:r,pathExt:a,pathExtExe:i}},Xe=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:i,pathExtExe:a}=Ue(e,t),o=[],s=p=>new Promise((m,g)=>{if(p===r.length)return t.all&&o.length?m(o):g(je(e));let h=r[p],y=/^".*"$/.test(h)?h.slice(1,-1):h,b=Le.join(y,e),I=!y&&/^\.[\\\/]/.test(e)?e.slice(0,2)+b:b;m(u(I,p,0))}),u=(p,m,g)=>new Promise((h,y)=>{if(g===i.length)return h(s(m+1));let b=i[g];We(p+b,{pathExt:a},(I,F)=>{if(!I&&F)if(t.all)o.push(p+b);else return h(p+b);return h(u(p,m,g+1))})});return n?s(0).then(p=>n(null,p),n):s(0)},Gn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:i}=Ue(e,t),a=[];for(let o=0;o<n.length;o++){let s=n[o],u=/^".*"$/.test(s)?s.slice(1,-1):s,p=Le.join(u,e),m=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+p:p;for(let g=0;g<r.length;g++){let h=m+r[g];try{if(We.sync(h,{pathExt:i}))if(t.all)a.push(h);else return h}catch{}}}if(t.all&&a.length)return a;if(t.nothrow)return null;throw je(e)};ze.exports=Xe;Xe.sync=Gn});var oe=l((Ri,ae)=>{"use strict";var Ke=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ae.exports=Ke;ae.exports.default=Ke});var Ye=l((Gi,Je)=>{"use strict";var Ve=require("path"),Bn=He(),An=oe();function Ze(e,t){let n=e.options.env||process.env,r=process.cwd(),i=e.options.cwd!=null,a=i&&process.chdir!==void 0&&!process.chdir.disabled;if(a)try{process.chdir(e.options.cwd)}catch{}let o;try{o=Bn.sync(e.command,{path:n[An({env:n})],pathExt:t?Ve.delimiter:void 0})}catch{}finally{a&&process.chdir(r)}return o&&(o=Ve.resolve(i?e.options.cwd:"",o)),o}function kn(e){return Ze(e)||Ze(e,!0)}Je.exports=kn});var Qe=l((Bi,ce)=>{"use strict";var se=/([()\][%!^"`<>&|;, *?])/g;function On(e){return e=e.replace(se,"^$1"),e}function $n(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(se,"^$1"),t&&(e=e.replace(se,"^$1")),e}ce.exports.command=On;ce.exports.argument=$n});var tt=l((Ai,et)=>{"use strict";et.exports=/^#!(.*)/});var rt=l((ki,nt)=>{"use strict";var _n=tt();nt.exports=(e="")=>{let t=e.match(_n);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),i=n.split("/").pop();return i==="env"?r:r?`${i} ${r}`:i}});var at=l((Oi,it)=>{"use strict";var le=require("fs"),qn=rt();function Ln(e){let n=Buffer.alloc(150),r;try{r=le.openSync(e,"r"),le.readSync(r,n,0,150,0),le.closeSync(r)}catch{}return qn(n.toString())}it.exports=Ln});var lt=l(($i,ct)=>{"use strict";var Wn=require("path"),ot=Ye(),st=Qe(),jn=at(),Un=process.platform==="win32",Xn=/\.(?:com|exe)$/i,zn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Hn(e){e.file=ot(e);let t=e.file&&jn(e.file);return t?(e.args.unshift(e.file),e.command=t,ot(e)):e.file}function Kn(e){if(!Un)return e;let t=Hn(e),n=!Xn.test(t);if(e.options.forceShell||n){let r=zn.test(t);e.command=Wn.normalize(e.command),e.command=st.command(e.command),e.args=e.args.map(a=>st.argument(a,r));let i=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${i}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Vn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Kn(r)}ct.exports=Vn});var dt=l((_i,pt)=>{"use strict";var ue=process.platform==="win32";function pe(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Zn(e,t){if(!ue)return;let n=e.emit;e.emit=function(r,i){if(r==="exit"){let a=ut(i,t,"spawn");if(a)return n.call(e,"error",a)}return n.apply(e,arguments)}}function ut(e,t){return ue&&e===1&&!t.file?pe(t.original,"spawn"):null}function Jn(e,t){return ue&&e===1&&!t.file?pe(t.original,"spawnSync"):null}pt.exports={hookChildProcess:Zn,verifyENOENT:ut,verifyENOENTSync:Jn,notFoundError:pe}});var ht=l((qi,N)=>{"use strict";var mt=require("child_process"),de=lt(),me=dt();function ft(e,t,n){let r=de(e,t,n),i=mt.spawn(r.command,r.args,r.options);return me.hookChildProcess(i,r),i}function Yn(e,t,n){let r=de(e,t,n),i=mt.spawnSync(r.command,r.args,r.options);return i.error=i.error||me.verifyENOENTSync(i.status,r),i}N.exports=ft;N.exports.spawn=ft;N.exports.sync=Yn;N.exports._parse=de;N.exports._enoent=me});var yt=l((Li,gt)=>{"use strict";gt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var St=l((Wi,A)=>{"use strict";var B=require("path"),bt=oe(),It=e=>{e={cwd:process.cwd(),path:process.env[bt()],execPath:process.execPath,...e};let t,n=B.resolve(e.cwd),r=[];for(;t!==n;)r.push(B.join(n,"node_modules/.bin")),t=n,n=B.resolve(n,"..");let i=B.resolve(e.cwd,e.execPath,"..");return r.push(i),r.concat(e.path).join(B.delimiter)};A.exports=It;A.exports.default=It;A.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=bt({env:t});return e.path=t[n],t[n]=A.exports(e),t}});var Ct=l((ji,fe)=>{"use strict";var wt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};fe.exports=wt;fe.exports.default=wt});var Pt=l((Ui,z)=>{"use strict";var Qn=Ct(),X=new WeakMap,xt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,i=e.displayName||e.name||"<anonymous>",a=function(...o){if(X.set(a,++r),r===1)n=e.apply(this,o),e=null;else if(t.throw===!0)throw new Error(`Function \`${i}\` can only be called once`);return n};return Qn(a,e),X.set(a,r),a};z.exports=xt;z.exports.default=xt;z.exports.callCount=e=>{if(!X.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return X.get(e)}});var Ft=l(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.SIGNALS=void 0;var er=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];H.SIGNALS=er});var he=l(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.SIGRTMAX=T.getRealtimeSignals=void 0;var tr=function(){let e=Nt-vt+1;return Array.from({length:e},nr)};T.getRealtimeSignals=tr;var nr=function(e,t){return{name:`SIGRT${t+1}`,number:vt+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},vt=34,Nt=64;T.SIGRTMAX=Nt});var Tt=l(K=>{"use strict";Object.defineProperty(K,"__esModule",{value:!0});K.getSignals=void 0;var rr=require("os"),ir=Ft(),ar=he(),or=function(){let e=(0,ar.getRealtimeSignals)();return[...ir.SIGNALS,...e].map(sr)};K.getSignals=or;var sr=function({name:e,number:t,description:n,action:r,forced:i=!1,standard:a}){let{signals:{[e]:o}}=rr.constants,s=o!==void 0;return{name:e,number:s?o:t,description:n,supported:s,action:r,forced:i,standard:a}}});var Dt=l(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.signalsByNumber=E.signalsByName=void 0;var cr=require("os"),Et=Tt(),lr=he(),ur=function(){return(0,Et.getSignals)().reduce(pr,{})},pr=function(e,{name:t,number:n,description:r,supported:i,action:a,forced:o,standard:s}){return{...e,[t]:{name:t,number:n,description:r,supported:i,action:a,forced:o,standard:s}}},dr=ur();E.signalsByName=dr;var mr=function(){let e=(0,Et.getSignals)(),t=lr.SIGRTMAX+1,n=Array.from({length:t},(r,i)=>fr(i,e));return Object.assign({},...n)},fr=function(e,t){let n=hr(e,t);if(n===void 0)return{};let{name:r,description:i,supported:a,action:o,forced:s,standard:u}=n;return{[e]:{name:r,number:e,description:i,supported:a,action:o,forced:s,standard:u}}},hr=function(e,t){let n=t.find(({name:r})=>cr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},gr=mr();E.signalsByNumber=gr});var Rt=l((Vi,Mt)=>{"use strict";var{signalsByName:yr}=Dt(),br=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:i,exitCode:a,isCanceled:o})=>e?`timed out after ${t} milliseconds`:o?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${i})`:a!==void 0?`failed with exit code ${a}`:"failed",Ir=({stdout:e,stderr:t,all:n,error:r,signal:i,exitCode:a,command:o,escapedCommand:s,timedOut:u,isCanceled:p,killed:m,parsed:{options:{timeout:g}}})=>{a=a===null?void 0:a,i=i===null?void 0:i;let h=i===void 0?void 0:yr[i].description,y=r&&r.code,I=`Command ${br({timedOut:u,timeout:g,errorCode:y,signal:i,signalDescription:h,exitCode:a,isCanceled:p})}: ${o}`,F=Object.prototype.toString.call(r)==="[object Error]",L=F?`${I}
${r.message}`:I,W=[L,t,e].filter(Boolean).join(`
`);return F?(r.originalMessage=r.message,r.message=W):r=new Error(W),r.shortMessage=L,r.command=o,r.escapedCommand=s,r.exitCode=a,r.signal=i,r.signalDescription=h,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=p,r.killed=m&&!u,r};Mt.exports=Ir});var Bt=l((Zi,ge)=>{"use strict";var V=["stdin","stdout","stderr"],Sr=e=>V.some(t=>e[t]!==void 0),Gt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return V.map(r=>e[r]);if(Sr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${V.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,V.length);return Array.from({length:n},(r,i)=>t[i])};ge.exports=Gt;ge.exports.node=e=>{let t=Gt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var At=l((Ji,Z)=>{Z.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&Z.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&Z.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var qt=l((Yi,R)=>{var d=global.process,C=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};C(d)?(kt=require("assert"),D=At(),Ot=/^win/i.test(d.platform),k=require("events"),typeof k!="function"&&(k=k.EventEmitter),d.__signal_exit_emitter__?f=d.__signal_exit_emitter__:(f=d.__signal_exit_emitter__=new k,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),R.exports=function(e,t){if(!C(global.process))return function(){};kt.equal(typeof e,"function","a callback must be provided for exit handler"),M===!1&&ye();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&J()};return f.on(n,e),r},J=function(){!M||!C(global.process)||(M=!1,D.forEach(function(t){try{d.removeListener(t,Y[t])}catch{}}),d.emit=Q,d.reallyExit=be,f.count-=1)},R.exports.unload=J,x=function(t,n,r){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,r))},Y={},D.forEach(function(e){Y[e]=function(){if(!!C(global.process)){var n=d.listeners(e);n.length===f.count&&(J(),x("exit",null,e),x("afterexit",null,e),Ot&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),R.exports.signals=function(){return D},M=!1,ye=function(){M||!C(global.process)||(M=!0,f.count+=1,D=D.filter(function(t){try{return d.on(t,Y[t]),!0}catch{return!1}}),d.emit=_t,d.reallyExit=$t)},R.exports.load=ye,be=d.reallyExit,$t=function(t){!C(global.process)||(d.exitCode=t||0,x("exit",d.exitCode,null),x("afterexit",d.exitCode,null),be.call(d,d.exitCode))},Q=d.emit,_t=function(t,n){if(t==="exit"&&C(global.process)){n!==void 0&&(d.exitCode=n);var r=Q.apply(this,arguments);return x("exit",d.exitCode,null),x("afterexit",d.exitCode,null),r}else return Q.apply(this,arguments)}):R.exports=function(){return function(){}};var kt,D,Ot,k,f,J,x,Y,M,ye,be,$t,Q,_t});var Wt=l((Qi,Lt)=>{"use strict";var wr=require("os"),Cr=qt(),xr=1e3*5,Pr=(e,t="SIGTERM",n={})=>{let r=e(t);return Fr(e,t,n,r),r},Fr=(e,t,n,r)=>{if(!vr(t,n,r))return;let i=Tr(n),a=setTimeout(()=>{e("SIGKILL")},i);a.unref&&a.unref()},vr=(e,{forceKillAfterTimeout:t},n)=>Nr(e)&&t!==!1&&n,Nr=e=>e===wr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Tr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return xr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Er=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Dr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Mr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let i,a=new Promise((s,u)=>{i=setTimeout(()=>{Dr(e,n,u)},t)}),o=r.finally(()=>{clearTimeout(i)});return Promise.race([a,o])},Rr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Gr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let i=Cr(()=>{e.kill()});return r.finally(()=>{i()})};Lt.exports={spawnedKill:Pr,spawnedCancel:Er,setupTimeout:Mr,validateTimeout:Rr,setExitHandler:Gr}});var Ut=l((ea,jt)=>{"use strict";var S=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";S.writable=e=>S(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";S.readable=e=>S(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";S.duplex=e=>S.writable(e)&&S.readable(e);S.transform=e=>S.duplex(e)&&typeof e._transform=="function";jt.exports=S});var zt=l((ta,Xt)=>{"use strict";var{PassThrough:Br}=require("stream");Xt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",i=!1;t?i=!(n||r):n=n||"utf8",r&&(n=null);let a=new Br({objectMode:i});n&&a.setEncoding(n);let o=0,s=[];return a.on("data",u=>{s.push(u),i?o=s.length:o+=u.length}),a.getBufferedValue=()=>t?s:r?Buffer.concat(s,o):s.join(""),a.getBufferedLength=()=>o,a}});var Ht=l((na,O)=>{"use strict";var{constants:Ar}=require("buffer"),kr=require("stream"),{promisify:Or}=require("util"),$r=zt(),_r=Or(kr.pipeline),ee=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function Ie(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=$r(t);return await new Promise((i,a)=>{let o=s=>{s&&r.getBufferedLength()<=Ar.MAX_LENGTH&&(s.bufferedData=r.getBufferedValue()),a(s)};(async()=>{try{await _r(e,r),i()}catch(s){o(s)}})(),r.on("data",()=>{r.getBufferedLength()>n&&o(new ee)})}),r.getBufferedValue()}O.exports=Ie;O.exports.buffer=(e,t)=>Ie(e,{...t,encoding:"buffer"});O.exports.array=(e,t)=>Ie(e,{...t,array:!0});O.exports.MaxBufferError=ee});var Vt=l((ra,Kt)=>{"use strict";var{PassThrough:qr}=require("stream");Kt.exports=function(){var e=[],t=new qr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",i),Array.prototype.slice.call(arguments).forEach(n),t;function n(a){return Array.isArray(a)?(a.forEach(n),this):(e.push(a),a.once("end",i.bind(null,a)),a.once("error",t.emit.bind(t,"error")),a.pipe(t,{end:!1}),this)}function r(){return e.length==0}function i(a){e=e.filter(function(o){return o!==a}),!e.length&&t.readable&&t.end()}}});var Qt=l((ia,Yt)=>{"use strict";var Jt=Ut(),Zt=Ht(),Lr=Vt(),Wr=(e,t)=>{t===void 0||e.stdin===void 0||(Jt(t)?t.pipe(e.stdin):e.stdin.end(t))},jr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=Lr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Se=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},we=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Zt(e,{encoding:t,maxBuffer:r}):Zt.buffer(e,{maxBuffer:r})},Ur=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:i,maxBuffer:a},o)=>{let s=we(e,{encoding:r,buffer:i,maxBuffer:a}),u=we(t,{encoding:r,buffer:i,maxBuffer:a}),p=we(n,{encoding:r,buffer:i,maxBuffer:a*2});try{return await Promise.all([o,s,u,p])}catch(m){return Promise.all([{error:m,signal:m.signal,timedOut:m.timedOut},Se(e,s),Se(t,u),Se(n,p)])}},Xr=({input:e})=>{if(Jt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Yt.exports={handleInput:Wr,makeAllStream:jr,getSpawnedResult:Ur,validateInputSync:Xr}});var tn=l((aa,en)=>{"use strict";var zr=(async()=>{})().constructor.prototype,Hr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(zr,e)]),Kr=(e,t)=>{for(let[n,r]of Hr){let i=typeof t=="function"?(...a)=>Reflect.apply(r.value,t(),a):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:i})}return e},Vr=e=>new Promise((t,n)=>{e.on("exit",(r,i)=>{t({exitCode:r,signal:i})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});en.exports={mergePromise:Kr,getSpawnedPromise:Vr}});var an=l((oa,rn)=>{"use strict";var nn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Zr=/^[\w.-]+$/,Jr=/"/g,Yr=e=>typeof e!="string"||Zr.test(e)?e:`"${e.replace(Jr,'\\"')}"`,Qr=(e,t)=>nn(e,t).join(" "),ei=(e,t)=>nn(e,t).map(n=>Yr(n)).join(" "),ti=/ +/g,ni=e=>{let t=[];for(let n of e.trim().split(ti)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};rn.exports={joinCommand:Qr,getEscapedCommand:ei,parseCommand:ni}});var dn=l((sa,G)=>{"use strict";var ri=require("path"),Ce=require("child_process"),ii=ht(),ai=yt(),oi=St(),si=Pt(),te=Rt(),sn=Bt(),{spawnedKill:ci,spawnedCancel:li,setupTimeout:ui,validateTimeout:pi,setExitHandler:di}=Wt(),{handleInput:mi,getSpawnedResult:fi,makeAllStream:hi,validateInputSync:gi}=Qt(),{mergePromise:on,getSpawnedPromise:yi}=tn(),{joinCommand:cn,parseCommand:ln,getEscapedCommand:un}=an(),bi=1e3*1e3*100,Ii=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:i})=>{let a=t?{...process.env,...e}:e;return n?oi.env({env:a,cwd:r,execPath:i}):a},pn=(e,t,n={})=>{let r=ii._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:bi,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Ii(n),n.stdio=sn(n),process.platform==="win32"&&ri.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},$=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?ai(t):t,ne=(e,t,n)=>{let r=pn(e,t,n),i=cn(e,t),a=un(e,t);pi(r.options);let o;try{o=Ce.spawn(r.file,r.args,r.options)}catch(y){let b=new Ce.ChildProcess,I=Promise.reject(te({error:y,stdout:"",stderr:"",all:"",command:i,escapedCommand:a,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return on(b,I)}let s=yi(o),u=ui(o,r.options,s),p=di(o,r.options,u),m={isCanceled:!1};o.kill=ci.bind(null,o.kill.bind(o)),o.cancel=li.bind(null,o,m);let h=si(async()=>{let[{error:y,exitCode:b,signal:I,timedOut:F},L,W,In]=await fi(o,r.options,p),xe=$(r.options,L),Pe=$(r.options,W),Fe=$(r.options,In);if(y||b!==0||I!==null){let ve=te({error:y,exitCode:b,signal:I,stdout:xe,stderr:Pe,all:Fe,command:i,escapedCommand:a,parsed:r,timedOut:F,isCanceled:m.isCanceled,killed:o.killed});if(!r.options.reject)return ve;throw ve}return{command:i,escapedCommand:a,exitCode:0,stdout:xe,stderr:Pe,all:Fe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return mi(o,r.options.input),o.all=hi(o,r.options),on(o,h)};G.exports=ne;G.exports.sync=(e,t,n)=>{let r=pn(e,t,n),i=cn(e,t),a=un(e,t);gi(r.options);let o;try{o=Ce.spawnSync(r.file,r.args,r.options)}catch(p){throw te({error:p,stdout:"",stderr:"",all:"",command:i,escapedCommand:a,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let s=$(r.options,o.stdout,o.error),u=$(r.options,o.stderr,o.error);if(o.error||o.status!==0||o.signal!==null){let p=te({stdout:s,stderr:u,error:o.error,signal:o.signal,exitCode:o.status,command:i,escapedCommand:a,parsed:r,timedOut:o.error&&o.error.code==="ETIMEDOUT",isCanceled:!1,killed:o.signal!==null});if(!r.options.reject)return p;throw p}return{command:i,escapedCommand:a,exitCode:0,stdout:s,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};G.exports.command=(e,t)=>{let[n,...r]=ln(e);return ne(n,r,t)};G.exports.commandSync=(e,t)=>{let[n,...r]=ln(e);return ne.sync(n,r,t)};G.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=sn.node(n),i=process.execArgv.filter(s=>!s.startsWith("--inspect")),{nodePath:a=process.execPath,nodeOptions:o=i}=n;return ne(a,[...o,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var Fi={};Fn(Fi,{default:()=>bn});module.exports=vn(Fi);var P=require("@raycast/api");var w=require("@raycast/api");var mn=Te(require("node:process"),1),fn=Te(dn(),1);async function _(e,{humanReadableOutput:t=!0}={}){if(mn.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=await(0,fn.default)("osascript",["-e",e,n]);return r}var q=require("@raycast/api");var Si=async()=>_(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

    tell application "Finder"
      set theSelection to selection
      if theSelection is {} then
        return
      else if (theSelection count) is equal to 1 then
        repeat with imageType in imageTypes
          if (kind of the first item of theSelection) contains imageType then
            return the POSIX path of (theSelection as alias)
            exit repeat
          end if
        end repeat
      else
        set thePaths to {}
        repeat with i from 1 to (theSelection count)
          repeat with imageType in imageTypes
            if (kind of (item i of theSelection)) contains imageType then
              copy (POSIX path of (item i of theSelection as alias)) to end of thePaths
              exit repeat
            end if
          end repeat
        end repeat
        return thePaths
      end if
    end tell`),wi=async()=>_(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

    tell application "Path Finder"
      set theSelection to selection
      if theSelection is {} then
        return
      else if (theSelection count) is equal to 1 then
        repeat with imageType in imageTypes
          if (kind of the first item of theSelection) contains imageType then
            return the POSIX path of first item of theSelection
            exit repeat
          end if
        end repeat
      else
        set thePaths to {}
        repeat with i from 1 to (theSelection count)
          repeat with imageType in imageTypes
            if (kind of (item i of theSelection)) contains imageType then
              copy (POSIX path of (item i of theSelection)) to end of thePaths
              exit repeat
            end if
          end repeat
        end repeat
        return thePaths
      end if
    end tell`),hn=async()=>{let e=[],n=(0,q.getPreferenceValues)().preferredFileManager,r=!1,i=n;try{i=(await(0,q.getFrontmostApplication)()).name}catch{console.log("Couldn't get frontmost application")}try{i=="Path Finder"&&n=="Path Finder"&&(await wi()).split(", ").forEach(s=>{e.includes(s)||e.push(s)})}catch{console.log("Couldn't get images from Path Finder"),r=!0}let a=(await Si()).split(", ");return i=="Finder"||n=="Finder"||r?e.push(...a):a.forEach(o=>{o.split("/").at(-2)=="Desktop"&&!e.includes(o)&&e.push(o)}),e};var Ci=(e,t,n)=>`use framework "Foundation"
    use framework "Quartz"
    applyFilter("${e}", "${t}")
    on applyFilter(sourcePath, destinationPath)
        set theImage to current application's NSImage's alloc()'s initWithContentsOfFile:sourcePath
        
        -- Set up the Filter
        set filterName to "${n}"
        set theFilter to current application's CIFilter's filterWithName:filterName
        theFilter's setDefaults()`,xi=`-- Get result & crop to original image size
    set theBounds to current application's NSMakeRect(0, 0, theImage's |size|()'s width, theImage's |size|()'s height)
    set uncroppedOutput to theFilter's valueForKey:(current application's kCIOutputImageKey)
    set croppedOutput to uncroppedOutput's imageByCroppingToRect:(uncroppedOutput's extent())
    
    -- Convert back to NSImage and save to file
    set theRep to current application's NSCIImageRep's imageRepWithCIImage:croppedOutput
    set theResult to current application's NSImage's alloc()'s initWithSize:(theRep's |size|())
    theResult's addRepresentation:theRep
    saveImage(theResult, destinationPath)`,Pi=`on saveImage(imageToSave, destinationPath)
    -- Saves an NSImage to the supplied file path
    set theTIFFData to imageToSave's TIFFRepresentation()
    set theBitmapImageRep to current application's NSBitmapImageRep's imageRepWithData:theTIFFData
    set theImageProperties to current application's NSDictionary's dictionaryWithObject:1 forKey:(current application's NSImageCompressionFactor)
    set theResultData to theBitmapImageRep's representationUsingType:(current application's NSPNGFileType) |properties|:(missing value)
    theResultData's writeToFile:destinationPath atomically:false
end saveImage`,c=async(e,t,n)=>_(`${Ci(e,t,n)}
        set theCIImage to current application's CIImage's imageWithData:(theImage's TIFFRepresentation())
        theFilter's setValue:theCIImage forKey:"inputImage"
        ${xi}
    end applyFilter
    ${Pi}`),gn=[{name:"Bloom",description:"Softens edges and adds a glow",applyMethod:c,CIFilterName:"CIBloom",thumbnail:"thumbnails/bloom.webp"},{name:"Bokeh Blur",description:"Applies a Bokeh effect",applyMethod:c,CIFilterName:"CIBokehBlur",thumbnail:"thumbnails/bokeh_blur.webp"},{name:"Box Blur",description:"Blur effect using a box-shaped convolution kernel",applyMethod:c,CIFilterName:"CIBoxBlur",thumbnail:"thumbnails/box_blur.webp"},{name:"Chrome",description:"Increase brightness and saturation",applyMethod:c,CIFilterName:"CIPhotoEffectChrome",thumbnail:"thumbnails/chrome.webp"},{name:"Circular Screen",description:"Simulates a circular-shaped halftone screen",applyMethod:c,CIFilterName:"CICircularScreen",thumbnail:"thumbnails/circular_screen.webp"},{name:"Circular Wrap",description:"Wraps an image around a transparent circle",applyMethod:c,CIFilterName:"CICircularWrap",thumbnail:"thumbnails/circular_wrap.webp"},{name:"CMYK Halftone",description:"Creates a halftoned rendition of an image using cyan, magenta, yellow, and black",applyMethod:c,CIFilterName:"CICMYKHalftone",thumbnail:"thumbnails/cmyk_halftone.webp"},{name:"Comic",description:"Makes images look like comic book drawings",applyMethod:c,CIFilterName:"CIComicEffect",thumbnail:"thumbnails/comic.webp"},{name:"Crystallize",description:"Creates polygon-shaped color blocks by aggregating pixel values",applyMethod:c,CIFilterName:"CICrystallize",thumbnail:"thumbnails/crystallize.webp"},{name:"Depth Of Field",description:"Simulates tilt-shift",applyMethod:c,CIFilterName:"CIDepthOfField",thumbnail:"thumbnails/depth_of_field.webp"},{name:"Disc Blur",description:"Blur effect that uses a disc-shaped convolution kernel",applyMethod:c,CIFilterName:"CIDiscBlur",thumbnail:"thumbnails/disc_blur.webp"},{name:"Dither",description:"Adds noise to reduce distortion",applyMethod:c,CIFilterName:"CIDither",thumbnail:"thumbnails/dither.webp"},{name:"Document Enhancement",description:"Removes unwanted shadows, whitens background, and enhances contrast",applyMethod:c,CIFilterName:"CIDocumentEnhancer",thumbnail:"thumbnails/document_enhancement.webp"},{name:"Dot Screen",description:"Simulates the dot pattern of a halftone screen",applyMethod:c,CIFilterName:"CIDotScreen",thumbnail:"thumbnails/dot_screen.webp"},{name:"Edges",description:"Detects edges and highlights them colorfully, blackening other areas",applyMethod:c,CIFilterName:"CIEdges",thumbnail:"thumbnails/edges.webp"},{name:"Edge Work",description:"White woodblock cutout effect",applyMethod:c,CIFilterName:"CIEdgeWork",thumbnail:"thumbnails/edge_work.webp"},{name:"Fade",description:"Decreases saturation",applyMethod:c,CIFilterName:"CIPhotoEffectFade",thumbnail:"thumbnails/fade.webp"},{name:"Gaussian Blur",description:"Blurs the image using a Gaussian filter",applyMethod:c,CIFilterName:"CIGaussianBlur",thumbnail:"thumbnails/gaussian_blur.webp"},{name:"Gloom",description:"Dulls highlights",applyMethod:c,CIFilterName:"CIGloom",thumbnail:"thumbnails/gloom.webp"},{name:"Hatched Screen",description:"Simulates the hatched pattern of a halftone screen",applyMethod:c,CIFilterName:"CIHatchedScreen",thumbnail:"thumbnails/hatched_screen.webp"},{name:"Hexagonal Pixellate",description:"Pixellates images using hexagons",applyMethod:c,CIFilterName:"CIHexagonalPixellate",thumbnail:"thumbnails/hexagonal_pixellate.webp"},{name:"Instant",description:"Decreases saturation, reduces contrast",applyMethod:c,CIFilterName:"CIPhotoEffectInstant",thumbnail:"thumbnails/instant.webp"},{name:"Invert",description:"Inverts colors",applyMethod:c,CIFilterName:"CIColorInvert",thumbnail:"thumbnails/invert.webp"},{name:"Kaleidoscope",description:"Creates a kaleidoscopic image by applying 12-way symmetry",applyMethod:c,CIFilterName:"CIKaleidoscope",thumbnail:"thumbnails/kaleidoscope.webp"},{name:"Line Overlay",description:"Black woodblock cutout effect",applyMethod:c,CIFilterName:"CILineOverlay",thumbnail:"thumbnails/line_overlay.webp"},{name:"Line Screen",description:"Simulates the line pattern of a halftone screen",applyMethod:c,CIFilterName:"CILineScreen",thumbnail:"thumbnails/line_screen.webp"},{name:"Maximum Component",description:"Converts image to grayscale using the maximum of the three color components",applyMethod:c,CIFilterName:"CIMaximumComponent",thumbnail:"thumbnails/maximum_component.webp"},{name:"Median",description:"Reduces noise by calculating median pixel values",applyMethod:c,CIFilterName:"CILineOverlay",thumbnail:"thumbnails/median.webp"},{name:"Minimum Component",description:"Converts image to grayscale using the minimum of the three color components",applyMethod:c,CIFilterName:"CIMinimumComponent",thumbnail:"thumbnails/minimum_component.webp"},{name:"Mono",description:"Desaturates images and reduces contrast",applyMethod:c,CIFilterName:"CIPhotoEffectMono",thumbnail:"thumbnails/mono.webp"},{name:"Motion Blur",description:"Blur effect simulating a camera moving while capturing an image",applyMethod:c,CIFilterName:"CIMotionBlur",thumbnail:"thumbnails/motion_blur.webp"},{name:"Noir",description:"Desaturates images and increases contrast",applyMethod:c,CIFilterName:"CIPhotoEffectNoir",thumbnail:"thumbnails/noir.webp"},{name:"Noise Reduction",description:"Reduces noise by sharpening areas of low luminance",applyMethod:c,CIFilterName:"CINoiseReduction",thumbnail:"thumbnails/noise_reduction.webp"},{name:"Pixellate",description:"Pixellates images with large square pixels",applyMethod:c,CIFilterName:"CIPixellate",thumbnail:"thumbnails/pixellate.webp"},{name:"Posterize",description:"Flattens colors",applyMethod:c,CIFilterName:"CIColorPosterize",thumbnail:"thumbnails/posterize.webp"},{name:"Pointillize",description:"Pixellates images with dots",applyMethod:c,CIFilterName:"CIPointillize",thumbnail:"thumbnails/pointillize.webp"},{name:"Process",description:"Gives images a cooler toner",applyMethod:c,CIFilterName:"CIPhotoEffectProcess",thumbnail:"thumbnails/process.webp"},{name:"Sepia",description:"Maps all colors to shades of brown",applyMethod:c,CIFilterName:"CISepiaTone",thumbnail:"thumbnails/sepia.webp"},{name:"Sharpen Luminance",description:"Increases detailed by sharpening based on luminance",applyMethod:c,CIFilterName:"CISharpenLuminance",thumbnail:"thumbnails/sharpen_luminance.webp"},{name:"Thermal",description:"Thermal camera effect",applyMethod:c,CIFilterName:"CIThermal",thumbnail:"thumbnails/thermal.webp"},{name:"Tonal",description:"Decreases saturation and contrast",applyMethod:c,CIFilterName:"CIPhotoEffectTonal",thumbnail:"thumbnails/tonal.webp"},{name:"Transfer",description:"Makes images warmer",applyMethod:c,CIFilterName:"CIPhotoEffectTransfer",thumbnail:"thumbnails/transfer.webp"},{name:"Vignette",description:"Adds shading to the corners of images",applyMethod:c,CIFilterName:"CIVignette",thumbnail:"thumbnails/vignette.webp"},{name:"X-Ray",description:"X-Ray image effect",applyMethod:c,CIFilterName:"CIXRay",thumbnail:"thumbnails/x-ray.webp"},{name:"Zoom Blur",description:"Blur simulating a camera zooming in while capturing an image",applyMethod:c,CIFilterName:"CIZoomBlur",thumbnail:"thumbnails/zoom_blur.webp"}],yn=async e=>{let t=await hn();if(t.length===0||t.length===1&&t[0]===""){await(0,w.showToast)({title:"No images selected",style:w.Toast.Style.Failure});return}let n=await(0,w.showToast)({title:"Filtering in progress...",style:w.Toast.Style.Animated}),r=`image${t.length===1?"":"s"}`;try{t.forEach(async i=>{let o=i.split(".").slice(0,-1).join(".")+".png";await e.applyMethod(i,o,e.CIFilterName)}),n.title=`Applied ${e.name} Filter To ${t.length.toString()} ${r}`,n.style=w.Toast.Style.Success}catch(i){console.log(i),n.title="Failed To Apply Filter",n.style=w.Toast.Style.Failure}};var re=require("react/jsx-runtime");function bn(){let e=gn.map(t=>(0,re.jsx)(P.Grid.Item,{title:t.name,subtitle:t.description,content:{source:t.thumbnail},actions:(0,re.jsx)(P.ActionPanel,{children:(0,re.jsx)(P.Action,{title:`Apply ${t.name} Filter`,onAction:async()=>await yn(t)})})},t.name));return(0,re.jsx)(P.Grid,{searchBarPlaceholder:"Search filters...",children:e})}0&&(module.exports={});
