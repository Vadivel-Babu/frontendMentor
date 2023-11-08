const tl = gsap.timeline();
tl.from('.card',{scaleY:0,opacity:0,duration:1,transformOrigin:'top'})
  .from('.card__img',{opacity:0,duration:1})
  .from('.heading',{x:20, opacity:0,duration:1})
  .from('.para',{y:20, opacity:0,duration:1})
  .from('.stat__content',{y:20,opacity:0,duration:1,stagger:{each:0.5}})