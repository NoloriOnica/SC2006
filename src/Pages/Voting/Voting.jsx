import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import VotingMidSection from '../../Components/VotingMidSection/VotingMidSection';
import VotingMain from '../../Components/VotingMain/VotingMain';


const Voting = () => {
  return (
    <div>
    <Navbar/>
    <VotingMidSection/>
    <VotingMain/>
    </div>
  );
}

export default Voting