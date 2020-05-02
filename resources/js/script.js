//^^^^^VARIABLES^^^^^^^//
// set variable for the city choosen
let currentCity = '';

// url array for pictures
const arregloUrls = [
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
[['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''], ['','','','','','','',''],],
];

// array with our different API's endpoints
const apiEndpoints = [
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1',
'https://v2-api.sheety.co/a224ee4b6491a7829ba1b3a01b2e114d/testSheety/sheet1'
];

// array with out data base info
let sheetyDB = [];

// array for the 'products'
const arregloCategorias = [
    'f1', 'f2','f3','f4', 'f5', 'f6', 'f7', 'f8', 
    'r1', 'r2','r3','r4', 'r5', 'r6', 'r7', 'r8',
    'g1', 'g2','g3','g4', 'g5', 'g6', 'g7', 'g8', 
    's1', 's2','s3','s4', 's5', 's6', 's7', 's8',
    'b1', 'b2','b3','b4', 'b5', 'b6', 'b7', 'b8',
];

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// get the html element to control scrolling
var html = document.getElementById('html');

// get the body element to control scrolling
var body = document.getElementsByClassName('body');

const req = new XMLHttpRequest();
let currentApi = '';
req.responseType ='json';

let shoppingCart = [];


//^^^^FUNCTIONS^^^^^^//
//function that updates images
function updateImages(id, url) {
    document.getElementById(id).src = url;
}

function assignApi(ind) {
    currentApi = apiEndpoints[ind];
}

function getRequest(endpoint) {
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(req);
          sheetyDB = req.response;
            console.log(sheetyDB);
        }
      };
    req.open('GET', endpoint, true);
    req.setRequestHeader("Authorization", "BEARER " + 'Y2VyZGExMTlkZWxFbmNpbm8yMjE');
    req.send();
}




//one the user chose a city, we update all images and save the city in cityId
function choseCity(id) {
    cityId = id;
    let cityIndex = 0;
    let = arrCont = 0;
    switch (currentCity) {
        case 'c1':
            cityIndex = 1;
            break;
        case 'c2':
            cityIndex = 2;
            break;
        case 'c3':
            cityIndex = 3;
            break;
        case 'c4':
            cityIndex = 4;
            break;
        case 'c5':
            cityIndex = 5;
            break;
        case 'c6':
            cityIndex = 6;
            break;
        case 'c7':
            cityIndex = 7;
            break;
        case 'c8':
            cityIndex = 8;
            break;
        default:
            cityIndex = 0;
            break;
    }
    //this nested loop goes through all products and loads the corresponding picture
    //for (let x = 0 ; x <= 4 ; x++) {
      //  for (let y = 0 ; y <= 7 ; y++) {
            //we use module 8 to load the right index in our categories array
            //updateImages(arregloCategorias[arrCont%8], arregloUrls[cityIndex][x][y]);
            //arrCont += 1;
      //  }
    //}
    assignApi(cityIndex);
    getRequest(currentApi);
    
}



//opens the modal
function openModal(id) {
    loadModal(id);
    scrollPosition = window.pageYOffset;
    modal.style.display = "block";
    html.style.overflow = "hidden";
    //document.getElementById('modalTitle').innerHTML = req.response.sheet1[0].id;
}

// loads the modal, maybe we change to a switch
function loadModal(ida) {
    let indiceFinal;
    for (let it = 0 ; it < sheetyDB.sheet1.length ; it ++) {
        if (sheetyDB.sheet1[it].id == ida){
            indiceFinal = it;
            break;
        }
    }
    console.log(sheetyDB.sheet1);
    console.log(sheetyDB.sheet1[indiceFinal]);
    console.log(sheetyDB.sheet1[indiceFinal].modalTitle);
    document.getElementById('modalTitle').innerHTML = sheetyDB.sheet1[indiceFinal].modalTitle;
    document.getElementById('modalPricePrice').innerHTML = sheetyDB.sheet1[indiceFinal].modalPricePrice;
    document.getElementById('modalDesc').innerHTML = sheetyDB.sheet1[indiceFinal].modalDesc;
    document.getElementById('modalImage').src = sheetyDB.sheet1[indiceFinal].modalImage;
}

function addToCart(id) {
    let toAddQuantity = document.getElementById('quantity').value;
    let toAddName = document.getElementById('modalTitle').innerHTML;
    let toAddPriceNumber = parseInt(document.getElementById('modalPricePrice').innerHTML) * parseInt(toAddQuantity);
    let toAddPriceString = toAddPriceNumber.toString();
    let toAddImage = document.getElementById('modalImage').src;
    let newAdittion = [toAddName, toAddPriceNumber, toAddPriceString, toAddQuantity, toAddImage];
    shoppingCart.push(newAdittion);
    console.log(shoppingCart);
    createRow(newAdittion)
    modal.style.display = "none";
    html.style.overflow = 'visible';
}

function createRow(newAdittion) {
    let newRow = document.createElement("DIV");
    let itemNameDiv = document.createElement("DIV");
    let itemImgDiv = document.createElement('DIV');
    let itemQuantDiv = document.createElement('DIV');
    let itemTotalDiv = document.createElement('DIV');
    let itemName = document.createElement('P');
    let itemImg = document.createElement('IMG');
    let itemQuant = document.createElement('P');
    let itemTotal = document.createElement('P');
    itemName.innerHTML = newAdittion[0];
    itemImg.src = newAdittion[4];
    itemQuant.innerHTML = newAdittion[3];
    itemTotal.innerHTML = newAdittion[2];
    itemNameDiv.appendChild(itemName);
    itemNameDiv.className = "itemNameDiv";
    itemImgDiv.className = 'itemImgDiv';
    itemQuantDiv.className = 'itemQuantDiv';
    itemTotalDiv.className = 'itemTotalDiv';
    newRow.className = 'shoppingRow'
    
    
    
    itemImgDiv.appendChild(itemImg);
    itemQuantDiv.appendChild(itemQuant);
    itemTotalDiv.appendChild(itemTotal);
    newRow.appendChild(itemImgDiv);
    newRow.appendChild(itemNameDiv);
    newRow.appendChild(itemQuantDiv);
    newRow.appendChild(itemTotalDiv);
    document.getElementById('cartSummary').appendChild(newRow);
    
    //tenemos que ver si tenemos que crear id
}



//Events//
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  html.style.overflow = 'visible';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    html.style.overflow = 'visible';
  }
}







