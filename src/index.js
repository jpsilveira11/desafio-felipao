const prompt = require('prompt-sync')();

const name=prompt("Qual o nome do seu Herói? ");
const xp=prompt(`E quanto de experiência ${name} adquiriu? `);

if(xp<0){
    console.log("É impossível possuir experiência negativa.");
    return
}

const rank=(xp<=1000 && 'Ferro')||(xp<=2000 && 'Bronze')||(xp<=5000 && 'Prata')||(xp<=7000 && 'Ouro')||(xp<=8000 && 'Platina')||(xp<=9000 && 'Ascendente')||(xp<=10000 && 'Imortal')||(xp>10000 && 'Radiante');

console.log(`O Herói de nome ${name} está no nível de ${rank}`);