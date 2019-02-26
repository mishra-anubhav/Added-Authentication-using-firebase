import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.less']
})
export class PricingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sections = document.querySelector(".nav__sections");
    const links = document.querySelectorAll(".nav__section");
    const bgWrapper = document.querySelector(".nav__bg-wrapper");
    const bg = document.querySelector(".nav__bg");
    const bgBCR = bg.getBoundingClientRect();
    
    sections.addEventListener("mouseover", () => {
      setTimeout(() => bg.classList.add("is-animatable"));
    });
    
    sections.addEventListener("mouseleave", () => {
      bg.classList.remove("is-animatable");
    });
    
    [].forEach.call(links, link => {
      link.addEventListener("mouseover", function() {
        bgWrapper.classList.add("is-visible");
    
        const links = this.querySelector(".nav__links");
        const linksBCR = links.getBoundingClientRect();
    
        const scaleX = linksBCR.width / bgBCR.width;
        const scaleY = linksBCR.height / bgBCR.height;
    
        bg['style'].transform = `translate(${linksBCR.left}px) scale(${scaleX}, ${scaleY})`;
      });
    
      link.addEventListener("mouseleave", () => {
        bgWrapper.classList.remove("is-visible");
      });
    });
}
}
