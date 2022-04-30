import { PossibleBlocksMovement } from "../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../enums/PossibleMovement";
import { BoardPiece } from "./interface/IBoardPiece";

export default class Pawn extends BoardPiece {
    constructor() {
        super(
            [PossibleDirsEnum.VERTICAL_FORWARD],
            PossibleBlocksMovement.ONE
        )
    }
}