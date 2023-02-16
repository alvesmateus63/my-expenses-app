interface Props {
  id: number;
  title: string;
  value: number;
  type: number;
}

export const Moviment: Props[] = [
  { id: 1, title: "Mercado", value: 99.2, type: 1 },
  { id: 2, title: "Amazon", value: 199.0, type: 1 },
  { id: 3, title: "Ifood", value: 19.5, type: 1 },
  { id: 4, title: "Pix", value: 99.25, type: 0 },
  { id: 5, title: "Salario", value: 1200, type: 0 },
];
