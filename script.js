var li, 
	a,
	navigation;

navigation = document.getElementById("navigation");

var navNames = [
	{"name": "Home", "href":"index.html"},
	{"name": "Catalog", "href":"catalog.html"},
	{"name": "About Us", "href":"about_us.html"},
	{"name": "Contacts", "href":"contacts.html"},
	{"name": "Portfolio", "href":"portfolio.html"},
	{"name": "Blog", "href":"blog.html"}
];

for(var i=0; i<navNames.length; i++) {
	li = document.createElement("li");
	a = document.createElement("a");
	navigation.appendChild(li);
	li.appendChild(a);
	li.setAttribute("class", "nav-item");
	a.innerHTML = navNames[i].name;
	a.setAttribute("href", navNames[i].href);
	a.setAttribute("class", "nav-link");
	if (document.location.href.indexOf(navNames[i].href) != -1) {
		document.getElementById("h1").innerHTML = navNames[i].name;
		li.setAttribute("class", "active");
	}
}

var products = [
	{"name":"snikers #1", "price": 125.22, "image":"bg-01.jpg", "description":"This very cool snikers for sport"},
	{"name":"snikers #2", "price": 180.66, "image":"bg-02.jpg", "description":"This very cool snikers for gum and crossfit"},
	{"name":"snikers #3", "price": 240.00, "image":"bg-03.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #4", "price": 399.99, "image":"bg-04.jpg", "description":"This very cool snikers for sport"},
	{"name":"snikers #5", "price": 199.89, "image":"bg-05.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #6", "price": 59.00, "image":"bg-06.jpg", "description":"This very cool snikers  for sport"},
	{"name":"snikers #7", "price": 145.01, "image":"bg-07.jpg", "description":"This very cool snikers for gum and sport"},
	{"name":"snikers #8", "price": 225.23, "image":"bg-08.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #9", "price": 199.89, "image":"bg-05.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #10", "price": 59.00, "image":"bg-06.jpg", "description":"This very cool snikers  for sport"},
	{"name":"snikers #11", "price": 145.01, "image":"bg-07.jpg", "description":"This very cool snikers for gum and sport"},
	{"name":"snikers #12", "price": 225.23, "image":"bg-08.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #13", "price": 225.23, "image":"bg-08.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #14", "price": 199.89, "image":"bg-05.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #15", "price": 59.00, "image":"bg-06.jpg", "description":"This very cool snikers  for sport"},
	{"name":"snikers #16", "price": 145.01, "image":"bg-07.jpg", "description":"This very cool snikers for gum and sport"},
	{"name":"snikers #17", "price": 199.89, "image":"bg-05.jpg", "description":"This very cool snikers for crossfit"},
	{"name":"snikers #18", "price": 59.00, "image":"bg-06.jpg", "description":"This very cool snikers  for sport"},
];

function createNewElement(tag, innerContent=null, classStr=null, attr=null){
	var el = document.createElement(tag);
	el.innerHTML = (innerContent)?innerContent:"";
	el.className = (classStr)?classStr:"";
   
	if(attr){
		attr.map((attr_el)=>el.setAttribute(attr_el.name, attr_el.value));
	}

	return el;
}

function createCard(product){
	var link = createNewElement("a", "Add to cart", "btn btn-primary", [{"name":"href", "value": "#"}]);
	var p = createNewElement("p", product.description, "card-text");
	var title = createNewElement("h5", product.name, "card-title");
	var price = createNewElement("h3", "$"+product.price.toFixed(2), "card-price");
	var cardImg = createNewElement("img", null, "card-img-top", [{"name":"src", "value": "./images/"+product.image},{"name":"alt", "value":product.name}]);

	var cardBody = attachChildrenToParent(createNewElement("div", null, "card-body"), [title,p,price,link]);
	var card = attachChildrenToParent(createNewElement("div", null, "card"), [cardImg,cardBody]);
	var catalogItem = attachChildrenToParent(createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);

	return catalogItem;
}

function attachChildrenToParent(html, array_el){
	array_el.map((el)=>html.appendChild(el));
	return html;
}

var catalog = document.getElementById("catalog");
var minProductsOnPage = products.slice(0,8);
minProductsOnPage.map((el)=>catalog.appendChild(createCard(el)));

// Counter El

var productElInPage  = document.getElementById("counterProductsOnPage");
productElInPage = productElInPage.appendChild(createNewElement("p", minProductsOnPage.length, "counter__products-on-page-num"));

var productElInCatalog = document.getElementById("counterProductsAll");
productElInCatalog = productElInCatalog.appendChild(createNewElement("p", products.length, "counter__products-num"));


// // Search 1

// // function showEl(id) {
// // 	document.getElementById(id).style.display = "block";
// // }
// function hideEl(id) {
// 	document.getElementById(id).style.display = "none";
// }

// var searchButton = document.getElementById("searchBtn");
// var searchForValue = document.getElementById("searchInput");


// function searchOnCatalog(el){
// 	el = el.value;

// 	var rezultSearch = products.filter( i => i.name.indexOf(el) != -1);

// 	minProductsOnPage = hideEl("catalog");
// 	var catalogSearch = document.getElementById("catalogSearch");
// 	rezultSearch.map((el)=>catalogSearch.appendChild(createCard(el)));

// }

// searchButton.onclick = function() {
// 	searchOnCatalog(searchForValue);
// };

// // searchButton.addEventListener("click", function () {
// // 	searchButton.submit(searchOnCatalog(searchForValue));
// // });


// Search 2

var searchButton = document.getElementById("searchBtn");
var searchForValue = document.getElementById("searchInput");


function searchOnCatalog(el){
	el = el.value;

	var rezultSearch = (products.filter( i => (i.name.indexOf(el) != -1) || (i.description.indexOf(el) != -1)));

	while (catalog.firstChild) {
		catalog.removeChild(catalog.firstChild); 
	}

	// var oldNum = document.getElementsByClassName("counter__products-on-page-num");
	// var newNum = createNewElement("p", rezultSearch.length, "counter__products-num");

	minProductsOnPage = rezultSearch;
	// productElInCatalog.parentNode.removeChild("p");
	// productElInCatalog = productElInCatalog.replaceChild(newNum, oldNum);
	productElInCatalog = productElInCatalog.appendChild(createNewElement("p", rezultSearch.length, "counter__products-num"));
	minProductsOnPage = minProductsOnPage.slice(0,12);
	productElInPage = productElInPage.appendChild(createNewElement("p", minProductsOnPage.length, "counter__products-on-page-num"));
	minProductsOnPage.map((el)=>catalog.appendChild(createCard(el)));
}

searchButton.onclick = function() {
	searchOnCatalog(searchForValue);
};


var catalogPagination = [
	{ "name": "&laquo;", "pageLink": "#" },
	{ "name": "1", "pageLink": "#" },
	{ "name": "2", "pageLink": "#" },
	{ "name": "3", "pageLink": "#" },
	{ "name": "&raquo;", "pageLink": "#" }
];

function createCatalogPagination(el) {
	var ul = createNewElement("ul", null, "pagination");
	var li, 
		a;
	for (var i = 0; i < el.length; i++) {
		li = createNewElement("li", null, "page-item");
		a = createNewElement("a", el[i].name, "page-link", [{ "name": "href", "value": el[i].pageLink }]);
		li.appendChild(a);
		ul.appendChild(li);
	}
	return ul;
}

var pagination = document.getElementById("pagination");
pagination.appendChild(createCatalogPagination(catalogPagination));