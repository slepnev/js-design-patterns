class CarAccess {
  open() {
    console.log('Opening car door')
  }

  close() {
    console.log('Closing the car door')
  }
}

// Proxy (Прослойка между функционалом: уровень доступа, логирование, кеширование)
class SecuritySystem {
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log('Access denied!');
    }
  }

  authenticate(password) {
    return password === 'Ilon';
  }

  close() {
    this.door.close()
  }
}


/* INIT */
const securityDoor = new SecuritySystem(new CarAccess());

securityDoor.open('Jon'); // Access denied!
securityDoor.open('Ilon'); // Opening car door

securityDoor.close(); // Closing the car door
