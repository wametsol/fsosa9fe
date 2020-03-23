import React from "react";
import {CoursePartOne, CoursePartTwo, CoursePartThree, CoursePartBase, CoursePartFour} from './../data/courseParts'
import Part from './part'
type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

const Content: React.FC<{courseParts: Array<CoursePart>}> = ({courseParts}) =>(

<div>
    {courseParts.map(a => (
        <Part key={a.name} part={a}/>
    ))}
</div>
);



export default Content