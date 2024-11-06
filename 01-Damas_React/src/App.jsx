import { Square } from "./components/Square"
import { initialBoard } from "./constant"
import { useState } from "react"
import { TURNS } from "./constant"

function App() {

  //inicializamos el estado del tablero
  const [board, setBoard] = useState(initialBoard)
  //se almacena la pieza seleccionada
  const [pieceSelected, setPieceSelected] = useState(null)

  const selectPiece = (index) => {
    if (board[index]) setPieceSelected({
      piece: board[index],
      position: index
    })
  }

  const updateBoard = (index) => {
    const newPosition = pieceSelected ? index : null
    console.log(newPosition)
    
    if (newPosition) {
      board[pieceSelected.position] = null
      const newBoard = [...board]
      newBoard[newPosition] = pieceSelected.piece
      setBoard(newBoard)
      setPieceSelected(null)
    }
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
      </main>    
    </>
  )
}

export default App
