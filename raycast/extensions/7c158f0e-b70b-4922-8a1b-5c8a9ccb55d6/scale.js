"use strict";var Pn=Object.create;var _=Object.defineProperty;var wn=Object.getOwnPropertyDescriptor;var In=Object.getOwnPropertyNames;var bn=Object.getPrototypeOf,vn=Object.prototype.hasOwnProperty;var c=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),En=(e,t)=>{for(var n in t)_(e,n,{get:t[n],enumerable:!0})},De=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of In(t))!vn.call(e,o)&&o!==n&&_(e,o,{get:()=>t[o],enumerable:!(r=wn(t,o))||r.enumerable});return e};var Ce=(e,t,n)=>(n=e!=null?Pn(bn(e)):{},De(t||!e||!e.__esModule?_(n,"default",{value:e,enumerable:!0}):n,e)),Tn=e=>De(_({},"__esModule",{value:!0}),e);var Re=c((To,Ne)=>{Ne.exports=Ae;Ae.sync=Dn;var Ge=require("fs");function Fn(e,t){var n=t.pathExt!==void 0?t.pathExt:process.env.PATHEXT;if(!n||(n=n.split(";"),n.indexOf("")!==-1))return!0;for(var r=0;r<n.length;r++){var o=n[r].toLowerCase();if(o&&e.substr(-o.length).toLowerCase()===o)return!0}return!1}function $e(e,t,n){return!e.isSymbolicLink()&&!e.isFile()?!1:Fn(t,n)}function Ae(e,t,n){Ge.stat(e,function(r,o){n(r,r?!1:$e(o,e,t))})}function Dn(e,t){return $e(Ge.statSync(e),e,t)}});var Le=c((Fo,qe)=>{qe.exports=Be;Be.sync=Cn;var Oe=require("fs");function Be(e,t,n){Oe.stat(e,function(r,o){n(r,r?!1:ke(o,t))})}function Cn(e,t){return ke(Oe.statSync(e),t)}function ke(e,t){return e.isFile()&&Gn(e,t)}function Gn(e,t){var n=e.mode,r=e.uid,o=e.gid,i=t.uid!==void 0?t.uid:process.getuid&&process.getuid(),s=t.gid!==void 0?t.gid:process.getgid&&process.getgid(),a=parseInt("100",8),u=parseInt("010",8),l=parseInt("001",8),p=a|u,h=n&l||n&u&&o===s||n&a&&r===i||n&p&&i===0;return h}});var _e=c((Co,Me)=>{var Do=require("fs"),j;process.platform==="win32"||global.TESTING_WINDOWS?j=Re():j=Le();Me.exports=te;te.sync=$n;function te(e,t,n){if(typeof t=="function"&&(n=t,t={}),!n){if(typeof Promise!="function")throw new TypeError("callback not provided");return new Promise(function(r,o){te(e,t||{},function(i,s){i?o(i):r(s)})})}j(e,t||{},function(r,o){r&&(r.code==="EACCES"||t&&t.ignoreErrors)&&(r=null,o=!1),n(r,o)})}function $n(e,t){try{return j.sync(e,t||{})}catch(n){if(t&&t.ignoreErrors||n.code==="EACCES")return!1;throw n}}});var Ke=c((Go,Ve)=>{var E=process.platform==="win32"||process.env.OSTYPE==="cygwin"||process.env.OSTYPE==="msys",je=require("path"),An=E?";":":",We=_e(),Ue=e=>Object.assign(new Error(`not found: ${e}`),{code:"ENOENT"}),Xe=(e,t)=>{let n=t.colon||An,r=e.match(/\//)||E&&e.match(/\\/)?[""]:[...E?[process.cwd()]:[],...(t.path||process.env.PATH||"").split(n)],o=E?t.pathExt||process.env.PATHEXT||".EXE;.CMD;.BAT;.COM":"",i=E?o.split(n):[""];return E&&e.indexOf(".")!==-1&&i[0]!==""&&i.unshift(""),{pathEnv:r,pathExt:i,pathExtExe:o}},He=(e,t,n)=>{typeof t=="function"&&(n=t,t={}),t||(t={});let{pathEnv:r,pathExt:o,pathExtExe:i}=Xe(e,t),s=[],a=l=>new Promise((p,h)=>{if(l===r.length)return t.all&&s.length?p(s):h(Ue(e));let m=r[l],S=/^".*"$/.test(m)?m.slice(1,-1):m,y=je.join(S,e),x=!S&&/^\.[\\\/]/.test(e)?e.slice(0,2)+y:y;p(u(x,l,0))}),u=(l,p,h)=>new Promise((m,S)=>{if(h===o.length)return m(a(p+1));let y=o[h];We(l+y,{pathExt:i},(x,v)=>{if(!x&&v)if(t.all)s.push(l+y);else return m(l+y);return m(u(l,p,h+1))})});return n?a(0).then(l=>n(null,l),n):a(0)},Nn=(e,t)=>{t=t||{};let{pathEnv:n,pathExt:r,pathExtExe:o}=Xe(e,t),i=[];for(let s=0;s<n.length;s++){let a=n[s],u=/^".*"$/.test(a)?a.slice(1,-1):a,l=je.join(u,e),p=!u&&/^\.[\\\/]/.test(e)?e.slice(0,2)+l:l;for(let h=0;h<r.length;h++){let m=p+r[h];try{if(We.sync(m,{pathExt:o}))if(t.all)i.push(m);else return m}catch{}}}if(t.all&&i.length)return i;if(t.nothrow)return null;throw Ue(e)};Ve.exports=He;He.sync=Nn});var re=c(($o,ne)=>{"use strict";var ze=(e={})=>{let t=e.env||process.env;return(e.platform||process.platform)!=="win32"?"PATH":Object.keys(t).reverse().find(r=>r.toUpperCase()==="PATH")||"Path"};ne.exports=ze;ne.exports.default=ze});var Qe=c((Ao,Ye)=>{"use strict";var Je=require("path"),Rn=Ke(),On=re();function Ze(e,t){let n=e.options.env||process.env,r=process.cwd(),o=e.options.cwd!=null,i=o&&process.chdir!==void 0&&!process.chdir.disabled;if(i)try{process.chdir(e.options.cwd)}catch{}let s;try{s=Rn.sync(e.command,{path:n[On({env:n})],pathExt:t?Je.delimiter:void 0})}catch{}finally{i&&process.chdir(r)}return s&&(s=Je.resolve(o?e.options.cwd:"",s)),s}function Bn(e){return Ze(e)||Ze(e,!0)}Ye.exports=Bn});var et=c((No,se)=>{"use strict";var oe=/([()\][%!^"`<>&|;, *?])/g;function kn(e){return e=e.replace(oe,"^$1"),e}function qn(e,t){return e=`${e}`,e=e.replace(/(\\*)"/g,'$1$1\\"'),e=e.replace(/(\\*)$/,"$1$1"),e=`"${e}"`,e=e.replace(oe,"^$1"),t&&(e=e.replace(oe,"^$1")),e}se.exports.command=kn;se.exports.argument=qn});var nt=c((Ro,tt)=>{"use strict";tt.exports=/^#!(.*)/});var ot=c((Oo,rt)=>{"use strict";var Ln=nt();rt.exports=(e="")=>{let t=e.match(Ln);if(!t)return null;let[n,r]=t[0].replace(/#! ?/,"").split(" "),o=n.split("/").pop();return o==="env"?r:r?`${o} ${r}`:o}});var it=c((Bo,st)=>{"use strict";var ie=require("fs"),Mn=ot();function _n(e){let n=Buffer.alloc(150),r;try{r=ie.openSync(e,"r"),ie.readSync(r,n,0,150,0),ie.closeSync(r)}catch{}return Mn(n.toString())}st.exports=_n});var lt=c((ko,ut)=>{"use strict";var jn=require("path"),at=Qe(),ct=et(),Wn=it(),Un=process.platform==="win32",Xn=/\.(?:com|exe)$/i,Hn=/node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;function Vn(e){e.file=at(e);let t=e.file&&Wn(e.file);return t?(e.args.unshift(e.file),e.command=t,at(e)):e.file}function Kn(e){if(!Un)return e;let t=Vn(e),n=!Xn.test(t);if(e.options.forceShell||n){let r=Hn.test(t);e.command=jn.normalize(e.command),e.command=ct.command(e.command),e.args=e.args.map(i=>ct.argument(i,r));let o=[e.command].concat(e.args).join(" ");e.args=["/d","/s","/c",`"${o}"`],e.command=process.env.comspec||"cmd.exe",e.options.windowsVerbatimArguments=!0}return e}function zn(e,t,n){t&&!Array.isArray(t)&&(n=t,t=null),t=t?t.slice(0):[],n=Object.assign({},n);let r={command:e,args:t,options:n,file:void 0,original:{command:e,args:t}};return n.shell?r:Kn(r)}ut.exports=zn});var ft=c((qo,pt)=>{"use strict";var ae=process.platform==="win32";function ce(e,t){return Object.assign(new Error(`${t} ${e.command} ENOENT`),{code:"ENOENT",errno:"ENOENT",syscall:`${t} ${e.command}`,path:e.command,spawnargs:e.args})}function Jn(e,t){if(!ae)return;let n=e.emit;e.emit=function(r,o){if(r==="exit"){let i=dt(o,t,"spawn");if(i)return n.call(e,"error",i)}return n.apply(e,arguments)}}function dt(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawn"):null}function Zn(e,t){return ae&&e===1&&!t.file?ce(t.original,"spawnSync"):null}pt.exports={hookChildProcess:Jn,verifyENOENT:dt,verifyENOENTSync:Zn,notFoundError:ce}});var gt=c((Lo,T)=>{"use strict";var mt=require("child_process"),ue=lt(),le=ft();function ht(e,t,n){let r=ue(e,t,n),o=mt.spawn(r.command,r.args,r.options);return le.hookChildProcess(o,r),o}function Yn(e,t,n){let r=ue(e,t,n),o=mt.spawnSync(r.command,r.args,r.options);return o.error=o.error||le.verifyENOENTSync(o.status,r),o}T.exports=ht;T.exports.spawn=ht;T.exports.sync=Yn;T.exports._parse=ue;T.exports._enoent=le});var yt=c((Mo,St)=>{"use strict";St.exports=e=>{let t=typeof e=="string"?`
`:`
`.charCodeAt(),n=typeof e=="string"?"\r":"\r".charCodeAt();return e[e.length-1]===t&&(e=e.slice(0,e.length-1)),e[e.length-1]===n&&(e=e.slice(0,e.length-1)),e}});var wt=c((_o,O)=>{"use strict";var R=require("path"),xt=re(),Pt=e=>{e={cwd:process.cwd(),path:process.env[xt()],execPath:process.execPath,...e};let t,n=R.resolve(e.cwd),r=[];for(;t!==n;)r.push(R.join(n,"node_modules/.bin")),t=n,n=R.resolve(n,"..");let o=R.resolve(e.cwd,e.execPath,"..");return r.push(o),r.concat(e.path).join(R.delimiter)};O.exports=Pt;O.exports.default=Pt;O.exports.env=e=>{e={env:process.env,...e};let t={...e.env},n=xt({env:t});return e.path=t[n],t[n]=O.exports(e),t}});var bt=c((jo,de)=>{"use strict";var It=(e,t)=>{for(let n of Reflect.ownKeys(t))Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e};de.exports=It;de.exports.default=It});var Et=c((Wo,U)=>{"use strict";var Qn=bt(),W=new WeakMap,vt=(e,t={})=>{if(typeof e!="function")throw new TypeError("Expected a function");let n,r=0,o=e.displayName||e.name||"<anonymous>",i=function(...s){if(W.set(i,++r),r===1)n=e.apply(this,s),e=null;else if(t.throw===!0)throw new Error(`Function \`${o}\` can only be called once`);return n};return Qn(i,e),W.set(i,r),i};U.exports=vt;U.exports.default=vt;U.exports.callCount=e=>{if(!W.has(e))throw new Error(`The given function \`${e.name}\` is not wrapped by the \`onetime\` package`);return W.get(e)}});var Tt=c(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.SIGNALS=void 0;var er=[{name:"SIGHUP",number:1,action:"terminate",description:"Terminal closed",standard:"posix"},{name:"SIGINT",number:2,action:"terminate",description:"User interruption with CTRL-C",standard:"ansi"},{name:"SIGQUIT",number:3,action:"core",description:"User interruption with CTRL-\\",standard:"posix"},{name:"SIGILL",number:4,action:"core",description:"Invalid machine instruction",standard:"ansi"},{name:"SIGTRAP",number:5,action:"core",description:"Debugger breakpoint",standard:"posix"},{name:"SIGABRT",number:6,action:"core",description:"Aborted",standard:"ansi"},{name:"SIGIOT",number:6,action:"core",description:"Aborted",standard:"bsd"},{name:"SIGBUS",number:7,action:"core",description:"Bus error due to misaligned, non-existing address or paging error",standard:"bsd"},{name:"SIGEMT",number:7,action:"terminate",description:"Command should be emulated but is not implemented",standard:"other"},{name:"SIGFPE",number:8,action:"core",description:"Floating point arithmetic error",standard:"ansi"},{name:"SIGKILL",number:9,action:"terminate",description:"Forced termination",standard:"posix",forced:!0},{name:"SIGUSR1",number:10,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGSEGV",number:11,action:"core",description:"Segmentation fault",standard:"ansi"},{name:"SIGUSR2",number:12,action:"terminate",description:"Application-specific signal",standard:"posix"},{name:"SIGPIPE",number:13,action:"terminate",description:"Broken pipe or socket",standard:"posix"},{name:"SIGALRM",number:14,action:"terminate",description:"Timeout or timer",standard:"posix"},{name:"SIGTERM",number:15,action:"terminate",description:"Termination",standard:"ansi"},{name:"SIGSTKFLT",number:16,action:"terminate",description:"Stack is empty or overflowed",standard:"other"},{name:"SIGCHLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"posix"},{name:"SIGCLD",number:17,action:"ignore",description:"Child process terminated, paused or unpaused",standard:"other"},{name:"SIGCONT",number:18,action:"unpause",description:"Unpaused",standard:"posix",forced:!0},{name:"SIGSTOP",number:19,action:"pause",description:"Paused",standard:"posix",forced:!0},{name:"SIGTSTP",number:20,action:"pause",description:'Paused using CTRL-Z or "suspend"',standard:"posix"},{name:"SIGTTIN",number:21,action:"pause",description:"Background process cannot read terminal input",standard:"posix"},{name:"SIGBREAK",number:21,action:"terminate",description:"User interruption with CTRL-BREAK",standard:"other"},{name:"SIGTTOU",number:22,action:"pause",description:"Background process cannot write to terminal output",standard:"posix"},{name:"SIGURG",number:23,action:"ignore",description:"Socket received out-of-band data",standard:"bsd"},{name:"SIGXCPU",number:24,action:"core",description:"Process timed out",standard:"bsd"},{name:"SIGXFSZ",number:25,action:"core",description:"File too big",standard:"bsd"},{name:"SIGVTALRM",number:26,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGPROF",number:27,action:"terminate",description:"Timeout or timer",standard:"bsd"},{name:"SIGWINCH",number:28,action:"ignore",description:"Terminal window size changed",standard:"bsd"},{name:"SIGIO",number:29,action:"terminate",description:"I/O is available",standard:"other"},{name:"SIGPOLL",number:29,action:"terminate",description:"Watched event",standard:"other"},{name:"SIGINFO",number:29,action:"ignore",description:"Request for process information",standard:"other"},{name:"SIGPWR",number:30,action:"terminate",description:"Device running out of power",standard:"systemv"},{name:"SIGSYS",number:31,action:"core",description:"Invalid system call",standard:"other"},{name:"SIGUNUSED",number:31,action:"terminate",description:"Invalid system call",standard:"other"}];X.SIGNALS=er});var pe=c(F=>{"use strict";Object.defineProperty(F,"__esModule",{value:!0});F.SIGRTMAX=F.getRealtimeSignals=void 0;var tr=function(){let e=Dt-Ft+1;return Array.from({length:e},nr)};F.getRealtimeSignals=tr;var nr=function(e,t){return{name:`SIGRT${t+1}`,number:Ft+t,action:"terminate",description:"Application-specific signal (realtime)",standard:"posix"}},Ft=34,Dt=64;F.SIGRTMAX=Dt});var Ct=c(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.getSignals=void 0;var rr=require("os"),or=Tt(),sr=pe(),ir=function(){let e=(0,sr.getRealtimeSignals)();return[...or.SIGNALS,...e].map(ar)};H.getSignals=ir;var ar=function({name:e,number:t,description:n,action:r,forced:o=!1,standard:i}){let{signals:{[e]:s}}=rr.constants,a=s!==void 0;return{name:e,number:a?s:t,description:n,supported:a,action:r,forced:o,standard:i}}});var $t=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});D.signalsByNumber=D.signalsByName=void 0;var cr=require("os"),Gt=Ct(),ur=pe(),lr=function(){return(0,Gt.getSignals)().reduce(dr,{})},dr=function(e,{name:t,number:n,description:r,supported:o,action:i,forced:s,standard:a}){return{...e,[t]:{name:t,number:n,description:r,supported:o,action:i,forced:s,standard:a}}},pr=lr();D.signalsByName=pr;var fr=function(){let e=(0,Gt.getSignals)(),t=ur.SIGRTMAX+1,n=Array.from({length:t},(r,o)=>mr(o,e));return Object.assign({},...n)},mr=function(e,t){let n=hr(e,t);if(n===void 0)return{};let{name:r,description:o,supported:i,action:s,forced:a,standard:u}=n;return{[e]:{name:r,number:e,description:o,supported:i,action:s,forced:a,standard:u}}},hr=function(e,t){let n=t.find(({name:r})=>cr.constants.signals[r]===e);return n!==void 0?n:t.find(r=>r.number===e)},gr=fr();D.signalsByNumber=gr});var Nt=c((Ko,At)=>{"use strict";var{signalsByName:Sr}=$t(),yr=({timedOut:e,timeout:t,errorCode:n,signal:r,signalDescription:o,exitCode:i,isCanceled:s})=>e?`timed out after ${t} milliseconds`:s?"was canceled":n!==void 0?`failed with ${n}`:r!==void 0?`was killed with ${r} (${o})`:i!==void 0?`failed with exit code ${i}`:"failed",xr=({stdout:e,stderr:t,all:n,error:r,signal:o,exitCode:i,command:s,escapedCommand:a,timedOut:u,isCanceled:l,killed:p,parsed:{options:{timeout:h}}})=>{i=i===null?void 0:i,o=o===null?void 0:o;let m=o===void 0?void 0:Sr[o].description,S=r&&r.code,x=`Command ${yr({timedOut:u,timeout:h,errorCode:S,signal:o,signalDescription:m,exitCode:i,isCanceled:l})}: ${s}`,v=Object.prototype.toString.call(r)==="[object Error]",L=v?`${x}
${r.message}`:x,M=[L,t,e].filter(Boolean).join(`
`);return v?(r.originalMessage=r.message,r.message=M):r=new Error(M),r.shortMessage=L,r.command=s,r.escapedCommand=a,r.exitCode=i,r.signal=o,r.signalDescription=m,r.stdout=e,r.stderr=t,n!==void 0&&(r.all=n),"bufferedData"in r&&delete r.bufferedData,r.failed=!0,r.timedOut=Boolean(u),r.isCanceled=l,r.killed=p&&!u,r};At.exports=xr});var Ot=c((zo,fe)=>{"use strict";var V=["stdin","stdout","stderr"],Pr=e=>V.some(t=>e[t]!==void 0),Rt=e=>{if(!e)return;let{stdio:t}=e;if(t===void 0)return V.map(r=>e[r]);if(Pr(e))throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${V.map(r=>`\`${r}\``).join(", ")}`);if(typeof t=="string")return t;if(!Array.isArray(t))throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof t}\``);let n=Math.max(t.length,V.length);return Array.from({length:n},(r,o)=>t[o])};fe.exports=Rt;fe.exports.node=e=>{let t=Rt(e);return t==="ipc"?"ipc":t===void 0||typeof t=="string"?[t,t,t,"ipc"]:t.includes("ipc")?t:[...t,"ipc"]}});var Bt=c((Jo,K)=>{K.exports=["SIGABRT","SIGALRM","SIGHUP","SIGINT","SIGTERM"];process.platform!=="win32"&&K.exports.push("SIGVTALRM","SIGXCPU","SIGXFSZ","SIGUSR2","SIGTRAP","SIGSYS","SIGQUIT","SIGIOT");process.platform==="linux"&&K.exports.push("SIGIO","SIGPOLL","SIGPWR","SIGSTKFLT","SIGUNUSED")});var _t=c((Zo,$)=>{var d=global.process,I=function(e){return e&&typeof e=="object"&&typeof e.removeListener=="function"&&typeof e.emit=="function"&&typeof e.reallyExit=="function"&&typeof e.listeners=="function"&&typeof e.kill=="function"&&typeof e.pid=="number"&&typeof e.on=="function"};I(d)?(kt=require("assert"),C=Bt(),qt=/^win/i.test(d.platform),B=require("events"),typeof B!="function"&&(B=B.EventEmitter),d.__signal_exit_emitter__?f=d.__signal_exit_emitter__:(f=d.__signal_exit_emitter__=new B,f.count=0,f.emitted={}),f.infinite||(f.setMaxListeners(1/0),f.infinite=!0),$.exports=function(e,t){if(!I(global.process))return function(){};kt.equal(typeof e,"function","a callback must be provided for exit handler"),G===!1&&me();var n="exit";t&&t.alwaysLast&&(n="afterexit");var r=function(){f.removeListener(n,e),f.listeners("exit").length===0&&f.listeners("afterexit").length===0&&z()};return f.on(n,e),r},z=function(){!G||!I(global.process)||(G=!1,C.forEach(function(t){try{d.removeListener(t,J[t])}catch{}}),d.emit=Z,d.reallyExit=he,f.count-=1)},$.exports.unload=z,b=function(t,n,r){f.emitted[t]||(f.emitted[t]=!0,f.emit(t,n,r))},J={},C.forEach(function(e){J[e]=function(){if(!!I(global.process)){var n=d.listeners(e);n.length===f.count&&(z(),b("exit",null,e),b("afterexit",null,e),qt&&e==="SIGHUP"&&(e="SIGINT"),d.kill(d.pid,e))}}}),$.exports.signals=function(){return C},G=!1,me=function(){G||!I(global.process)||(G=!0,f.count+=1,C=C.filter(function(t){try{return d.on(t,J[t]),!0}catch{return!1}}),d.emit=Mt,d.reallyExit=Lt)},$.exports.load=me,he=d.reallyExit,Lt=function(t){!I(global.process)||(d.exitCode=t||0,b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),he.call(d,d.exitCode))},Z=d.emit,Mt=function(t,n){if(t==="exit"&&I(global.process)){n!==void 0&&(d.exitCode=n);var r=Z.apply(this,arguments);return b("exit",d.exitCode,null),b("afterexit",d.exitCode,null),r}else return Z.apply(this,arguments)}):$.exports=function(){return function(){}};var kt,C,qt,B,f,z,b,J,G,me,he,Lt,Z,Mt});var Wt=c((Yo,jt)=>{"use strict";var wr=require("os"),Ir=_t(),br=1e3*5,vr=(e,t="SIGTERM",n={})=>{let r=e(t);return Er(e,t,n,r),r},Er=(e,t,n,r)=>{if(!Tr(t,n,r))return;let o=Dr(n),i=setTimeout(()=>{e("SIGKILL")},o);i.unref&&i.unref()},Tr=(e,{forceKillAfterTimeout:t},n)=>Fr(e)&&t!==!1&&n,Fr=e=>e===wr.constants.signals.SIGTERM||typeof e=="string"&&e.toUpperCase()==="SIGTERM",Dr=({forceKillAfterTimeout:e=!0})=>{if(e===!0)return br;if(!Number.isFinite(e)||e<0)throw new TypeError(`Expected the \`forceKillAfterTimeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`);return e},Cr=(e,t)=>{e.kill()&&(t.isCanceled=!0)},Gr=(e,t,n)=>{e.kill(t),n(Object.assign(new Error("Timed out"),{timedOut:!0,signal:t}))},$r=(e,{timeout:t,killSignal:n="SIGTERM"},r)=>{if(t===0||t===void 0)return r;let o,i=new Promise((a,u)=>{o=setTimeout(()=>{Gr(e,n,u)},t)}),s=r.finally(()=>{clearTimeout(o)});return Promise.race([i,s])},Ar=({timeout:e})=>{if(e!==void 0&&(!Number.isFinite(e)||e<0))throw new TypeError(`Expected the \`timeout\` option to be a non-negative integer, got \`${e}\` (${typeof e})`)},Nr=async(e,{cleanup:t,detached:n},r)=>{if(!t||n)return r;let o=Ir(()=>{e.kill()});return r.finally(()=>{o()})};jt.exports={spawnedKill:vr,spawnedCancel:Cr,setupTimeout:$r,validateTimeout:Ar,setExitHandler:Nr}});var Xt=c((Qo,Ut)=>{"use strict";var P=e=>e!==null&&typeof e=="object"&&typeof e.pipe=="function";P.writable=e=>P(e)&&e.writable!==!1&&typeof e._write=="function"&&typeof e._writableState=="object";P.readable=e=>P(e)&&e.readable!==!1&&typeof e._read=="function"&&typeof e._readableState=="object";P.duplex=e=>P.writable(e)&&P.readable(e);P.transform=e=>P.duplex(e)&&typeof e._transform=="function";Ut.exports=P});var Vt=c((es,Ht)=>{"use strict";var{PassThrough:Rr}=require("stream");Ht.exports=e=>{e={...e};let{array:t}=e,{encoding:n}=e,r=n==="buffer",o=!1;t?o=!(n||r):n=n||"utf8",r&&(n=null);let i=new Rr({objectMode:o});n&&i.setEncoding(n);let s=0,a=[];return i.on("data",u=>{a.push(u),o?s=a.length:s+=u.length}),i.getBufferedValue=()=>t?a:r?Buffer.concat(a,s):a.join(""),i.getBufferedLength=()=>s,i}});var Kt=c((ts,k)=>{"use strict";var{constants:Or}=require("buffer"),Br=require("stream"),{promisify:kr}=require("util"),qr=Vt(),Lr=kr(Br.pipeline),Y=class extends Error{constructor(){super("maxBuffer exceeded"),this.name="MaxBufferError"}};async function ge(e,t){if(!e)throw new Error("Expected a stream");t={maxBuffer:1/0,...t};let{maxBuffer:n}=t,r=qr(t);return await new Promise((o,i)=>{let s=a=>{a&&r.getBufferedLength()<=Or.MAX_LENGTH&&(a.bufferedData=r.getBufferedValue()),i(a)};(async()=>{try{await Lr(e,r),o()}catch(a){s(a)}})(),r.on("data",()=>{r.getBufferedLength()>n&&s(new Y)})}),r.getBufferedValue()}k.exports=ge;k.exports.buffer=(e,t)=>ge(e,{...t,encoding:"buffer"});k.exports.array=(e,t)=>ge(e,{...t,array:!0});k.exports.MaxBufferError=Y});var Jt=c((ns,zt)=>{"use strict";var{PassThrough:Mr}=require("stream");zt.exports=function(){var e=[],t=new Mr({objectMode:!0});return t.setMaxListeners(0),t.add=n,t.isEmpty=r,t.on("unpipe",o),Array.prototype.slice.call(arguments).forEach(n),t;function n(i){return Array.isArray(i)?(i.forEach(n),this):(e.push(i),i.once("end",o.bind(null,i)),i.once("error",t.emit.bind(t,"error")),i.pipe(t,{end:!1}),this)}function r(){return e.length==0}function o(i){e=e.filter(function(s){return s!==i}),!e.length&&t.readable&&t.end()}}});var en=c((rs,Qt)=>{"use strict";var Yt=Xt(),Zt=Kt(),_r=Jt(),jr=(e,t)=>{t===void 0||e.stdin===void 0||(Yt(t)?t.pipe(e.stdin):e.stdin.end(t))},Wr=(e,{all:t})=>{if(!t||!e.stdout&&!e.stderr)return;let n=_r();return e.stdout&&n.add(e.stdout),e.stderr&&n.add(e.stderr),n},Se=async(e,t)=>{if(!!e){e.destroy();try{return await t}catch(n){return n.bufferedData}}},ye=(e,{encoding:t,buffer:n,maxBuffer:r})=>{if(!(!e||!n))return t?Zt(e,{encoding:t,maxBuffer:r}):Zt.buffer(e,{maxBuffer:r})},Ur=async({stdout:e,stderr:t,all:n},{encoding:r,buffer:o,maxBuffer:i},s)=>{let a=ye(e,{encoding:r,buffer:o,maxBuffer:i}),u=ye(t,{encoding:r,buffer:o,maxBuffer:i}),l=ye(n,{encoding:r,buffer:o,maxBuffer:i*2});try{return await Promise.all([s,a,u,l])}catch(p){return Promise.all([{error:p,signal:p.signal,timedOut:p.timedOut},Se(e,a),Se(t,u),Se(n,l)])}},Xr=({input:e})=>{if(Yt(e))throw new TypeError("The `input` option cannot be a stream in sync mode")};Qt.exports={handleInput:jr,makeAllStream:Wr,getSpawnedResult:Ur,validateInputSync:Xr}});var nn=c((os,tn)=>{"use strict";var Hr=(async()=>{})().constructor.prototype,Vr=["then","catch","finally"].map(e=>[e,Reflect.getOwnPropertyDescriptor(Hr,e)]),Kr=(e,t)=>{for(let[n,r]of Vr){let o=typeof t=="function"?(...i)=>Reflect.apply(r.value,t(),i):r.value.bind(t);Reflect.defineProperty(e,n,{...r,value:o})}return e},zr=e=>new Promise((t,n)=>{e.on("exit",(r,o)=>{t({exitCode:r,signal:o})}),e.on("error",r=>{n(r)}),e.stdin&&e.stdin.on("error",r=>{n(r)})});tn.exports={mergePromise:Kr,getSpawnedPromise:zr}});var sn=c((ss,on)=>{"use strict";var rn=(e,t=[])=>Array.isArray(t)?[e,...t]:[e],Jr=/^[\w.-]+$/,Zr=/"/g,Yr=e=>typeof e!="string"||Jr.test(e)?e:`"${e.replace(Zr,'\\"')}"`,Qr=(e,t)=>rn(e,t).join(" "),eo=(e,t)=>rn(e,t).map(n=>Yr(n)).join(" "),to=/ +/g,no=e=>{let t=[];for(let n of e.trim().split(to)){let r=t[t.length-1];r&&r.endsWith("\\")?t[t.length-1]=`${r.slice(0,-1)} ${n}`:t.push(n)}return t};on.exports={joinCommand:Qr,getEscapedCommand:eo,parseCommand:no}});var fn=c((is,A)=>{"use strict";var ro=require("path"),xe=require("child_process"),oo=gt(),so=yt(),io=wt(),ao=Et(),Q=Nt(),cn=Ot(),{spawnedKill:co,spawnedCancel:uo,setupTimeout:lo,validateTimeout:po,setExitHandler:fo}=Wt(),{handleInput:mo,getSpawnedResult:ho,makeAllStream:go,validateInputSync:So}=en(),{mergePromise:an,getSpawnedPromise:yo}=nn(),{joinCommand:un,parseCommand:ln,getEscapedCommand:dn}=sn(),xo=1e3*1e3*100,Po=({env:e,extendEnv:t,preferLocal:n,localDir:r,execPath:o})=>{let i=t?{...process.env,...e}:e;return n?io.env({env:i,cwd:r,execPath:o}):i},pn=(e,t,n={})=>{let r=oo._parse(e,t,n);return e=r.command,t=r.args,n=r.options,n={maxBuffer:xo,buffer:!0,stripFinalNewline:!0,extendEnv:!0,preferLocal:!1,localDir:n.cwd||process.cwd(),execPath:process.execPath,encoding:"utf8",reject:!0,cleanup:!0,all:!1,windowsHide:!0,...n},n.env=Po(n),n.stdio=cn(n),process.platform==="win32"&&ro.basename(e,".exe")==="cmd"&&t.unshift("/q"),{file:e,args:t,options:n,parsed:r}},q=(e,t,n)=>typeof t!="string"&&!Buffer.isBuffer(t)?n===void 0?void 0:"":e.stripFinalNewline?so(t):t,ee=(e,t,n)=>{let r=pn(e,t,n),o=un(e,t),i=dn(e,t);po(r.options);let s;try{s=xe.spawn(r.file,r.args,r.options)}catch(S){let y=new xe.ChildProcess,x=Promise.reject(Q({error:S,stdout:"",stderr:"",all:"",command:o,escapedCommand:i,parsed:r,timedOut:!1,isCanceled:!1,killed:!1}));return an(y,x)}let a=yo(s),u=lo(s,r.options,a),l=fo(s,r.options,u),p={isCanceled:!1};s.kill=co.bind(null,s.kill.bind(s)),s.cancel=uo.bind(null,s,p);let m=ao(async()=>{let[{error:S,exitCode:y,signal:x,timedOut:v},L,M,xn]=await ho(s,r.options,l),ve=q(r.options,L),Ee=q(r.options,M),Te=q(r.options,xn);if(S||y!==0||x!==null){let Fe=Q({error:S,exitCode:y,signal:x,stdout:ve,stderr:Ee,all:Te,command:o,escapedCommand:i,parsed:r,timedOut:v,isCanceled:p.isCanceled,killed:s.killed});if(!r.options.reject)return Fe;throw Fe}return{command:o,escapedCommand:i,exitCode:0,stdout:ve,stderr:Ee,all:Te,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}});return mo(s,r.options.input),s.all=go(s,r.options),an(s,m)};A.exports=ee;A.exports.sync=(e,t,n)=>{let r=pn(e,t,n),o=un(e,t),i=dn(e,t);So(r.options);let s;try{s=xe.spawnSync(r.file,r.args,r.options)}catch(l){throw Q({error:l,stdout:"",stderr:"",all:"",command:o,escapedCommand:i,parsed:r,timedOut:!1,isCanceled:!1,killed:!1})}let a=q(r.options,s.stdout,s.error),u=q(r.options,s.stderr,s.error);if(s.error||s.status!==0||s.signal!==null){let l=Q({stdout:a,stderr:u,error:s.error,signal:s.signal,exitCode:s.status,command:o,escapedCommand:i,parsed:r,timedOut:s.error&&s.error.code==="ETIMEDOUT",isCanceled:!1,killed:s.signal!==null});if(!r.options.reject)return l;throw l}return{command:o,escapedCommand:i,exitCode:0,stdout:a,stderr:u,failed:!1,timedOut:!1,isCanceled:!1,killed:!1}};A.exports.command=(e,t)=>{let[n,...r]=ln(e);return ee(n,r,t)};A.exports.commandSync=(e,t)=>{let[n,...r]=ln(e);return ee.sync(n,r,t)};A.exports.node=(e,t,n={})=>{t&&!Array.isArray(t)&&typeof t=="object"&&(n=t,t=[]);let r=cn.node(n),o=process.execArgv.filter(a=>!a.startsWith("--inspect")),{nodePath:i=process.execPath,nodeOptions:s=o}=n;return ee(i,[...s,e,...Array.isArray(t)?t:[]],{...n,stdin:void 0,stdout:void 0,stderr:void 0,stdio:r,shell:!1})}});var vo={};En(vo,{default:()=>yn});module.exports=Tn(vo);var w=require("@raycast/api"),be=require("child_process");var g=require("@raycast/api"),N=require("child_process");var Pe=Ce(require("node:process"),1),we=Ce(fn(),1);async function Ie(e,{humanReadableOutput:t=!0}={}){if(Pe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=await(0,we.default)("osascript",["-e",e,n]);return r}function mn(e,{humanReadableOutput:t=!0}={}){if(Pe.default.platform!=="darwin")throw new Error("macOS only");let n=t?[]:["-ss"],{stdout:r}=we.default.sync("osascript",["-e",e,...n]);return r}var wo=async()=>Ie(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),Io=async()=>Ie(`set imageTypes to {"PNG", "JPG", "JPEG", "TIF", "HEIF", "GIF", "ICO", "ICNS", "ASTC", "BMP", "DDS", "EXR", "JP2", "KTX", "Portable Bitmap", "Adobe Photoshop", "PVR", "TGA", "WebP", "SVG", "PDF", "HEIC"}

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
    end tell`),hn=async()=>{let e=[],n=(0,g.getPreferenceValues)().preferredFileManager,r=!1,o=n;try{o=(await(0,g.getFrontmostApplication)()).name}catch{console.log("Couldn't get frontmost application")}try{o=="Path Finder"&&n=="Path Finder"&&(await Io()).split(", ").forEach(a=>{e.includes(a)||e.push(a)})}catch{console.log("Couldn't get images from Path Finder"),r=!0}let i=(await wo()).split(", ");return o=="Finder"||n=="Finder"||r?e.push(...i):i.forEach(s=>{s.split("/").at(-2)=="Desktop"&&!e.includes(s)&&e.push(s)}),e},gn=async(e,t)=>{let n=`${g.environment.supportPath}/tmp.png`;(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/webp/dwebp`),(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/webp/cwebp`),(0,N.execSync)(`${g.environment.assetsPath}/webp/dwebp "${t}" -o "${n}" && ${e} "${n}" && ${g.environment.assetsPath}/webp/cwebp "${n}" -o "${t}" ; rm "${n}"`)},Sn=async(e,t)=>{let n=`${g.environment.supportPath}/tmp.bmp`;bo("BMP",t,n),(0,N.execSync)(`chmod +x ${g.environment.assetsPath}/potrace/potrace`),(0,N.execSync)(`${e} "${n}" && ${g.environment.assetsPath}/potrace/potrace -s --tight -o "${t}" "${n}"; rm "${n}"`)},bo=(e,t,n)=>{mn(`use framework "Foundation"

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
  pngData's writeToFile:pngFilePath atomically:true`)};async function yn(e){let{scaleFactor:t}=e.arguments,n=parseFloat(t);if(isNaN(n)){await(0,w.showToast)({title:"Scale factor must be a number",style:w.Toast.Style.Failure});return}let r=await hn();if(r.length===0||r.length===1&&r[0]===""){await(0,w.showToast)({title:"No images selected",style:w.Toast.Style.Failure});return}let o=await(0,w.showToast)({title:"Scaling in progress...",style:w.Toast.Style.Animated});if(r){let i=`image${r.length===1?"":"s"}`;try{for(let s of r){let a=(0,be.execSync)(`sips -g pixelWidth -g pixelHeight "${s}"`).toString().split(/(: |\n)/g),u=parseInt(a[4]),l=parseInt(a[8]);s.toLowerCase().endsWith("webp")?gn(`sips --resampleHeightWidth ${l*n} ${u*n}`,s):s.toLowerCase().endsWith("svg")?Sn(`sips --resampleHeightWidth ${l*n} ${u*n}`,s):(0,be.execSync)(`sips --resampleHeightWidth ${l*n} ${u*n} "${s}"`)}o.title=`Scaled ${r.length.toString()} ${i}`,o.style=w.Toast.Style.Success}catch(s){console.log(s),o.title=`Failed to scale ${r.length.toString()} ${i}`,o.style=w.Toast.Style.Failure}}}0&&(module.exports={});