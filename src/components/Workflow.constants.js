export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      amount: 10,
    },
    type: "paymentInit",
  },
  {
    id: "2",
    position: { x: 300, y: 20 },
    data: {
      currency: "$",
      country: "United States",
      countryCode: "US",
    },
    type: "paymentCountry",
  },
  {
    id: "3",
    position: { x: 300, y: 200 },
    data: {
      currency: "£",
      country: "England",
      countryCode: "GB",
    },
    type: "paymentCountry",
  },
  {
    id: "4",
    position: { x: 550, y: -50 },
    data: {
      name: "Google Pay",
      code: "Gp",
    },
    type: "paymentProvider",
  },
  {
    id: "5",
    position: { x: 550, y: 125 },
    data: {
      name: "Stripe",
      code: "St",
    },
    type: "paymentProvider",
  },
  {
    id: "6",
    position: { x: 550, y: 325 },
    data: {
      name: "Apple Pay",
      code: "Ap",
    },
    type: "paymentProvider",
  },
  {
    id: "7",
    position: { x: 550, y: 525 },
    data: {
      name: "Paypal",
      code: "Pp",
    },
    type: "paymentProvider",
  },
  {
    id: "8",
    position: { x: 275, y: -100 },
    data: {},
    type: "paymentProviderSelect",
  },
];

export const initialEdges = [];
