import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function gsapInit() {
  gsap.to('.hero-image', {
    y: -60, ease: 'none',
    scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 }
  });
  gsap.to('.about-main-img', {
    y: -40, ease: 'none',
    scrollTrigger: { trigger: '.about-section', scrub: 1.5 }
  });
  gsap.to('.about-sec-img', {
    y: 30, ease: 'none',
    scrollTrigger: { trigger: '.about-section', scrub: 1 }
  });
  gsap.to('.float-el', {
    y: -14, duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.4
  });
}
