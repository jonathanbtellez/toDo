//import logo from './logo.svg';
import './App.css';
import AsyncExample from './components/pure/AsyncExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosExampleJoke from './components/pure/AxiosExampleJoke';
import FetchExample from './components/pure/FetchExample';
import ObservableExample from './components/pure/ObservableExample';
//import { Father } from './components/container/father';
//import GreetingStyled from './components/pure/GreetingStyled';
//import Greeting from './components/pure/Greeting';
//import GreetingFun from './components/pure/GreetingFun';
// import TaskListComponent from './components/container/taskListComponent';
// import LoginFormik from './components/pure/forms/loginFormik';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import OptionalRender from './components/pure/optionalRender';
//import Ejemplo1 from './hooks/Ejemplo1';
//import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3'
//import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />*/}

      {/* ----------------Ejercicios------------------- */}

      {/*Comentarios en jsx van entre llaves*/}
      {/*Componente propio greeting.jsx*/}
      {/*El atributo name es un prop que recibe un
        valor y lo envia a la renderiza en el component greeting*/}
      {/* <Greeting name="Jonathan"></Greeting> */}

      {/* Usando un componente funcional */}
      {/* <GreetingFun name="Jonathan"></GreetingFun> */}

      {/* Ejemplos de usos de HOOKS */}
      {/* <Ejemplo1></Ejemplo1> */}

      {/* Ejemplo useState(), useRef(), useEffect */}
      {/* <Ejemplo2></Ejemplo2> */}

      {/* Ejemplo3 useState(), useContext() */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}

      {/* Ejemplo de props.children */}
      {/* Todo lo que hay aca adentro es tratado como 
        props.children */}
      {/* <Ejemplo4 nombre='Martin'>
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}

      {/* Usando estilos dentro de un archivo jsx */}
      {/* <GreetingStyled name ='Jonathan'></GreetingStyled> */}
      {/* </header> */}

      {/* Gestion de Eventos*/}
      {/* <Father></Father> */}

      {/* Ejemplo de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplo formik */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de proceso asincronicos */}
      {/* <AsyncExample/> */}
      {/* <ObservableExample/> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <AxiosExampleJoke></AxiosExampleJoke>

      {/* ------------------Aplicacion tasklist------------------ */}
      {/* Usando el componente tas list */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
