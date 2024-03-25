import React from "react";
import { IoMdTimer } from "react-icons/io";
import { GoDiscussionClosed } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";

import problemSolving from './solution.png'
import { Card } from "./Card";

function SubContent() {
  
  return (
    <>
        <div className="flex justify-center space-x-8">
          <Card frontContent="Exelent at time management" backContent="My time management skills are exceptional, allowing me to handle multiple projects simultaneously without compromising quality." icon={<IoMdTimer size={42} />} />
          <Card frontContent="Problem-Solving Skills" backContent="I exhibit robust problem-solving abilities, characterized by a systematic approach to analyzing and resolving complex issues. " icon={<FaRegLightbulb  size={42} />} />
          <Card frontContent="Active Communicator" backContent="I am a proactive communicator, proficient in articulating ideas with clarity and precision in both verbal and written forms." icon={<GoDiscussionClosed size={42} />} />

        </div>

    </>
    
  );
}

export { SubContent };