import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalanceBox";

import React from "react";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const LoggedIn = {
    firstName: "Anupam",
    lastName: "Roy",
    email: "anupambank@gmail.com",
  };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={LoggedIn?.firstName || "Guest"}
            subtext='Access and manage your account and transaction efficiently '
          />

          <TotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={LoggedIn}
        transaction={[]}
        banks={[
          { currentBalance: "2343.89" },
          { currentBalance: "8993.78" },
        ]}
      />
    </section>
  );
};

export default Home;
