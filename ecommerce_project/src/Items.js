import React from 'react'
import {useSelector} from 'react-redux'
import Item from './Item'

function Items() {
    const itemsobj = useSelector(store => store.itemReducer)
    const itemslist = itemsobj.items
    const itemsdata = itemslist.map((item)=>{
        return <div className="col-md-4">
           
            <Item item={item}/>

        </div>


    })



    return (
        <div className="container">
            <div className="row">
           <h1>totalitem : {itemsobj.items.length}</h1> 
                {itemsdata}


            </div>
           
            
        </div>
    )
}

export default Items