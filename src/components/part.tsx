import React from "react";
import {CoursePartOne, CoursePartTwo, CoursePartThree, CoursePartFour} from './../data/courseParts'
type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

const Part: React.FC<{part: CoursePart}> = ({part}) =>{
                
              while(true){
              switch(part.name) {
                  case "Fundamentals": 
                  return (
                        <div>
                      <h3>{part.name}</h3>
                      <p><b>Description:</b> {part.description}</p>
                      <p><b>Exercise count:</b> {part.exerciseCount}</p>
                      </div>
                      )
                  case "Using props to pass data":
                      return (
                        <div>
                        <h3>{part.name}</h3>
                        <p><b>Project count:</b> {part.groupProjectCount}</p>
                        <p><b>Exercise count:</b> {part.exerciseCount}</p>
                        </div>
                        ) 
                  case "Deeper type usage":
                      return (
                        <div>
                        <h2>{part.name}</h2>
                        <p><b>Description:</b> {part.description}</p>
                        <p><b>url: </b>{part.exerciseSubmissionLink}</p>
                        <p><b>Exercise count: </b>{part.exerciseCount}</p>
                        </div>
                        ) 
                case "Interfacer":
                      return (
                        <div>
                        <h2>{part.name}</h2>
                        <p><b>Description:</b> {part.description}</p>
                        <p><b>Exercise count: </b>{part.exerciseCount}</p>
                        <p><b>Project count:</b> {part.groupProjectCount}</p>
                        </div>
                        )
              }
          }
        };

export default Part