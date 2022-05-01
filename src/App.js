import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import Route from "./components/Route";
import Main from "./components/Main";


const App = () => {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Route/>
    <Main/>
    </>
  )
}

export default App;