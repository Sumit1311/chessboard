import ChessBoardUtils from "../../utils/ChessBoardUtils";
import { PossibleBlocksMovement } from "../../enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "../../enums/PossibleMovement";
import { BoardPosition } from "../../parsers/BoardPosition";

export class BoardPiece {
    private possibleDirs: Array<PossibleDirsEnum>;
    private numberOfPlaces: PossibleBlocksMovement;

    constructor(possibleDirs: Array<PossibleDirsEnum>, numberOfPlaces: number) {
        this.possibleDirs = possibleDirs;
        this.numberOfPlaces = numberOfPlaces;
    }

    getPossiblePositions(currPos: BoardPosition): Array<BoardPosition> {
        let boardPositions: Array<BoardPosition> = [];

        for (let dir of this.possibleDirs) {
            boardPositions = boardPositions.concat(ChessBoardUtils.getPossiblePositions(
                currPos,
                dir,
                this.numberOfPlaces
            ));
        }

        return boardPositions;
    }
}