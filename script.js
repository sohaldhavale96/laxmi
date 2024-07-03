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
      rightText.innerHTML = `<h2>${selectedBag.BagName}</h2><img src="${selectedBag.BagImage}" alt="${selectedBag.BagName}">`;
    });
  });
  

/*
const buttonContainer = document.getElementById("button-container");

contentData.forEach((data, index) => {
  const button = document.createElement("button");
  button.textContent = `Button ${index + 1}`; // Set button text with index + 1
  button.id = `button${index + 1}`; // Assign unique IDs

  button.addEventListener("click", function() {
    displayContent.textContent = contentData[index].content;
  });

  buttonContainer.appendChild(button);
});
*/