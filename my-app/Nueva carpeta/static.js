class Person {
  constructor (name, lastName, country) {
    this.name = name;
    this.lastname = lastName;
    this.country = country;
    this.fullName = `${name} ${lastName}`;
  };
  
  greet() {
    return `Hi, my name is called ${this.fullName} and I'm from ${this.country}`;
  };
  
  static description(person) {
    return `This person is called ${person.name} and he is from ${person.country}`;
  };
}

let perA = new Person('Joalbert', 'González', 'Venezuela');
console.log(perA.greet(7));

console.log(Person.description(perA));


////////////MÉTODO ESTÁTICO////////////
class Matematica {
  static suma(a,b) {
    return a + b;
  }
  static resta(a,b) {
    return a - b;
  }
  static multiplicacion(a,b) {
    return a * b;
  }
  static division(a,b) {
    return a / b;
  }
}

console.log(Matematica.resta(5,7));

////////////MÉTODO CONSTRUCTOR////////////
class Matematica1 {
  constructor (a,b) {
    this.a = a;
    this.b = b;
  }
  sumar() {
    return this.a + this.b;
  }
  restar() {
    return this.a - this.b;
  }
  dividir() {
    return this.a / this.b;
  }
  multiplicar() {
    return this.a * this.b;
  }
}

let num = new Matematica1(7,8);
console.log(num.sumar());
console.log(num.multiplicar());
console.log(num.dividir());
console.log(num.restar());

////////////MÉTODO CONSTRUCTOR CONS INSTANCIA////////////
class Matematica2 {
  constructor(a,b) {
    this.sumar = a + b;
    this.multiplicar = a * b;
    this.dividir = a / b;
    this.restar = a - b;
  }
}

let ex = new Matematica2(5,6);
console.log(ex.sumar);
console.log(ex.multiplicar);
console.log(ex.dividir);
console.log(ex.restar);

// clase base vehiculo 
class Vehiculo {
  // propiedades y métodos
  constructor (llantas, asientos, motor, marca, modelo, retrovisor) {
    this.llantas = llantas;
    this.asientos = asientos;
    this.motor = motor;
    this.marca = marca;
    this.modelo = modelo;
    this.retrovisor = retrovisor;
  };
  cantidadDeLlantas() {
    return `Tiene ${llantas}`;
  }
  cantidadDeAsientos() {
    return `Tiene ${asientos}`;
  }
}

class Auto extends Vehiculo {
  constructor (llantas, asientos, motor, marca, modelo, retrovisor, puertas) {
    super(llantas, asientos, motor, marca, modelo, retrovisor)
    this.puertas = puertas;
  }
  
};

class Moto extends Vehiculo {
  constructor (llantas, asientos, motor, marca, modelo, casco) {
    this.casco = casco;
  }
};

let auto = new Vehiculo('4', '5', 'FDGXL200', 'Nissan', 'Sedan', '2', '4');
console.log(auto.puertas);



/* Grupo de KAM */ 
/*
class Vehiculo{
  constructor (marca, peso, madein){
      this.marca = marca;
      this.peso = peso;
      this.madein = madein;
  } 
 }
 
 class Auto extends Vehiculo{
   constructor(marca, peso,madein, color, transporte) {
     super (marca, peso,madein);
     this.color = color;
     this.transporte= transporte;
   }
     avanzar() {
         return 'El ' + this.marca + ' pesa ' + this.peso;
     } 
 }
 
 // class Moto extends Vehiculo{
 //   constructor(marca, peso,madein, placa, modeloCasco) {
 //      super (marca, peso,madein);
 //      this.
 //   }
 // }
 
 let vehiculo = new Vehiculo('hww', '40000', 'peru');
 let auto = new Auto('hww', '40000', 'peru', 'blanco', '460');
 
 // console.log(auto)
 console.log(auto.avanzar())
 */

