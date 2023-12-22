const nav = `
<nav class="navbar navbar-expand-lg">
<div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="">Product</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">Service</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-disabled="true">info</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <a href="view-cart.html" class="btn btn-primary" type="submit" id="cart"><span id="count">0</span> View Cart</a>
        </form>
    </div>
</div>
</nav>` 
let header = document.getElementById("header");
header.innerHTML = nav;


