(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),s=(a(15),a(4)),i=a(5),o=a(7),u=a(6),h=a(8),m=a(1),d=(a(17),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={text:"",allWords:[],words:[],sentences:[],timeout:null},a.handleKeypress=a.handleKeypress.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleKeypress",value:function(e){this.setState({text:e.target.value});var t=e.target.value.match(/\b[-?(\w+)?]+\b/gi);if(t){for(var a=[],n=0;n<t.length;n++){var l=t[n].toLowerCase();l in a?a[l]+=1:a[l]=1}this.setState({words:this.sortByIntProperty(a,!1)})}else this.setState({words:[]});this.setState({allWords:t});var r=this.state.text.split(/[.|!|?]+/g);this.setState({sentences:r})}},{key:"sortByIntProperty",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=[];for(var n in e)e.hasOwnProperty(n)&&a.push([n,e[n]]);return t?a.sort(function(e,t){return e[1]<t[1]?-1:1}):a.sort(function(e,t){return e[1]>t[1]?-1:1}),a}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"app"},l.a.createElement("header",{class:"App-header"},l.a.createElement("h1",null,"Word Counter")),l.a.createElement("textarea",{id:"maintext",onChange:function(t){return e.handleKeypress(t)}},this.state.text),l.a.createElement("div",null,l.a.createElement("table",{class:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{class:"left"},"Characters:"),l.a.createElement("td",{class:"middle"},this.state.text.length)),l.a.createElement("tr",null,l.a.createElement("td",{class:"left"},"Words:"),l.a.createElement("td",{class:"middle"},this.state.allWords?this.state.allWords.length:0)),l.a.createElement("tr",null,l.a.createElement("td",{class:"left"},"Sentences:"),l.a.createElement("td",{class:"middle"},this.state.sentences.length<=1?0:this.state.sentences.length-1))))),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("table",{class:"center"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{class:"left"},"Word"),l.a.createElement("th",{class:"middle"},"Frequency")),this.state.words.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",{class:"left"},e[0]),l.a.createElement("td",{class:"middle"},e[1]))})))),l.a.createElement("footer",null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.9ac7282a.chunk.js.map