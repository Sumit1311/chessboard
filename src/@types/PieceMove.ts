import { PossibleBlocksMovement } from "../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../enums/PossibleMovement"

export type PieceMove = {
    possibleDirs: number,
    numberOfPlaces: PossibleBlocksMovement;
}