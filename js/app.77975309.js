(function(e){function a(a){for(var o,i,c=a[0],l=a[1],u=a[2],s=0,d=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(a);while(d.length)d.shift()();return t.push.apply(t,u||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"b5eb2f13","chunk-0206bfa0":"bf1139bd","chunk-04b93936":"a08f07bc","chunk-0cfca828":"72027356","chunk-13303073":"3dae8ae2","chunk-13a6037e":"dbd60cae","chunk-1479a341":"e8690e33","chunk-1fb07a61":"100c6013","chunk-2c06842c":"16a56e5c","chunk-2d208d90":"24a5ba52","chunk-2d21d0e2":"1ee0d2d6","chunk-2d22c123":"dc2f2a45","chunk-2e80bb9a":"51526df7","chunk-3c94cd2f":"cd64dd00","chunk-4cdd78c0":"8091c4d2","chunk-515a8379":"d1243eae","chunk-522cec8c":"19dce072","chunk-53ccb27e":"69036e55","chunk-59974754":"5ed74a9a","chunk-7432e4d4":"6edfaf2a","chunk-766a929b":"3248ca2d","chunk-839300a6":"cfc29d91","chunk-c796899c":"df3d6156",comple:"2ec51eb0",creditos:"13fdfd7e",glosario:"a88a0fc8",intro:"47607f59",referencias:"51eca050",tema1:"6a1c357d",tema2:"a153e5b0",tema3:"45b668f5"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"989913e7","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"ebbdacb8","chunk-7432e4d4":"99a35118","chunk-766a929b":"cf032f53","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"a742f296",creditos:"282ed010",glosario:"f770eac9",intro:"0e433876",referencias:"908bf46f",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var u=t[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===r))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],f.parentNode.removeChild(f),n(t)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(a){s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",d.name="ChunkLoadError",d.type=o,d.request=i,n[1](d)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=s;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,l=(n("cf25"),n("2877")),u=Object(l["a"])(c,i,r,!1,null,null,null),s=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),f=n("ae58"),m=n("7e58");o["a"].use(d["a"]);var p=new d["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=p,h=n("1c2c"),g=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Pre y postest de campaña",descripcionCurso:"El pretest y el postest hacen parte del control que se realiza a la campaña publicitaria, de acuerdo con el proceso de la comunicación. Este control se lleva a cabo sobre el mensaje, la planeación de las estrategias y los resultados de la campaña.",imagenBannerPrincipal:n("a6f4"),fondoBannerPrincipal:n("f52c")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Medición de la campaña publicitaria",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"¿Qué se requiere para medir la campaña?",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Pretest y postest",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"ROI",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"¿Qué es el ROI?",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Indicadores KPI",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Cálculo del ROI",hash:"t_2_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Alard, J., y Monford, A. (2017). Plan de comunicación on y off en la práctica. ESIC Editorial."},{referencia:"Ávila, B., y Llamazares, R. F. (2018). Medición de audiencias. TOM micro. Utilidades en la elaboración de un plan de medios. ESIC Editorial."},{referencia:"Dos Santos, M. A. (2017). Investigación de mercados. Ediciones Díaz de Santos."},{referencia:"Neuromarketing. (2020). Test fisiológicos.",link:"https://neuromarketing.la/"},{referencia:"Rodríguez, I., Suárez, V. A. y García, M. M. (2008). Dirección publicitaria. Editorial UOC."},{referencia:"Soria, M., M. (2015). Plan de medios de comunicación e internet. Editorial CEP."},{referencia:"Turletti, P. (2018). El ROI de marketing y ventas. ESIC Editorial."}],glosario:[{termino:"Audiencia",significado:"número de personas expuestas a un medio o a un soporte de comunicación."},{termino:"Centrales de medios",significado:"compañías que compran grandes volúmenes de espacio publicitario a los medios de comunicación y luego los venden a las agencias y anunciantes."},{termino:"Investigación postest",significado:"investigación que se realiza desde el momento de la emisión a la finalización de la misma, al objeto de cuantificar el nivel de consecución de los objetivos publicitarios."},{termino:"Investigación pretest",significado:"investigación realizada con anterioridad a la emisión del anuncio y que pretende evaluar la capacidad que tiene la comunicación para alcanzar los objetivos de la campaña."},{termino:"Pupilometría",significado:"estudio que se tiene sobre los efectos que se producen en la pupila frente a determinados estímulos visuales."},{termino:"Target",significado:"público objetivo de una campaña publicitaria."},{termino:"Top of Mind",significado:"primera marca o referencia citada por un consumidor cuando se le pide que indique las marcas que hay en el mercado."}],complementario:[],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Manuel Augusto Arias López",cargo:"Instructor – Experto temático",centro:"Centro de Comercio y Servicios - Regional Quindío"},{nombre:"Andrea Velásquez Torres",cargo:"Apoyo experto temático",centro:"Centro de Comercio y Servicios - Regional Quindío"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología – Regional Distrito Capital"},{nombre:"Vilma Perilla Méndez",cargo:"Evaluadora instruccional",centro:"Centro de Gestión Industrial – Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Correctora de estilo",centro:"Centro para la Industria y la Comunicación Gráfica – Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Sandra Carolina Durán López",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Oleg Litvin",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Lady Adriana Ariza Luque",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=g;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new o["a"]({router:b,store:h["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},a6f4:function(e,a,n){e.exports=n.p+"img/banner-principal-img.6ec0e9a8.svg"},cf25:function(e,a,n){"use strict";n("fea6")},f52c:function(e,a,n){e.exports=n.p+"img/banner-principal-bg.d3a635b5.svg"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.77975309.js.map