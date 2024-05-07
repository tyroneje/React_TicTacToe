import { useState } from "react";
import Square from "./Square"

export default function Board() {
    const [isXNext, useisXNext] = useState(true);
    const [squares, useSquares] = useState(Array(9).fill(null));

    function handleClick(idx: number) {
        if(squares[idx]) return;

        const nextSquare = squares.slice();
        
        if(isXNext){
            nextSquare[idx] = 'X';
        }
        else{
            nextSquare[idx] = 'O';
        }

        useSquares(nextSquare);
        useisXNext(!isXNext);

    }


    return (<>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
    </>

    )
}