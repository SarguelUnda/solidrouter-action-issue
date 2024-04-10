import { Route, Router, action } from '@solidjs/router';
import { createSignal } from 'solid-js';

const [count, setCount] = createSignal(0)

const myAction = action(async (data: FormData) => {
  setCount(c => c + 1)
  console.log("ACTION")
});

const mySubmit = (e: SubmitEvent) => {
  console.log("onSubmit")
  e.preventDefault()
}

const MyForm = () => <>
  <form action="https://www.solidjs.com/" onSubmit={mySubmit} method="post">
    <button type="submit">Click Me</button>
  </form>
  <form action={myAction} onSubmit={mySubmit} method="post">
    <button type="submit">Click Me</button>
  </form>
  I should always stay at 0 : {count()}
  </>

const App = () => {
  return <Router>
    <Route path="*" component={MyForm} />
  </Router>
}

export default App;
