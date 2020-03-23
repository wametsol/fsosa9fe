export interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
export interface CoursePartAddedDesc extends CoursePartBase {
    description: string;
}
  
export interface CoursePartOne extends CoursePartAddedDesc {
    name: "Fundamentals";
  }
  
export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
export interface CoursePartThree extends CoursePartAddedDesc {
    name: "Deeper type usage";
    exerciseSubmissionLink: string;
  }

export interface CoursePartFour extends CoursePartAddedDesc {
    name: "Interfacer"
    groupProjectCount: number;
}


