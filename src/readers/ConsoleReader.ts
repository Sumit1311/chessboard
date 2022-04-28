import { IReader } from "./IReader";
import readline from "readline";
import { ReaderOptions } from "../@types/ReaderOptions";

export class ConsoleReader implements IReader {
    private readInterface: readline.Interface;

    constructor() {
        let readInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readInterface.on('close', function () {
            console.log('\nExiting now...');
            process.exit(0);
        });

        this.readInterface = readInterface;
    }


    async readNextLine(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.readInterface.question(
                "Please enter piece position (e.g. piece,E4)",
                (data: string) => {
                    resolve(data);
                });
        })
    }

    close(): void {
        this.readInterface.close();
    }
}