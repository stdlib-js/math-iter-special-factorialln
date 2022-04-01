// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var s=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=s,w=/./;var m=function(r){return"boolean"==typeof r};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return d&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var A=function(r){return h.call(r)},g=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&g.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,U=N,S=_;var P=A,F=function(r){var t,n,e;if(null==r)return S.call(r);n=r[U],t=E(r,U);try{r[U]=void 0}catch(t){return S.call(r)}return e=S.call(r),t?r[U]=n:delete r[U],e},I=j()?F:P,T=Boolean.prototype.toString;var x=I,G=function(r){try{return T.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},M=m,k=H;var B=b,L=function(r){return M(r)||k(r)},W=H;B(L,"isPrimitive",m),B(L,"isObject",W);var C="object"==typeof self?self:null,R="object"==typeof window?window:null,X=L.isPrimitive,Y=function(){return new Function("return this;")()},z=C,D=R,q=r(Object.freeze({__proto__:null}));var J=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Y()}if(z)return z;if(D)return D;if(q)return q;throw new Error("unexpected error. Unable to resolve global object.")},K=J(),Q=K.document&&K.document.childNodes,Z=Int8Array,$=w,rr=Q,tr=Z;var nr=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var er=function(){return/^\s*function\s*([^(]*)/i},or=er;b(or,"REGEXP",er());var ur=or,ir=I;var ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)},fr=ar;var cr=function(r){return null!==r&&"object"==typeof r};b(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!fr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(cr));var lr=cr;var vr=I,yr=ur.REGEXP,pr=function(r){return lr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var sr=function(r){var t,n,e;if(("Object"===(n=vr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=yr.exec(e.toString()))return t[1]}return pr(r)?"Buffer":n},br=sr;var wr=sr;var mr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?br(r).toLowerCase():t},dr=function(r){return wr(r).toLowerCase()},jr=nr()?dr:mr;var _r=function(r){return"function"===jr(r)},hr=_r;var Ar=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&hr(r.next)};var gr=function(r){return"number"==typeof r},Or=Number,Nr=Or.prototype.toString;var Er=I,Ur=Or,Sr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Pr=j();var Fr=function(r){return"object"==typeof r&&(r instanceof Ur||(Pr?Sr(r):"[object Number]"===Er(r)))},Ir=gr,Tr=Fr;var xr=b,Gr=function(r){return Ir(r)||Tr(r)},Vr=Fr;xr(Gr,"isPrimitive",gr),xr(Gr,"isObject",Vr);var Hr=Gr,Mr=O;var kr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Mr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Br=ar;var Lr=function(r){return"object"==typeof r&&null!==r&&!Br(r)},Wr=Object.getPrototypeOf;var Cr=function(r){return r.__proto__},Rr=I,Xr=Cr;var Yr=function(r){var t=Xr(r);return t||null===t?t:"[object Function]"===Rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},zr=Wr,Dr=Yr,qr=_r(Object.getPrototypeOf)?zr:Dr;var Jr=Lr,Kr=_r,Qr=function(r){return null==r?null:(r=Object(r),qr(r))},Zr=O,$r=I,rt=Object.prototype;var tt=function(r){var t;return!!Jr(r)&&(!(t=Qr(r))||!Zr(r,"constructor")&&Zr(t,"constructor")&&Kr(t.constructor)&&"[object Function]"===$r(t.constructor)&&Zr(t,"isPrototypeOf")&&Kr(t.isPrototypeOf)&&(t===rt||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))},nt=tt,et=O;var ot=b,ut=_r,it=Ar,at=Hr.isPrimitive,ft=kr,ct=function(r,t){return nt(t)?(et(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var lt=function r(t,n,e){var o,u,i,a;if(!it(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ut(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=ct(o,e)))throw i;return ot(u={},"next",f),ot(u,"return",c),ft&&ut(t[ft])&&ot(u,ft,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:at(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[ft](),n,o)}},vt=lt,yt=Math.floor,pt=yt;var st=function(r){return pt(r)===r&&r<0};var bt=function(r){return r!=r},wt=Number.POSITIVE_INFINITY,mt=Or.NEGATIVE_INFINITY,dt=wt,jt=mt;var _t=function(r){return r===dt||r===jt};var ht=function(r){return Math.abs(r)},At=I,gt="function"==typeof Uint32Array;var Ot="function"==typeof Uint32Array?Uint32Array:null,Nt=function(r){return gt&&r instanceof Uint32Array||"[object Uint32Array]"===At(r)},Et=Ot;var Ut=function(){var r,t;if("function"!=typeof Et)return!1;try{t=new Et(t=[1,3.14,-3.14,4294967296,4294967297]),r=Nt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var St="function"==typeof Uint32Array?Uint32Array:void 0,Pt=function(){throw new Error("not implemented")},Ft=Ut()?St:Pt,It=I,Tt="function"==typeof Float64Array;var xt="function"==typeof Float64Array?Float64Array:null,Gt=function(r){return Tt&&r instanceof Float64Array||"[object Float64Array]"===It(r)},Vt=xt;var Ht=function(){var r,t;if("function"!=typeof Vt)return!1;try{t=new Vt([1,3.14,-3.14,NaN]),r=Gt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Mt="function"==typeof Float64Array?Float64Array:void 0,kt=function(){throw new Error("not implemented")},Bt=Ht()?Mt:kt,Lt=I,Wt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null,Rt=function(r){return Wt&&r instanceof Uint8Array||"[object Uint8Array]"===Lt(r)},Xt=Ct;var Yt=function(){var r,t;if("function"!=typeof Xt)return!1;try{t=new Xt(t=[1,3.14,-3.14,256,257]),r=Rt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var zt="function"==typeof Uint8Array?Uint8Array:void 0,Dt=function(){throw new Error("not implemented")},qt=Yt()?zt:Dt,Jt=I,Kt="function"==typeof Uint16Array;var Qt="function"==typeof Uint16Array?Uint16Array:null,Zt=function(r){return Kt&&r instanceof Uint16Array||"[object Uint16Array]"===Jt(r)},$t=Qt;var rn=function(){var r,t;if("function"!=typeof $t)return!1;try{t=new $t(t=[1,3.14,-3.14,65536,65537]),r=Zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var tn,nn="function"==typeof Uint16Array?Uint16Array:void 0,en=function(){throw new Error("not implemented")},on={uint16:rn()?nn:en,uint8:qt};(tn=new on.uint16(1))[0]=4660;var un=52===new on.uint8(tn.buffer)[0],an=Ft,fn=!0===un?1:0,cn=new Bt(1),ln=new an(cn.buffer);var vn=function(r){return cn[0]=r,ln[fn]},yn=Ft,pn=!0===un?1:0,sn=new Bt(1),bn=new yn(sn.buffer);var wn=function(r,t){return sn[0]=r,bn[pn]=t>>>0,sn[0]};var mn=vn,dn=wn,jn=bt,_n=mt,hn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},An=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},gn=.6931471803691238,On=1.9082149292705877e-10;var Nn=function(r){var t,n,e,o,u,i,a,f,c,l,v;return 0===r?_n:jn(r)||r<0?NaN:(o=0,(n=mn(r))<1048576&&(o-=54,n=mn(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=dn(r,n|1072693248^a))-1,(1048575&2+n)<3?0===i?0===o?0:o*gn+o*On:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*gn-(u-o*On-i)):(a=n-398458|0,f=440401-n|0,e=(l=(v=(c=i/(2+i))*c)*v)*hn(l),u=v*An(l)+e,(a|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+u)):o*gn-(t-(c*(t+u)+o*On)-i)):0===o?i-c*(i-u):o*gn-(c*(i-u)-o*On-i))))},En=Nn,Un=Math.ceil,Sn=yt,Pn=Un;var Fn=function(r){return r<0?Pn(r):Sn(r)};var In=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Tn=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var xn=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*In(u),e+=o*o*Tn(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},Gn=-.16666666666666632;var Vn=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(Gn+o*n):r-(o*(.5*t-e*n)-t-e*Gn)},Hn=Ft,Mn=!0===un?0:1,kn=new Bt(1),Bn=new Hn(kn.buffer);var Ln,Wn,Cn=function(r){return kn[0]=r,Bn[Mn]};!0===un?(Ln=1,Wn=0):(Ln=0,Wn=1);var Rn=Ft,Xn={HIGH:Ln,LOW:Wn},Yn=new Bt(1),zn=new Rn(Yn.buffer),Dn=Xn.HIGH,qn=Xn.LOW;var Jn,Kn,Qn=function(r,t){return zn[Dn]=r,zn[qn]=t,Yn[0]},Zn=Qn;!0===un?(Jn=1,Kn=0):(Jn=0,Kn=1);var $n=Ft,re={HIGH:Jn,LOW:Kn},te=new Bt(1),ne=new $n(te.buffer),ee=re.HIGH,oe=re.LOW;var ue=function(r,t){return te[0]=t,r[0]=ne[ee],r[1]=ne[oe],r};var ie=function(r,t){return 1===arguments.length?ue([0,0],r):ue(r,t)},ae=ie,fe=vn,ce=Zn,le=[0,0];var ve=function(r,t){var n,e;return ae(le,r),n=le[0],n&=2147483647,e=fe(t),ce(n|=e&=2147483648,le[1])},ye=_t,pe=bt,se=ht;var be=function(r,t){return pe(t)||ye(t)?(r[0]=t,r[1]=0,r):0!==t&&se(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var we=vn;var me=function(r){var t=we(r);return(t=(2146435072&t)>>>20)-1023|0},de=wt,je=mt,_e=bt,he=_t,Ae=ve,ge=function(r,t){return 1===arguments.length?be([0,0],r):be(r,t)},Oe=me,Ne=ie,Ee=Zn,Ue=[0,0],Se=[0,0];var Pe=function(r,t){var n,e;return 0===t||0===r||_e(r)||he(r)?r:(ge(Ue,r),t+=Ue[1],(t+=Oe(r=Ue[0]))<-1074?Ae(0,r):t>1023?r<0?je:de:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,Ne(Se,r),n=Se[0],n&=2148532223,e*Ee(n|=t+1023<<20,Se[1])))};var Fe=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var Ie=yt,Te=Pe,xe=function(r){return Fe(0,r)},Ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ve=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],He=5.960464477539063e-8,Me=xe(20),ke=xe(20),Be=xe(20),Le=xe(20);function We(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,s,b,w,m;for(y=u,m=e[n],w=n,p=0;w>0;p++)l=He*m|0,Le[p]=m-16777216*l|0,m=e[w-1]+l,w-=1;if(m=Te(m,o),m-=8*Ie(.125*m),m-=b=0|m,v=0,o>0?(b+=p=Le[n-1]>>24-o,Le[n-1]-=p<<24-o,v=Le[n-1]>>23-o):0===o?v=Le[n-1]>>23:m>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<n;p++)w=Le[p],0===c?0!==w&&(c=1,Le[p]=16777216-w):Le[p]=16777215-w;if(o>0)switch(o){case 1:Le[n-1]&=8388607;break;case 2:Le[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=Te(1,o)))}if(0===m){for(w=0,p=n-1;p>=u;p--)w|=Le[p];if(0===w){for(s=1;0===Le[u-s];s++);for(p=n+1;p<=n+s;p++){for(f[a+p]=Ge[i+p],l=0,w=0;w<=a;w++)l+=r[w]*f[a+(p-w)];e[p]=l}return We(r,t,n+=s,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===Le[n];)n-=1,o-=24;else(m=Te(m,-o))>=16777216?(l=He*m|0,Le[n]=m-16777216*l|0,o+=24,Le[n+=1]=l):Le[n]=0|m;for(l=Te(1,o),p=n;p>=0;p--)e[p]=l*Le[p],l*=He;for(p=n;p>=0;p--){for(l=0,s=0;s<=y&&s<=n-p;s++)l+=Ve[s]*e[p+s];Be[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Be[p];for(t[0]=0===v?l:-l,l=Be[0]-l,p=1;p<=n;p++)l+=Be[p];return t[1]=0===v?l:-l,7&b}var Ce=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)Me[f]=c<0?0:Ge[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*Me[i+(f-c)];ke[f]=o}return 4,We(r,t,4,ke,a,4,u,i,Me)},Re=Math.round,Xe=vn;var Ye=vn,ze=Cn,De=Zn,qe=Ce,Je=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Re(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Xe(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Xe(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Ke=1.5707963267341256,Qe=6077100506506192e-26,Ze=2*Qe,$e=4*Qe,ro=[0,0,0],to=[0,0];var no=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Ye(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Je(r,o,t):o<=1073928572?r>0?(f=r-Ke,t[0]=f-Qe,t[1]=f-t[0]-Qe,1):(f=r+Ke,t[0]=f+Qe,t[1]=f-t[0]+Qe,-1):r>0?(f=r-2*Ke,t[0]=f-Ze,t[1]=f-t[0]-Ze,2):(f=r+2*Ke,t[0]=f+Ze,t[1]=f-t[0]+Ze,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Je(r,o,t):r>0?(f=r-3*Ke,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Ke,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Je(r,o,t):r>0?(f=r-4*Ke,t[0]=f-$e,t[1]=f-t[0]-$e,4):(f=r+4*Ke,t[0]=f+$e,t[1]=f-t[0]+$e,-4);if(o<1094263291)return Je(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=ze(r),f=De(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)ro[i]=0|f,f=16777216*(f-ro[i]);for(ro[2]=f,u=3;0===ro[u-1];)u-=1;return a=qe(ro,to,e,u),r<0?(t[0]=-to[0],t[1]=-to[1],-a):(t[0]=to[0],t[1]=to[1],a)},eo=vn,oo=xn,uo=Vn,io=no,ao=[0,0];var fo=vn,co=xn,lo=Vn,vo=no,yo=[0,0];var po=bt,so=_t,bo=function(r){var t;if(t=eo(r),(t&=2147483647)<=1072243195)return t<1044381696?1:oo(r,0);if(t>=2146435072)return NaN;switch(3&io(r,ao)){case 0:return oo(ao[0],ao[1]);case 1:return-uo(ao[0],ao[1]);case 2:return-oo(ao[0],ao[1]);default:return uo(ao[0],ao[1])}},wo=function(r){var t;if(t=fo(r),(t&=2147483647)<=1072243195)return t<1045430272?r:lo(r,0);if(t>=2146435072)return NaN;switch(3&vo(r,yo)){case 0:return lo(yo[0],yo[1]);case 1:return co(yo[0],yo[1]);case 2:return-lo(yo[0],yo[1]);default:return-co(yo[0],yo[1])}},mo=ht,jo=ve,_o=3.141592653589793;var ho=bt,Ao=_t,go=ht,Oo=En,No=Fn,Eo=function(r){var t,n;return po(r)||so(r)?NaN:0===(t=mo(n=r%2))||1===t?jo(0,n):t<.25?wo(_o*n):t<.75?jo(bo(_o*(t=.5-t)),n):t<1.25?(n=jo(1,n)-n,wo(_o*n)):t<1.75?-jo(bo(_o*(t-=1.5)),n):(n-=jo(2,n),wo(_o*n))},Uo=wt,So=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Po=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Fo=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Io=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},To=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},xo=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Go=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},Vo=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Ho=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Mo=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},ko=1.4616321449683622,Bo=1.4616321449683622;var Lo=st,Wo=function(r){var t,n,e,o,u,i,a,f;if(ho(r)||Ao(r))return r;if(0===r)return Uo;if(r<0?(t=!0,r=-r):t=!1,r<8470329472543003e-37)return-Oo(r);if(t){if(r>=4503599627370496)return Uo;if(0===(o=Eo(r)))return Uo;n=Oo(3.141592653589793/go(o*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(f=-Oo(r),r>=ko-1+.27?(i=1-r,e=0):r>=ko-1-.27?(i=r-(Bo-1),e=1):(i=r,e=2)):(f=0,r>=ko+.27?(i=2-r,e=0):r>=ko-.27?(i=r-Bo,e=1):(i=r-1,e=2)),e){case 0:f+=i*(.07721566490153287+(a=i*i)*So(a))+a*(.3224670334241136+a*Po(a))-.5*i;break;case 1:f+=-.12148629053584961+((a=i*i)*(.48383612272381005+(u=a*i)*To(u))-(-3638676997039505e-33-u*(u*xo(u)-.1475877229945939+i*(.06462494023913339+u*Go(u)))));break;case 2:f+=-.5*i+i*(i*Vo(i)-.07721566490153287)/(1+i*Ho(i))}else if(r<8)switch(f=.5*(i=r-(e=No(r)))+i*(i*Io(i)-.07721566490153287)/(1+i*Fo(i)),a=1,e){case 7:a*=i+6;case 6:a*=i+5;case 5:a*=i+4;case 4:a*=i+3;case 3:f+=Oo(a*=i+2)}else f=r<0x400000000000000?(r-.5)*((o=Oo(r))-1)+(u=.4189385332046727+(a=1/r)*Mo(i=a*a)):r*(Oo(r)-1);return t&&(f=n-f),f};var Co=vt,Ro=function(r){return Lo(r)?NaN:Wo(r+1)};var Xo=function(r){return Co(r,Ro)},Yo=Xo;export{Yo as default};
//# sourceMappingURL=mod.js.map
