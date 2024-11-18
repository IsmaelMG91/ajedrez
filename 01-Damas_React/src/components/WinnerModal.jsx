export const WinnerModal = ({winner, resetGame}) => {

    if (winner === null) return null

    return (
        <section className="winner_container">
            <div className="modal_content">
                <h2>Ganador:</h2>
                <header>{ winner }</header>
                <footer>
                    <button onClick={resetGame}>Reiniciar partida</button>
                </footer>
            </div>
        </section>
    )
}