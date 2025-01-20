import React from "react";
import Image from "next/image";
import { Position, useReactFlow } from "reactflow";
import { X } from "react-bootstrap-icons";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import CustomHandle from "./CustomHandle";

const PAYMENT_PROVIDER_IMAGE_MAP = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

const PaymentProvider = ({ data: { name, code }, id }) => {
  const { setNodes } = useReactFlow();
  return (
    <Flex
      alignItems="center"
      borderRadius="24px"
      bg="white"
      border="2px solid #5353ff"
      p={1}
      pb={1}
      pl="12px"
      gap={2}
      width="140px"
    >
      <Box h={4} w={4}>
        <Image
          height={200}
          width={200}
          src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
          alt={`paymentProvider` + code}
        />
      </Box>
      <Flex grow="1">
        <Text fontSize="xs" mt="-2px">
          {name}
        </Text>
      </Flex>
      <IconButton
        aria-label="Delete Payment Provider"
        colorPalette="red"
        variant="ghost"
        size="xs"
        rounded="full"
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      >
        <X />
      </IconButton>
      <CustomHandle type="target" position={Position.Left} />
    </Flex>
  );
};

export default PaymentProvider;
