# digit-roll-react

> Rolling digit/odometer effect by React

[**DEMO**](https://codesandbox.io/s/y294oz0m91)

### 1. How to use

```bash
# install dependencies
npm install digit-roll-react
```

```js
import React, { Component } from 'react'
import Odo from 'digit-roll-react'
import 'digit-roll-react/css/default.css'

class App extends Component {
  state = { num: 12345678 }

  //generate random numbers
  refresh = () => {
    this.setState({
      num: Math.floor(Math.random() * 100000000),
    })
  }

  componentDidMount = () => {
    setInterval(this.refresh, 2500)
  }

  render() {
    return <Odo num={this.state.num} length={9} divider="," />
  }
}

export default App
```

### 2. Prop Types

| Property  | Type   | Required? | default    | Description                                               |
| :-------- | :----- | :-------- | :--------- | :-------------------------------------------------------- |
| num       | Number | ✓         | '000000'   | the number you want to render                             |
| length    | Number |           | auto       | `length={9}` then 123456 => 000123456                     |
| height    | Number |           | 3(rem)     | Height of each digit                                      |
| width     | Number |           | 2(rem)     | width of each digit                                       |
| divider   | String |           | no divider | `divider=','` then 100000 => 100,000                      |
| delay     | Number |           | 2(s)       | how fast digit rolls                                      |
| className | String |           | ''         | Optional custom CSS class name to attach to root element. |

### 3. Style your component using css

Access the full power of css to customize it to your liking.

| className             | description                |
| :-------------------- | :------------------------- |
| `.DigitRoll`          | the root `<div>`.          |
| `.DigitRoll__Cell`    | `<div>` of each digit      |
| `.DigitRoll__Divider` | `<div>` of dividing elment |

```css
/* index.css */
.DigitRoll {
  font-size: 25px;
  color: white;
  border: none;
}

.DigitRoll__Cell {
  background: salmon;
  margin: 0 3px;
  border: 1px solid brown;
}

.DigitRoll__Divider {
  font-size: 25px;
  color: black;
  padding: 0 6px;
}
```

Then import it **after** the default css file.

```js
import 'digit-roll-react/css/default.css'
import './index.css'
```
