import React from "react";
import { Handle, Position } from "reactflow";
import { Box, Text } from "@chakra-ui/react";

const PaymentInit = ({ data: { amount } }) => {
  return (
    <Box bg="white" border="1px solid #aa1fff">
      <Box bg="#410566" p={1}>
        <Text fontSize="small" color="white">
          Payment Initialized
        </Text>
      </Box>
      <Box p={2}>
        <Text fontSize="2xl" color="blue.600">
          ${amount}
        </Text>
      </Box>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default PaymentInit;
