import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import Route from "./components/Route";
import Main from "./components/Main";
import ContainerHr from "./components/ContainerHr";
import Section from "./components/Section";

const App = () => {
  return (
    <>
    <GlobalStyles />
    <Header />
    <Route/>
    <Main/>
    <ContainerHr/>
    <Section/>
    </>
  )
}

export default App;