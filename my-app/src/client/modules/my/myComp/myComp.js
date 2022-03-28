import { LightningElement, api } from 'lwc';


export default class MyComp extends LightningElement {

    name;

    constructor(){
        super();
        console.log(" constructor called");
    }

    connectedCallback(){

        console.log(" connectedCallback called");
        this.name = "Ashhar";
    }





}