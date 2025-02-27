class Stack{
    constructor(){
        this.item = []
    }

    push(value){
        this.item.push(value);
    }

    pop() {
        if (this.Empty()) {
          return console.log("Стек порожній");
        }
        const deletElement = this.item.pop();
        console.log(`Елемент ${deletElement} видалено з стеку.`);
    }

    top(){
        if (this.Empty() && this.checkValue()) {
            return console.log("стек порожній");   
        }
        else{
            return console.log(`покажчик стеку ${this.item[this.item.length - 1]}`);    
        }
    }

    Clear(){
        if(this.Empty){
            console.log("очистка не потібна стек порожій");  
        }
        else{
            this.item = []
        }
    }

    viewAllElement() {
        if (this.Empty()) {
          console.log("Стек порожній.");
          return;
        }
        console.log("Елементи стеку:", this.item.join(", "));
    }


    Empty(){
        return this.item.length === 0;
    }

    checkValue(){
        if (this.item <= 0 || this.item === NaN) {
            console.log("Число дорівнює або менше нуля");
        }
    }
}



const stack = new Stack();


stack.push(3);
stack.push(5);
stack.push(4);


stack.viewAllElement(); // Перегляд елементів

stack.top(); // Перегляд верхнього елемента

stack.pop();  // Видалення елемента

stack.top(); // Перегляд верхнього елемента

stack.viewAllElement(); // Перегляд елементів після видалення

stack.Clear(); // Очистка стеку

stack.viewAllElement(); // Перегляд елементів після очищення