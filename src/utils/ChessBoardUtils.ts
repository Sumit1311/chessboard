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

    static getPossiblePositions(
        currPos: BoardPosition,
        direction: PossibleDirsEnum,
        movement: PossibleBlocksMovement
    ): Array<BoardPosition> {
        let positions: Array<BoardPosition> = [];
        switch (direction) {
            case PossibleDirsEnum.VERTICAL:
            case PossibleDirsEnum.VERTICAL_BACKWARD:
                for (let i = (currPos.getYPos() - 1);
                    i >= 0 &&
                    (Math.abs((i - currPos.getYPos())) <= this.getIterationCount(movement));
                    i--) {
                    positions.push(new BoardPosition(
                        currPos.getXPos(),
                        i
                    ));
                }
                
            case PossibleDirsEnum.VERTICAL_FORWARD:                
                for (let i = (currPos.getYPos() + 1);
                    (i < 8) &&
                    (Math.abs((i - currPos.getYPos())) <= this.getIterationCount(movement));
                    i++) {
                    positions.push(new BoardPosition(
                        currPos.getXPos(),
                        i
                    ));
                }

                return positions;
            case PossibleDirsEnum.HORIZONTAL:
                for (let i = (currPos.getXPos() + 1);
                    (i < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement));
                    i++) {
                    positions.push(new BoardPosition(
                        i,
                        currPos.getYPos()
                    ));
                }
                for (let i = (currPos.getXPos() - 1);
                    i >= 0 &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement));
                    i--) {
                    positions.push(new BoardPosition(
                        i,
                        currPos.getYPos()
                    ));
                }

                return positions;
            case PossibleDirsEnum.DIAGONAL:
                for (let i = (currPos.getXPos() + 1),
                    j = (currPos.getYPos() + 1);
                    (i < 8) && (j < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= this.getIterationCount(movement));
                    i++, j++) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() - 1),
                    j = (currPos.getYPos() - 1);
                    (i >= 0) && (j >= 0) &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= this.getIterationCount(movement));
                    i--, j--) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() + 1),
                    j = (currPos.getYPos() - 1);
                    (i < 8) && (j >= 0) &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= this.getIterationCount(movement));
                    i++, j--) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }
                for (let i = (currPos.getXPos() - 1),
                    j = (currPos.getYPos() + 1);
                    (i >= 0) && (j < 8) &&
                    (Math.abs((i - currPos.getXPos())) <= this.getIterationCount(movement)) &&
                    (Math.abs((j - currPos.getYPos())) <= this.getIterationCount(movement));
                    i--, j++) {
                    positions.push(new BoardPosition(
                        i,
                        j
                    ));
                }

                return positions;
        }
    }
}