import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Position } from "reactflow";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomHandle from "./CustomHandle";

const PaymentCountry = ({ data: { country, countryCode, currency } }) => {
  return (
    <Flex
      alignItems="center"
      borderRadius="8px"
      bg="#e2e8f0"
      border="2px solid #bbbdbf"
      p={2}
      gap={2}
      width="155px"
    >
      <Box>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </Box>
      <Flex grow="1">
        <Box>
          <Text>{country}</Text>
          <Text>{currency}</Text>
        </Box>
      </Flex>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </Flex>
  );
};

export default PaymentCountry;
