import { useEffect, useState } from 'react'

import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { Clima } from "./components/Clima"
function App() {

  // state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsulta] = useState(false)
  const [resultado, guardarResultado] = useState({})





  const { ciudad, pais } = busqueda


  useEffect(() => {
    const consultarAPI = async () => {
      const apikey = '1612a03812789a9866082b9d83e8dccc';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}&units=metric`;
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      guardarResultado(resultado)

    }
    consultarAPI();
  }, [consultar])

  return (

    <>
      <Header
        titulo='Clima App'
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}

              />
            </div>
            <div className="col m6 s12">
              <Clima
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
