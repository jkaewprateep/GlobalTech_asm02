// import logo from './logo.svg';
// import './App.css';

//
import Page_01 from "./components/page_01/page_01";
import { Routes, Route, useNavigate } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


function App() {
  //   const navigate = useNavigate();
    return (
          <>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Page_01 />} />
            <Route path="/page_01" element={<Page_01 />} />
          </Routes>
          </>
    );
  }

export default App;