import { useState } from 'react'
import logo from './logo.svg'
import { Button, Link } from "./components/Clickable";
import { H1, H2, H3, H4 } from "./components/Heading";

// These things get imported into the root template because we basically
// always use them, don't need to worry about tree shaking
import './App.css';
import './styles/variables.css';
import "./styles/Button.css";
import "./styles/Link.css";
import "./styles/Heading.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mr-10" alt="logo" />
        <H1>
          Yext CSS Demo
        </H1>
      </header>
      <div className="App-body container">
        <H2 className="mt-4 mb-4">Headings</H2>
        <H1>This is an H1</H1>
        <H2>This is an H2</H2>
        <H3>This is an H3</H3>
        <H4 variants={['1']}>This is an H4 styled as an H1</H4>

        <H2 className="mt-4 mb-4">Buttons</H2>
        <div>
          <Button onClick={() => setCount((count) => count + 1)}>
            Default ({count})
          </Button>
          <br /><br />

          <Button className="rounded-full" onClick={() => setCount((count) => count + 1)}>
            Default + one-off tailwind class ({count})
          </Button>
          <br /><br />

          <Button variants={['secondary']} onClick={() => setCount((count) => count + 1)}>
            Secondary ({count})
          </Button>
          <br /><br />

          <Button variants={['inverse']} onClick={() => setCount((count) => count + 1)}>
            Inverse ({count})
          </Button>
          <br /><br />

          <Button variants={['secondary', 'inverse']} onClick={() => setCount((count) => count + 1)}>
            Secondary + Inverse ({count})
          </Button>
          <br /><br />
        </div>

        <H2 className="mt-4 mb-4">Links</H2>
        <div>
          <Link href="https://www.yext.com">
            Default
          </Link>
          <br /><br />

          <Link baseClass="Button" href="https://www.yext.com">
            Styled as Button
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
