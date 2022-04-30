import { PieceAndPosition } from "./@types/PieceAndPosition";
import { BoardPosition } from "./parsers/BoardPosition";
import { BoardPiece } from "./pieces/interface/IBoardPiece";
import ChessBoardUtils from "./utils/ChessBoardUtils";

export default class ChessBoard {

    private piecePosition: PieceAndPosition | null = null;

    getPossiblePositions(pieceAndPosition: PieceAndPosition): Array<BoardPosition> {
        let boardPositions: Array<BoardPosition> = [];
        let dirs = pieceAndPosition.piece.getPossibleDirs();
        let numberOfPlaces = pieceAndPosition.piece.getNumberOfPlaces();

        for (let dir of dirs) {
            boardPositions = boardPositions.concat(ChessBoardUtils.getPossiblePositions(
                pieceAndPosition.position,
                dir,
                numberOfPlaces
            ));
        }

        return boardPositions;
    }


    placePiece(piecePosition: PieceAndPosition) {
        this.piecePosition = piecePosition;
    }

    getNextPossibleMove(): Array<BoardPosition> {
        if (this.piecePosition)
            return this.getPossiblePositions(this.piecePosition);
        else
            throw new Error();
    }
}