import React,{useState} from 'react';
export default function HighOrderComponent() {
    return (
        <div className="hocc">
            <HOC1 cmp={Counter} />
            <HOC2 cmp={Counter} />
        </div>

    )
}
function HOC1(props){
    return(
        <h4> {<props.cmp /> }</h4>
    )
}
function HOC2(props){
    return(
        <>
        <h4>  {<props.cmp /> } </h4>
        </>
        
        
    )
}
function Counter() {
    const [count,setCount]= useState(0);
    return(
        
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Button from Component  Clicked {count}</button>
    
    )
    
}
