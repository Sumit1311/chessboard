import { PieceAndPosition } from "./@types/PieceAndPosition";
import { PossibleBlocksMovement } from "./enums/PossibleBlocksMovement";
import { PossibleDirsEnum } from "./enums/PossibleMovement";
import { BoardPosition } from "./parsers/BoardPosition";
import { BoardPiece } from "./pieces/interface/IBoardPiece";
import ChessBoardUtils from "./utils/ChessBoardUtils";

export default class ChessBoard {
  private posMap: Map<string, PieceAndPosition> = new Map();

  //private piecePosition: PieceAndPosition | null = null;

  private isValidPosition(position: BoardPosition): boolean {
    if (this.isValidXPosition(position) && this.isValidYPosition(position)) {
      return true;
    }
    return false;
  }

  private isValidCoordinate(coordinate: number): boolean {
    if (coordinate < 8 && coordinate >= 0) {
      return true;
    }
    return false;
  }

  private isValidXPosition(position: BoardPosition): boolean {
    if (this.isValidCoordinate(position.getXPos())) {
      return true;
    }
    return false;
  }

  private isValidYPosition(position: BoardPosition): boolean {
    if (this.isValidCoordinate(position.getYPos())) {
      return true;
    }
    return false;
  }

  private shouldStop(position: BoardPosition): boolean {
    if (this.posMap.has(position.toString())) {
      return true;
    }
    return false;
  }

  positionCalc(
    iteration: number,
    _xIterator: Generator,
    _yIterator: Generator
  ) {
    let positions = [];
    for (let i = 0; i < iteration; i++) {
      console.log(_xIterator.next(), _yIterator.next());
      let position = new BoardPosition(
        _xIterator.next().value,
        _yIterator.next().value
      );
      if (this.isValidPosition(position)) {
        if (this.shouldStop(position)) {
          positions.push(position);
          break;
        } else {
          positions.push(position);
        }
      }
    }
    return positions;
  }

  private getAllPossiblePositions(
    currPos: BoardPosition,
    direction: PossibleDirsEnum,
    movement: PossibleBlocksMovement
  ): Array<BoardPosition> {
    let positions: Array<BoardPosition> = [];
    switch (direction) {
      case PossibleDirsEnum.VERTICAL:
      case PossibleDirsEnum.VERTICAL_BACKWARD:
        let yIterator = function* () {
            let current = currPos.getYPos();
          while ()
          current--;
          yield current;
        };

        let xIterator = function* () {
          let current = currPos.getXPos();
          yield current;
        };

        return this.positionCalc(
          ChessBoardUtils.getIterationCount(movement),
          xIterator(),
          yIterator()
        );

        for (
          let i = currPos.getYPos() - 1;
          Math.abs(i - currPos.getYPos()) <=
          ChessBoardUtils.getIterationCount(movement);
          i--
        ) {
          let position = new BoardPosition(currPos.getXPos(), i);
          if (this.isValidPosition(position)) {
            if (this.shouldStop(position)) {
              positions.push(position);
              break;
            } else {
              positions.push(position);
            }
          }
        }

      case PossibleDirsEnum.VERTICAL_FORWARD:
        for (
          let i = currPos.getYPos() + 1;
          i < 8 &&
          Math.abs(i - currPos.getYPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i++
        ) {
          let position = new BoardPosition(currPos.getXPos(), i);
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }

        return positions;
      case PossibleDirsEnum.HORIZONTAL:
        for (
          let i = currPos.getXPos() + 1;
          i < 8 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i++
        ) {
          let position = new BoardPosition(i, currPos.getYPos());
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }

        for (
          let i = currPos.getXPos() - 1;
          i >= 0 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i--
        ) {
          let position = new BoardPosition(i, currPos.getYPos());
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }

        return positions;
      case PossibleDirsEnum.DIAGONAL:
        for (
          let i = currPos.getXPos() + 1, j = currPos.getYPos() + 1;
          i < 8 &&
          j < 8 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement) &&
          Math.abs(j - currPos.getYPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i++, j++
        ) {
          let position = new BoardPosition(i, j);
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }
        for (
          let i = currPos.getXPos() - 1, j = currPos.getYPos() - 1;
          i >= 0 &&
          j >= 0 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement) &&
          Math.abs(j - currPos.getYPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i--, j--
        ) {
          let position = new BoardPosition(i, j);
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }
        for (
          let i = currPos.getXPos() + 1, j = currPos.getYPos() - 1;
          i < 8 &&
          j >= 0 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement) &&
          Math.abs(j - currPos.getYPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i++, j--
        ) {
          let position = new BoardPosition(i, j);
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }
        for (
          let i = currPos.getXPos() - 1, j = currPos.getYPos() + 1;
          i >= 0 &&
          j < 8 &&
          Math.abs(i - currPos.getXPos()) <=
            ChessBoardUtils.getIterationCount(movement) &&
          Math.abs(j - currPos.getYPos()) <=
            ChessBoardUtils.getIterationCount(movement);
          i--, j++
        ) {
          let position = new BoardPosition(i, j);
          if (this.posMap.has(position.toString())) {
            positions.push(position);
            break;
          } else {
            positions.push(position);
          }
        }

        return positions;
    }
  }

  private getPossiblePositions(
    pieceAndPosition: PieceAndPosition
  ): Array<BoardPosition> {
    let boardPositions: Array<BoardPosition> = [];
    let dirs = pieceAndPosition.piece.getPossibleDirs();
    let numberOfPlaces = pieceAndPosition.piece.getNumberOfPlaces();

    for (let dir of dirs) {
      boardPositions = boardPositions.concat(
        this.getAllPossiblePositions(
          pieceAndPosition.position,
          dir,
          numberOfPlaces
        )
      );
    }

    return boardPositions;
  }

  placePiece(piecePosition: PieceAndPosition) {
    //this.piecePosition = piecePosition;
    this.posMap.set(piecePosition.position.toString(), piecePosition);
  }

  getNextPossibleMove(piecePosition: PieceAndPosition): Array<BoardPosition> {
    if (piecePosition) return this.getPossiblePositions(piecePosition);
    else throw new Error();
  }
}
