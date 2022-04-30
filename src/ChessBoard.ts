import { PieceAndPosition } from "./@types/PieceAndPosition";
import { PossibleBlocksMovement } from "./enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "./enums/PossibleMovement";
import { BoardPosition } from "./parsers/BoardPosition";
import ChessBoardUtils from "./utils/ChessBoardUtils";

export default class ChessBoard {

    private piecePosition: PieceAndPosition | null = null;

    private getAllPossiblePositions(
        currPos: BoardPosition,
        direction: PossibleDirsEnum,
        movement: PossibleBlocksMovement
    ): Array<BoardPosition> {
        let positions: Array<BoardPosition> = [];
        switch (direction) {
            case PossibleDirsEnum.VERTICAL:
            case PossibleDirsEnum.VERTICAL_BACKWARD:
                for (let i = (currPos.getYPos() - 1);
                    i >= 0 &&
                    (Math.abs((i - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i--) {
                    positions.push(new BoardPosition(
                        currPos.getXPos(),
                        i
                    ));
                }
                
            case PossibleDirsEnum.VERTICAL_FORWARD:                
                for (let i = (currPos.getYPos() + 1);
                    (i < 8) &&
                    (Math.abs((i - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i++) {
                    positions.push(new BoardPosition(
                        currPos.getXPos(),
                        i
                    ));
                }

                return positions;
            case PossibleDirsEnum.HORIZONTAL:
                for (let i = (currPos.getXPos() + 1);
                    (i < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i++) {
                    positions.push(new BoardPosition(
                        i,
                        currPos.getYPos()
                    ));
                }
                for (let i = (currPos.getXPos() - 1);
                    i >= 0 &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i--) {
                    positions.push(new BoardPosition(
                        i,
                        currPos.getYPos()
                    ));
                }

                return positions;
            case PossibleDirsEnum.DIAGONAL:
                for (let i = (currPos.getXPos() + 1),
                    j = (currPos.getYPos() + 1);
                    (i < 8) && (j < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i++, j++) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() - 1),
                    j = (currPos.getYPos() - 1);
                    (i >= 0) && (j >= 0) &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i--, j--) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() + 1),
                    j = (currPos.getYPos() - 1);
                    (i < 8) && (j >= 0) &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i++, j--) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() - 1),
                    j = (currPos.getYPos() + 1);
                    (i >= 0) && (j < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= ChessBoardUtils.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= ChessBoardUtils.getIterationCount(movement));
                    i--, j++) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }

                return positions;
        }
    }

    private getPossiblePositions(pieceAndPosition: PieceAndPosition): Array<BoardPosition> {
        let boardPositions: Array<BoardPosition> = [];
        let dirs = pieceAndPosition.piece.getPossibleDirs();
        let numberOfPlaces = pieceAndPosition.piece.getNumberOfPlaces();

        for (let dir of dirs) {
            boardPositions = boardPositions.concat(this.getAllPossiblePositions(
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