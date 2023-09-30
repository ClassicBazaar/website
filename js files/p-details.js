//details
let detailspage = document.querySelector("#details-page");

// mens
function mensdetails(id) {
    const product = mens.find((mens) => mens.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Mens</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="mensbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 let buybutton=document.querySelector(".buy-button")
 buybutton.addEventListener('click' ,closedetail)

//  kids
function kidsdetails(id) {
    const product = kids.find((kids) => kids.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Kids</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="kidsbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

//  bags
function bagsdetails(id) {
    const product = bags.find((bags) => bags.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Bags</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="bagsbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

//  footwears
function footwearsdetails(id) {
    const product = footwears.find((footwears) => footwears.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Footwears</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="footwearsbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

//  gadgets
function gadgetsdetails(id) {
    const product = gadgets.find((gadgets) =>gadgets.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Gadgets</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="gadgetsbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

// mobile accessories
function accessoriesdetails(id) {
    const product = accessories.find((accessories) =>accessories.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Accessories</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick="accessoriesbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

 // fashionaccessories
 function  fashionaccessoriesdetails(id) {
    const product =  fashionaccessories.find(( fashionaccessories) => fashionaccessories.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4"> Fashion Accessories</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick=" fashionaccessoriesbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

 // daily using products
 function  dailydetails(id) {
    const product =  daily.find(( daily) =>daily.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Daily using products</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick=" dailybuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)

 //electronics
 function  electronicsdetails(id) {
    const product =  electronics.find(( electronics) =>electronics.id === id);
    detailspage.innerHTML += `
    <section
    class="bg-dark position-fixed details-section"
    style="
        top: 11%;
        height: 80%;
        width: 80%;
        left: 10%;
        right: 10%;
        z-index: 9;
        overflow-y: scroll;
        overflow-x: hidden;
    "
>
    <div class="container-fluid">
        <div class="row pb-5">
            <div class="col-md-6 col-12">
                <a onclick="closedetail()" class="btn text-white  mt-2 align-item-top ">X</a>
                <br>
                    <div class="main-img">
                    <img src="${product.image}" alt="" class="img-fluid text-center main-image" />
                    </div>
                <div class="container">
                    <div class="row">
                        <div class="col-4 ">
                            <img
                                src="${product.subimage.image1}"
                                alt=""
                                class="align-items-start small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image2}"
                                alt=""
                                class="align-items-center small-img img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                        <div class="col-4">
                            <img
                                src="${product.subimage.image3}"
                                alt=""
                                class="align-items-end small-img subimage img-fluid"
                                style="width: 5em"
                                onclick="change(this)"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-12 mt-4">
                <h6 class="text-white mt-4">Electronics</h6>
                <h1 class="text-white mt-2">${product.title}</h1>
                <h6 class="text-white mt-4">Price:</h6>
                <h5 class="mt-4">
                    <span style="color: white">From</span><span style="color: #896633"> ${product.price}</span>
                </h5>
                <h6 class="text-white mt-4">
                    Cash on delivery : <span class="text-success">Available</span>
                </h6>
                <a onclick=" electronicsbuyf(${product.id}) " class="btn text-white mt-3 buy-button" style="background-color: #896633">Buy now</a>
                <h4 class="text-white mt-5">Description</h4>
                <h4>Terms & Conditions</h4>
                <small class="text-white text-center"
                    >This offer is valid until stocks last or till the offer ends. Final Price is inclusive
                    of the offer. Offer is applicable on select products and brands. In the event the user
                    returns any/all products in the order placed during the Offer Period, thereby not
                    maintaining the minimum purchase value, as required to avail the Offer, he/she shall not
                    be eligible for the Offer. Accordingly, the amount availed as a discount under the Offer
                    shall stand deducted from any refund(s) processed for the returned product(s).</small
                >
            </div>
        </div>
    </div>
</section>
    `;
}

function closedetail() {
    detailspage.innerHTML = null;
}
function change(smallimage) {
   let mainimage=document.querySelector(".main-image")
   mainimage.src=smallimage.src
}
 buybutton.addEventListener('click' ,closedetail)
