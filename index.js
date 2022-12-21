const items = [
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    alt: "image 1",
  },
  {
    src: "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    alt: "image 2",
  },
  {
    src: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    alt: "image 3",
  },
  {
    src: "https://images.unsplash.com/photo-1564676677001-92e8f1a0df30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    alt: "image 4",
  },
  {
    src: "https://images.unsplash.com/photo-1473181488821-2d23949a045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    alt: "image 5",
  },
  {
    src: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
    alt: "image 6",
  },
];

const carouselContainer = document.querySelector(".carousel__content");
const prevButton = document.querySelector(".prev__button");
const nextButton = document.querySelector(".next__button");

let activeIndex = 2;
let selected = document.querySelector("[key=" + CSS.escape(activeIndex) + "]"); // currently selected
let prev;

const updateSelected = (key) => {
  selected = document.querySelector("[key=" + CSS.escape(key) + "]");
  selected.classList.add("carousel__coloured", "selected");
};

const grayscalePrev = () => {
  prev.classList.remove("carousel__coloured", "selected");
};

const handleImageClick = (e) => {
  const current = e.target;
  prev = selected;
  activeIndex = Number(current.getAttribute("key"));

  if (activeIndex != prev.getAttribute("key")) {
    updateSelected(activeIndex);
    grayscalePrev();
  }
};

const previousSlide = () => {
  prev = selected;

  if (activeIndex === 0) activeIndex = items.length - 1;
  else activeIndex = activeIndex - 1;

  updateSelected(activeIndex);
  grayscalePrev();
};

const nextSlide = () => {
  prev = selected;

  if (activeIndex == items.length - 1) activeIndex = 0;
  else activeIndex = activeIndex + 1;
  
  updateSelected(activeIndex);
  grayscalePrev();
};

prevButton.addEventListener("click", () => previousSlide());
nextButton.addEventListener("click", () => nextSlide());

for (let i = 0; i < items.length; i++) {
  const img = document.createElement("img");
  img.src = items[i].src;
  img.alt = items[i].alt;
  img.setAttribute("key", i);
  img.classList.add("carousel__img");
  img.addEventListener("click", handleImageClick);
  carouselContainer.appendChild(img);

  if (i === activeIndex) {
    img.classList.add("selected", "carousel__coloured");
    selected = img;
  }
}
