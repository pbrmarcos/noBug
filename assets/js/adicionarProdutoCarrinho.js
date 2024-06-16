document.addEventListener("DOMContentLoaded", function() {
    var cart = [];
    var cartModalBody = document.querySelector("#cartModal .modal-body");
    var notificationBanner = document.getElementById("notificationBanner");
    var notificationMessage = document.getElementById("notificationMessage");

    $('#sizeModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var productName = button.data('name');
        var productPrice = button.data('price');

        var modal = $(this);
        modal.find('#productName').val(productName);
        modal.find('#productPrice').val(productPrice);
    });

    document.getElementById("addToCartButton").addEventListener("click", function() {
        var size = document.getElementById("sizeSelect").value;
        var name = document.getElementById("productName").value;
        var price = parseFloat(document.getElementById("productPrice").value);

        var product = {
            name: name,
            size: size,
            price: price
        };

        cart.push(product);
        updateCartModal();

        $('#sizeModal').modal('hide');

        // Show notification
        notificationMessage.textContent = `Produto ${name} de tamanho ${size} de Valor R$${price.toFixed(2)} foi adicionado no seu carrinho de compras`;
        notificationBanner.classList.add("show");

        setTimeout(function() {
            notificationBanner.classList.remove("show");
        }, 5000);
    });

    document.getElementById("clearCartButton").addEventListener("click", function() {
        cart = [];
        updateCartModal();
    });

    document.getElementById("closeNotification").addEventListener("click", function() {
        notificationBanner.classList.remove("show");
    });

    function updateCartModal() {
        if (cart.length === 0) {
            cartModalBody.innerHTML = "<p>Seu carrinho está vazio.</p>";
        } else {
            cartModalBody.innerHTML = "";
            var total = 0;
            var ul = document.createElement("ul");
            ul.classList.add("list-group");

            cart.forEach(function(item) {
                total += item.price;
                var li = document.createElement("li");
                li.classList.add("list-group-item");
                li.textContent = item.name + " - Tamanho: " + item.size + " - R$" + item.price.toFixed(2);
                ul.appendChild(li);
            });

            var totalLi = document.createElement("li");
            totalLi.classList.add("list-group-item", "active");
            totalLi.textContent = "Total: R$" + total.toFixed(2);
            ul.appendChild(totalLi);

            cartModalBody.appendChild(ul);
        }
    }
});
