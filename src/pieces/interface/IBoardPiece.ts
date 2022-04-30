import ChessBoardUtils from "../../utils/ChessBoardUtils";
import { PossibleBlocksMovement } from "../../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../../enums/PossibleMovement";
import { BoardPosition } from "../../parsers/BoardPosition";

export class BoardPiece {
    protected possibleDirs: Array<PossibleDirsEnum>;
    protected numberOfPlaces: PossibleBlocksMovement;

    constructor(possibleDirs: Array<PossibleDirsEnum>, numberOfPlaces: number) {
        this.possibleDirs = possibleDirs;
        this.numberOfPlaces = numberOfPlaces;
    }

    getPossibleDirs(): Array<PossibleDirsEnum> {
        return this.possibleDirs;
    }

    getNumberOfPlaces(): PossibleBlocksMovement {
        return this.numberOfPlaces;
    }
}