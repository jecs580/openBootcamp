import { leves } from "./leves.enum";

export class Task{
    name= '';
    description='';
    completed = false;
    level= leves.URGENTE;

    constructor(name, description,completed,level){
        this.name= name;
        this.description= description;
        this.completed= completed;
        this.level= level
    }
}