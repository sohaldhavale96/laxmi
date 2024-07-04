gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline()
const strips = document.querySelectorAll('.strip')
const navElements = document.querySelectorAll('.nav-elems')
const homeText = document.querySelectorAll('.text-anim')
const bagIcons = document.querySelectorAll('.bag')

tl.from(navElements,{
    y:"-30px",
    opacity:0,
    stagger:0.08
})
tl.from(strips,{
    x:"1900px",
    stagger:0.3
})
tl.from(homeText,{
    x:"-300px",
    opacity:0,
    stagger:0.3
})
tl.from(bagIcons,{
    y:"300px",
    opacity:0,
    stagger:0.3
})

const bagAll = [
    {
        "BagName":"Tote Bag",
        "BagImage":"bag3.png"
    },
    {
        "BagName":"Drawstring Bag",
        "BagImage":"bag4.png"
    },
    {
        "BagName":"Laundry Bag",
        "BagImage":"bag5.png"
    },
    {
        "BagName":"Zipper Bag",
        "BagImage":"bag6.png"
    },
]
const bagList = document.querySelector('.bagList');
const rightText = document.getElementById('right-text');

bagList.querySelectorAll('.bag').forEach((bagItem) => {
    bagItem.addEventListener('click', function() {
      const bagIndex = parseInt(this.classList[1].slice(3)); // Extract bag index from class name
      const selectedBag = bagAll[bagIndex - 1]; // Get corresponding bag object from array
  
      // Update right-text content
      rightText.innerHTML = `
        <img src="${selectedBag.BagImage}" alt="${selectedBag.BagName}">
        <h2>${selectedBag.BagName}</h2>
      `;
    });
});


const rightContentimg = document.querySelector('#right-text img');
const rightContenth2 = document.querySelector('#right-text h2');

tl.from(rightContentimg,{
    x:"300px",
    opacity:0,
})
tl.from(rightContenth2,{
    x:"300px",
    opacity:0,
})

// const aboutHead = document.getElementById('AboutUSHEAD')
// const aboutSectionL = document.querySelectorAll('.abtleft');
// const aboutSectionR = document.querySelectorAll('.abtright');
// tl.from(aboutHead,{
//     y:"30px",
//     opacity:0
// })
// tl.from(aboutSectionL,{
//     x:"-900px",
//     stagger:0.2,
//     opacity:0
// })
// tl.from(aboutSectionR,{
//     x:"900px",
//     stagger:0.2,
//     opacity:0
// })


const card1 = document.getElementById('absec1')
tl.from(card1,{
    x:"900px",
    opacity:0,
    scrollTrigger:{
        trigger: '#about',
        start: '0% 50%', 
        end: '15% 50%',
        markers:true,
        scrub: 2
    }
})
const card2 = document.getElementById('absec2')
tl.from(card2,{
    x:"-900px",
    opacity:0,
    scrollTrigger:{
        trigger: '#about',
        start: '15% 50%', 
        end: '30% 50%',
        markers:true,
        scrub: 2
    }
})
const card3 = document.getElementById('absec3')
tl.from(card3,{
    x:"900px",
    opacity:0,
    scrollTrigger:{
        trigger: '#about',
        start: '30% 50%', 
        end: '45% 50%',
        markers:true,
        scrub: 2
    }
})
const card4 = document.getElementById('absec4')
tl.from(card4,{
    x:"-900px",
    opacity:0,
    scrollTrigger:{
        trigger: '#about',
        start: '45% 50%', 
        end: '70% 50%',
        markers:true,
        scrub: 2
    }
})
const card5 = document.getElementById('absec5')
tl.from(card5,{
    x:"900px",
    opacity:0,
    scrollTrigger:{
        trigger: '#about',
        start: '70% 50%', 
        end: '85% 50%',
        markers:true,
        scrub: 2
    }
})