(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{255:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(256),o=e.n(r),c={name:"TrendingUpIcon",props:{size:{type:String,default:"24",validator:s=>!isNaN(s)||s.length>=2&&!isNaN(s.slice(0,s.length-1))&&"x"===s.slice(-1)}},functional:!0,render(t,n){const e="x"===n.props.size.slice(-1)?n.props.size.slice(0,n.props.size.length-1)+"em":parseInt(n.props.size)+"px",r=n.data.attrs||{};return r.width=r.width||e,r.height=r.height||e,n.data.attrs=r,t("svg",o()([{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},n.data]),[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"}})])}}},256:function(t,n){var e=/^(attrs|props|on|nativeOn|class|style|hook)$/;function r(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}}t.exports=function(t){return t.reduce((function(a,b){var t,n,o,c,l;for(o in b)if(t=a[o],n=b[o],t&&e.test(o))if("class"===o&&("string"==typeof t&&(l=t,a[o]=t={},t[l]=!0),"string"==typeof n&&(l=n,b[o]=n={},n[l]=!0)),"on"===o||"nativeOn"===o||"hook"===o)for(c in n)t[c]=r(t[c],n[c]);else if(Array.isArray(t))a[o]=t.concat(n);else if(Array.isArray(n))a[o]=[t].concat(n);else for(c in n)t[c]=n[c];else a[o]=b[o];return a}),{})}}}]);