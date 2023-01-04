
//Number animation with Gsap
gsap.registerPlugin({
  name: "start_count",
  init(target, endValue) {
    let data = this
    data.target = target 
    data.interp = gsap.utils.interpolate(target.start_count, endValue) 
  },
  render(progress, data) {
    data.target.start_count = data.interp(progress)
  },
})

const firstObj = { start_count: 500.000 },
  first = document.querySelector(".first")
gsap.to(firstObj, {
  duration: 5,
  start_count: 571.000,
  ease: "none",
  delay: 1,
  onUpdate: () => {
    first.innerHTML = firstObj.start_count.toFixed(3)
  },
})
const secondObj = { start_count: 80.000 },
  second = document.querySelector(".second")
gsap.to(secondObj, {
  duration: 5,
  start_count: 101.000,
  ease: "none",
  delay: 1,
  onUpdate: () => {
    second.innerHTML = secondObj.start_count.toFixed(3)
  },
})
const thirdObj = { start_count: 70.000 },
  third = document.querySelector(".third")
gsap.to(thirdObj, {
  duration: 5,
  start_count: 98.700,
  ease: "none",
  delay: 1,
  onUpdate: () => {
    third.innerHTML = thirdObj.start_count.toFixed(3)
  },
})

