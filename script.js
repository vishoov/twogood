function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  locomotiveAnimation();
  
  function navbarAnimation() {
    gsap.to("#nav-part1 svg", {
      transform: "translateY(-110%)",
      
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
    gsap.to("#nav-part2 #links", {
      transform: "translateY(-100%)",
      opacity: 0,
      scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });
  }
  navbarAnimation()

function videoplayanimation(){
    var videoplay = document.querySelector('#video-container')
var playbtn = document.querySelector('#play')
videoplay.addEventListener("mouseenter", function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})

videoplay.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})

videoplay.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-50
    })
})

}
videoplayanimation()
function page1load(){
    gsap.from("#page1 h1 ",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stagger:0.3
    })

    gsap.from("#page1 #video-container ",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
       
    })
}
page1load()

function productcursor(){
    var  prodplay = document.querySelector('#page3')
    var prodcur = document.querySelector('#cursor')
    prodplay.addEventListener("mouseenter", function(){
    gsap.to(prodcur,{
        scale:1,
        opacity:0.8
        
    })
})

prodplay.addEventListener("mouseleave", function(){
    gsap.to(prodcur,{
        scale:0,
        opacity:0.8
        
    })
})

prodplay.addEventListener("mousemove", function(lets){
    gsap.to(prodcur,{
        left:lets.x-50,
        top:lets.y-50
    })
})

}
productcursor()


