import { PieceAndPosition } from "../@types/PieceAndPosition";
import { PieceType } from "../enums/PieceType";
import BoardPieceFactory from "../pieces/BoardPieceFactory";
import { BoardPosition } from "./BoardPosition";

export default class InputParser {
  static parse(input: string): Array<PieceAndPosition> {
    let inputArr = input.split(",");
    let pieceInp = inputArr[0].toLowerCase().trim();
    let posInp = inputArr[1].toUpperCase().trim();
    let opPosInp = inputArr[2].toUpperCase().trim();

    if (
      inputArr.length != 3 ||
      !InputParser.validatePosition(posInp) ||
      !InputParser.validatePosition(opPosInp)
    ) {
      throw new Error("Invalid Input");
    }

    let piece = BoardPieceFactory.getBoardPiece(<PieceType>pieceInp);
    let position = BoardPosition.parse(posInp);
    return [
      {
        piece,
        position,
      },
      {
        piece,
        position: BoardPosition.parse(opPosInp),
      },
    ];
  }

  static validatePosition(posInp: string): boolean {
    if (
      posInp.length != 2 ||
      posInp.charCodeAt(0) > "H".charCodeAt(0) ||
      posInp.charCodeAt(0) < "A".charCodeAt(0) ||
      posInp.charCodeAt(1) > "8".charCodeAt(0) ||
      posInp.charCodeAt(1) < "1".charCodeAt(0)
    ) {
      return false;
    }
    return true;
  }
}
