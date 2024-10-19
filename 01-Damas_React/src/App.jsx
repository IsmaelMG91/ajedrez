import { Square } from "./components/Square"

const board = Array(64).fill(null)

function App() {
  

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
