import { data } from "autoprefixer";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import { useState } from "react";


export default function ProductForm({
  _id,
  title:existingTitle,
  description:existingDescription,
  price:existingPrice,
})  {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProduct, setGoToProduct] = useState (false);
    const router = useRouter();
    
    async function createProduct(ev){        
        ev.preventDefault();
        const data = {title, description, price}
        if (_id) {
            //update
            
            await axios.put('/api/products', {...data, _id});
        } else {
            //create
            
            await axios.post('/api/products', data);
        }               
        setGoToProduct(true);
    }

    if (goToProduct){
        router.push('/products');
    }

    return (   
            <form onSubmit={createProduct}>
                <label>Product name</label> <br/>
                <input 
                    type="text" 
                    placeholder=" Product name"
                    value = {title} 
                    onChange={ev => setTitle(ev.target.value)}/>
         
                <label>Description</label>
                <textarea 
                    placeholder=" Description"
                    value = {description}
                    onChange={ev => setDescription(ev.target.value)}/>
         
                <label>Price</label> <br/>
                <input 
                    type="number" 
                    placeholder=" Price"
                    value = {price}
                    onChange={ev => setPrice(ev.target.value)}/>
         
                <button type="submit" className="btn-primary">Save</button>
            </form>      
    );
}