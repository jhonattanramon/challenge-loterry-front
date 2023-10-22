declare global{
  type Contest = Contest

}

interface Award {
    descricao: string;
    faixa: number;
    ganhadores: number;
    valorPremio: number;
  }
  
  interface WinnerLocation {
    ganhadores: number;
    municipio: string;
    nomeFantasiaUL: string;
    posicao: number;
    serie: string;
    uf: string;
  }
  
  interface Contest {
    acumulou: boolean;
    concurso: number;
    data: string;
    dataProximoConcurso: string;
    dezenas: string[];
    dezenasOrdemSorteio: string[];
    estadosPremiados: {}[]; // Substitua pelo tipo apropriado se necessário
    local: string;
    localGanhadores: WinnerLocation[];
    loteria: string;
    mesSorte: string;
    observacao: string;
    premiacoes: Award[];
    proximoConcurso: number;
    timeCoracao: string;
    trevos: string[];
    valorAcumuladoConcursoEspecial: number;
    valorAcumuladoConcurso_0_5: number;
    valorAcumuladoProximoConcurso: number;
    valorArrecadado: number;
    valorEstimadoProximoConcurso: number;
  }
  