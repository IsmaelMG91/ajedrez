//export const initialBoard = ['T', 'C', 'A', 'D', 'R', 'A', 'C', 'T', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'T', 'C', 'A', 'D', 'R', 'A', 'C', 'T']
//por convenio, las constantes van en mayúsculas

export const initialBoard = [
    {
        type: 'rook',
        color: 'white',
        position: 0,
        render: '/chess_pieces/rook_w.png'
    },
    {
        type: 'knight',
        color: 'white',
        position: 1,
        render: '🍳' 
    },
    {
        type: 'bishop',
        color: 'white',
        position: 2,
        render: '🌭' 
    },
    {
        type: 'queen',
        color: 'white',
        position: 3,
        render: '🦪' 
    },
    {
        type: 'king',
        color: 'white',
        position: 4,
        render: '🥩' 
    },
    {
        type: 'bishop',
        color: 'white',
        position: 5,
        render: '🌭' 
    },
    {
        type: 'knight',
        color: 'white',
        position: 6,
        render: '🍳' 
    },
    {
        type: 'rook',
        color: 'white',
        position: 7,
        render: '🍔' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 8,
        render: '🍟' 
    }, 
    {
        type: 'pawn',
        color: 'white',
        position: 9,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 10,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 11,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 12,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 13,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 14,
        render: '🍟' 
    },
    {
        type: 'pawn',
        color: 'white',
        position: 15,
        render: '🍟' 
    }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    {
        type: 'pawn',
        color: 'black',
        position: 48,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 49,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 50,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 51,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 52,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 53,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 54,
        render: '🫘' 
    },
    {
        type: 'pawn',
        color: 'black',
        position: 55,
        render: '🫘' 
    },
    {
        type: 'rook',
        color: 'black',
        position: 56,
        render: '🍄' 
    },
    {
        type: 'knight',
        color: 'black',
        position: 57,
        render: '🥕' 
    },
    {
        type: 'bishop',
        color: 'black',
        position: 58,
        render: '🫛' 
    },
    {
        type: 'queen',
        color: 'black',
        position: 59,
        render: '🥑' 
    },
    {
        type: 'king',
        color: 'black',
        position: 60,
        render: '🍆' 
    },
    {
        type: 'bishop',
        color: 'black',
        position: 61,
        render: '🫛' 
    },
    {
        type: 'knight',
        color: 'black',
        position: 62,
        render: '🥕' 
    },
    {
        type: 'rook',
        color: 'black',
        position: 63,
        render: '🍄' 
    }]

export const TURNS = ['white', 'black']