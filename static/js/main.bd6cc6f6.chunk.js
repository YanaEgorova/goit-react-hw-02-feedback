(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),i=a(3),s=a(4),l=a(5),u=a(7),d=a(6),m=a(8),b=(a(14),function(e){var t=e.children,a=e.title;return c.a.createElement("section",{className:"Section"},c.a.createElement("h1",{className:"Section-title"},a),t)});a(15);var f=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"Statistics-text"}," Good: ",t," ")," ",c.a.createElement("p",{className:"Statistics-text"}," Neutral: ",a," ")," ",c.a.createElement("p",{className:"Statistics-text"}," Bad: ",n," ")," ",c.a.createElement("p",{className:"Statistics-text"}," Total: ",r," ")," ",c.a.createElement("p",{className:"Statistics-text"}," Positive feedback: ",o," ")," ")},v=(a(16),function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("button",{className:"FeedbackOptions-button",key:e,type:"button",onClick:function(){return a(e)}},e)})))}),p=(a(17),function(e){var t=e.message;return c.a.createElement("p",{className:"Notification-text"},t)}),g=["good","neutral","bad"],h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},a.handleLeaveFeedback=function(e){a.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},a.countTotalFeedback=function(){var e=a.state;return e.good+e.neutral+e.bad},a.countPositiveFeedbackPercentage=function(){var e=a.state.good,t=a.countTotalFeedback();return Math.round(100*e/t)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{title:"Please leave feedback"},c.a.createElement(v,{options:g,onLeaveFeedback:this.handleLeaveFeedback})," ")," ",c.a.createElement(b,{title:"Statistics"}," ",e>0&&c.a.createElement(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t}),e<=0&&c.a.createElement(p,{message:"No feedback given"}))," ")}}]),t}(n.Component);o.a.render(c.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.bd6cc6f6.chunk.js.map