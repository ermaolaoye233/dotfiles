"use strict";var wn=Object.create;var _=Object.defineProperty;var In=Object.getOwnPropertyDescriptor;var bn=Object.getOwnPropertyNames;var vn=Object.getPrototypeOf,En=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Tn=(e,t)=>{for(var n in t)_(e,n,{get:t[n],enumerable:!0})},De=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of bn(t))!En.call(e,o)&&o!==n&&_(e,o,{get:()=>t[o],enumerable:!(r=In(t,o))||r.enumerable});return e};var Ge=(e,t,n)=>(n=e!=null?wn(vn(e)):{},De(t||!e||!e.__esModule?_(n,"default",{value:e,enumerable:!0}):n,e)),Fn=e=>De(_({},"__esModule",{value:!0}),e);var Oe=c((Fo,$e)=>{$e.exports=Ne;Ne.sync=Dn;var Ae=require("fs");function Cn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function Re(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Cn(t,n)}function Ne(e,t,n){Ae.stat(e,function(r,o){n(r,r?!1:Re(o,e,t))})}function Dn(e,t){return Re(Ae.statSync(e),e,t)}});var Me=c((Co,Le)=>{Le.exports=ke;ke.sync=Gn;var Be=require("fs");function ke(e,t,n){Be.stat(e,function(r,o){n(r,r?!1:qe(o,t))})}function Gn(e,t){return qe(Be.statSync(e),t)}function qe(e,t){return e.isFile()&&An(e,t)}function An(e,t){var n=e.mode,r=e.uid,o=e.gid,s=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),i=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=a|u,h=n&l||n&u&&o===i||n&a&&r===s||n&p&&s===0;return h}});var je=c((Go,_e)=>{var Do=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Oe():j=Me();_e.exports=te;te.sync=Rn;function te(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){te(e,t||{},function(s,i){s?o(s):r(i)})})}j(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function Rn(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var ze=c((Ao,Ke)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",We=require("path"),Nn=E?";":":",Ue=je(),Xe=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),He=(e,t)=>{let n=t.colon||Nn,r=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",s=E?o.split(n):[""];return E&&e.indexOf(".")!==-1&&s[0]!==""&&s.unshift(""),{pathEnv:r,pathExt:s,pathExtExe:o}},Ve=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:s}=He(e,t),i=[],a=l=>new Promise((p,h)=>{if(l===r.length)return t.all&&i.length?p(i):h(Xe(e));let m=r[l],S=/^".*"$/.test(m)?m.slice(1,-1):m,y=We.join(S,e),x=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;p(u(x,l,0))}),u=(l,p,h)=>new Promise((m,S)=>{if(h===o.length)return m(a(p+1));let y=o[h];Ue(l+y,{pathExt:s},(x,v)=>{if(!x&&v)if(t.all)i.push(l+y);else return m(l+y);return m(u(l,p,h+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},$n=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=He(e,t),s=[];for(let i=0;i<n.length;i++){let a=n[i],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=We.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<r.length;h++){let m=p+r[h];try{if(Ue.sync(m,{pathExt:o}))if(t.all)s.push(m);else return m}catch{}}}if(t.all&&s.length)return s;if(t.nothrow)return null;throw Xe(e)};Ke.exports=Ve;Ve.sync=$n});var re=c((Ro,ne)=>{"use strict";var Je=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ne.exports=Je;ne.exports.default=Je});var et=c((No,Qe)=>{"use strict";var Ze=require("path"),On=ze(),Bn=re();function Ye(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,s=o&&process.chdir!==void 0&&!process.chdir.disabled;if(s)try{process.chdir(e.options.cwd)}catch{}let i;try{i=On.sync(e.command,{path:n[Bn({env:n})],pathExt:t?Ze.delimiter:void 0})}catch{}finally{s&&process.chdir(r)}return i&&(i=Ze.resolve(o?e.options.cwd:"",i)),i}function kn(e){return Ye(e)||Ye(e,!0)}Qe.exports=kn});var tt=c(($o,se)=>{"use strict";var oe=/([()\][%!^"`<>&|;, *?])/g;function qn(e){return e=e.replace(oe,"^$1"),e}function Ln(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(oe,"^$1"),t&&(e=e.replace(oe,"^$1")),e}se.exports.command=qn;se.exports.argument=Ln});var rt=c((Oo,nt)=>{"use strict";nt.exports=/^#!(.*)/});var st=c((Bo,ot)=>{"use strict";var Mn=rt();ot.exports=(e="")=>{let t=e.match(Mn);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var at=c((ko,it)=>{"use strict";var ie=require("fs"),_n=st();function jn(e){let n=Buffer.alloc(150),r;try{r=ie.openSync(e,"r"),ie.readSync(r,n,0,150,0),ie.closeSync(r)}catch{}return _n(n.toString())}it.exports=jn});var dt=c((qo,lt)=>{"use strict";var Wn=require("path"),ct=et(),ut=tt(),Un=at(),Xn=process.platform==="win32",Hn=/\.(?:com|exe)$/i,Vn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Kn(e){e.file=ct(e);let t=e.file&&Un(e.file);return t?(e.args.unshift(e.file),e.command=t,ct(e)):e.file}function zn(e){if(!Xn)return e;let t=Kn(e),n=!Hn.test(t);if(e.options.forceShell||n){let r=Vn.test(t);e.command=Wn.normalize(e.command),e.command=ut.command(e.command),e.args=e.args.map(s=>ut.argument(s,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function Jn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:zn(r)}lt.exports=Jn});var mt=c((Lo,ft)=>{"use strict";var ae=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Zn(e,t){if(!ae)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let s=pt(o,t,"spawn");if(s)return n.call(e,"error",s)}return n.apply(e,arguments)}}function pt(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawn"):null}function Yn(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawnSync"):null}ft.exports={hookChildProcess:Zn,verifyENOENT:pt,verifyENOENTSync:Yn,notFoundError:ce}});var St=c((Mo,T)=>{"use strict";var ht=require("child_process"),ue=dt(),le=mt();function gt(e,t,n){let r=ue(e,t,n),o=ht.spawn(r.command,r.args,r.options);return le.hookChildProcess(o,r),o}function Qn(e,t,n){let r=ue(e,t,n),o=ht.spawnSync(r.command,r.args,r.options);return o.error=o.error||le.verifyENOENTSync(o.status,r),o}T.exports=gt;T.exports.spawn=gt;T.exports.sync=Qn;T.exports._parse=ue;T.exports._enoent=le});var xt=c((_o,yt)=>{"use strict";yt.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var It=c((jo,O)=>{"use strict";var $=require("path"),Pt=re(),wt=e=>{e={cwd:process.cwd(),path:process.env[Pt()],execPath:process.execPath,...e};let t,n=$.resolve(e.cwd),r=[];for(;t!==n;)r.push($.join(n,"node_modules/.bin")),t=n,n=$.resolve(n,"..");let o=$.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join($.delimiter)};O.exports=wt;O.exports.default=wt;O.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=Pt({env:t});return e.path=t[n],t[n]=O.exports(e),t}});var vt=c((Wo,de)=>{"use strict";var bt=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};de.exports=bt;de.exports.default=bt});var Tt=c((Uo,U)=>{"use strict";var er=vt(),W=new WeakMap,Et=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",s=function(...i){if(W.set(s,++r),r===1)n=e.apply(this,i),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return er(s,e),W.set(s,r),s};U.exports=Et;U.exports.default=Et;U.exports.callCount=e=>{if(!W.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return W.get(e)}});var Ft=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var tr=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=tr});var pe=c(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.SIGRTMAX=F.getRealtimeSignals=void 0;var nr=function(){let e=Dt-Ct+1;return Array.from({length:e},rr)};F.getRealtimeSignals=nr;var rr=function(e,t){return{name:`SIGRT${t+1}`,number:Ct+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ct=34,Dt=64;F.SIGRTMAX=Dt});var Gt=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var or=require("os"),sr=Ft(),ir=pe(),ar=function(){let e=(0,ir.getRealtimeSignals)();return[...sr.SIGNALS,...e].map(cr)};H.getSignals=ar;var cr=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:s}){let{signals:{[e]:i}}=or.constants,a=i!==void 0;return{name:e,number:a?i:t,description:n,supported:a,action:r,forced:o,standard:s}}});var Rt=c(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.signalsByNumber=C.signalsByName=void 0;var ur=require("os"),At=Gt(),lr=pe(),dr=function(){return(0,At.getSignals)().reduce(pr,{})},pr=function(e,{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:s,forced:i,standard:a}}},fr=dr();C.signalsByName=fr;var mr=function(){let e=(0,At.getSignals)(),t=lr.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>hr(o,e));return Object.assign({},...n)},hr=function(e,t){let n=gr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:s,action:i,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:o,supported:s,action:i,forced:a,standard:u}}},gr=function(e,t){let n=t.find(({name:r})=>ur.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},Sr=mr();C.signalsByNumber=Sr});var $t=c((zo,Nt)=>{"use strict";var{signalsByName:yr}=Rt(),xr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:s,isCanceled:i})=>e?`timed out after ${t} milliseconds`:i?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:s!==void 0?`failed with exit code ${s}`:"failed",Pr=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:s,command:i,escapedCommand:a,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:h}}})=>{s=s===null?void 0:s,o=o===null?void 0:o;let m=o===void 0?void 0:yr[o].description,S=r&&r.code,x=`Command ${xr({timedOut:u,timeout:h,errorCode:S,signal:o,signalDescription:m,exitCode:s,isCanceled:l})}: ${i}`,v=Object.prototype.toString.call(r)==="[object Error]",L=v?`${x}
${r.message}`:x,M=[L,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=i,r.escapedCommand=a,r.exitCode=s,r.signal=o,r.signalDescription=m,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};Nt.exports=Pr});var Bt=c((Jo,fe)=>{"use strict";var V=["stdin","stdout","stderr"],wr=e=>V.some(t=>e[t]!==void 0),Ot=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return V.map(r=>e[r]);if(wr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${V.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,V.length);return Array.from({length:n},(r,o)=>t[o])};fe.exports=Ot;fe.exports.node=e=>{let t=Ot(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var kt=c((Zo,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var jt=c((Yo,A)=>{var d=global.process,I=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};I(d)?(qt=require("assert"),D=kt(),Lt=/^win/i.test(d.platform),B=require("events"),typeof B!="function"&&(B=B.EventEmitter),d.__signal_exit_emitter__?f=d.__signal_exit_emitter__:(f=d.__signal_exit_emitter__=new B,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),A.exports=function(e,t){if(!I(global.process))return function(){};qt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&me();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&z()};return f.on(n,e),r},z=function(){!G||!I(global.process)||(G=!1,D.forEach(function(t){try{d.removeListener(t,J[t])}catch{}}),d.emit=Z,d.reallyExit=he,f.count-=1)},A.exports.unload=z,b=function(t,n,r){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,r))},J={},D.forEach(function(e){J[e]=function(){if(!!I(global.process)){var n=d.listeners(e);n.length===f.count&&(z(),b("exit",null,e),b("afterexit",null,e),Lt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),A.exports.signals=function(){return D},G=!1,me=function(){G||!I(global.process)||(G=!0,f.count+=1,D=D.filter(function(t){try{return d.on(t,J[t]),!0}catch{return!1}}),d.emit=_t,d.reallyExit=Mt)},A.exports.load=me,he=d.reallyExit,Mt=function(t){!I(global.process)||(d.exitCode=t||0,b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),he.call(d,d.exitCode))},Z=d.emit,_t=function(t,n){if(t==="exit"&&I(global.process)){n!==void 0&&(d.exitCode=n);var r=Z.apply(this,arguments);return b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),r}else return Z.apply(this,arguments)}):A.exports=function(){return function(){}};var qt,D,Lt,B,f,z,b,J,G,me,he,Mt,Z,_t});var Ut=c((Qo,Wt)=>{"use strict";var Ir=require("os"),br=jt(),vr=1e3*5,Er=(e,t="SIGTERM",n={})=>{let r=e(t);return Tr(e,t,n,r),r},Tr=(e,t,n,r)=>{if(!Fr(t,n,r))return;let o=Dr(n),s=setTimeout(()=>{e("SIGKILL")},o);s.unref&&s.unref()},Fr=(e,{forceKillAfterTimeout:t},n)=>Cr(e)&&t!==!1&&n,Cr=e=>e===Ir.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Dr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return vr;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Gr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Ar=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},Rr=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,s=new Promise((a,u)=>{o=setTimeout(()=>{Ar(e,n,u)},t)}),i=r.finally(()=>{clearTimeout(o)});return Promise.race([s,i])},Nr=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},$r=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=br(()=>{e.kill()});return r.finally(()=>{o()})};Wt.exports={spawnedKill:Er,spawnedCancel:Gr,setupTimeout:Rr,validateTimeout:Nr,setExitHandler:$r}});var Ht=c((es,Xt)=>{"use strict";var P=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";P.writable=e=>P(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";P.readable=e=>P(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";P.duplex=e=>P.writable(e)&&P.readable(e);P.transform=e=>P.duplex(e)&&typeof e._transform=="function";Xt.exports=P});var Kt=c((ts,Vt)=>{"use strict";var{PassThrough:Or}=require("stream");Vt.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let s=new Or({objectMode:o});n&&s.setEncoding(n);let i=0,a=[];return s.on("data",u=>{a.push(u),o?i=a.length:i+=u.length}),s.getBufferedValue=()=>t?a:r?Buffer.concat(a,i):a.join(""),s.getBufferedLength=()=>i,s}});var zt=c((ns,k)=>{"use strict";var{constants:Br}=require("buffer"),kr=require("stream"),{promisify:qr}=require("util"),Lr=Kt(),Mr=qr(kr.pipeline),Y=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function ge(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=Lr(t);return await new Promise((o,s)=>{let i=a=>{a&&r.getBufferedLength()<=Br.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),s(a)};(async()=>{try{await Mr(e,r),o()}catch(a){i(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&i(new Y)})}),r.getBufferedValue()}k.exports=ge;k.exports.buffer=(e,t)=>ge(e,{...t,encoding:"buffer"});k.exports.array=(e,t)=>ge(e,{...t,array:!0});k.exports.MaxBufferError=Y});var Zt=c((rs,Jt)=>{"use strict";var{PassThrough:_r}=require("stream");Jt.exports=function(){var e=[],t=new _r({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(s){return Array.isArray(s)?(s.forEach(n),this):(e.push(s),s.once("end",o.bind(null,s)),s.once("error",t.emit.bind(t,"error")),s.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(s){e=e.filter(function(i){return i!==s}),!e.length&&t.readable&&t.end()}}});var tn=c((os,en)=>{"use strict";var Qt=Ht(),Yt=zt(),jr=Zt(),Wr=(e,t)=>{t===void 0||e.stdin===void 0||(Qt(t)?t.pipe(e.stdin):e.stdin.end(t))},Ur=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=jr();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Se=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Yt(e,{encoding:t,maxBuffer:r}):Yt.buffer(e,{maxBuffer:r})},Xr=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:s},i)=>{let a=ye(e,{encoding:r,buffer:o,maxBuffer:s}),u=ye(t,{encoding:r,buffer:o,maxBuffer:s}),l=ye(n,{encoding:r,buffer:o,maxBuffer:s*2});try{return await Promise.all([i,a,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Se(e,a),Se(t,u),Se(n,l)])}},Hr=({input:e})=>{if(Qt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};en.exports={handleInput:Wr,makeAllStream:Ur,getSpawnedResult:Xr,validateInputSync:Hr}});var rn=c((ss,nn)=>{"use strict";var Vr=(async()=>{})().constructor.prototype,Kr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Vr,e)]),zr=(e,t)=>{for(let[n,r]of Kr){let o=typeof t=="function"?(...s)=>Reflect.apply(r.value,t(),s):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},Jr=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});nn.exports={mergePromise:zr,getSpawnedPromise:Jr}});var an=c((is,sn)=>{"use strict";var on=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Zr=/^[\w.-]+$/,Yr=/"/g,Qr=e=>typeof e!="string"||Zr.test(e)?e:`"${e.replace(Yr,'\\"')}"`,eo=(e,t)=>on(e,t).join(" "),to=(e,t)=>on(e,t).map(n=>Qr(n)).join(" "),no=/ +/g,ro=e=>{let t=[];for(let n of e.trim().split(no)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};sn.exports={joinCommand:eo,getEscapedCommand:to,parseCommand:ro}});var mn=c((as,R)=>{"use strict";var oo=require("path"),xe=require("child_process"),so=St(),io=xt(),ao=It(),co=Tt(),Q=$t(),un=Bt(),{spawnedKill:uo,spawnedCancel:lo,setupTimeout:po,validateTimeout:fo,setExitHandler:mo}=Ut(),{handleInput:ho,getSpawnedResult:go,makeAllStream:So,validateInputSync:yo}=tn(),{mergePromise:cn,getSpawnedPromise:xo}=rn(),{joinCommand:ln,parseCommand:dn,getEscapedCommand:pn}=an(),Po=1e3*1e3*100,wo=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let s=t?{...process.env,...e}:e;return n?ao.env({env:s,cwd:r,execPath:o}):s},fn=(e,t,n={})=>{let r=so._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:Po,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=wo(n),n.stdio=un(n),process.platform==="win32"&&oo.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},q=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?io(t):t,ee=(e,t,n)=>{let r=fn(e,t,n),o=ln(e,t),s=pn(e,t);fo(r.options);let i;try{i=xe.spawn(r.file,r.args,r.options)}catch(S){let y=new xe.ChildProcess,x=Promise.reject(Q({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return cn(y,x)}let a=xo(i),u=po(i,r.options,a),l=mo(i,r.options,u),p={isCanceled:!1};i.kill=uo.bind(null,i.kill.bind(i)),i.cancel=lo.bind(null,i,p);let m=co(async()=>{let[{error:S,exitCode:y,signal:x,timedOut:v},L,M,Pn]=await go(i,r.options,l),Ee=q(r.options,L),Te=q(r.options,M),Fe=q(r.options,Pn);if(S||y!==0||x!==null){let Ce=Q({error:S,exitCode:y,signal:x,stdout:Ee,stderr:Te,all:Fe,command:o,escapedCommand:s,parsed:r,timedOut:v,isCanceled:p.isCanceled,killed:i.killed});if(!r.options.reject)return Ce;throw Ce}return{command:o,escapedCommand:s,exitCode:0,stdout:Ee,stderr:Te,all:Fe,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return ho(i,r.options.input),i.all=So(i,r.options),cn(i,m)};R.exports=ee;R.exports.sync=(e,t,n)=>{let r=fn(e,t,n),o=ln(e,t),s=pn(e,t);yo(r.options);let i;try{i=xe.spawnSync(r.file,r.args,r.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:s,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=q(r.options,i.stdout,i.error),u=q(r.options,i.stderr,i.error);if(i.error||i.status!==0||i.signal!==null){let l=Q({stdout:a,stderr:u,error:i.error,signal:i.signal,exitCode:i.status,command:o,escapedCommand:s,parsed:r,timedOut:i.error&&i.error.code==="ETIMEDOUT",isCanceled:!1,killed:i.signal!==null});if(!r.options.reject)return l;throw l}return{command:o,escapedCommand:s,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};R.exports.command=(e,t)=>{let[n,...r]=dn(e);return ee(n,r,t)};R.exports.commandSync=(e,t)=>{let[n,...r]=dn(e);return ee.sync(n,r,t)};R.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=un.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:s=process.execPath,nodeOptions:i=o}=n;return ee(s,[...i,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var Eo={};Tn(Eo,{default:()=>xn});module.exports=Fn(Eo);var w=require("@raycast/api"),ve=require("child_process");var g=require("@raycast/api"),N=require("child_process");var Pe=Ge(require("node:process"),1),we=Ge(mn(),1);async function Ie(e,{humanReadableOutput:t=!0}={}){if(Pe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=await(0,we.default)("osascript",["-e",e,n]);return r}function be(e,{humanReadableOutput:t=!0}={}){if(Pe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=we.default.sync("osascript",["-e",e,...n]);return r}var Io=async()=>Ie(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),bo=async()=>Ie(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),hn=async()=>{let e=[],n=(0,g.getPreferenceValues)().preferredFileManager,r=!1,o=n;try{o=(await(0,g.getFrontmostApplication)()).name}catch{console.log("Couldn't get frontmost application")}try{o=="Path Finder"&&n=="Path Finder"&&(await bo()).split(", ").forEach(a=>{e.includes(a)||e.push(a)})}catch{console.log("Couldn't get images from Path Finder"),r=!0}let s=(await Io()).split(", ");return o=="Finder"||n=="Finder"||r?e.push(...s):s.forEach(i=>{i.split("/").at(-2)=="Desktop"&&!e.includes(i)&&e.push(i)}),e},gn=async(e,t)=>{let n=`${g.environment.supportPath}/tmp.png`;(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/webp/dwebp`),(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/webp/cwebp`),(0,N.execSync)(`${g.environment.assetsPath}/webp/dwebp "${t}" -o "${n}" && ${e} "${n}" && ${g.environment.assetsPath}/webp/cwebp "${n}" -o "${t}" ; rm "${n}"`)},Sn=async(e,t)=>{let n=`${g.environment.supportPath}/tmp.bmp`;vo("BMP",t,n),(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/potrace/potrace`),(0,N.execSync)(`${e} "${n}" && ${g.environment.assetsPath}/potrace/potrace -s --tight -o "${t}" "${n}"; rm "${n}"`)},vo=(e,t,n)=>{be(`use framework "Foundation"

  -- Load SVG image from file
  set svgFilePath to "${t}"
  set svgData to current application's NSData's alloc()'s initWithContentsOfFile:svgFilePath
  
  -- Create image from SVG data
  set svgImage to current application's NSImage's alloc()'s initWithData:svgData
  
  -- Convert image to PNG data
  set tiffData to svgImage's TIFFRepresentation()
  set theBitmap to current application's NSBitmapImageRep's alloc()'s initWithData:tiffData
  set pngData to theBitmap's representationUsingType:(current application's NSBitmapImageFileType${e}) |properties|:(missing value)
  
  -- Save PNG data to file
  set pngFilePath to "${n}"
  pngData's writeToFile:pngFilePath atomically:true`)};var yn=(e,t)=>{let n=t==0?`(transform's scaleXBy:-1 yBy:1)
    (transform's translateXBy:(-(item 1 of item 2 of pdfRect)) yBy:0)`:`(transform's scaleXBy:1 yBy:-1)
    (transform's translateXBy:0 yBy:(-(item 2 of item 2 of pdfRect)))`;be(`use framework "Foundation"
  use framework "PDFKit"
  
  -- Load the PDF file as NSData
  set pdfData to current application's NSData's dataWithContentsOfFile:"${e}"
  
  -- Create a PDFDocument from the PDF data
  set pdfDoc to current application's PDFDocument's alloc()'s initWithData:pdfData
  
  -- Flip each page
  repeat with i from 0 to ((pdfDoc's pageCount()) - 1)
    set thePDFPage to (pdfDoc's pageAtIndex:i)
    set pdfRect to (thePDFPage's boundsForBox:(current application's kPDFDisplayBoxMediaBox))
    set flippedPdfImage to (current application's NSImage's alloc()'s initWithSize:(item 2 of pdfRect))
    
    flippedPdfImage's lockFocus()
    set transform to current application's NSAffineTransform's alloc()'s init()
    ${n}
    transform's concat()
    (thePDFPage's drawWithBox:(current application's kPDFDisplayBoxMediaBox))
    flippedPdfImage's unlockFocus()
    
    set newPage to (current application's PDFPage's alloc()'s initWithImage:flippedPdfImage)
    
    (pdfDoc's removePageAtIndex:i)
    (pdfDoc's insertPage:newPage atIndex:i)
  end repeat
  
  -- Write the modified PDF data to the file
  set flippedPdfData to pdfDoc's dataRepresentation()
  flippedPdfData's writeToFile:"${e}" atomically:true`)};async function xn(){let e=await hn();if(e.length===0||e.length===1&&e[0]===""){await(0,w.showToast)({title:"No images selected",style:w.Toast.Style.Failure});return}let t=await(0,w.showToast)({title:"Flipping in progress...",style:w.Toast.Style.Animated});if(e){let n=`image${e.length===1?"":"s"}`;try{let r='"'+e.join('" "')+'"';r.toLowerCase().includes("webp")||r.toLowerCase().includes("svg")||r.toLowerCase().includes("pdf")?e.forEach(o=>{o.toLowerCase().endsWith("webp")?gn("sips --flip horizontal",o):o.toLowerCase().endsWith("svg")?Sn("sips --flip horizontal",o):o.toLowerCase().endsWith("pdf")?yn(o,0):(0,ve.execSync)(`sips --flip horizontal "${o}"`)}):(0,ve.execSync)(`sips --flip horizontal ${r}`),t.title=`Flipped ${e.length.toString()} ${n} horizontally`,t.style=w.Toast.Style.Success}catch{t.title=`Failed to flip ${e.length.toString()} ${n}`,t.style=w.Toast.Style.Failure}}}0&&(module.exports={});
