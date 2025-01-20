import React from "react";
import { Position } from "reactflow";
import { Box, Text } from "@chakra-ui/react";
import CustomHandle from "./CustomHandle";

const PaymentInit = ({ data: { amount } }) => {
  return (
    <Box
      alignItems="center"
      borderRadius="24px"
      bg="white"
      border="2px solid #5353ff"
      gap={2}
      width="140px"
    >
      <Box p={1} margin="5px">
        <Text fontSize="small">Payment Initialized</Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600">
          ${amount}
        </Text>
      </Box>
      <CustomHandle type="source" position={Position.Right} />
    </Box>
  );
};

export default PaymentInit;
