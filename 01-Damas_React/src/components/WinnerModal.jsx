export const WinnerModal = ({winner, resetGame, color}) => {

    if (winner === null) return null

    //si detecta un ganador devuelve el modal de ganador y un botón de reset
    return (
        <section className="winner_container">
            <div className="modal_content">
                <h2>Ganador:</h2>
                <header>{ winner ? <img src={ `./chess_pieces/king_${color}.png`}/> : null}</header>
                <footer>
                    <button onClick={resetGame}>Reiniciar partida</button>
                </footer>
            </div>
        </section>
    )
}