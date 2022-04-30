import { ChessBoardSimulator } from "../src/ChessBoardSimulator";
import Sinon from "sinon";
import { ConsoleReader } from "../src/readers/ConsoleReader";
import ConsoleWriter from "../src/writers/ConsoleWriter";

describe("test chess board simulator", () => {
    describe("test cases for king", () => {
        let piece = "king";
        it("should return 8 moves for middle positions", (done) => {
            let positions = ["E4", "e6", "g2", "d4"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(8);
                        count--;
                        if (count == 0)
                            done();
                    })
                });


                let simulator = new ChessBoardSimulator(reader, writer);
                simulator.run();
            }
        });

        it("should return 3 moves for corners", (done) => {
            let positions = ["A8", "H8", "A1", "H1"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(3);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);
                simulator.run()
                    .catch(() => done(false));
            }


        });

        it("should return 5 moves for borders", (done) => {
            let positions = ["B8", "e8", "H4", "G1", "B1", "A4"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(5);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch(() => done(false));
            }
        });

        it("should return errors for out of board positions", (done) => {
            let positions = ["I1", "A9", "P9"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        // expect(args.length).toBe(5);
                        // count--;
                        // if (count == 0)
                        //     done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch((err) => {
                        count--;
                        if (count == 0)
                            done();
                    });
            }
        });
    });

    describe("test cases for queen", () => {
        let piece = "queen";
        it("should return correct number of moves for middle positions", (done) => {
            let positions = [{
                "position": "E4",
                "expected": 27
            }, {
                "position": "C6",
                "expected": 25
            }, {
                "position": "G2",
                "expected": 23
            }, {
                "position": "G5",
                "expected": 23
            }];
            let count = 0;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos.position}`),
                    close: Sinon.stub()
                });


                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(positions[count].expected);
                        count++;
                        if (count == positions.length)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run();
            }
        });

        it("should return 21 moves for corners", (done) => {
            let positions = ["A8", "H8", "A1", "H1"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(21);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);
                simulator.run()
                    .catch(() => done(false));
            }


        });

        it("should return 21 moves for borders", (done) => {
            let positions = [{
                "position": "B8",
                "expected": 21
            }, {
                "position": "e8",
                "expected": 21
            }, {
                "position": "h4",
                "expected": 21
            }, {
                "position": "g1",
                "expected": 21
            }, {
                "position": "b1",
                "expected": 21
            }, {
                "position": "a4",
                "expected": 21
            }];
            let count = 0;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos.position}`),
                    close: Sinon.stub()
                });


                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(positions[count].expected);
                        count++;
                        if (count == positions.length)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run();
            }
        });

        it("should return errors for out of board positions", (done) => {
            let positions = ["I1", "A9", "P9"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        // expect(args.length).toBe(positions[count].expected);
                        // count++;
                        // if (count == positions.length)
                        //     done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch((err) => {
                        count--;
                        if (count == 0)
                            done();
                    });
            }
        });
    });

    describe("test cases for pawn", () => {
        let piece = "pawn";
        it("should return 1 moves for middle positions", (done) => {
            let positions = ["E4", "e6", "g2", "d4"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(1);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run();
            }
        });

        it("should return 0 moves for front corners", (done) => {
            let positions = ["A8", "H8"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(0);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch((err) => {
                        console.log(err);
                        done(false)
                    });
            }


        });

        it("should return 1 move for back corners", (done) => {
            let positions = ["A1", "H1"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(1);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch((err) => {
                        console.log(err);
                        done(false)
                    });
            }


        });

        it("should return 0 moves for front border", (done) => {
            let positions = ["B8", "e8"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });
                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(0);
                        count--;
                        if (count == 0)
                            done();
                    })
                });
                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch(() => done(false));
            }
        });

        it("should return 1 moves for remaining border", (done) => {
            let positions = ["H4", "G1", "B1", "A4"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });


                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        expect(args.length).toBe(1);
                        count--;
                        if (count == 0)
                            done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch(() => done(false));
            }
        });

        it("should return errors for out of board positions", (done) => {
            let positions = ["I1", "A9", "P9"];
            let count = positions.length;

            for (let pos of positions) {
                let reader = Sinon.createStubInstance(
                    ConsoleReader, {
                    readNextLine: Promise.resolve(`${piece}, ${pos}`),
                    close: Sinon.stub()
                });

                let writer = Sinon.createStubInstance(
                    ConsoleWriter, {
                    printArray: Sinon.stub<[Array<string>]>().callsFake((args: Array<string>): void => {
                        // expect(args.length).toBe(1);
                        // count--;
                        // if (count == 0)
                        //     done();
                    })
                });

                let simulator = new ChessBoardSimulator(reader, writer);

                simulator.run()
                    .catch((err) => {
                        count--;
                        if (count == 0)
                            done();
                    });
            }
        });
    });
});