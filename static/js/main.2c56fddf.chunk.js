(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),c=(a(15),a(4)),i=a(5),o=a(7),h=a(6),u=a(8),d=a(1),m=(a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={text:"",allWords:[],words:[],sentences:[],removedWords:new Set(["the","a"])},a.handleKeypress=a.handleKeypress.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"removeWords",value:function(e){var t=e.target.value.split("\n");t=t.map(function(e){return e.trim()}),t=new Set(t),console.log("rmWrds: ",t),this.setState({removedWords:t})}},{key:"handleKeypress",value:function(e){this.setState({text:e.target.value}),console.log("this.state.removedWords: ",this.state.removedWords);var t=e.target.value.match(/\b[-?(\w+)?]+\b/gi);if(t){for(var a=[],n=0;n<t.length;n++){var r=t[n].toLowerCase();this.state.removedWords.has(r)||(r in a?a[r]+=1:a[r]=1)}this.setState({words:this.sortByIntProperty(a,!1)})}else this.setState({words:[]});this.setState({allWords:t});var l=this.state.text.split(/[.|!|?]+/g);this.setState({sentences:l})}},{key:"sortByIntProperty",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=[];for(var n in e)e.hasOwnProperty(n)&&a.push([n,e[n]]);return t?a.sort(function(e,t){return e[1]<t[1]?-1:1}):a.sort(function(e,t){return e[1]>t[1]?-1:1}),a}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"app"},r.a.createElement("header",{class:"App-header"}),r.a.createElement("div",{id:"hiddenwords"},r.a.createElement("h3",null,"Hidden Words"),r.a.createElement("textarea",{onChange:function(t){e.removeWords(t)}},Array.from(this.state.removedWords).join("\n"))),r.a.createElement("div",{id:"main-outer"},r.a.createElement("div",{id:"main-inner"},r.a.createElement("div",{id:"main-header"},r.a.createElement("h2",null,"Word Counter")),r.a.createElement("textarea",{id:"maintext",onChange:function(t){return e.handleKeypress(t)},placeholder:"Enter text here..."},this.state.text),r.a.createElement("div",null,r.a.createElement("table",{class:"center",id:"basic-results"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null," Characters:  ",this.state.text.length),r.a.createElement("td",null,"Words: ",this.state.allWords?this.state.allWords.length:0),r.a.createElement("td",null,"Sentences: ",this.state.sentences.length<=1?0:this.state.sentences.length-1))))),r.a.createElement("div",{id:"wordfrequency"},r.a.createElement("table",{class:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{class:"left"},"Word"),r.a.createElement("th",{class:"middle"},"Frequency")),this.state.words.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",{class:"left"},e[0]),r.a.createElement("td",{class:"middle"},e[1]))})))))),r.a.createElement("footer",null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.2c56fddf.chunk.js.map