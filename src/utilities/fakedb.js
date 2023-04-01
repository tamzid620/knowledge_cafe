// use local storage to manage cart data
const addToDb = id => {
    let Cart = getCart();
    // add blogTitle
    const blogTitle = Cart[id];
    if (!blogTitle) {
        Cart[id] = 1;
    }
    else {
        const newlBlogTitle = blogTitle + 1;
        Cart[id] = newlBlogTitle;
    }
    localStorage.setItem('bookmark-div', JSON.stringify(Cart));
}

const getCart = () => {
    let Cart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('bookmark-div');
    if (storedCart) {
        Cart = JSON.parse(storedCart);
    }
    return Cart;
}
export {
    addToDb,
    getCart
}
