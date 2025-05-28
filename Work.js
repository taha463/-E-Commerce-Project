
    let appliedFilters = [];

    function updateFilters(filter) {
      const checkbox = document.getElementById(filter);
      const filterElement = document.getElementById('applied-filters');

      if (checkbox.checked) {
        appliedFilters.push(filter);
      } else {
        appliedFilters = appliedFilters.filter(f => f !== filter);
      }

      renderFilters();
    }
download-removebg-preview.png
    function removeFilter(filter) {
      appliedFilters = appliedFilters.filter(f => f !== filter);
      document.getElementById(filter).checked = false;
      renderFilters();
    }

    function renderFilters() {
      const filterElement = document.getElementById('applied-filters');
      filterElement.innerHTML = '';

      appliedFilters.forEach(filter => {
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
        chip.innerHTML += ' <span onclick="removeFilter(\'' + filter + '\')">×</span>';
        filterElement.appendChild(chip);
      });

      if (appliedFilters.length > 0) {
        const clearAll = document.createElement('a');
        clearAll.className = 'clear-all';
        clearAll.href = '#';
        clearAll.textContent = 'Clear all filter';
        clearAll.onclick = () => {
          appliedFilters.forEach(f => document.getElementById(f).checked = false);
          appliedFilters = [];
          renderFilters();
        };
        filterElement.appendChild(clearAll);
      }
    }

    function toggleView(view) {
      const container = document.getElementById('product-container');
      const gridBtn = document.getElementById('grid-btn');
      const listBtn = document.getElementById('list-btn');

      if (view === 'list') {
        container.classList.add('list-view');
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
      } else {
        container.classList.remove('list-view');
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
      }
    }