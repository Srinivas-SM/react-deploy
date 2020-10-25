import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

function Product (){
    const {id} = useParams()
    const url = `https://5f397b9b2300b100169a7feb.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error:false
    }
    )
    let content = null

    useEffect(() => {
        setProduct({
            loading:true,
            data:null,
            error:false
        })

        axios.get(url)
        .then(response => {
        setProduct({
            loading:false,
            data:response.data,
            error:false
                })
            })
        .catch(() => {
            setProduct({
                loading: false,
                data: null,
                error:true
            })
        })
    }, [url])


    if(product.error){
       
            content =  
            <Loader/> &&
            <div>
             {<Loader/>} Are you looking at what I am looking?, 
             <p>You might see this till infinity</p>
             <p>Caution Deadlock Ahead</p>
            </div>
            // &&<Loader/>

       
        
    }

    if(product.loading){
        content = <Loader/>
    }

    if(product.data){

        content = 
        <div>
            <h1 className='text-2xl font-bold mb-3'> 
            {product.data.name}
            </h1>
            <div>
                <img 
                src={product.data.images[0].imageUrl}
                alt={product.data.name}
                ></img>
            </div>
            <div className='font-bold text-xl mb-3'>
                ${product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
        <div>
           <h1> {content}</h1>
        </div>
    )
}

export default Product