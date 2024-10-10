document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const searchQuery = document.getElementById('search-query').value.toLowerCase();
    const filterCategory = document.getElementById('filter-category').value;
    const priceMin = parseFloat(document.getElementById('price-range-min').value);
    const priceMax = parseFloat(document.getElementById('price-range-max').value);
    
    const productCards = document.querySelectorAll('.card-custom');
    
    productCards.forEach(function(card) {
      const productName = card.querySelector('.card-title').textContent.toLowerCase();
      const productPrice = parseFloat(card.querySelector('.price').textContent.replace('$', ''));
      const productCategory = card.getAttribute('data-category');  // Agrega categoría a cada tarjeta de producto
  
      let matchSearch = searchQuery === '' || productName.includes(searchQuery);
      let matchCategory = filterCategory === '' || productCategory === filterCategory;
      let matchPriceMin = isNaN(priceMin) || productPrice >= priceMin;
      let matchPriceMax = isNaN(priceMax) || productPrice <= priceMax;
  
      if (matchSearch && matchCategory && matchPriceMin && matchPriceMax) {
        card.style.display = 'block';  // Mostrar si coincide con todos los filtros
      } else {
        card.style.display = 'none';   // Ocultar si no coincide
      }
    });
  });
  