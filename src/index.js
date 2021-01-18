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

let bsOutsideContainer = BetterScroll.createBScroll('.wrapper-inside-container',{
  specifiedIndexAsContent:1,
  bindToTarget: true,
  scrollX: true,
  scrollY: true,
  freeScroll: true,
  bounce: true,
  movable: true, // for movable plugin
  tagException:{className:/(^|\s)wrapper-outside(\s|$)/}
})
let bsOutside = BetterScroll.createBScroll('.wrapper-outside-container',{
  specifiedIndexAsContent:1,
  tagException:{className:/(^|\s)wrapper-outside-container(\s|$)/}
})