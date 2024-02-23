class Warrior {
    constructor(name, power, life) {
      
    this.name = name;
    this.power = power;
    this.life = life;
      
    }
    attack(opponent) {
        opponent.life = opponent.life -this.power;

        if (opponent.life < 0) {
            opponent.life = 0
    }

    return `${this.name} attaque avec un pouvoir de ${this.power} sur ${opponent.name}, ${opponent.name} ne lui reste que ${opponent.life}`;

}


    isAlive() {
        if (this.life > 0) {
            return true
        }

        else {
             return false
        }   
    } 
}


class WarriorAxe extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
        this.pouvoir = this.power
    }

    attack(opponent) {
        if (opponent instanceof WarriorSword) {
            this.power = this.pouvoir *2;
            return super.attack(opponent);
        }

        else {
            return super.attack(opponent);
        }
          
    }
}




class WarriorSword extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
        
    }
    attack(opponent) {
        if (opponent instanceof WarriorSpear) {
            this.power = this.pouvoir *2;
            return super.attack(opponent);
        }

        else {
            return super.attack(opponent);
        }
          
    }
}




class WarriorSpear extends Warrior {
    constructor(name, power, life) {
        super(name, power, life);
        
    }
    attack(opponent) {
        if (opponent instanceof WarriorAxe) {
            this.power = this.pouvoir *2;
            return super.attack(opponent);
        }

        else {
            return super.attack(opponent);
        }
          
    }
}





