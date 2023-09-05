document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel")
  const prevBtn = document.querySelector(".prev")
  const nextBtn = document.querySelector(".next")

  let currentIndex = 0

  prevBtn.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carousel.children.length) % carousel.children.length
    updateCarousel()
  })

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carousel.children.length
    updateCarousel()
  })

  function updateCarousel() {
    const translateX = currentIndex * -100
    carousel.style.transform = `translateX(${translateX}%)`
  }
})
