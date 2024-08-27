
import "./fetchMthd.css";
import { useEffect, useState } from "react";

export function FetchMthd()
{
    const[products,setProducts] = useState([{title:"",price:{off:0,total:0},img:"",rating:{rate:0,count:0,review:0},features:[""]}]);

    useEffect(()=>{

          fetch("products.json")
         .then(response=> response.json())
         .then(data=>{
           setProducts(data)
         })

    },[])
    return(
        <>
          <div>
             <header className="bg-dark p-3 text-center text-info mx-2 fw-bolder"><h2>I-maX</h2></header>
             <section>
                {
                    products.map(product=>
                        <div className="row bg-light m-2  p-2" key={product.title}>
                            <div className="col-3">
                                <img src={product.img} width="90%" />
                            </div>
                            <div className="col-7 text-black">
                                <div><h2 className="text-secondary my-3 ms-3">{product.title}</h2></div>
                                <div className="my-3">
                                    <span className="badge bg-success text-white p-2 ms-3">{product.rating.rate} <span className="bi bi-star-fill text-warning"></span></span>
                                    <b className="ms-2 text-secondary">{product.rating.count} - Rating & {product.rating.review} - Reviews</b>
                                </div>
                                <div className="mt-2">
                                    <ul className="d-block list-unstyled ms-0 w-100">
                                        {
                                            product.features.map(feature=>
                                                
                                                <li className="bg-light w-100 text-start mt-2" key={feature}><span className="bi bi-tag-fill text-warning"></span> {feature}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-start ps-4">
                                    <button className="btn btn-outline-light border border-1 text-dark ms-2">128 GB</button>
                                    <button className="btn btn-outline-light border border-1 text-dark ms-2">256 GB</button>
                                    <button className="btn btn-outline-light border border-1 text-dark ms-2">512 GB</button>
                                </div>
                            </div>
                            <div className="col-2 mt-3">
                                 <div>
                                    <div className="h3"><span className="text-danger ">{product.price.off}%</span> {product.price.total.toLocaleString("en-in",{style:"currency",currency:"INR"})}</div>
                                 </div>
                            </div>
                        </div>
                    )
                }
             </section>
          </div>
        </>
    )

    
}