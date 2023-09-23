import React from 'react';
import TeamCard from '../../Components/TeamCard';
import userImage from '../../Images/user.png';
import './AboutTeam.css'; // Import the CSS file for styling

function AboutTeam() {
  return (
    <div className="cardClass">
        
    <div className="MainClass">
    <h1 >Team Dev@200</h1>
      <div className="card-container">
        {/* First row of cards */}
        <div>
          <TeamCard
            alt="Nitheeshwar Image"
            image={userImage}
            name="Nitheeshwar B R"
            description="I am a College Student pursuing Bachelor’s Degree in Computer Science and Engineering. I always dedicate myself to learning new technologies and use them to derive solutions for real-world problems, which helps me stay motivated and enthusiastic throughout the process. I possess a skill of adapting myself with other like-minded people and grasp insights from them."
            id="profile-cards"
          />
        </div>
        <div>
          <TeamCard
            alt="pavan b n iamge"
            image={userImage}
            name="Pavan B N"
            description="I am a College Student pursuing Bachelor’s Degree in Computer Science and Engineering. I always dedicate myself to learning new technologies and use them to derive solutions for real-world problems, which helps me stay motivated and enthusiastic throughout the process. I possess a skill of adapting myself with other like-minded people and grasp insights from them."
            id="profile-cards2"
          />
        </div>
        {/* Second row of cards */}
        <div className="bottom-row">
          <TeamCard
            alt="Ankush Hegde image"
            image={userImage}
            name="Ankush hegde"
            description="I am a College Student pursuing Bachelor’s Degree in Computer Science and Engineering. I always dedicate myself to learning new technologies and use them to derive solutions for real-world problems, which helps me stay motivated and enthusiastic throughout the process. I possess a skill of adapting myself with other like-minded people and grasp insights from them."
            id="profile-cards3"
          />
        </div>
        <div className="bottom-row">
          <TeamCard
            alt="Pavan Kumar Image"
            image={userImage}
            name="Pavan Kumar "
            description="I am a College Student pursuing Bachelor’s Degree in Computer Science and Engineering. I always dedicate myself to learning new technologies and use them to derive solutions for real-world problems, which helps me stay motivated and enthusiastic throughout the process. I possess a skill of adapting myself with other like-minded people and grasp insights from them."
            id="profile-cards4"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutTeam;
