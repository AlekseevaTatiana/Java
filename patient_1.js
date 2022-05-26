class Patient {
    constructor(f, i, o, d, s, sh) {
        this.F = f;
        this.I = i;
        this.O = o;
        this.D = new Date(d);
        this.S = s;
        this.SH = sh;
    }
    setById() {
        document.getElementById("F").textContent = this.F;
        document.getElementById("I").textContent = this.I;
        document.getElementById("O").textContent = this.O;
        document.getElementById("Y").textContent = this.D.getFullYear();
        document.getElementById("S").textContent = this.S;
        document.getElementById("SH").textContent = this.SH;
    }
}
let Demin = new Patient('Демин', 'Даниил', 'Дмитриевич', new Date(2002, 3, 4), "м", "Назначено");
let Ivanova = new Patient('Иванова','Елена','Игоревна', new Date(2002, 6, 17),"ж", "Назначено");
let Alekseeva = new Patient('Алексеева','татьяна','Романовна', new Date(2003, 1, 25), "ж", "Назначено");
Demin.setById();
/*Ivanova.setById();
Alekseeva.setById();*/