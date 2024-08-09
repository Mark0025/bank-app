import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import BankCard from '@/components/BankCard';


const Home = () => {
  const loggedIn = {firstName: "Mark", lastName: "Carpenter", email: "Mark@theairealestateinvestor.com"}; 
  
    return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || "guest"}
          subtext= "Access and manage all of your account and transction data data"
          />
        <TotalBalanceBox 
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={1250.35}
        />
        </header>
        RECENT TRANSACTIONS 
      </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
        />
    </section>
  )
}

export default Home;
