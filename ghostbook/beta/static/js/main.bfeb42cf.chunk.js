(this.webpackJsonpghostbook=this.webpackJsonpghostbook||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(8),s=n(2),r=n(3),c=n(4),a=n(6),o=n(5),d=n(0),l=n(1),v=n.n(l),h=n(11),b=n.n(h),u=(n(17),{GHOST_ORB:"Ghost orb",SPIRIT_BOX:"Spirit box",FINGERPRINTS:"Fingerprints",EMF_5:"EMF Level 5",FREEZING:"Freezing temperatures",GHOST_WRITING:"Ghost writing",DOTS_PROJECTOR:"D.O.T.S projector"}),j=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.evidence_list.map((function(e){return Object(d.jsx)("li",{children:e},e)}));return Object(d.jsxs)("div",{className:"ghost",children:[Object(d.jsx)("div",{className:"name",children:this.props.name}),Object(d.jsx)("ul",{className:"evidenceList",children:e})]})}}]),n}(v.a.Component),O=n(7),f="evidenceSelected",p="evidenceNotSelected",_="evidenceDisabled",g="evidenceRuledOut";function m(e){return Object(d.jsx)("div",{className:"button resetButton",onClick:e.onClick,children:"Reset"})}function k(e){var t="evidenceButton button "+e.state;return Object(d.jsx)("li",{className:t,onClick:e.onClick,children:e.name})}var y=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).renderEvidenceButton=function(e){var t=e[0],n=e[1];return Object(d.jsx)(k,{name:t,state:n,onClick:function(){return i.props.handleEvidenceClick(t)}},t)},i.state={observed_evidence:e.observed_evidence},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("section",{className:"observations",children:[Object(d.jsx)("h1",{children:"My observations"}),Object(d.jsx)("ul",{className:"observationList",children:Array.from(this.state.observed_evidence.entries()).map(this.renderEvidenceButton)}),Object(d.jsx)(m,{onClick:function(){return e.props.handleResetClick()}})]})}}]),n}(v.a.Component),x=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).renderGhostEntry=function(e){var t=e[0],n=e[1].evidence_list;return Object(d.jsx)(j,{name:t,evidence_list:n},t)},i.state={candidate_scores:e.candidate_scores},i}return Object(c.a)(n,[{key:"get_visible_ghosts",value:function(){var e,t=new Map,n=Object(s.a)(this.state.candidate_scores);try{for(n.s();!(e=n.n()).done;){var r=Object(i.a)(e.value,2),c=r[0];r[1]>=0&&t.set(c,{evidence_list:O[0][c].evidence_list,score:0})}}catch(a){n.e(a)}finally{n.f()}return t}},{key:"render",value:function(){var e=Object.keys(O[0]).length;return this.get_visible_ghosts().size<e&&this.get_visible_ghosts().size>0?Object(d.jsxs)("section",{className:"candidates",children:[Object(d.jsx)("h1",{children:" Possible ghosts"}),Object(d.jsx)("div",{className:"candidateList",children:Array.from(this.get_visible_ghosts().entries()).map(this.renderGhostEntry)})]}):Object(d.jsxs)("section",{className:"candidates",children:[Object(d.jsx)("h1",{children:" Possible ghosts"}),Object(d.jsx)("div",{className:"candidateList",children:Object(d.jsx)("div",{children:"No ghosts match the selected evidence."})})]})}}]),n}(v.a.Component);function F(e){return Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Phasmophobia Ghostbook"})})}var S=function(e){Object(a.a)(n,e);var t=Object(o.a)(n);function n(e){var i;Object(r.a)(this,n),i=t.call(this,e);var s=new Map;Object.values(u).forEach((function(e){s.set(e,p)}));var c=new Map;return Object.keys(O[0]).forEach((function(e){return c.set(e,0)})),i.state={observed_evidence:s,candidate_scores:c},i}return Object(c.a)(n,[{key:"handleEvidenceClick",value:function(e){var t=this.state.observed_evidence,n=t.get(e),r=this.state.candidate_scores;switch(n){case p:t.set(e,f);break;case f:t.set(e,g);break;case g:t.set(e,p)}var c,a=Object(s.a)(r.keys());try{for(a.s();!(c=a.n()).done;){var o,d=c.value,l=0,v=Array.from(O[0][d].evidence_list),h=Object(s.a)(t);try{for(h.s();!(o=h.n()).done;){var b=Object(i.a)(o.value,2),u=b[0],j=b[1];if(j===f){if(!v.includes(u)){l=-10;break}l+=10}else if(j===g&&v.includes(u)){l=-10;break}}}catch(w){h.e(w)}finally{h.f()}r.set(d,l)}}catch(w){a.e(w)}finally{a.f()}var m,k=new Set,y=Object(s.a)(r.entries());try{for(y.s();!(m=y.n()).done;){var x=Object(i.a)(m.value,2),F=x[0];if(x[1]>=0)Array.from(O[0][F].evidence_list).forEach((function(e){return k.add(e)}))}}catch(w){y.e(w)}finally{y.f()}if(k.size>0){var S,E=Object(s.a)(t);try{for(E.s();!(S=E.n()).done;){var G=Object(i.a)(S.value,2),N=G[0],C=G[1];k.has(N)||C!==p?k.has(N)&&C===_&&t.set(N,p):t.set(N,_)}}catch(w){E.e(w)}finally{E.f()}}this.setState({observed_evidence:t,candidate_scores:r})}},{key:"handleResetClick",value:function(){var e,t=this.state.observed_evidence,n=Object(s.a)(t.keys());try{for(n.s();!(e=n.n()).done;){var i=e.value;t.set(i,p)}}catch(d){n.e(d)}finally{n.f()}var r,c=this.state.candidate_scores,a=Object(s.a)(c.keys());try{for(a.s();!(r=a.n()).done;){var o=r.value;c.set(o,0)}}catch(d){a.e(d)}finally{a.f()}this.setState({observed_evidence:t,candidate_scores:c})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"ghostBook",children:[Object(d.jsx)(F,{}),Object(d.jsxs)("section",{className:"content",children:[Object(d.jsx)(y,{observed_evidence:this.state.observed_evidence,handleEvidenceClick:function(t){return e.handleEvidenceClick(t)},handleResetClick:function(){return e.handleResetClick()}}),Object(d.jsx)(x,{candidate_scores:this.state.candidate_scores})]})]})}}]),n}(v.a.Component);b.a.render(Object(d.jsx)(S,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"Banshee":{"evidence_list":["Fingerprints","Ghost orb","D.O.T.S projector"]},"Demon":{"evidence_list":["Fingerprints","Ghost writing","Freezing temperatures"]},"Goryo":{"evidence_list":["EMF Level 5","Fingerprints","D.O.T.S projector"]},"Hantu":{"evidence_list":["Fingerprints","Ghost orb","Freezing temperatures"]},"Jinn":{"evidence_list":["EMF Level 5","Fingerprints","Freezing temperatures"]},"Mare":{"evidence_list":["Spirit box","Ghost orb","Ghost writing"]},"Myling":{"evidence_list":["EMF Level 5","Fingerprints","Ghost writing"]},"Oni":{"evidence_list":["EMF Level 5","Freezing temperatures","D.O.T.S projector"]},"Phantom":{"evidence_list":["Spirit box","Fingerprints","D.O.T.S projector"]},"Poltergeist":{"evidence_list":["Spirit box","Fingerprints","Ghost writing"]},"Revenant":{"evidence_list":["Ghost orb","Ghost writing","Freezing temperatures"]},"Shade":{"evidence_list":["EMF Level 5","Ghost writing","Freezing temperatures"]},"Spirit":{"evidence_list":["EMF Level 5","Spirit box","Ghost writing"]},"Wraith":{"evidence_list":["EMF Level 5","Spirit box","D.O.T.S projector"]},"Yokai":{"evidence_list":["Spirit box","Ghost orb","D.O.T.S projector"]},"Yurei":{"evidence_list":["Ghost orb","Freezing temperatures","D.O.T.S projector"]}}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.bfeb42cf.chunk.js.map