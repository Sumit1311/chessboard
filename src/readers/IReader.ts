export interface IReader {
    readNextLine(): Promise<string>;
    close(): void;
}