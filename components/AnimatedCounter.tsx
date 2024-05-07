import CountUp from "react-countup/build/CountUp";

const AnimatedCounter = ({
  amount,
}: {
  amount: number;
}) => {
  return (
    <div>
      $<CountUp end={100} />{" "}
    </div>
  );
};

export default AnimatedCounter;
