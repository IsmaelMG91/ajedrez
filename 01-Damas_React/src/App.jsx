import { Square } from "./components/Square"
import { initialBoard } from "./constant"
import { useState } from "react"

function App() {

  //inicializamos el estado del tablero
  const [board, setBoard] = useState(initialBoard)
  //se almacena la pieza seleccionada
  const [pieceSelected, setPieceSelected] = useState(null)

  const updateBoard = (index) =>{
    const newBoard = [...board]
    //const oldPosition = index
    const newPosition = pieceSelected ? index : null
    //console.log(oldPosition)
    console.log(newPosition)

    if (board[index]) setPieceSelected(board[index])
    if (newPosition) {
      newBoard[newPosition] = pieceSelected
      //newBoard[oldPosition] = null
      setBoard(newBoard)
      setPieceSelected(null)
    }
  }
  

  return (
    <>
      <main className="board">
        <h3>Damas en React</h3>
          <section className="game">
            {
              board.map((_,index) => {
                return (
                  <Square
                  key = { index }
                  index = { index }
                  piece = { board[index] }
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
