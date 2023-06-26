import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
const hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando um Sanduiche...");
console.log("Tipo do Sanduiche: "+hotdog.sanduichetype);
console.log("Proteina: (g)"+hotdog.protein.weight);
console.log("Pão: "+hotdog.bread)
console.log("Salada: "+hotdog.salad);
console.log("Molhos: "+hotdog.sauces);

director.constructXSalada();
const xsalada : Sanduiche = builder.getSanduiche();
console.log("Criando um Sanduiche...");
console.log("Tipo do Sanduiche: "+xsalada.sanduichetype);
console.log("Proteina: "+xsalada.protein.weight);
console.log("Pão: "+xsalada.bread)
console.log("Salada: "+xsalada.salad);
console.log("Molhos: "+xsalada.sauces);
