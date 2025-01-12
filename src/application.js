import "./styles.css";

import { ui} from './dom.js';


ui();








 export class Todo {
    constructor(task, description, priority, duedate) {
        this.task = task;
        this.description = description;
        this.priority = priority;
        this.duedate = duedate;
    }


    apply() {

     

      console.log(`${this.task} , ${this.description}, ${this.priority}, ${this.duedate} `);
    }
}


export const todo1 = new Todo(testone, testtwo, testthree, testfour);

/*export const todo1 = new Todo(fvalue, svalue, tvalue, fovalue );*/






