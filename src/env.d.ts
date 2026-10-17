// O que o src/components/Rastreamento.astro põe na window

interface SmartadvConsentimento {
  estado(): string | null;
  aceitar(): void;
  recusar(): void;
}

interface Window {
  smartadvConsentimento?: SmartadvConsentimento;
  smartadvRastrear?: (metodo: string) => void;
}
