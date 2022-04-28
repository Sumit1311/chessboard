import { PieceType } from "../enums/PieceType";
import { PossibleBlocksMovement } from "../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../enums/PossibleMovement";
import { BoardPiece } from "./interface/IBoardPiece";

export default class BoardPieceFactory {
    static getBoardPiece(type: PieceType): BoardPiece {
        switch (type) {
            case PieceType.KING:
                return new BoardPiece(
                    [PossibleDirsEnum.HORIZONTAL, PossibleDirsEnum.VERTICAL, PossibleDirsEnum.DIAGONAL],
                    PossibleBlocksMovement.ONE
                );
            case PieceType.QUEEN:
                return new BoardPiece(
                    [PossibleDirsEnum.HORIZONTAL, PossibleDirsEnum.VERTICAL, PossibleDirsEnum.DIAGONAL],
                    PossibleBlocksMovement.EIGHT
                );
            case PieceType.PAWN:
                return new BoardPiece(
                    [PossibleDirsEnum.VERTICAL_FORWARD],
                    PossibleBlocksMovement.ONE
                );
            default:
                throw new Error();
        }
    }
}