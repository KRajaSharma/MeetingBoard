export class Board{
    constructor(
        public id:string,
        public title:string,
        public context:string,
        public active:boolean,
        public createdOn:string,
        public wentWell:string[],
        public toImprove:string[],
        public actionItem:string[]
    ){}
}