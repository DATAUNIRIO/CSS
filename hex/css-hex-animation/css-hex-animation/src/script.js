var timeline1 = new TimelineMax({delay:.1,repeat:-1, yoyo:true});
timeline1.to($('.type1'), 4, {boxShadow:"0px 0px 20px white",autoAlpha: .4});
 
var timeline2 = new TimelineMax({delay:.1,repeat:-1});
timeline2.to($('.type2'), 2, {boxShadow:"0px 0px 20px white",autoAlpha: .6});
timeline2.to($('.type2'), 4, {boxShadow:"0px 0px 0px white",autoAlpha: .1});
timeline2.to($('.type2'), 2, {boxShadow:"0px 0px 10px white",autoAlpha: .3});

var timeline3 = new TimelineMax({delay:.1,repeat:-1, yoyo:true});
timeline3.to($('.type3'), 4, {boxShadow:"0px 0px 0px white",autoAlpha: 0.09});