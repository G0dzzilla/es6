class List {
    constructor() {
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data)
    }

    // static does not use this.    
    static soma(a, b) {
        return a + b;
    }
}

class TodoList extends List {
    constructor() {
        super(); // chamar a classe constructor from the parent class

        this.usuario = 'Marcos Leal v1'; // add new stuff
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novissimo todo');
}

MinhaLista.mostraUsuario();