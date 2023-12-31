import React,{useState,useEffect} from 'react'                                        

const Api = () => {                                  
                                                  
const [product, setproduct] = useState([])           

    useEffect(() => {                                              
        fetch("https://fakestoreapi.com/products").then((res) => {     
            return res.json()
        }).then((data)=>{
            console.log(data);
            setproduct(data)
        })
},[])
  return (          
    <div className='d-flex flex-wrap'>
    {product.map((data)=>{
      return (  
        
        <div className="card w-50 ">
        <img height={'400px'} className="card-img-top img-fluid" src={data.image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data.title }</h5>
          <p className="card-text">{data.description}</p>             
          <a href="#" className="btn btn-primary">Go somewhere</a> 
        </div>  
      </div>
      
    )}  
    )}
 
    </div>   
  )   
}    
 
export default Api                                                        