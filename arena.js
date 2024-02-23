
let warrior1 = new WarriorAxe("marine", 100, 300);
let warrior2 = new WarriorSword("selim", 50, 250);
let warrior3 = new WarriorSpear("jojo le boss", 700, 400);


// console.log(jojo.attack(selim))
// console.log(selim.isAlive())


while (warrior1.isAlive() && warrior2.isAlive()) {
   console.log(warrior1.attack(warrior2));
   console.log(warrior2.attack(warrior1));
   
}

 if (warrior1.isAlive()) {
    console.log("Marine à gagné")
 }

 else if (warrior2.isAlive()) {
    console.log("Selim à gangé")
 }
 
 else {
    console.log("Égalité");
 }









