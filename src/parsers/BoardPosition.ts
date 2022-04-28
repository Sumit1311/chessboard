export class BoardPosition {
    private xPos: number = 0;
    private yPos: number = 0;

    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }

    static parse(position: string): BoardPosition {
        if (position.length != 2) {
            throw new Error("Invalid Argument");
        }

        return new BoardPosition(
            (position.charCodeAt(0) - "A".charCodeAt(0)),
            parseInt(position[1]) - 1
        );
    }

    getXPos() {
        return this.xPos;
    }

    getYPos() {
        return this.yPos;
    }

    toString(): string {
        return (String.fromCharCode(this.xPos + "A".charCodeAt(0))) + (this.yPos + 1);
    }
}