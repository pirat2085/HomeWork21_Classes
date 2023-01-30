class Store {
    #products;
    constructor(products) {
        this.#products = [];
    }
    addProduct(product){
        this.#products.push(product);
    }
    getAll() {
        console.log(this.#products);
    }
    getByType(type) {
        console.log(this.#products.filter(value => value.constructor.name === type));
    };
}
const Store1 = new Store();

class Product extends Store{
    static counter = 10000;
    #id;
    #title;
    #manufacture;
    #price;
    constructor(products, title, manufacture, price) {
        super(products);
        Product.counter++;
        this.#id = Product.counter;
        this.#title = title;
        this.#manufacture = manufacture;
        this.#price = price;
    }
}

const product1 =new Product("Species","pepper", "Santa Maria", 100);
console.log(product1);

class Milk extends Product {
    #fat;

    constructor(products, title, manufacture, price, fat) {
        super(products, title, manufacture, price);
        this.#fat = fat;
    }
}
const Milk1 =new Milk("Milk","Milk Funny Farmer", "Funny Farmer", 100, "3,5%");
console.log(Milk1);

class Chocolate extends Product {
    #kind;
    constructor(products, title, manufacture, price, kind) {
        super(products, title, manufacture, price);
        this.#kind = kind;
    }
}
const Chocolate1 =new Chocolate("Chocolate","Dove Dark 80%", "Dove", 100, "Dark");
console.log(Chocolate1);

class Wine extends Product {
    #alcohol;
    constructor(products, title, manufacture, price, alcohol) {
        super(products, title, manufacture, price);
        this.#alcohol = alcohol;
    }
}
const Wine1 =new Wine("Wine","Chardonne", "Cape Du Sac", 150, "13%");
const Wine2 =new Wine("Wine","Sauvignon Blanc", "Cape Du Sac", 170, "13,5%");
console.log(Wine1);



Store1.addProduct(Wine1);
Store1.addProduct(Wine2);
Store1.addProduct(Chocolate1);
Store1.getAll();
Store1.getByType( "Chocolate");



