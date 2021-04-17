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

## Exercises 2.6.-2.10.

### 2.6: The Phonebook Step1

Let's create a simple phonebook. In this part we will only be adding names to the phonebook.

Let us start by implementing the addition of a person to phonebook.

You can use the code below as a starting point for the App component of your application:

```js
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
```

The newName state is meant for controlling the form input element.

Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:

```js
<div>debug: {newName}</div>
```

It's also important to put what we learned in the debugging React applications chapter of part one into good use. The React developer tools extension especially, is incredibly useful for tracking changes that occur in the application's state.

After finishing this exercise your application should look something like this:

![fullstack content](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/5a190/10e.png)
Note the use of the React developer tools extension in the picture above!

**Note:**

you can use the person's name as value of the key property
remember to prevent the default action of submitting HTML forms!

### 2.7: The Phonebook Step2

Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable methods for accomplishing this task.

Issue a warning with the alert command when such an action is attempted:
![fullstack content](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png)

Hint: when you are forming strings that contain values from variables, it is recommended to use a template string:

`${newName} is already added to phonebook`
If the newName variable holds the value Arto Hellas, the template string expression returns the string

`Arto Hellas is already added to phonebook`
The same could be done in a more Java-like fashion by using the plus operator:

newName + ' is already added to phonebook'
Using template strings is the more idiomatic option and the sign of a true JavaScript professional.

### 2.8: The Phonebook Step3

Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second input element to the form (along with its own event handler):

```js
<form>
  <div>
    name: <input />
  </div>
  <div>
    number: <input />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
```

At this point the application could look something like this. The image also displays the application's state with the help of React developer tools:

![fullstack content](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)
2.9\*: The Phonebook Step4
Implement a search field that can be used to filter the list of people by name:

![fullstack content](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)
You can implement the search field as an input element that is placed outside the HTML form. The filtering logic shown in the image is case insensitive, meaning that the search term arto also returns results that contain Arto with an uppercase A.

NB: When you are working on new functionality, it's often useful to "hardcode" some dummy data into your application, e.g.

```js
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  // ...
};
```

This saves you from having to manually input data into your application for testing out your new functionality.

### 2.10: The Phonebook Step5

If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the App root component.

It is sufficient to extract three components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people into the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details.

The application's root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest.

```js
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```

NB: You might run into problems in this exercise if you define your components "in the wrong place". Now would be a good time to rehearse the chapter do not define a component in another component from last part.

# Español

## Ejercicios 2.6.-2.10.

### 2.6: La guía telefónica Paso1

Creemos una guía telefónica simple. En esta parte solo agregaremos nombres a la agenda.

Comencemos por implementar la adición de una persona a la agenda.

Puede utilizar el siguiente código como punto de partida para el componente App de su aplicación:

```js
import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  );
};

export default App;
```

El estado de newName está destinado a controlar el elemento de entrada del formulario.

A veces puede resultar útil representar el estado y otras variables como texto con fines de depuración. Puede agregar temporalmente el siguiente elemento al componente renderizado:

```js
<div>debug: {newName}</div>
```

También es importante poner lo que aprendimos en el capítulo depuración de aplicaciones React de la parte uno en buen uso. La extensión React developer tools especialmente, es increíblemente útil para rastrear los cambios que ocurren en el estado de la aplicación.

Después de terminar este ejercicio, su aplicación debería verse así:

![fullstack content](https://fullstackopen.com/static/501199c4a6d7a5702a7bdf31998d5a1d/5a190/10e.png)
¡Tenga en cuenta el uso de la extensión de herramientas de desarrollo React en la imagen de arriba!

**Nota:**

puede utilizar el nombre de la persona como valor de la propiedad key
¡recuerde evitar la acción predeterminada de enviar formularios HTML!

### 2.7: La guía telefónica Paso2

Evita que el usuario pueda agregar nombres que ya existen en el directorio telefónico. Los arreglos de JavaScript tienen numerosos métodos adecuados para realizar esta tarea.

Emita una advertencia con el comando alert cuando se intente realizar una acción de este tipo:

![fullstack content](https://fullstackopen.com/static/d5be58590c1460090cb1c87adf201886/5a190/11e.png)

Sugerencia: cuando está formando cadenas que contienen valores de variables, se recomienda utilizar una plantilla de cadena:

`${newName} is already added to phonebook`
Si la variable newName tiene el valor Arto Hellas, la expresión de la plantilla de cadena regresa la cadena

`Arto Hellas is already added to phonebook`
Lo mismo se podría hacer en una forma más similar a Java usando el operador más:

newName + ' is already added to phonebook'
Usar plantillas de cadenas es la opción más idiomática y el signo de un verdadero profesional de JavaScript.

### 2.8: La guía telefónica Paso3

Amplíe su aplicación permitiendo a los usuarios agregar números de teléfono a la guía telefónica. Deberá agregar un segundo elemento input al formulario (junto con su propio controlador de eventos):

```js
<form>
  <div>
    name: <input />
  </div>
  <div>
    number: <input />
  </div>
  <div>
    <button type="submit">add</button>
  </div>
</form>
```

En este punto, la aplicación podría verse así. La imagen también muestra el estado de la aplicación con la ayuda de React developer tools:

![fullstack content](https://fullstackopen.com/static/3068a34af61692773a06d60ee93638a9/5a190/12e.png)

### 2.9: La guía telefónica Paso4

Implemente un campo de búsqueda que pueda usarse para filtrar la lista de personas por nombre:

![fullstack content](https://fullstackopen.com/static/4b5897029d4c9e2eb61631ca4c1a4f24/5a190/13e.png)

Puede implementar el campo de búsqueda como un elemento input que se coloca fuera del formulario HTML. La lógica de filtrado que se muestra en la imagen no distingue entre mayúsculas y minúsculas, lo que significa que el término de búsqueda arto también devuelve resultados que contienen Arto con una A mayúscula.

NB: Cuando están trabajando en una nueva funcionalidad, a menudo es útil "codificar" algunos datos ficticios en su aplicación, por ejemplo

```js
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  // ...
};
```

Esto evita tener que ingresar datos manualmente en su aplicación para probar su nueva funcionalidad.

### 2.10: La guía telefónica Paso5

Si ha implementado su aplicación en un solo componente, refactorice extrayendo las partes adecuadas en nuevos componentes. Mantenga el estado de la aplicación y todos los controladores de eventos en el componente raíz de App.

Es suficiente extraer tres componentes de la aplicación. Buenos candidatos para componentes separados son, por ejemplo, el filtro de búsqueda, el formulario para agregar nuevas personas a la agenda telefónica, un componente que muestra a todas las personas de la agenda telefónica y un componente que muestra los detalles de una sola persona.

El componente raíz de la aplicación podría verse similar a esto después de la refactorización. El componente raíz refactorizado a continuación solo representa los títulos y permite que los componentes extraídos se encarguen del resto.

```js
const App = () => {
  // ...

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter ... />

      <h3>Add a new</h3>

      <PersonForm
        ...
      />

      <h3>Numbers</h3>

      <Persons ... />
    </div>
  )
}
```

**Nota:** Es posible que tenga problemas en este ejercicio si define sus componentes "en el lugar equivocado". Ahora sería un buen momento para ensayar el capítulo no defina un componente en otro componente de la última parte.
