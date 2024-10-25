export const Square = ({ children, index, piece, updateBoard }) => {

    const row = Math.floor(index / 8)
    const col = index % 8
    const isBeige = (row + col) % 2 === 0

    const className = `square ${isBeige ? 'beige': 'brown' }`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div onClick={handleClick} className={className}> { children }{ piece } </div>
    )

}