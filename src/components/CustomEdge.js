import React from "react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import { IconButton, Box } from "@chakra-ui/react";

const CustomEdge = (props) => {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;
  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} path={edgePath} />
      <EdgeLabelRenderer>
        <Box
          position="absolute"
          transform={`translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`}
          pointerEvents="auto"
        >
          <IconButton
            aria-label="Delete Edge"
            colorPalette="red"
            variant="solid"
            size="xs"
            onClick={(event) => {
              event.stopPropagation();
              setEdges((prevEdges) =>
                prevEdges.filter((edge) => edge.id !== id)
              );
            }}
          >
            <X />
          </IconButton>
        </Box>
      </EdgeLabelRenderer>
    </>
  );
};

export default CustomEdge;
