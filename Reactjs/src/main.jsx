import { StrictMode, Component, useState, useEffect, useReducer } from 'react'
import { createRoot } from 'react-dom/client'
import { createPortal } from 'react-dom'
import './index.css'
import {BrowserRouter, Routes,Route,Link,} from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

//JSX Intro
const myElement = <h2>Hello World</h2>
const myList = (
  <ul>
    <li>A for Apple</li>
    <li>B for Ball</li>
  </ul>
)

//JSX Expression
function Greeting() {
  return (
    <section>
      <h2>Greetings</h2>
      <p>Welcome to ReactJS. It's {5 + 5} times better than JavaScript.</p>
    </section>
  )
}
function Car() {
  const myObj = {
    name: 'Fiat',
    model: '500',
    color: 'white'
  }
  return (
    <section>
      <p>My car is a {myObj.color} {myObj.name}, which is the {myObj.model} model.</p>
    </section>
  )
}

//JSX Attributes
function Hello() {
  const className = 'myclass'
  return <h2 className={className}>Hello World</h2>
}

//JSX Event
function ClickButton() {
  const handleClick = () => {
    alert('Hello World')
  }
  return <button onClick={handleClick}>Click me</button>
}

//JSX if statement
function Choice() {
  const x = 5
  const y = x < 10 ? 'Banana' : 'Apple'
  return <h2>JSX Conditional: {y}</h2>
}

//React Components
function Col(props) {
  return (
    <p>I am a {props.color} Car!</p>
  );
}

function Carlives() {
  return (
    <p>I am a Car!</p>
  );
}
function Garage() {
  return (
    <>
      <p>Who lives in my Garage?</p>
      <Carlives />
    </>
  );
}

function comCar(props) {
  return (
    <p>I am a {props.brand}!</p>
  );
}

function comGarage() {
  return (
    <>
      <p>Who lives in my Garage?</p>
      <comCar brand="Ford" />
      <comCar brand="BMW" />
    </>
  );
}

//React Class
class CarClass extends Component {
  constructor(props) {
    super(props)
    this.state = {brand: 'Mercedes'}
  }
  render() {
    return <p>I am a {this.state.brand} car from a class component.</p>
  }
}
class PropsClass extends Component {
  render() {
    return <p>I am a {this.props.color} car passed by props.</p>
  }
}
class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  render() {
    return (
      <section>
        <h2>Class counter</h2>
        <button onClick={this.handleClick}>Clicked {this.state.count} times</button>
      </section>
    )
  }
}
class ConditionalClass extends Component {
  render() {
    const x = 7
    const result = x < 10 ? 'Banana' : 'Apple'
    return <h2>Class conditional: {result}</h2>
  }
}

//React Props
function Welcome({ name }) {
  return <h2>Welcome, {name}!</h2>
}
function CarProps({ brand, color }) {
  return <p>My car is a {color} {brand}.</p>
}
function UserInfo({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  )
}

//React Events
function Gun() {
  const shoot = () => {
    alert("Great Shot!");
  }
  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
function ToggleText() {
  const [isOn, setIsOn] = useState(false)
  return (
    <section>
      <h2>Toggle event</h2>
      <button onClick={() => setIsOn((prev) => !prev)}>
        Turn {isOn ? 'Off' : 'On'}
      </button>
      <p>{isOn ? 'The switch is ON.' : 'The switch is OFF.'}</p>
    </section>
  )
}
function MouseOver() {
  const [hovered, setHovered] = useState(false)
  return (
    <section>
      <h2>Mouse event</h2>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: 'inline-block', padding: '10px', border: '1px solid black' }}
      >
        Hover over me
      </div>
      <p>{hovered ? 'You are hovering!' : 'Move your mouse here.'}</p>
    </section>
  )
}
function NameForm() {
  const [name, setName] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Hello, ${name || 'guest'}!`)
  }
  return (
    <section>
      <h2>Form submit</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}
function InputMirror() {
  const [value, setValue] = useState('')
  return (
    <section>
      <h2>Input change</h2>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Current value: {value}</p>
    </section>
  )
}

//React Conditional
function MissedGoal() {
  return <p>MISSED!</p>;
}
function MadeGoal() {
  return <p>Goal!</p>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}
function News({ Messages }) {
  return (
    <div>
      <h2>Unread messages</h2>
      {Messages.length > 0 && (
        <p>You have {Messages.length} message(s).</p>
      )}
    </div>
  )
}
function StatusMessage({ isOnline }) {
  return (
    <p>{isOnline ? 'User is online' : 'User is offline'}</p>
  )
}

//React Lists
function MyCarsList() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car, index) => <li key={index}>I am a { car }</li>)}
      </ul>
    </>
  );
}

//React Forms
function MyForm1() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
function MyForm2() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
}
function MyForm3() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Welcome ${name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChange}
        />
        {/*<textarea value={name} onChange={handleChange}/>*/}
      </label>
      <input type="submit" />
    </form>
  )
}

//React Select
function Sel1() {
  const [myCar, setMyCar] = useState("Volvo");
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

//React Multiple Input
function MulInt() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <form>
      <label>First name:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <label>Last name:
        <input 
          type="text" 
          name="lastname" 
          value={inputs.lastname} 
          onChange={handleChange}
        />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
    </form>
  )
}

//React Checkbox
function CheckB() {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    let fillings = '';
    if (inputs.cyrene) fillings += 'Cyrene';
    if (inputs.firefly) {
      if (inputs.cyrene) fillings += ' and ';
      fillings += 'Firefly';
    }
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs.firstname} loves ${fillings}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstname} 
        onChange={handleChange}
      />
      </label>
      <p>I love:</p>
      <label>Cyrene:
      <input 
        type="checkbox" 
        name="cyrene" 
        checked={inputs.cyrene} 
        onChange={handleChange}
      />
      </label>
      <label>Firefly:
        <input 
          type="checkbox" 
          name="firefly" 
          checked={inputs.firefly} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

//React Radio
function RadioExample() {
  const [selected, setSelected] = useState('Apple')
  const handleChange = (e) => {
    setSelected(e.target.value)
  }
  return (
    <section>
      <h2>React Radio Buttons</h2>
      <form>
        <label>
          <input
            type="radio"
            name="fruit"
            value="Apple"
            checked={selected === 'Apple'}
            onChange={handleChange}
          />
          Apple
        </label>
        <label>
          <input
            type="radio"
            name="fruit"
            value="Banana"
            checked={selected === 'Banana'}
            onChange={handleChange}
          />
          Banana
        </label>
        <label>
          <input
            type="radio"
            name="fruit"
            value="Cherry"
            checked={selected === 'Cherry'}
            onChange={handleChange}
          />
          Cherry
        </label>
      </form>
      <p>Selected fruit: {selected}</p>
    </section>
  )
}

//React Portal
function PortalExample() {
  const [show, setShow] = useState(false)
  return (
    <section>
      <h2>Portal Example</h2>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'Hide' : 'Show'} portal content
      </button>
      {show && createPortal(
        <div style={{
          position: 'fixed',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '20px',
          background: 'white',
          border: '2px solid black',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          zIndex: 1000,
        }}>
          <h3>Portal content</h3>
          <p>This is rendered outside the main React root.</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>,
        document.getElementById('portal-root')
      )}
    </section>
  )
}

//React Hooks
function CounterHook() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <h2>useState Hook</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)} style={{ marginLeft: '8px' }}>
        Decrement
      </button>
    </section>
  )
}

function TimerHook() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section>
      <h2>useEffect Hook</h2>
      <p>Seconds elapsed: {seconds}</p>
    </section>
  )
}

function ReducerHook() {
  const initialState = { count: 0 }
  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'reset':
        return initialState
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <section>
      <h2>useReducer Hook</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ marginLeft: '8px' }}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })} style={{ marginLeft: '8px' }}>
        Reset
      </button>
    </section>
  )
}

//Main
function App() {
  return (
    <main>
      <section>
        <h1>JSX Intro</h1>
        {myElement}
        {myList}
      </section>

      <h1>JSX Expression</h1>
      <Greeting />
      <Car />

      <section>
        <h1>JSX Attributes</h1>
        <Hello />
      </section>

      <section>
        <h1>JSX Event</h1>
        <ClickButton />
      </section>

      <section>
        <h1>JSX if statement</h1>
        <Choice />
      </section>

      <section>
        <h1>React Components</h1>
        <h2>Color or styles</h2>
        <Col color="red" />
        <h2>Inheritance</h2>
        <Garage />
        <h2>Both</h2>
        <comGarage />
      </section>

      <section>
        <h1>React Class Components</h1>
        <CarClass />
        <PropsClass color="purple" />
        <CounterClass />
        <ConditionalClass />
      </section>

      <section>
        <h1>React Props Examples</h1>
        <Welcome name="Coders" />
        <CarProps brand="Mustang" color="blue" />
        <UserInfo name="Kumar" age={20} />
      </section>

      <section>
        <h1>React Events Examples</h1>
        <h2>Click Event</h2>
        <Gun/>
        <ToggleText />
        <MouseOver />
        <NameForm />
        <InputMirror />
      </section>

      <section>
        <h1>React Conditional</h1>
        <h2>If statment. Was it a Goal?</h2>
        <Goal isGoal={false} />
        <h2>Logical && example</h2>
        <News Messages={['Message 1', 'Message 2']} />
        <h2>Ternary operator example</h2>
        <StatusMessage isOnline={true} />
      </section>

       <section>
        <h1>React Lists Examples</h1>
        <MyCarsList />
      </section>

      <section>
        <h1>React Form and textarea Example</h1>
        <MyForm1 />
        <MyForm2 />
        <MyForm3 />
      </section>

      <section>
        <h1>React Select Examples</h1>
        <Sel1/>
      </section>

      <section>
        <h1>React Multiple Input Example</h1>
        <MulInt/>
      </section>

      <section>
        <h1>React Checkbox Example</h1>
        <CheckB/>
      </section>

      <section>
        <h1>React Radio Example</h1>
        <RadioExample />
      </section>

      <section>
        <h1>React Portal Example</h1>
        <PortalExample />
      </section>
      
      <section>
        <h1>React Hooks Examples</h1>
        <CounterHook />
        <TimerHook />
        <ReducerHook />
      </section>

      <h1>React Router Example</h1>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)