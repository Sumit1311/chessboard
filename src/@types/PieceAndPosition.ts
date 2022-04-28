import { BoardPosition } from "../parsers/BoardPosition"
import { BoardPiece } from "../pieces/interface/IBoardPiece"

export type PieceAndPosition = {
    piece: BoardPiece,
    position: BoardPosition
}