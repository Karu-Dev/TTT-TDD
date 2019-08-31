import { TicTacToe } from "./tictactoe"

describe("TicTacToe is a game", () => {
    it("should be able to generate an empty field", () => {
        const ttt = new TicTacToe
        const field = ttt.genField()
        expect(field).toEqual([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ])
    })
    it("should save the field as a variable",()=>{
        const ttt = new TicTacToe
        ttt.genField()
        const field = ttt.field
        expect(field).toEqual([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ])
    })
    it("should be able to handle a single click", () => {
        const ttt = new TicTacToe
        ttt.genField()
        const field = ttt.field
        ttt.clickHandler(2,1)
        expect(field).toEqual([
            ["", "", ""],
            ["", "", "X"],
            ["", "", ""]
        ])
    })
})
