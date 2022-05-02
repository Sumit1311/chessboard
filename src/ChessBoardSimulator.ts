import ChessBoard from "./ChessBoard";
import { BoardPosition } from "./parsers/BoardPosition";
import InputParser from "./parsers/InputParser";
import { ConsoleReader } from "./readers/ConsoleReader";
import { IReader } from "./readers/IReader";
import ConsoleWriter from "./writers/ConsoleWriter";
import { IWriter } from "./writers/interfaces/IWriter";

export class ChessBoardSimulator {

    private dataReader: IReader;
    private dataWriter: IWriter;

    constructor(dataReader: IReader, dataWriter: IWriter) {
        this.dataReader = dataReader || new ConsoleReader();
        this.dataWriter = dataWriter || new ConsoleWriter();
    }

    async run(): Promise<void> {
        let line;
        let chessBoard = new ChessBoard();
        line = await this.dataReader.readNextLine();
        let pieceAndPosition = InputParser.parse(line);
        for(let p of pieceAndPosition){
            chessBoard.placePiece(p);
        }
        
        let moves =
            chessBoard.getNextPossibleMove(pieceAndPosition[0])
                .map((pos: BoardPosition) => pos.toString());
        this.dataWriter.printArray(moves);
        this.dataReader.close();
    }

    static async start(): Promise<void> {
        let simulator = new ChessBoardSimulator(
            new ConsoleReader(),
            new ConsoleWriter()
        );
        try {
            await simulator.run();
        } catch (err) {
            console.log("Error occurred while running the simulation", err);
            process.exit(1);
        }
    }
}