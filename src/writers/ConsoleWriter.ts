import { IWriter } from "./interfaces/IWriter";

export default class ConsoleWriter implements IWriter {
    printArray(array: string[]): void {
        console.log(`Possible moves are : ${array.join(",")}`);
    }
}