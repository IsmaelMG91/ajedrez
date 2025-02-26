import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { INITIALBOARD } from "./constant"
import { useState } from "react"
import { TURNS } from "./constant"
import { checkWinner } from "./logic/board"


function App() {

  //inicializamos el estado del tablero
  const [board, setBoard] = useState(INITIALBOARD)
  //se almacena la pieza seleccionada
  const [pieceSelected, setPieceSelected] = useState(null)
  //inicializa el turno para las piezas blancas
  const [turn, setTurn] = useState(TURNS[0])
  console.log(turn)
  //inicializa el estado de ganador como nulo
  const [winner, setWinner] = useState(null)

  //si no hay ganador, existe la pieza y su color coincide con el turno, guarda la selección
  const selectPiece = (index) => {
      if (board[index] && board[index].color === turn && winner === null) setPieceSelected({
        piece: board[index],
        color: board[index].color,
        position: index
      })
    }

  const updateBoard = (index) => {

    let newPosition = null

    //comprueba si la el movimiento se hará sobre una pieza del mismo color, de ser así, lanza una alerta y cancela el movimiento
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
    //actualiza el tablero y cambia el turno
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
    setBoard(INITIALBOARD)
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
            winner = { winner }
            color = { winner }
            resetGame = {resetGame}
            ></WinnerModal>
          </section>        
      </main>    
    </>
  )
}

export default App
