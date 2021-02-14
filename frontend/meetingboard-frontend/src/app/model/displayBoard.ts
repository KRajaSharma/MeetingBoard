import { Card } from "./card";

export class DisplayBoard{
    constructor(
        public id:string,
        public title:string,
        public context:string,
        public active:boolean,
        public createdOn:string,
        public wentWell:Card[],
        public toImprove:Card[],
        public actionItem:Card[]
    ){}

    public getDisplayBoardFromBoard():DisplayBoard{
        return null;
    }
}