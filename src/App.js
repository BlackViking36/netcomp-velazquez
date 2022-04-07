import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListener  from "./Components/ItemListContainer/ItemListContainer";
import ItemCount from "./Components/ItemCount/ItemCount";

//IMPORTANTE: <P></P> & <p></p> => no son lo mismo, el primero es una variable y el segundo es una etiqueta html
const App = () =>{

  return(
    <>
    <div className="App">
      <NavBar/>
      <ItemListener greeting="Bievenido a Nuestra Tienda" />
      <ItemCount />
    </div>
    </>
  );
};

export default App;




