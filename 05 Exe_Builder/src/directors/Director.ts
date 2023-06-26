import IBuilder from "../builders/IBuillder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{

    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setProtein(new Protein(37));
        this.builder.setBread(Bread.BAGUETE);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.addSauces(new Sauces("MOSTARDA"));
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setProtein(new Protein(421));
        this.builder.setBread(Bread.DAGUA);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(new Sauces("KETCHUP"));
    }
}
