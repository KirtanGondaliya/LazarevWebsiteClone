// function LocomotiveAnimation(){
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
function NavAnimation() {
  var nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "26vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-elem h5 span", {
      y: 0,
      stagger: {
        amount: 0.2,
      },
    });
  });

  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    tl.to(".nav-elem h5 span", {
      y: 25,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: "0",
      duration: 0.1,
    });
  });

  document.querySelector(".btn").addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to(".nav-elem h5 span", {
      y: 25,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
    });
    tl.to("#nav-bottom", {
      height: "0",
    });
  });
}

function Page2Animation() {
  var rightelem = document.querySelectorAll(".right-elem");

  rightelem.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", (dets) => {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y - 130,
      });
    });
  });
}

function Page3Animation() {
  document.querySelector(".icon").addEventListener("mouseenter", () => {
    gsap.to(".page3-center h4", {
      y: -15,
      opacity: 1,
    });
  });
  document.querySelector(".icon").addEventListener("mouseleave", () => {
    gsap.to(".page3-center h4", {
      y: 0,
      opacity: 0,
    });
  });

  var video = document.querySelector("#page3 video");
  document.querySelector(".page3-center").addEventListener("click", () => {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", () => {
    video.pause();
    gsap.to(video, {
      transform: "sacleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function page7Animation() {
  var page7img = document.querySelector(".page7-right img");
  var container = document.querySelector(".page7-right");
  var page7video = document.querySelector(".page7-right video");
  container.addEventListener("mouseenter", () => {
    gsap.to(".page7-right-btn", {
      opacity: 1,
      scale: 1,
    });
    gsap.to(page7img, {
      opacity: 0,
    });
    page7video.play();
  });
  container.addEventListener("mouseleave", () => {
    gsap.to(".page7-right-btn", {
      scale: 0,
      opacity: 0,
    });
    gsap.to(page7img, {
      opacity: 1,
    });
    page7video.load();
  });

  container.addEventListener("mousemove", (dets) => {
    gsap.to(".page7-right-btn", {
      x: dets.x - container.getBoundingClientRect().x - 50,
      y: dets.y - container.getBoundingClientRect().y - 50,
    });
  });
}

function page8Animation() {
  var page8img = document.querySelector(".page8-right img");
  var container2 = document.querySelector(".page8-right");
  var page8video = document.querySelector(".page8-right video");
  container2.addEventListener("mouseenter", () => {
    gsap.to(".page8-right-btn", {
      opacity: 1,
      scale: 1,
    });
    gsap.to(page8img, {
      opacity: 0,
    });
    page8video.play();
  });
  container2.addEventListener("mouseleave", () => {
    gsap.to(".page8-right-btn", {
      scale: 0,
      opacity: 0,
    });
    gsap.to(page8img, {
      opacity: 1,
    });
    page8video.load();
  });

  container2.addEventListener("mousemove", (dets) => {
    gsap.to(".page8-right-btn", {
      x: dets.x - container2.getBoundingClientRect().x - 50,
      y: dets.y - container2.getBoundingClientRect().y - 50,
    });
  });
}

function Page9Animation() {
  let anotheritem = document.querySelector("#page9 .anotheritem");
  let page9image2 = document.querySelector(".page9Animation2 img");
  let page9video2 = document.querySelector(".page9Animation2 video");

  let page9image = document.querySelector(".page9image img");
  let page9video = document.querySelector(".page9image video");
  let page9item1 = document.querySelector(".page9item1");
  if (page9item1) {
    page9item1.addEventListener("mouseenter", () => {
      gsap.to(".page9item1 p", {
        opacity: 0,
      });
      gsap.to(page9video, {
        height: "160%",
        opacity: 1,
      });

      page9video.play();
      gsap.to(page9image, {
        opacity: 0,
      });
    });
    page9item1.addEventListener("mouseleave", () => {
      gsap.to(".page9item1 p", {
        opacity: 1,
      });
      gsap.to(page9video, {
        height: "55%",
        opacity: 0,
      });
      page9video.load();

      gsap.to(page9image, {
        opacity: 1,
      });

      page9video.play();
    });
  }

  var imagesLogo = document.querySelector(".anotheritem .imagesLogo");

  if (anotheritem) {
    anotheritem.addEventListener("mouseenter", () => {
      gsap.to(".anotheritem p", {
        opacity: 0,
      });
      page9video2.play();
      gsap.to(page9video2, {
        height: "160%",
        opacity: 1,
      });

      gsap.to(page9image2, {
        opacity: 0,
      });
      gsap.to(imagesLogo, {
        opacity: 0,
      });
    });

    anotheritem.addEventListener("mouseleave", () => {
      page9video2.load();
      gsap.to(".anotheritem p", {
        opacity: 1,
      });
      gsap.to(page9video2, {
        height: "55%",
        opacity: 0,
      });
      gsap.to(page9image2, {
        opacity: 1,
      });
      gsap.to(imagesLogo, {
        opacity: 1,
      });
    });
  }
}

function Page11Animation(){
  
var page11down=document.querySelector('.uiux2 .page11down i')
var product=document.querySelector('.page11-right  .product')
let open=1;
product.addEventListener('click',()=>{
  if(open){
    gsap.to(page11down, {
      transform:"rotateX(180deg)"
    });
    open=0
  }
  else{
    gsap.to(page11down, {
      transform:"rotateX(-360deg)"
    })
    open=1
  }
})
var page112down=document.querySelector('.uiux .page112down i')
var rightContent=document.querySelector('.page11-right  .rightContent')
let open3=1;
rightContent.addEventListener('click',()=>{
  if(open3){
    gsap.to(page112down, {
      transform:"rotateX(180deg)"
    });
    open3=0
  }
  else{
    gsap.to(page112down, {
      transform:"rotateX(-360deg)"
    })
    open3=1
  }
})
}

function page13Animation() {
  gsap.from(".page13-part2elems h4", {
    x: 0,
    duration: 5,
    scrollTrigger: {
      trigger: ".page13-part2elems",
      scroller:"body",
      start: "top 100%",
      end: "top -90%",
      scrub: true,
    },
  });
  gsap.from(".page13-part2elems2 h4", {
    x: 0,
    duration: 5,
    scrollTrigger: {
      trigger: ".page13-part2elems",
      scroller: "body",
      start: "top 100%",
      end: "top -90%",
      scrub: true,
    },
  });
  gsap.from(".page13-part2elems3 h4", {
    x: 0,
    duration: 5,
    scrollTrigger: {
      trigger: ".page13-part2elems",
      scroller: "body",
      start: "top 100%",
      end: "top -90%",
      scrub: true,
    },
  });
}

function page15Animation() {
  page15Content = document.querySelector("#page15");
  pencil = document.querySelector(".page15mainArrow .page15mainpencil");
  arrow = document.querySelector(".page15mainArrow .page15mainarrow");
  page15Content.addEventListener("mouseenter", () => {
    gsap.to(".page15Cursor", {
      scale: 1,
    });
    gsap.to(pencil, {
      scale: 1,
    });
    gsap.to(arrow, {
      scale: 0,
    });
  });
  page15Content.addEventListener("mouseleave", () => {
    gsap.to(".page15Cursor", {
      scale: 0,
    });
    gsap.to(pencil, {
      scale: 0,
    });
    gsap.to(arrow, {
      scale: 1,
    });
  });

  page15Content.addEventListener("mousemove", (dets) => {
    gsap.to(".page15Cursor", {
      x: dets.x - page15Content.getBoundingClientRect().x - 50,
      y: dets.y - page15Content.getBoundingClientRect().y - 100,
    });
  });
}

function page16Animation(){
    var page16 = document.querySelector(".elem1part1");
var page16detailsImage = document.querySelector(
  ".page16elem1Details .picture16"
);
var imagepage16 = document.querySelector(".picture16 img");

page16.addEventListener("mouseenter", () => {
  gsap.to(imagepage16, {
    opacity: 1,
    height: "130%",
  });
});
page16.addEventListener("mouseleave", () => {
  gsap.to(imagepage16, {
    opacity: 0,
    height: "0%",
  });
});

page16detailsImage.addEventListener("mousemove", (dets) => {
  gsap.to(imagepage16, {
    x: dets.x - imagepage16.getBoundingClientRect().x - 30,
    y: dets.y - imagepage16.getBoundingClientRect().y - 50,
  });
});

var page516 = document.querySelector(".elem1part5");
var page516detailsImage = document.querySelector(
  ".page16elem1Details .picture516"
);
var imagepage516 = document.querySelector(".picture516 img");

page516.addEventListener("mouseenter", () => {
  gsap.to(imagepage516, {
    opacity: 1,
    height: "130%",
  });
});
page516.addEventListener("mouseleave", () => {
  gsap.to(imagepage516, {
    opacity: 0,
    height: "0%",
  });
});

page516detailsImage.addEventListener("mousemove", (dets) => {
  gsap.to(imagepage516, {
    x: dets.x - imagepage516.getBoundingClientRect().x - 30,
    y: dets.y - imagepage516.getBoundingClientRect().y - 50,
  });
});

var page316 = document.querySelector(".elem1part3");
var page316detailsImage = document.querySelector(
  ".page16elem1Details .picture316"
);
var imagepage316 = document.querySelector(".picture316 img");

page316.addEventListener("mouseenter", () => {
  gsap.to(imagepage316, {
    opacity: 1,
    height: "110%",
  });
});
page316.addEventListener("mouseleave", () => {
  gsap.to(imagepage316, {
    opacity: 0,
    height: "0%",
  });
});

page316detailsImage.addEventListener("mousemove", (dets) => {
  gsap.to(imagepage316, {
    x: dets.x - imagepage316.getBoundingClientRect().x - 30,
    y: dets.y - imagepage316.getBoundingClientRect().y - 50,
  });
});

var openarrow = document.querySelector(".page16headingdetails .openarrow");
var closearrow = document.querySelector(".page16headingdetails .closearrow");
var page16elem1 = document.querySelector(".page16headingdetails");
var page16elem1details=document.querySelector(".page16elem1Details")
let isopen = 1;
page16elem1.addEventListener("click", () => {
  if (isopen) {
    gsap.to(closearrow, {
      transform: "rotateY(-180deg)",
      opacity: 1,
    });
    gsap.to(openarrow, {
      opacity: 0,
    });
    gsap.to(page16elem1details, {
        display: "block",
      });
    isopen=0;
  }
  else{
    gsap.to(openarrow, {
      transform: "rotateY(180deg)",
      opacity: 1,
    });
    gsap.to(closearrow, {
      opacity: 0,
    });
    gsap.to(page16elem1details, {
      display: "none",
    });
    isopen=1;
  }
});




var page616 = document.querySelector(".elem1part6");
var page616detailsImage = document.querySelector(
  ".page16elem1Details .picture616"
);
var imagepage616 = document.querySelector(".picture616 img");

page616.addEventListener("mouseenter", () => {
  gsap.to(imagepage616, {
    opacity: 1,
    height: "110%",
  });
});
page616.addEventListener("mouseleave", () => {
  gsap.to(imagepage616, {
    opacity: 0,
    height: "0%",
  });
});

page616detailsImage.addEventListener("mousemove", (dets) => {
  gsap.to(imagepage616, {
    x: dets.x - imagepage616.getBoundingClientRect().x - 30,
    y: dets.y - imagepage616.getBoundingClientRect().y - 50,
  });
});






var pageelem1= document.querySelector(".elem2part1");
var elem2part1 = document.querySelector(
  ".page16elem1Details2 .elem2part1 .picture16elem2"
);
var elem2part1image = document.querySelector(".picture16elem2 img");

pageelem1.addEventListener("mouseenter", () => {
  gsap.to(elem2part1image, {
    opacity: 1,
    height: "110%",
  });
});
pageelem1.addEventListener("mouseleave", () => {
  gsap.to(elem2part1image, {
    opacity: 0,
    height: "0%",
  });
});

elem2part1.addEventListener("mousemove", (dets) => {
  gsap.to(elem2part1image, {
    x: dets.x - elem2part1image.getBoundingClientRect().x - 30,
    y: dets.y - elem2part1image.getBoundingClientRect().y - 50,
  });
});





var pageelem2= document.querySelector(".elem2part2");
var elem2part2 = document.querySelector(
  ".page16elem1Details2 .elem2part2 .picture216elem2"
);
var elem2part2image = document.querySelector(".picture216elem2 img");

pageelem2.addEventListener("mouseenter", () => {
  gsap.to(elem2part2image, {
    opacity: 1,
    height: "110%",
  });
});
pageelem2.addEventListener("mouseleave", () => {
  gsap.to(elem2part2image, {
    opacity: 0,
    height: "0%",
  });
});

elem2part2.addEventListener("mousemove", (dets) => {
  gsap.to(elem2part2image, {
    x: dets.x - elem2part2image.getBoundingClientRect().x - 30,
    y: dets.y - elem2part2image.getBoundingClientRect().y - 50,
  });
});






var pageelem3= document.querySelector(".elem2part3");
var elem2part3 = document.querySelector(
  ".page16elem1Details2 .elem2part3 .picture316elem2"
);
var elem2part3image = document.querySelector(".picture316elem2 img");

pageelem3.addEventListener("mouseenter", () => {
  gsap.to(elem2part3image, {
    opacity: 1,
    height: "80%",
  });
});
pageelem3.addEventListener("mouseleave", () => {
  gsap.to(elem2part3image, {
    opacity: 0,
    height: "0%",
  });
});

elem2part3.addEventListener("mousemove", (dets) => {
  gsap.to(elem2part3image, {
      x: dets.x - elem2part3image.getBoundingClientRect().x - 30,
      y: dets.y - elem2part3image.getBoundingClientRect().y - 50,
  });
});



var pageelem4= document.querySelector(".elem2part4");
var elem2part4 = document.querySelector(
  ".page16elem1Details2  .picture416elem2"
);
var elem2part4image = document.querySelector(".picture416elem2 img");

pageelem4.addEventListener("mouseenter", () => {
  gsap.to(elem2part4image, {
    opacity: 1,
    height: "80%",
  });
});
pageelem4.addEventListener("mouseleave", () => {
  gsap.to(elem2part4image, {
    opacity: 0,
    height: "0%",
  });
});

elem2part4.addEventListener("mousemove", (dets) => {
  gsap.to(elem2part4image, {
    x: dets.x - elem2part4image.getBoundingClientRect().x - 30,
    y: dets.y - elem2part4image.getBoundingClientRect().y - 50,
  });
});







var openarrow2 = document.querySelector(".page16headingdetails2 .openarrow2");
var closearrow2 = document.querySelector(".page16headingdetails2 .closearrow2");
var page16elem2 = document.querySelector(".page16headingdetails2");
var page16elem1details2=document.querySelector(".page16elem1Details2")
let isopen2 = 1;
page16elem2.addEventListener("click", () => {
  if (isopen2) {
    gsap.to(closearrow2, {
      transform: "rotateY(-180deg)",
      opacity: 1,
    });
    gsap.to(openarrow2, {
      opacity: 0,
    });
    gsap.to(page16elem1details2, {
        display: "block",
      });
    isopen2=0;
  }
  else{
    gsap.to(openarrow2, {
      transform: "rotateY(180deg)",
      opacity: 1,
    });
    gsap.to(closearrow2, {
      opacity: 0,
    });
    gsap.to(page16elem1details2, {
      display: "none",
    });
    isopen2=1;
  }
});


}




NavAnimation()
// LocomotiveAnimation()
Page2Animation();
Page3Animation();
page7Animation();
page8Animation();
Page9Animation();
Page11Animation();
page13Animation();
page15Animation();
page16Animation();

gsap.from('#page18 .page18left svg',{
    rotate:360,
    duration:3,
    scrollTrigger:{
        trigger:"#page18",
        scrub:true,
        scroller:"body",
        start:'top 90%',
        end:'top 5%',
    }
})



