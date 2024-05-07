import HeaderBox from "@/components/HeaderBox";
import TotalBalance from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const LoggedIn = { firstName: "Anupam" };

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
      </div>
    </section>
  );
};

export default Home;
