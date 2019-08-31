export class TicTacToe{
    static activePlayer:string="X"
    field:string[][]=[[]]
    genField(){
        this.field = [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
        return [
            ["","",""],
            ["","",""],
            ["","",""]
        ]
    }
    clickHandler(x:number, y:number){
        
    }
}