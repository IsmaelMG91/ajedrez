export const checkWinner = (boardToCheck) => {
    let kingColor = []
    //comprobar cuantas piezas de king existen en el tablero
    if (boardToCheck) {
        for (let i = 0; i < boardToCheck.length; i++){
            if (boardToCheck[i] != null && boardToCheck[i].type === 'king') {
                kingColor.push(boardToCheck[i].color)
            }
        }
    } 
    if (kingColor.length === 1) {
        return kingColor[0]
    } else { return null }
}