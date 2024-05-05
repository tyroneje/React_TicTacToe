//import { useState } from "react"

export default function Square(prop: any){
    //const [value, setValue]= useState('');

    // function handleClick(){
    //     setValue('X');
    // }

    return (
        <button className="square" onClick={prop.onSquareClick}>{prop.value}</button>
    )
}