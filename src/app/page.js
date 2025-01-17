"use client";

import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";
import { useCallback } from "react";
import { initialEdges, initialNodes } from "@components/Workflow.constants";
import PaymentInit from "@components/Workflow/PaymentInit";
import PaymentCountry from "@components/Workflow/PaymentCountry";

const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
};

const Home = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length} + 1` };
    setEdges((prevEdge) => addEdge(edge, prevEdge));
  }, []);

  return (
    <Box height="600px" width="600px" border="1px solid black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </Box>
  );
};

export default Home;
