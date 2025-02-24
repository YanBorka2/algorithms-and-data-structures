class Stack {
    constructor(){
        this.items = [];
    }
    
    push(element) {
        this.items.push(element);
        console.log(`Елемент ${element} в стеку`);
    }


    pop() {
        if (this.Empty()) {
          console.log("Стек порожній");
          return;
        }
        const deletElement = this.items.pop();
        console.log(`Елемент ${deletElement} видалено з стеку.`);
    }

    Empty(){
       return(this.items.length === 0)
    }

    Clear(){
        this.items = [];
        console.log("Стек очищено");
    }

    peek() {
        if (this.Empty()) {
          console.log("Стек порожній.");
          return;
        }
        console.log(`Верхній елемент: ${this.items[this.items.length - 1]}`);
    }

    viewAllElement() {
        if (this.Empty()) {
          console.log("Стек порожній.");
          return;
        }
        console.log("Елементи стеку:", this.items.join(", "));
    }


    elelemetCalculete(){
        let tempValue = 1;
        this.items.forEach(element => {
            if (element % 2) {
               return tempValue *= element
            }
        });
        console.log(tempValue)
    }
}

const ne22 = 2

const stack = new Stack();


stack.push(3);
stack.push(5);
stack.push(4);

stack.elelemetCalculete ();

stack.viewAllElement(); // Перегляд елементів

stack.peek(); // Перегляд верхнього елемента

stack.pop();  // Видалення елемента

stack.viewAllElement(); // Перегляд елементів після видалення

stack.Clear(); // Очистка стеку

stack.viewAllElement(); // Перегляд елементів після очищення