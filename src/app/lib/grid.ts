export class Grid {
    private tab: [any];
    private height: number;
    private width: number;

    /**
     * init la grille avec une taille max
     * @param height nombre de case max de la grille en hauteur
     * @param width nombre de case max de la grille en largeur
     */
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    /**
     * enregistre un objet à la position x, y
     * Si la position y n'est pas fournit, on place l'objet à la première ligne où il y a de la place
     * Si x et y ne sont pas fournis, on place l'objet où on peut
     * @param {any} o objet à sauvegarder dans le tableau
     * @param {Number} x abcisse de l'objet
     * @param {Number} y ordonnée de l'objet
     * @returns {any} si l'objet est bien sauvegardé retourne les coordonnées de l'objet en case et en pixel sinon contient une erreur
     */
    setObj(o: any, x?: number, y?: number): {} {
        const output = {
            objet: o,
            error: null,
            x: -1,
            y: -1,
            Xpx: -1,
            Ypx: -1
        };

        // si x et/ou y fournit
        if (x && x > 0) {
            if (y && y > 0) {
                this.tab[x][y] = o;
                output.x = x;
                output.y = y;
            } else {
                // TODO si Y n'est pas fournit on recherche ou placer
            }
        }
        return output;
    }

    /**
     * retourne un objet dont la position est x,y
     */
    getObj(x: number, y: number) {

    }
    /**
     * Retourne la position en pixel [x, y] d'un objet d'après la position [x, y] en carreau d'un objet
     * @param {Number} x abcisse de l'objet
     * @param {Number} y ordonnée de l'objet
     */
    getPosPx(x: number, y: number): [number, number] {
        return [0, 0];
    }
}
