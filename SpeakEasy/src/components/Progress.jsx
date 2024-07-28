import { Progress, Text, Box } from "@chakra-ui/react";

function ProgressComp({ text, percentage }) {
  percentage = percentage ?? 0;
  return (
    <div>
      <Text color='white'>Loading {text}</Text>
      <Progress value={percentage}></Progress>
    </div>
  );
}

export default ProgressComp