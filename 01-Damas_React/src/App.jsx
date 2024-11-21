import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { initialBoard } from "./constant"
import { useState } from "react"
import { TURNS } from "./constant"
import { checkWinner } from "./logic/board"

// TO DO:
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
        color: board[index].color,
        position: index
      })
    }

  const updateBoard = (index) => {

    //const newPosition = pieceSelected ? index : null
    let newPosition = null

    if (pieceSelected) {
      if (board[index] === null || pieceSelected.color !== board[index].color) {
        newPosition = index
      } else if (pieceSelected.color === board[index].color){
        setPieceSelected(null)
        alert("No puedes eliminar piezas de tu mismo color")
      }
    }
    console.log(newPosition)

    let newBoard
    
    if (newPosition) {
      newBoard = [...board]
      newBoard[pieceSelected.position] = null
      newBoard[newPosition] = pieceSelected.piece
      setBoard(newBoard)
      setPieceSelected(null)
      setTurn(turn === TURNS[0] ? TURNS[1] : TURNS[0] )
    }

    const newWinner = checkWinner(newBoard)
    if (newWinner)
      setWinner(newWinner)
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setPieceSelected(null)
    setTurn(TURNS[0])
    setWinner(null)
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
                  type = { board[index] ? board[index].type : null}
                  color = { board[index] ? board[index].color : null }
                  selectPiece={selectPiece}
                  updateBoard = {updateBoard}
                  pieceSelected = {pieceSelected ? pieceSelected.position : null}
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
            <WinnerModal
            winner = {winner}
            resetGame = {resetGame}
            ></WinnerModal>
          </section>        
      </main>    
    </>
  )
}

export default App
