import { useRef } from "react";

window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

function setScrollVar() {
  //   console.log(document.documentElement.clientHeight);
  const htmlElement = document.documentElement;
  const persentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
  var scrollp = Math.min(persentScrolled * 100, 100);
  console.log("scroll%:", scrollp);
  htmlElement.style.setProperty("--scroll", scrollp);
  //   document.getElementById("root").setProperty("--scroll", scrollp);
}

export default setScrollVar;
