export default class Protein{

    constructor(private _weight : number){}

    get weight() : number{
        return this._weight;
    }

    set weight(weight : number){
        this._weight = weight;
    }
}