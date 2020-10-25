import React ,{useState,useEffect }from 'react';
import axios from 'axios'
import Loader from '../Components/Loader';
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home (){

    const url = `https://5f397b9b2300b100169a7feb.mockapi.io/products?page=1&limit=15`
    
    let products = useAxiosGet(url)
    let content = null

    if(products.error){
       
        content =  
        <Loader/> &&
        <div>
         {<Loader/>} Are you looking at what I am looking?, 
         <p>You might see this till infinity</p>
         <p>Caution Deadlock Ahead</p>
        </div>
        // &&<Loader/>

        }

        if(products.loading){
            content = <Loader/>
        }

        if(products.data){

            content = 
            products.data.map((product) =>
            <div key={product.id}>
                <ProductCard
                        product ={product}
                />
            </div>
            )
            
        }
    


    return(
        <div>
            <h1 className="font-bold text-2xl">
                Best Sellers
            </h1>
            {content}
        </div>
    )
}

export default Home