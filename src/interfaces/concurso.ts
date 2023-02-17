export interface IFaixas<T> {
    faixa1: T;
    faixa2: T;
    faixa3: T;
}

export interface IValores {
    rateio: IFaixas<number>;
    arrecadado: number;
    acumulado: number;
}

export interface IConcurso {
    concurso: number;
    data: string;
    numeros: number[];
    ganhadores: IFaixas<number>;
    cidade: string;
    valores: IValores;
    acumulado: boolean;
    especial: boolean;
    observacao: string;
}