let menshtml = document.querySelector(".mens");

function mensrender() {
    mens.forEach((mens) => {
        menshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${mens.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${mens.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${mens.price}</span></p>
                <a  class="btn text-white mt-2" style="background-color: #896633"  onclick="mensbuyf(${mens.id})" >Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="mensdetails(${mens.id})">View details</a>
            </div>
        </div>
    </div>
        `;
    });
}
mensrender();

//kids
let kidshtml = document.querySelector(".kids");
function kidsrender() {
    kids.forEach((kids) => {
        kidshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${kids.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${kids.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${kids.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="kidsbuyf(${kids.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="kidsdetails(${kids.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
kidsrender();
//bags
let bagshtml = document.querySelector(".bags");
function bagsrender() {
    bags.forEach((bags) => {
        bagshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${bags.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${bags.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${bags.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633 " onclick="bagsbuyf(${bags.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="bagsdetails(${bags.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
bagsrender();

//footwears
let footwearshtml = document.querySelector(".footwears");
function footwearsrender() {
    footwears.forEach((footwears) => {
        footwearshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${footwears.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${footwears.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${footwears.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="footwearsbuyf(${footwears.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="footwearsdetails(${footwears.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
footwearsrender();

//gadgets
let gadgetshtml = document.querySelector(".gadgets");
function gadgetsrender() {
    gadgets.forEach((gadgets) => {
        gadgetshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${gadgets.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${gadgets.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${gadgets.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633"  onclick="gadgetsbuyf(${gadgets.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="gadgetsdetails(${gadgets.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
gadgetsrender();

//accessories
let accessorieshtml = document.querySelector(".accessories");
function accessoriesrender() {
    accessories.forEach((accessories) => {
        accessorieshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${accessories.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${accessories.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${accessories.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="accessoriesbuyf(${accessories.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="accessoriesdetails(${accessories.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
accessoriesrender();

//fashionaccessories
let fashionaccessorieshtml = document.querySelector(".fashionaccessories");
function fashionaccessoriesrender() {
    fashionaccessories.forEach((fashionaccessories) => {
        fashionaccessorieshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${fashionaccessories.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${fashionaccessories.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${fashionaccessories.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="fashionaccessoriesbuyf(${fashionaccessories.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="fashionaccessoriesdetails(${fashionaccessories.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
fashionaccessoriesrender();

//daily using products
let dailyhtml = document.querySelector(".daily");
function dailyrender() {
    daily.forEach((daily) => {
        dailyhtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${daily.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${daily.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${daily.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="dailybuyf(${daily.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="dailydetails(${daily.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
dailyrender();

//electronics
let electronicshtml = document.querySelector(".electronics");
function electronicsrender() {
    electronics.forEach((electronics) => {
        electronicshtml.innerHTML += `
        <div class="col-md-4 col-12 mt-5 mb-5" style="z-index:0;">
        <div class="card" >
            <img
                src="${electronics.image}"
                class="card-img-top"
                alt="..."
                
            />
            <div class="card-body">
                <h5 class="card-title">${electronics.title}</h5>
                <p class="card-text card-price">From<span style="color: #896633;"> ${electronics.price}</span></p>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633" onclick="electronicsbuyf(${electronics.id})">Buy now</a>
                <a href="#" class="btn text-white mt-2" style="background-color: #896633"onclick="electronicsdetails(${electronics.id})">View details</a>
            </div>
        </div>
    </div>
   `;
    });
}
electronicsrender();
