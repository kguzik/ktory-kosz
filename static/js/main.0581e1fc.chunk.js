(this.webpackJsonpktorykosz=this.webpackJsonpktorykosz||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(2),s=r.n(o),l=(r(12),r(3)),c=r(4),i=r(6),u=r(5),k=(r(13),[{text:"Worek papierowy",basket:"Papier",color:"blue"},{text:"Szklane opakowanie po kosmetykach",basket:"Szk\u0142o",color:"green"},{text:"Obierki",basket:"Odpadki biodegradowalne",color:"brown"},{text:"Puszka po konserwach",basket:"Metale i tworzywa sztuczne",color:"yellow"},{text:"Gazeta, czasopismo",basket:"Papier",color:"blue"},{text:"Szklane butelki",basket:"Szk\u0142o",color:"green"},{text:"Ga\u0142\u0119zie drzew i krzew\xf3w",basket:"Odpadki biodegradowalne",color:"brown"},{text:"Plastikowa torba",basket:"Metale i tworzywa sztuczne",color:"yellow"}]),w=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).state={filteredUsers:k},e}return Object(c.a)(r,[{key:"filterUsers",value:function(e){var t=this,r=e.currentTarget.value;this.getFilteredUsersForText(r).then((function(e){t.setState({filteredUsers:e})}))}},{key:"getFilteredUsersForText",value:function(e){return new Promise((function(t){var r=250*(Math.random()+1);setTimeout((function(){var r=k.filter((function(t){return t.text.toLowerCase().includes(e.toLowerCase())}));t(r)}),r)}))}},{key:"render",value:function(){return n.a.createElement("div",{class:"container-fluid p-0 m-0"},n.a.createElement("div",{class:"input-container"},n.a.createElement("p",null,"Co chcesz wyrzuci\u0107?"),n.a.createElement("input",{onInput:this.filterUsers.bind(this),placeholder:"Wpisz produkt"})),n.a.createElement(p,{users:this.state.filteredUsers}))}}]),r}(n.a.Component),p=function(e){var t=e.users;return t.length>0?n.a.createElement("ul",{class:"row p-0 m-0"},t.map((function(e){return n.a.createElement("li",{class:"col-12 col-sm-6 col-lg-4","data-color":e.color,key:e.text},e.text,n.a.createElement("span",null,"\u21e9"),n.a.createElement("span",null,e.basket))}))):n.a.createElement("p",{class:"text-center p-4 none-result"},"Brak wynik\xf3w, spr\xf3buj wyszuka\u0107 ponownie.")},d=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,r){e.exports=r(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.0581e1fc.chunk.js.map