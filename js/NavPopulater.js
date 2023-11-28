const header = document.getElementById("header");

const nav = `<nav>
<div class="logo">
    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGv4rPuhkhg40pqv2lgpAN7UOQGEelKxHZ85DJGh-D6OIrvFG4fa64uM8gPUoXtMvwPI6dsYVEnR55E74NxOTo-Iw3CTBMuk0oeayMvsQLBEXLnk0dp0E1_CVFCIN4uL0CChqXW10monHwehyphenhyphenQNzgFIkuSiDggPxf1c-2TxfryCnD8WWrMWbMDcg20_72e/s832/logo%20eclock.png" alt="" style="height: 50px;">
</div>
<ul class="links">

    <li>
        <a href="/">
            <ion-icon name="planet-outline"></ion-icon>Home
        </a>
        <hr class="activeLine">
    </li>
    <li>
        <a href="#">
            <ion-icon name="bag-outline"></ion-icon>Products
        </a>
        <hr class="activeLine">
    </li>
    <li>
        <a href="about.html">
            <ion-icon name="help-circle-outline"></ion-icon>About Us
        </a>
        <hr class="activeLine">
    </li>
    <li>
        <a href="#">
            <ion-icon name="arrow-down-circle-outline"></ion-icon>Download
        </a>
        <hr class="activeLine">
    </li>
    <li>
        <a href="#">
            <ion-icon name="image-outline"></ion-icon>Gallery
        </a>
        <hr class="activeLine">
    </li>
    <li>
        <a href="#">
            <ion-icon name="call-outline"></ion-icon>Contact
        </a>
        <hr class="activeLine">
    </li>
</ul>
</nav>`;

header.innerHTML = nav;
