import { Square } from "./components/Square"
import { initialBoard } from "./constant"
import { useState } from "react"
import { TURNS } from "./constant"
import { checkWinner } from "./logic/board"

// TO DO:
//        -Añadir lógica de victoria (que el rey sea eliminado) y botón de reset
//        -Evitar que las piezas del mismo color se puedan "comer" entre ellas
//        -Añadir lógica de movimiento a, al menos, un tipo de pieza

function App() {

  //inicializamos el estado del tablero
  const [board, setBoard] = useState(initialBoard)
  //se almacena la pieza seleccionada
  const [pieceSelected, setPieceSelected] = useState(null)
  //inicializa el turno para las piezas blancas
  const [turn, setTurn] = useState(TURNS[0])
  console.log(turn)
  //inicializa el estado de ganador como nulo
  const [winner, setWinner] = useState(null)

  const selectPiece = (index) => {
      if (board[index] && board[index].color === turn && winner === null) setPieceSelected({
        piece: board[index],
        position: index
      })
    }

  const updateBoard = (index) => {

    const newPosition = pieceSelected ? index : null
    console.log(newPosition)

    let newBoard
    
    if (newPosition) {
      board[pieceSelected.position] = null
      newBoard = [...board]
      newBoard[newPosition] = pieceSelected.piece
      setBoard(newBoard)
      setPieceSelected(null)
      setTurn(turn === TURNS[0] ? TURNS[1] : TURNS[0] )
    }

    const newWinner = checkWinner(newBoard)
    if (newWinner)
      setWinner(newWinner)
      console.log(winner)
  }
  

  return (
    <>
      <main className="board">
        <h3>Ajedrez en React</h3>
          <section className="game">
            {
              board.map((_,index) => {
                return (
                  <Square
                  key = { index }
                  index = { index }
                  piece = { board[index] ? board[index]['render'] : null}
                  selectPiece={selectPiece}
                  updateBoard = {updateBoard}
                  >
                  </Square>
                )
                
              })
            }
          </section>
          <section>
            {
              winner === null ?
              <h4>Turno de las piezas {turn === TURNS[0] ? 'blancas' : 'negras'}</h4> 
              : ''
            }
            
          </section>        
      </main>    
    </>
  )
}

export default App
