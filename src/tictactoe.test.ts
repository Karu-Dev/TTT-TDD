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
    it("should be able to detect a draw",()=>{
        const ttt = new TicTacToe
        const field = [
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"]
        ]
        const isDraw = ttt.checkDraw(field)
        expect(isDraw).toBe(true)
    })
    it("should be able to detect a non draw too",()=>{
        const ttt = new TicTacToe
        const field = [
            ["", "", ""],
            ["", "", "X"],
            ["", "", ""]
        ]
        const isDraw = ttt.checkDraw(field)
        expect(isDraw).toBe(false)
    })
    it("should be able to detect a win",()=>{
        const ttt = new TicTacToe
        const field = [
            ["X", "O", ""],
            ["", "X", "O"],
            ["", "O", "X"]
        ]
        const isWin = ttt.checkWin(field)
        expect(isWin).toBe(true)
    })
    it("should be able to detect a win in multiple scenarios",()=>{
        
        const ttt = new TicTacToe
        let field = [
            ["O", "X", "X"],
            ["O", "O", "O"],
            ["X", "", "X"]
        ]
        let isWin = ttt.checkWin(field)
        expect(isWin).toBe(true)
        field = [
            ["O", "O", "X"],
            ["X", "X", "O"],
            ["X", "", "X"]
        ]
        isWin = ttt.checkWin(field)
        expect(isWin).toBe(true)
        field = [
            ["O", "X", "X"],
            ["", "", "O"],
            ["X", "", "X"]
        ]
        isWin = ttt.checkWin(field)
        expect(isWin).toBe(false)
    })
    it("should be able to reset the game",()=>{
        const ttt = new TicTacToe
        ttt.field = [
            ["O", "X", "X"],
            ["", "", "O"],
            ["X", "", "X"]
        ]
        ttt.reset()
        expect(ttt.field).toEqual(ttt.genField())
        expect(ttt.activePlayer).toBe("X")
    })
    it("should have an empty field by default",()=>{
        const ttt = new TicTacToe
        const field = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        expect(ttt.field).toEqual(field)
    })
    it("clickHandler should check if the game is over already or not (Draw scenario)",()=>{
        const ttt = new TicTacToe
        ttt.activePlayer="X"
        ttt.field = [
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"]
        ]
        const field = [
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"]
        ]
        ttt.clickHandler(2,0)
        expect(ttt.field).toEqual(field)
    })
    it("clickHandler should check if the game is over already or not (X win scenario)",()=>{
        const ttt = new TicTacToe
        ttt.activePlayer="O"
        ttt.field = [
            ["X", "X", "O"],
            ["O", "X", "X"],
            ["X", "O", "X"]
        ]
        const field = [
            ["X", "X", "O"],
            ["O", "X", "X"],
            ["X", "O", "X"]
        ]
        ttt.clickHandler(1,1)
        expect(ttt.field).toEqual(field)
    })
    it("clickHandler should check if the game is over already or not (O win scenario)",()=>{
        const ttt = new TicTacToe
        ttt.activePlayer="X"
        ttt.field = [
            ["X", "O", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"]
        ]
        const field = [
            ["X", "O", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"]
        ]
        ttt.clickHandler(1,1)
        expect(ttt.field).toEqual(field)
    })
})
