export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      amount: 10,
    },
    type: "paymentInit",
  },
];

export const initialEdges = [
  { id: "1-2", source: "1", target: "2", animated: true },
];
