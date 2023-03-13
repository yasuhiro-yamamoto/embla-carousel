"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[9310],{9545:function(e,n,t){t.r(n),n.default="import { EmblaCarouselType } from 'embla-carousel'\n \nexport const addPrevNextBtnsClickHandlers = (\n  emblaApi: EmblaCarouselType,\n  prevBtn: HTMLElement,\n  nextBtn: HTMLElement,\n): (() => void) => {\n  const scrollPrev = () => emblaApi.scrollPrev()\n  const scrollNext = () => emblaApi.scrollNext()\n  prevBtn.addEventListener('click', scrollPrev, false)\n  nextBtn.addEventListener('click', scrollNext, false)\n \n  return (): void => {\n    prevBtn.removeEventListener('click', scrollPrev, false)\n    nextBtn.removeEventListener('click', scrollNext, false)\n  }\n}\n \nexport const addTogglePrevNextBtnsActive = (\n  emblaApi: EmblaCarouselType,\n  prevBtn: HTMLElement,\n  nextBtn: HTMLElement,\n): (() => void) => {\n  const togglePrevNextBtnsState = (): void => {\n    if (emblaApi.canScrollPrev()) prevBtn.removeAttribute('disabled')\n    else prevBtn.setAttribute('disabled', 'disabled')\n \n    if (emblaApi.canScrollNext()) nextBtn.removeAttribute('disabled')\n    else nextBtn.setAttribute('disabled', 'disabled')\n  }\n \n  emblaApi\n    .on('select', togglePrevNextBtnsState)\n    .on('init', togglePrevNextBtnsState)\n    .on('reInit', togglePrevNextBtnsState)\n \n  return (): void => {\n    prevBtn.removeAttribute('disabled')\n    nextBtn.setAttribute('disabled', 'disabled')\n  }\n}\n \nexport const addDotBtnsAndClickHandlers = (\n  emblaApi: EmblaCarouselType,\n  dotsNode: HTMLElement,\n): (() => void) => {\n  let dotNodes: HTMLElement[] = []\n \n  const addDotBtnsWithClickHandlers = (): void => {\n    dotsNode.innerHTML = emblaApi\n      .scrollSnapList()\n      .map(() => '<button class=\"embla__dot\" type=\"button\"></button>')\n      .join('')\n \n    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'))\n    dotNodes.forEach((dotNode, index) => {\n      dotNode.addEventListener('click', () => emblaApi.scrollTo(index), false)\n    })\n  }\n \n  const toggleDotBtnsActive = (): void => {\n    const previous = emblaApi.previousScrollSnap()\n    const selected = emblaApi.selectedScrollSnap()\n    dotNodes[previous].classList.remove('embla__dot--selected')\n    dotNodes[selected].classList.add('embla__dot--selected')\n  }\n \n  emblaApi\n    .on('init', addDotBtnsWithClickHandlers)\n    .on('reInit', addDotBtnsWithClickHandlers)\n    .on('init', toggleDotBtnsActive)\n    .on('reInit', toggleDotBtnsActive)\n    .on('select', toggleDotBtnsActive)\n \n  return (): void => {\n    dotsNode.innerHTML = ''\n  }\n}\n"}}]);
//# sourceMappingURL=9310-881bb9275d6961d080bc.js.map