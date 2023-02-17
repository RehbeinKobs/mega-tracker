import type { IConcurso, IFaixas, IValores } from "../interfaces/concurso";

export default class Concurso implements IConcurso {
    concurso: number;
    data: string;
    numeros: number[];
    ganhadores: IFaixas<number>;
    cidade: string;
    valores: IValores;
    acumulado: boolean;
    especial: boolean;
    observacao: string;

    constructor(concurso: IConcurso) {
        Object.assign(this, concurso);
    }

    concursoToString(faixa: string) {
        if (faixa === "faixa1" && this.acumulado === true) {
            return `${this.data} - ${this.numeros.join(', ')} - R$${this.valores.acumulado.toLocaleString("pt-BR")}`;
        }
        return `${this.data} - ${this.numeros.join(', ')} - R$${this.valores.rateio[faixa].toLocaleString("pt-BR")}`;
    }
}