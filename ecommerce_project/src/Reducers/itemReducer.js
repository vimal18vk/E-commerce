

const initialData = {
    items: [
        {
            itemName:'Mens Polycotton Solid Printed Stitched Half Sleeve Casual Shirts' ,
            itemImage:'https://m.media-amazon.com/images/I/41ntYZ+utFL._AC_UL320_.jpg',
            itemModle:'PRIMEKDR',
            itemPrice:'₹899',
        },
        {
            itemName:'Mens Poly Cotton Digital Printed Stitched Half Sleeve Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg',
            itemModle:'LookMark',
            itemPrice:'₹799',
        },
        {
            itemName:'Mens Polycotton Solid Printed Stitched Half Sleeve Casual Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/41QGh9u2-4L._AC_UL320_.jpg',
            itemModle:'PRIMEKDR',
             
            itemPrice:'₹919',
        },
        {
            itemName:'Marmic Mens Printed Stretchable Casual Half Sleeve Shirts_001' ,
            itemImage:'https://m.media-amazon.com/images/I/51bRIXtfFsL._AC_UL320_.jpg',
            itemModle:'Generic',
             
            itemPrice:'₹799',
        },
        {
            itemName:'Sky Beach Mens Lycra Cotton Digital Printed Stitched Half' ,
            itemImage:'https://m.media-amazon.com/images/I/51eDFPQkAmL._AC_UL320_.jpg',
            itemModle:'Generic',
             
            itemPrice:'₹900',
        },
        {
            itemName:'Hoodies Pullover' ,
            itemImage:'https://m.media-amazon.com/images/I/51FNFmM459L._AC_UL320_.jpg',

            itemModle:'huddy',
            itemPrice:'₹999',
        },
        {
            itemName:'Full Sleeve Color Block Hooded Sweatshirt' ,
            itemImage:'https://m.media-amazon.com/images/I/51c4e2ZsxeL._AC_UL320_.jpg',
            itemModle:'huddy',
            itemPrice:'₹890',
        },
        {
            itemName:'Men Slim Fit Solid Spread Collar Casual Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/41Fh3VW46ZL._AC_UL320_.jpg',
            itemModle:'jacket',
             
            itemPrice:'₹750',
     
        },
        {
            itemName:'Mens Poly Cotton Digital Printed Stitched Half Sleeve Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg',
            itemModle:'LookMark',
             
            itemPrice:'₹750',
     
        },
        {
            itemName:'Mens Poly Cotton Digital Printed Stitched Half Sleeve Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/51JIFyIdHmS._AC_UL320_.jpg',
            itemModle:'LookMark',
             
            itemPrice:'₹750',
     
        },
        {
            itemName:'Mens Regular Fit Shirt Casual Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/51pZh44mNwL._AC_UL320_.jpg',
            itemModle:'Tarshika',
             
            itemPrice:'₹650',
     
        },
        {
            itemName:'Mens Slim Fit Casual Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/71qTbVnVZZL._AC_UL320_.jpg',
            itemModle:'Destiny Fashion',
             
            itemPrice:'₹550',
     
        },
        {
            itemName:'Mens Poly Cotton Digital Printed Half Sleeve Shirt' ,
            itemImage:'https://m.media-amazon.com/images/I/41RGBidUK3L._AC_UL320_.jpg',
            itemModle:'LookMark',
             
            itemPrice:'₹850',
     
        },
        {
            itemName:'Orange Mandal Pattern Printed Half Sleeve Shirt for Men' ,
            itemImage:'https://m.media-amazon.com/images/I/61cx83Oa77L._AC_UL320_.jpg',
            itemModle:'XPIOR',
             
            itemPrice:'₹700',
     
        },
        {
            itemName:'Mens Color Full Printed Half Sleeve Shirt.' ,
            itemImage:'https://m.media-amazon.com/images/I/51Z+Tpap0+L._AC_UL320_.jpg',
            itemModle:'Fashionable Village',
             
            itemPrice:'₹650',
     
        },
    ]
}
function itemsReducer(state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM': return {
            ...state,
            items: [...state.items, action.payload]
        }
    }
    return state
}
export default itemsReducer