import React from "react";
import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";
import {
  MenuRoot,
  MenuItem,
  Button,
  MenuContent,
  MenuTrigger,
} from "@chakra-ui/react";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

const PaymentProviderSelect = () => {
  const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
  };

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Add Payment Provider <ChevronBarDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {PAYMENT_PROVIDERS.map((provider) => (
          <MenuItem
            key={provider.name}
            onClick={() => onProviderClick(provider)}
          >
            {provider.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PaymentProviderSelect;
