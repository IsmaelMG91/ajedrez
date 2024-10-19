export const Square = ({ children, index }) => {

    const row = Math.floor(index / 8)
    const col = index % 8
    const isBeige = (row + col) % 2 === 0

    const className = `square ${isBeige ? 'beige': 'brown' }`

    return (
        <div className={className}> { children } </div>
    )

}