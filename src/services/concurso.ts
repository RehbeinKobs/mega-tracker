import type { IConcurso, IFaixas } from "../interfaces/concurso";
import Concurso from "../models/concurso";
import { countArrayOverlap } from "../utils/utils";

export default class ConcursoService {
    static async getContestsByNumbers(numbers: number[]) {
        const response = await fetch("./data/sorteios.json");
        const data = await response.json();
        const concursos: IFaixas<Concurso[]> = {
            faixa1: [],
            faixa2: [],
            faixa3: [],
        };
        data.forEach((concurso: IConcurso) => {
            const hits = countArrayOverlap(numbers, concurso.numeros);
            if (hits >= 4) concursos[`faixa${7 - hits}`].push(new Concurso(concurso));
        });
        return concursos;
    }
}