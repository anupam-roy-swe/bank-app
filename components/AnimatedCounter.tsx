"use client";
import CountUp from "react-countup";
const AnimatedCounter = ({
  amount,
}: {
  amount: number;
}) => {
  return (
    <div>
      <CountUp
        end={160527.012}
        duration={2.75}
        decimal=','
        prefix='$ '
      />
    </div>
  );
};

export default AnimatedCounter;
