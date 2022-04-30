import { PossibleBlocksMovement } from "../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../enums/PossibleMovement";
import { BoardPiece } from "./interface/IBoardPiece";

export default class King extends BoardPiece {
    constructor() {
        super(
            [PossibleDirsEnum.HORIZONTAL, PossibleDirsEnum.VERTICAL, PossibleDirsEnum.DIAGONAL],
            PossibleBlocksMovement.ONE
        )
    }
}