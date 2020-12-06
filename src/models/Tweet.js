let nextId = 1;

class Tweet {
    constructor(text){
        this._text = text;
        this._id = nextId++;
        this._completed = false;
    }
    get text(){
        return this._text;
    }
    get id(){
        return this._id;
    }
    get hasCompleted(){
        return this._completed;
    }
}

export default Tweet;