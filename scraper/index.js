const osmosis = require('osmosis');
const website = 'http://onlyonceshop.com/';
let once = osmosis.get(website);

// Declare where i think the data is
const productData = '.products';


let products = once
.find('.wrapper .products .product__list li a')
.set({
    'location': '@href'
})
.follow('@href')
.find('.content .wrapper .product__details .product__info')
.set({
    'name': 'h2 + p'
})
.find('.content .readmore .wrapper')
.set({
    'description': 'p'
})
.data( (d) => {
    console.log(d)
} )



console.log(`I am scraping ${website}!`)
