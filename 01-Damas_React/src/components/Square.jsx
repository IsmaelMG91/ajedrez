export const Square = ({ children, index, type, color, selectPiece, updateBoard, pieceSelected }) => {

    const row = Math.floor(index / 8)
    const col = index % 8
    const isBeige = (row + col) % 2 === 0

    const className = `square ${isBeige ? 'beige': 'brown' } ${pieceSelected === index ? 'selected': ''}`

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