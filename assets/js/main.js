import { initDropdownHover } from './dropdown-hover.js';
import { initTestimonialSlider } from './testimonial-slider.js';
import {
  handleSelection as productVariationDropdownHandleSelection,
  initProductVariationDropdownGlobal
} from './product-variation-dropdown.js';

// 1. Initialize event listeners immediately
document.addEventListener('DOMContentLoaded', () => {
  initDropdownHover();
  initProductVariationDropdownGlobal();
  initTestimonialSlider();
});

// 2. Create the global namespace 'el' for inline HTML calls
window.el = {
  productVariationDropdownHandleSelection
};

