import { Progress, Text } from "@chakra-ui/react";

function ProgressComp({ text, percentage }) {
  percentage = percentage ?? 0;
  return (
    <div>
      {/* <div className='progress-bar' style={{ 'width': `${percentage}%` }}>{text} ({`${percentage.toFixed(2)}%`})</div> */}
      <Text color='white'>Loading {text}</Text>
      <Progress value={percentage}></Progress>
    </div>
  );
}

export default ProgressComp