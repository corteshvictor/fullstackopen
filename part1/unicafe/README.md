# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# English

## Exercises 1.6.-1.11.

### 1.6: unicafe step1

Like most companies, Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

![fullstack content](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in material and previous exercise. File index.js is as follows:

```javascript
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

You can use the code below as a starting point for the App.js file:

```javascript
import React, { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <div>code here</div>;
};

export default App;
```

### 1.7: unicafe step2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

![fullstack content](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

### 1.8: unicafe step3

Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

Remember that components should not be defined inside other components:

```javascript
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

### 1.9: unicafe step4

Change your application to display statistics only once feedback has been gathered.

![fullstack content](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

### 1.10: unicafe step5

Let's continue refactoring the application. Extract the following two components:

Button for defining the buttons used for submitting feedback
Statistic for displaying a single statistic, e.g. the average score.
To be clear: the Statistic component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

```javascript
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  )
}
```

The application's state should still be kept in the root App component.

### 1.11\*: unicafe step6

Display the statistics in an HTML table, so that your application looks roughly like this:

![fullstack content](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

# Espa??ol

## Ejercicios 1.6.-1.11.

### 1.6: unicafe, paso 1

Como la mayor??a de las empresas, Unicafe recopila comentarios de sus clientes. Su tarea es implementar una aplicaci??n web para recopilar comentarios de los clientes. Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).

La aplicaci??n debe mostrar el n??mero total de comentarios recopilados para cada categor??a. Su aplicaci??n final podr??a verse as??:

![fullstack content](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

Tenga en cuenta que su aplicaci??n debe funcionar solo durante una ??nica sesi??n del navegador. Una vez que actualice la p??gina, los comentarios recopilados pueden desaparecer.

Puede implementar la aplicaci??n en un solo archivo index.js. Puede utilizar el siguiente c??digo como punto de partida para su aplicaci??n.

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return <div>code here</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
```

### 1.7: unicafe, paso 2

Ampl??e su aplicaci??n para que muestre m??s estad??sticas sobre los comentarios recopilados: el n??mero total de comentarios recopilados, la puntuaci??n promedio (buena: 1, neutral: 0, mala: -1) y el porcentaje de comentarios positivos.

![fullstack content](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

### 1.8: unicafe, paso 3

Refactorice su aplicaci??n para que la visualizaci??n de las estad??sticas se extraiga en su propio componente Statistics. El estado de la aplicaci??n debe permanecer en el componente ra??z App.

Recuerde que los componentes no deben definirse dentro de otros componentes:

```javascript
// un lugar adecuado para definir un componente
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // no defina componentes adentro de otro componente
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

### 1.9: unicafe paso4

Cambie su aplicaci??n para mostrar estad??sticas solo una vez que se hayan recopilado los comentarios.

![fullstack content](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

### 1.10: unicafe step5

Continuemos refactorizando la aplicaci??n. Extraiga los dos componentes siguientes:

Button para definir los botones utilizados para enviar comentarios
Statistics para mostrar una ??nica estad??stica, por ejemplo, la puntuaci??n media.
Para ser claros: el componente Statistics siempre muestra una ??nica estad??stica, lo que significa que la aplicaci??n utiliza varios componentes para representar todas las estad??sticas:

```javascript
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <Statistic text="good" value ={...} />
      <Statistic text="neutral" value ={...} />
      <Statistic text="bad" value ={...} />
      // ...
    </div>
  )
}
```

El estado de la aplicaci??n a??n debe mantenerse en el componente ra??z App.

### 1.11\*: unicafe, paso 6

Muestra las estad??sticas en una tabla HTML, de modo que su la aplicaci??n se ve m??s o menos as??:

![fullstack content](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)
