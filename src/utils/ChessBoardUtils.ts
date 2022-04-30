import { PossibleBlocksMovement } from "../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../enums/PossibleMovement";
import { BoardPosition } from "../parsers/BoardPosition";

export default class ChessBoardUtils {

    static getIterationCount(movement: PossibleBlocksMovement): number {
        if (movement == PossibleBlocksMovement.ONE)
            return 1;
        // if (movement == PossibleBlocksMovement.TWO_AND_HALF)
        //     return 2;
        else if (movement == PossibleBlocksMovement.EIGHT)
            return 7;
        else
            return -1;
    }
}