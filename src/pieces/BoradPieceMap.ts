import { PieceType } from "../enums/PieceType";
import King from "./King";
import Pawn from "./Pawn";
import Queen from "./Queen";

let boardPieceMap = new Map<PieceType, Function>();
boardPieceMap.set(PieceType.KING, () => new King());
boardPieceMap.set(PieceType.QUEEN, () => new Queen());
boardPieceMap.set(PieceType.PAWN, () => new Pawn());

export default boardPieceMap; 