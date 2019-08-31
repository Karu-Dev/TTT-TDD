import {TicTacToe} from "./tictactoe"

describe("TicTacToe is a game",()=>{
    it("should be able to generate an empty field", ()=>{
        const ttt= new TicTacToe
        const field = ttt.genField()
        expect(field).toEqual([
            ["","",""],
            ["","",""],
            ["","",""]
        ])
    })

})
