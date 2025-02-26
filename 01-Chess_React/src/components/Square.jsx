export const Square = ({ children, index, type, color, selectPiece, updateBoard, pieceSelected }) => {

    //lógica para dibujar los colores del tablero
    const row = Math.floor(index / 8)
    const col = index % 8
    const isWhite = (row + col) % 2 === 0

    const className = `square ${isWhite ? 'white': 'black' } ${pieceSelected === index ? 'selected': ''}`

    const handleClick = () => {
        selectPiece(index)
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}> {children}
        {type ? <img src={ `./chess_pieces/${type}_${color}.png`}/> : null}         
        </div>
    )

}