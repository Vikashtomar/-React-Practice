import React from 'react'
import { useContext } from 'react'
import { globaldata } from './App'


function Main() {
    // const [data, setData] = useState({})

    const {cart,setCart,cost,setCost} = useContext(globaldata)

    const prod = [{name:"item1",des:"This item 1",price:100},
    {name:"item2",des:"This item 2",price:200},
    {name:"item3",des:"This item 3",price:300}]

    function handleclick(e,value){
        e.preventDefault()
        setCart([...cart,value]);
        setCost(cost + value.price);
    }
  return (
    <div className='prod'>
        {prod.map((value,index)=>{
            
            return(
              <>
                <div className='item'>
               

              <p key={index}>
                {value.des}
              </p>
              <p key={index}>
                price:
                {value.price}
              </p>
               <button onClick={(e)=>handleclick(e,value)}>Add to Cart</button>
             </div>
            
            <div className='cart'>

                {(cart.length>0 )?cart.map((val)=>{

                  return(
                    
                      <div>

                        {val.name}
                      </div>
                  
                  )  

                }) : "" }
            </div>
            
              </>
                )

            
        })}

    </div>
  )
}

export default Main