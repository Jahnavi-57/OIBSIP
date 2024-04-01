// Define an array of objects containing image sources, headings, and descriptions
const content = [
  {
      image: "espresso.jpg",
      heading: "Espresso",
      description: "A bold burst of flavor, a shot of concentrated delight. Energizing and indulgent, it's a tiny cup of pure satisfaction.",
      color:"#fdeca6"
  },
  {
      image: "iced_latte.png",
      heading: "Iced Latte",
      description: "Refreshing and creamy, the perfect blend of espresso and milk over ice. An invigorating pick-me-up for any time of day.",
      color:"#fdeca6"
  },
  {
      image: "caffe_mocha.png",
      heading: "Caffe Mocha",
      description: "Indulge in the perfect harmony of flavors, topped with a dollop of frothy goodness. A decadent treat to satisfy your cravings and lift your spirits.",
      colour:"#fdeca6"
  },
  {
    image: "affogato.jpg",
    heading: "Affogato",
    description: "Vanilla gelato drenched in rich espresso, creating a divine contrast of creamy sweetness and bold coffee flavor, a delightful Italian treat.",
    color:"#fdeca6"
  },
  {
    image: "americano.jpg",
    heading: "Americano",
    description: " A robust coffee beverage made by diluting espresso with hot water, delivering a bold yet smooth flavor profile, perfect for those seeking a strong caffeine kick in a milder form.",
    color:"#fdeca6"
  }
];

let currentIndex = 0;

// Function to change the image, heading, and description
function changeContent() {
  const imageElement = document.querySelector(".image-espresso img");
  const headingElement = document.querySelector(".main-text .image-heading");
  const descriptionElement = document.querySelector(".main-text .description");

  // Change the src attribute of the image
  imageElement.src = content[currentIndex].image;
  // Change the heading text
  headingElement.textContent = content[currentIndex].heading;
  // Change the description text
  descriptionElement.textContent = content[currentIndex].description;
  // Change the color of description text
  descriptionElement.style.color = content[currentIndex].color;
  // Increment currentIndex or reset to 0 if reached the end
  currentIndex = (currentIndex + 1) % content.length;
}

// Automatically change content on page load
window.onload = function() {
  changeContent(); // Change content when the page loads

  // Set interval to change content every 2 seconds (adjust as needed)
  setInterval(changeContent, 2000);
};
