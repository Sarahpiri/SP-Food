import React from 'react'
import TeamCard from './TeamCard'
import chef11 from '../../../public/assets/chef11.jpeg'
import chef22 from "../../../public/assets/chef22.jpeg";
import chef33 from "../../../public/assets/chef33.jpeg";


const Team = () => {
  return (
    <div className="pt-[5rem] pb-[3rem]">
      <h1 className="heading">
        Meet our expert <span className="text-red-700"> Chefs</span>
      </h1>
      <div className="mt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center">
        {/* {team card} */}
        <TeamCard image={chef11} name="John Doe" position="kitchen porter" />
        <TeamCard image={chef22} name="kohn Doe" position="Executive chef" />
        <TeamCard image={chef33} name="fohn Doe" position="Head chef" />
      </div>
    </div>
  );
}

export default Team
