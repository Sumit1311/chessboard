import { PieceType } from "../enums/PieceType";
import boardPieceMap from "./BoradPieceMap";
import { BoardPiece } from "./interface/IBoardPiece";
export default class BoardPieceFactory {
    static getBoardPiece(type: PieceType): BoardPiece {
        let creator = boardPieceMap.get(type);
        if (creator) {
            return creator();
        } else {
            throw new Error();
        }
    }
}