(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"picture":"./assets/images/1_0H1u5tkCmJuexkBdrl7a1g.jpeg"},{"id":2,"picture":"./assets/images/1_0mIyJGVyFOa5IIWn8dkeww.jpeg"},{"id":3,"picture":"./assets/images/fiona.jpg"},{"id":4,"picture":"./assets/images/1_WwtqhN8aOZVpvIqQIpw-Hg.jpeg"},{"id":5,"picture":"./assets/images/1_ZHytsEv0xXodLzXNN4tRDw.jpeg"},{"id":6,"picture":"./assets/images/1_gBGKRRH9UJkZpuTplgdnsQ.jpeg"},{"id":7,"picture":"./assets/images/Abraxas.jpg"},{"id":8,"picture":"./assets/images/Acdc_backinblack_cover.jpg"},{"id":9,"picture":"./assets/images/Bitches-brew.jpg"},{"id":10,"picture":"./assets/images/download.jpg"},{"id":11,"picture":"./assets/images/Fear-of-Music.jpg"},{"id":12,"picture":"./assets/images/Hotel-California.jpg"},{"id":13,"picture":"./assets/images/Joshua-Tree.jpg"},{"id":14,"picture":"./assets/images/Licensed-to-ill.jpg"},{"id":15,"picture":"./assets/images/Marvin-Gaye-Whats-Going-On-CD-ALBUM-581521.jpg"},{"id":16,"picture":"./assets/images/masterofpuppets_lg.jpg"},{"id":17,"picture":"./assets/images/Method_Man_The_Meth_Lab.jpg"},{"id":18,"picture":"./assets/images/Nirvana.jpg"},{"id":19,"picture":"./assets/images/Parallel-Lines.jpg"},{"id":20,"picture":"./assets/images/Pink_Floyd_-_Dark_Side_of_the_Moon.jpg"},{"id":21,"picture":"./assets/images/Rumours.jpg"},{"id":22,"picture":"./assets/images/signothetimes-560x560.jpg"},{"id":23,"picture":"./assets/images/Slave-to-the-Rhythm.jpg"},{"id":24,"picture":"./assets/images/The-Clash.jpg"}]')},,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),c=a(3),r=a.n(c),n=(a(13),a(4)),l=a(5),o=a(6),u=a(7),m=(a(14),a(1)),p=(a(15),function(e){return i.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),g=(a(16),function(e){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",{className:"brand animated lightSpeedIn alignLeft"},i.a.createElement("a",{href:"/clicky-game/"},e.title)),i.a.createElement("li",{id:"rw"},e.correctIncorrect),i.a.createElement("li",{className:"alignRight"},"Current: ",e.score," | Score - Top: ",e.topScore)))}),d=(a(17),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(18),function(e){return i.a.createElement("h1",{className:"title"},e.children)});function f(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=[e[a],e[t]];e[t]=s[0],e[a]=s[1]}return e}var k=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={image:m,currentScore:0,topScore:0,status:"",clicked:[]},e.shuffleImages=function(){var t=f(m);e.setState({image:t})},e.handleIncrement=function(){var t=e.state.currentScore+1;e.setState({currentScore:t,status:"You have already clicked this album."}),t>=e.state.topScore?e.setState({topScore:t}):24===t&&e.setState({status:"YOU ARE THE CHAMPION... OF THE WORLD!!"}),e.shuffleImages()},e.reset=function(){e.setState({currentScore:0,topScore:e.state.topScore,status:"You guessed incorrectly!",clicked:[]}),e.shuffleImages()},e.handleClick=function(t){-1===e.state.clicked.indexOf(t)?(e.handleIncrement(),e.setState({clicked:e.state.clicked.concat(t)})):e.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(d,null,i.a.createElement(g,{title:"Clicky Game",topScore:this.state.topScore,score:this.state.currentScore,correctIncorrect:this.state.correctIncorrect}),i.a.createElement(h,null," Click on an album cover to earn points.  You are only allowed to click on each album cover once!"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},this.state.image.map((function(t){return i.a.createElement(p,{key:t.id,id:t.id,image:t.picture,handleClick:e.handleClick,reset:e.reset,shuffleImages:e.shuffleImages})})))))}}]),a}(s.Component);r.a.render(i.a.createElement(k,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4cba9858.chunk.js.map