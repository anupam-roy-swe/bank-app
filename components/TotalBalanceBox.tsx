import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { formatAmount } from "@/lib/utils";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-charts'>
        {/* DoughnutChart */}
      </div>
      <div className='flex flex-col :gap-6'>
        <h2 className='header-2'>
          Bank Account :{totalBanks}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='total-balance-label'>
            Total Current Balance
          </p>
          <p className='total-balance-amount flex gap-2'>
            <AnimatedCounter/>
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
