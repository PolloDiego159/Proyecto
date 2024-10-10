document.getElementById("filter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const location = document.getElementById("location").value.toLowerCase();
    const maxPrice = document.getElementById("price").value;
    const service = document.getElementById("services").value;

    const properties = document.querySelectorAll(".property");

    properties.forEach(function(property) {
        const price = parseInt(property.dataset.price);
        const services = property.dataset.services;

        let matchesPrice = !maxPrice || price <= maxPrice;
        let matchesService = service === "all" || services.includes(service);

        if (matchesPrice && matchesService) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
});

const reserveButtons = document.querySelectorAll(".reserve-btn");

reserveButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Reserva realizada con éxito.");
    });
});
