export function handleSelection(el) {
    const wrap = el.closest('.variation-select-wrapper');
    const btn = document.querySelector('.snipcart-add-item');
    const list = el.parentElement;

    // 1. Visual Highlights (Dark Blue for selected)
    wrap.querySelectorAll('.variation-option').forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');

    // 2. Update visible trigger text
    const triggerText = wrap.querySelector('.variation-select-trigger span');
    if (triggerText) triggerText.innerText = el.innerText;

    // 3. Sync raw data-value to Snipcart button
    if (btn) {
        const targetAttr = el.getAttribute('data-target'); // e.g. data-item-custom1-value
        const val = el.getAttribute('data-value');        // Use raw value to match options list
        
        btn.setAttribute(targetAttr, val);

        // Force Snipcart to re-scan button state
        btn.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // 4. Close dropdown
    list.classList.remove('show');
}

// Global click-away listener
export function initProductVariationDropdownGlobal() {
  window.addEventListener('click', function(e) {
      if (!e.target.closest('.variation-select-wrapper')) {
          document.querySelectorAll('.variation-options-list').forEach(l => l.classList.remove('show'));
      }
  });
}

