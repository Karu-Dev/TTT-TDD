export class TicTacToe {
    activePlayer: string = "X"
    field: string[][] = [[]]
    constructor(){
        this.genField()
    }
    genField() {
        this.field = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        return [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
    }
    clickHandler(x: number, y: number,):string[][] {
        if(!this.checkDraw(this.field)&&!this.checkWin(this.field)){
            if(this.field[y][x]===""){
                this.field[y][x] = this.activePlayer
                if(!this.checkDraw(this.field)&&!this.checkWin(this.field)){
                    if (this.activePlayer === "X") {
                        this.activePlayer = "O"
                        return [...this.field]
                    }
                    this.activePlayer = "X"
                }
                return [...this.field]
            }
        }
        return [...this.field]
    }
    checkDraw(field: string[][]): boolean {
        if (field.some(row => {
            return row.some(cell => {
                return cell === ""
            })
        })) {
            return false
        } else {
            return true
        }
    }
    checkWin(field: string[][]): boolean {
        //horizontal
        if (field[0][0] !== "" && field[0][0] === field[0][1] && field[0][0] === field[0][2]) { return true }
        if (field[1][0] !== "" && field[1][0] === field[1][1] && field[1][0] === field[1][2]) { return true }
        if (field[2][0] !== "" && field[2][0] === field[2][1] && field[2][0] === field[2][2]) { return true }
        //vertical
        if (field[0][0] !== "" && field[0][0] === field[1][0] && field[0][0] === field[2][0]) { return true }
        if (field[0][1] !== "" && field[0][1] === field[1][1] && field[0][1] === field[2][1]) { return true }
        if (field[0][2] !== "" && field[0][2] === field[1][2] && field[0][2] === field[2][2]) { return true }
        //diagonal
        if (field[1][1] !== "" && field[0][0] === field[1][1] && field[0][0] === field[2][2]) { return true }
        if (field[1][1] !== "" && field[0][2] === field[1][1] && field[0][2] === field[2][0]) { return true }
        return false
    }
    reset(){
        this.field = this.genField()
        this.activePlayer = "X"
        return this.field
    }
    setField(field:string[][]){
        this.field = field
    }
}