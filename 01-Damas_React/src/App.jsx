import { Square } from "./components/Square"
import { initialBoard } from "./constant"
import { useState } from "react"

function App() {

  //inicializamos el estado del tablero
  const [board, setBoard] = useState(initialBoard)
  

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
