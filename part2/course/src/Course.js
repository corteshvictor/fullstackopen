const Header = ({ course }) => <h1>{course.name}</h1>;

const Total = ({ parts }) => {
  const sum = parts.reduce((acc, { exercises }) => acc + exercises, 0);
  return <p>Number of exercises {sum}</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const { parts = [] } = course;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={parts} />
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
    </>
  );
};

export default Course;
