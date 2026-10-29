export const brand = {
  number: "14",
  name: "CORTE 14",
  signature: "BARBER CLUB",
  city: "Curitiba — Paraná",
  developer: "Viham Dev",
  developerUrl: "https://vitorhamad.me",
  intro:
    "Mais do que um lugar para cortar o cabelo, o Corte 14 é um espaço feito para quem valoriza estilo, precisão e uma boa conversa. Cada detalhe importa, da primeira recepção ao último acabamento.",
  disclaimer:
    "Marca, espaço e profissionais fictícios. Imagens geradas por IA para este conceito. Nenhum agendamento real é realizado.",
};

export const services = [
  {
    id: "classico",
    name: "Corte clássico",
    description:
      "Seu estilo, com precisão. Corte personalizado e acabamento na medida.",
    price: 55,
    duration: 45,
    image: "gallery-classic-concept.jpg",
  },
  {
    id: "fade",
    name: "Fade / degradê",
    description: "Transições precisas. Do zero ao seu próximo visual.",
    price: 65,
    duration: 50,
    image: "gallery-fade-concept.jpg",
  },
  {
    id: "barba",
    name: "Barba completa",
    description:
      "Modelagem, toalha quente e uma finalização que faz a diferença.",
    price: 45,
    duration: 35,
    image: "gallery-beard-concept.jpg",
  },
  {
    id: "combo",
    name: "Corte + barba",
    description:
      "A experiência completa. Um tempo só para cuidar do seu estilo.",
    price: 95,
    duration: 75,
    image: "hero-concept.jpg",
  },
  {
    id: "acabamento",
    name: "Acabamento",
    description: "Contorno e manutenção. Os pequenos detalhes dizem muito.",
    price: 25,
    duration: 20,
    image: "gallery-finish-concept.jpg",
  },
] as const;
export type ServiceId = (typeof services)[number]["id"];

export const team = [
  {
    id: "rafael",
    name: "Rafael Costa",
    specialty: "Cortes clássicos e acabamento",
    image: "rafael-concept.jpg",
    number: "01",
  },
  {
    id: "lucas",
    name: "Lucas Martins",
    specialty: "Fade e estilos modernos",
    image: "lucas-concept.jpg",
    number: "02",
  },
  {
    id: "andre",
    name: "André Ferreira",
    specialty: "Barba e visagismo",
    image: "andre-concept.jpg",
    number: "03",
  },
] as const;

export const gallery = [
  {
    image: "gallery-fade-concept.jpg",
    title: "Precisão em cada transição",
    category: "01 / FADE",
    alt: "Cena de corte degradê gerada por IA, sem representar um cliente real",
  },
  {
    image: "gallery-beard-concept.jpg",
    title: "O detalhe faz a diferença",
    category: "02 / BARBA",
    alt: "Cena fictícia de cuidado da barba, gerada por IA",
  },
  {
    image: "tools-concept.jpg",
    title: "Instrumentos de expressão",
    category: "03 / RITUAL",
    alt: "Composição de ferramentas sem marca, gerada por IA",
  },
  {
    image: "gallery-classic-concept.jpg",
    title: "Clássico, com personalidade",
    category: "04 / CORTE",
    alt: "Corte clássico em personagem fictício visto de costas, gerado por IA",
  },
  {
    image: "gallery-finish-concept.jpg",
    title: "O último toque",
    category: "05 / ACABAMENTO",
    alt: "Detalhe de finalização em personagem fictício, gerado por IA",
  },
  {
    image: "interior-concept.jpg",
    title: "Sinta-se em casa",
    category: "06 / A CASA",
    alt: "Ambiente imaginário de barbearia contemporânea, gerado por IA",
  },
] as const;

export const navigation = [
  { href: "#servicos", label: "Serviços", icon: "scissors" },
  { href: "#casa", label: "A casa", icon: "armchair" },
  { href: "#equipe", label: "Equipe", icon: "users" },
  { href: "#contato", label: "Contato", icon: "pin" },
] as const;

export const hours = [
  { day: "Segunda a sexta", time: "09h — 19h" },
  { day: "Sábado", time: "09h — 17h" },
  { day: "Domingo", time: "Fechado" },
] as const;
export const money = (amount: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(amount);
