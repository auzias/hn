// ==UserScript==
// @name        HN ranking
// @namespace   hn-ranking@mael.auzias.net
// @description Color HN items according to their ranking score (the greater the greener)
// @version     1
// @grant       none
// ==/UserScript==

// Every <granularity> of the score the item color changes
var granularity = 5;

// From regular background color to greeny background color
var gradient = ["#F6F6EF","#F6F6EE","#F5F6ED","#F4F6EB","#F3F6EA","#F2F6E8",
"#F2F6E7","#F1F6E6","#F0F6E4","#EFF6E3","#EEF6E1","#EDF6E0","#EDF6DF","#ECF6DD",
"#EBF6DC","#EAF6DA","#E9F6D9","#E9F6D8","#E8F6D6","#E7F6D5","#E6F6D3","#E5F6D2",
"#E4F6D0","#E4F6CF","#E3F6CE","#E2F6CC","#E1F6CB","#E0F6C9","#E0F6C8","#DFF6C7",
"#DEF6C5","#DDF6C4","#DCF6C2","#DBF6C1","#DBF6C0","#DAF6BE","#D9F6BD","#D8F6BB",
"#D7F6BA","#D7F6B9","#D6F6B7","#D5F6B6","#D4F6B4","#D3F6B3","#D2F6B1","#D2F6B0",
"#D1F6AF","#D0F6AD","#CFF6AC","#CEF6AA","#CDF6A9","#CDF6A8","#CCF6A6","#CBF6A5",
"#CAF6A3","#C9F6A2","#C9F6A1","#C8F69F","#C7F69E","#C6F69C","#C5F69B","#C4F699",
"#C4F698","#C3F697","#C2F695","#C1F694","#C0F692","#C0F691","#BFF690","#BEF68E",
"#BDF68D","#BCF68B","#BBF68A","#BBF689","#BAF687","#B9F686","#B8F684","#B7F683",
"#B7F682","#B6F680","#B5F67F","#B4F67D","#B3F67C","#B2F67A","#B2F679","#B1F678",
"#B0F676","#AFF675","#AEF673","#AEF672","#ADF671","#ACF66F","#ABF66E","#AAF66C",
"#A9F66B","#A9F66A","#A8F668","#A7F667","#A6F665","#A5F664","#A4F662"];

// Select all elements with the score
var array_score = document.getElementsByClassName('score');

// Walk through these elements to color them (the parent to be exact)
for (var i = 0; c = array_score.length; i++) {
  var score = getScore(array_score[i]);
  var id = array_score[i].id;
  applyColor(score, id);
}

function getScore(score) {
  // Extract the score
  var length = array_score[i].textContent.length;
  var score_text = ' points';
  var score = array_score[i].textContent.substring(0, (length - score_text.length));
  return score;
}

function applyColor(score, id) {
  //Calculate the gradient color
  var gradient_scale = Math.round(score/granularity);
  gradient_scale = (gradient_scale >= gradient.length) ? (gradient.length-1) : gradient_scale ;
  //Apply the gradient color
  document.getElementById(id).parentElement.style.backgroundColor = gradient[gradient_scale];
}
