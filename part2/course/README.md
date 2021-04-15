# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

# English

## Exercises 2.1.-2.5.

### 2.1: Course information step6

Let's finish the code for rendering course contents from exercises 1.1 - 1.5. You can start with the code from the model answers.

Let's change the App component like so:

```js
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};
```

Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:

```
App
  Course
    Header
    Content
      Part
      Part
      ...
```

Hence, the Course component contains the components defined in the previous part, which are responsible for rendering the course name and its parts.

The rendered page can, for example, look as follows:

![fullstack content](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png)
You don't need the sum of the exercises yet.

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

Ensure that the console shows no errors!

### 2.2: Course information step7

Show also the sum of the exercises of the course.

![fullstack content](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png)

### 2.3\*: Course information step8

If you haven't done so already, calculate the sum of exercises with the array method reduce.

Pro tip: when your code looks as follows:

```js
const total = parts.reduce((s, p) => someMagicHere);
```

and does not work, it's worth to use console.log, which requires the arrow function to be written in its longer form:

```js
const total = parts.reduce((s, p) => {
  console.log("what is happening", s, p);
  return someMagicHere;
});
```

### 2.4: Course information step9

Let's extend our application to allow for an arbitrary number of courses:

```js
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <div>// ...</div>;
};
```

The application can, for example, look like this:

![fullstack content](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png)

### 2.5: separate module

Declare the Course component as a separate module, which is imported by the App component. You can include all subcomponents of the course into the same module.

# Español

## Ejercicios 2.1.-2.5.

### 2.1: Información del curso paso6

Terminemos el código para renderizar los contenidos del curso de los ejercicios 1.1 - 1.5. Puede comenzar con el código de las respuestas del modelo.

Cambiemos el componente App así:

```js
const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};
```

Defina un componente responsable de formatear un solo curso llamado Course.

La estructura de componentes de la aplicación puede ser, por ejemplo, la siguiente:

```
App
  Course
    Header
    Content
      Part
      Part
      ...
```

Por lo tanto, el componente Course contiene los componentes definidos en la parte anterior, que son responsables de representar el nombre del curso y sus partes.

La página renderizada puede, por ejemplo, tener el siguiente aspecto:

![fullstack content](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/5a190/8e.png)
Todavía no necesitas la suma de los ejercicios.

La aplicación debe funcionar independientemente del número de partes que tenga un curso, así que asegúrese de que la aplicación funcione si agrega o quita partes de un curso.

¡Asegúrese de que la consola no muestre errores!

### 2.2: Información del curso paso 7

Muestra también la suma de los ejercicios del curso.

![fullstack content](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/5a190/9e.png)

### 2.3\*: Información del curso, paso8

Si aún no lo ha hecho, calcule la suma de ejercicios con el método de matriz reduce.

Consejo profesional: cuando su código tiene el siguiente aspecto:

```js
const total = parts.reduce((s, p) => someMagicHere);
```

y no funciona, vale la pena usar console.log, que requiere que la función de flecha se escriba en su forma más larga:

```js
const total = parts.reduce((s, p) => {
  console.log("what is happening", s, p);
  return someMagicHere;
});
```

### 2.4: Información del curso, paso 9

Extendamos nuestra aplicación para permitir un número arbitrario de cursos:

```js
const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return <div>// ...</div>;
};
```

La aplicación puede, por ejemplo, verse así:

![fullstack content](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/5a190/10e.png)

### 2.5: módulo separado

Declare el componente Course como un módulo separado, que es importado por el componente App. Puede incluir todos los subcomponentes del curso en el mismo módulo.
