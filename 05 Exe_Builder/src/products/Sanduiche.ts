import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Sanduiche{

    private _sanduichetype : SanduicheType;
    private _bread : Bread;
    private _protein : Protein;
    private _salad : Salad;
    private _sauces :  Sauces[] = [];

    /**
     * Getter sanduichetype
     * @return {SanduicheType}
     */
	public get sanduichetype(): SanduicheType {
		return this._sanduichetype;
	}

    /**
     * Getter bread
     * @return {Bread}
     */
	public get bread(): Bread {
		return this._bread;
	}

    /**
     * Getter protein
     * @return {Protein}
     */
	public get protein(): Protein {
		return this._protein;
	}

    /**
     * Getter salad
     * @return {Salad}
     */
	public get salad(): Salad {
		return this._salad;
	}

    /**
     * Getter sauces
     * @return { Sauces[] }
     */
	public get sauces():  Sauces[]  {
		return this._sauces;
	}

    public addSauces(sauces : Sauces){
        this._sauces.push(sauces);
    }

    /**
     * Setter sanduichetype
     * @param {SanduicheType} value
     */
	public set sanduichetype(value: SanduicheType) {
		this._sanduichetype = value;
	}

    /**
     * Setter bread
     * @param {Bread} value
     */
	public set bread(value: Bread) {
		this._bread = value;
	}

    /**
     * Setter protein
     * @param {Protein} value
     */
	public set protein(value: Protein) {
		this._protein = value;
	}

    /**
     * Setter salad
     * @param {Salad} value
     */
	public set salad(value: Salad) {
		this._salad = value;
	}

    /**
     * Setter sauces
     * @param { Sauces[] } value
     */
	public set sauces(value:  Sauces[] ) {
		this._sauces = value;
	}
}