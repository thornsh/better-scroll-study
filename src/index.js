let bsInside = BetterScroll.createBScroll('.wrapper-inside', {
  //stopPropagation:true,//冒泡
  tagException:{className:/(^|\s)wrapper-outside-container(\s|$)/}
});
console.log(bsInside.maxScrollY,bsInside.minScrollY,bsInside.x,bsInside.y,bsInside.maxScrollX,bsInside.minScrollX);
let extraTransform = {
  // 起点的属性
  start: {
    scale: 0
  },
  // 终点的属性
  end: {
    scale: 1.1
  }
}
// bsInside.scrollTo(0, -60, 300, undefined, extraTransform)

//上下移动
// let bsOutsideContainer = BetterScroll.createBScroll('.wrapper-inside-container',{
//   specifiedIndexAsContent:1,
//   bindToTarget: true,
//   scrollX: true,
//   scrollY: true,
//   freeScroll: true,
//   bounce: true,
//   movable: true, // for movable plugin
//   tagException:{className:/(^|\s)wrapper-outside(\s|$)/}
// })
//文字移动
let bsOutside = BetterScroll.createBScroll('.wrapper-outside-container',{
  
})


let wrapperTop = BetterScroll.createBScroll('.wrapper-outside-div',{})
const hooks = wrapperTop.scroller.actionsHandler.hooks;
hooks.on('move', function (e) {
  console.log(e.e.path[0].getAttribute("data-move"));
  let dataMove = e.e.path[0].getAttribute("data-move");
  if (dataMove != null) {
    console.log(e.deltaY);
    $(".wrapper-outside-container").css("height", $(".wrapper-outside-container").height() - e.deltaY);
    $(".wrapper-inside").css("height", $(".wrapper-inside").height() + e.deltaY);
    bsOutside.refresh();
    bsInside.refresh();
  }

})