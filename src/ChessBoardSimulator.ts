import { BoardPosition } from "./parsers/BoardPosition";
import InputParser from "./parsers/InputParser";
import { ConsoleReader } from "./readers/ConsoleReader";
import { IReader } from "./readers/IReader";

export class ChessBoardSimulator {

    private dataReader: IReader;

    constructor(dataReader?: IReader) {
        this.dataReader = dataReader || new ConsoleReader();
    }

    private getNextMove(input: string): Array<string> {

        let pieceAndPosition = InputParser.parse(input);
        return pieceAndPosition.piece
            .getPossiblePositions(pieceAndPosition.position)
            .map((pos: BoardPosition) => pos.toString());
    }

    printNextMoves(moves: Array<string>): void {
        console.log(`Possible moves are : ${moves.join(",")}`);
    }

    async run(): Promise<void> {
        let line;
        line = await this.dataReader.readNextLine();
        this.printNextMoves(this.getNextMove(line));
        this.dataReader.close();
    }
}