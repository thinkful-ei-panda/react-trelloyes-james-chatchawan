# FUNCTIONAL COMPONENTS
* are basic JavaScript functions
* arrow functions OR regular function keyword
* **_“stateless”_** components 
    - simply accept data & display them in some form; mainly responsible for rendering UI
* React **_lifecycle methods_** (i.e. `componentDidMount`) **CANNOT** be used
* no render method used 
* mainly responsible for UI (typically presentational only) (i.e. a Button component)
* can accept & use props
* should be favored IF you do NOT need to make use of React **state**

```
import React from "react";

const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default Person;
```




# CLASS COMPONENTS
* use ES6 class & extend the Component class in React
* **_“stateful”_** components 
    - they tend to implement **logic** & **state**
* React **_lifecycle methods_** (i.e. `componentDidMount`) **CAN** be used
* pass props down to class components & access them with `this.props`

```
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;
```