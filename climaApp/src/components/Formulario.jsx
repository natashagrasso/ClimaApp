import { useState } from "react"

export const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {


    // hook error
    const [error, guardarError] = useState(false)

    // extraer ciudad y el pais
    const { ciudad, pais } = busqueda

    // funcion que coloca los elementos en el state
    const handleChange = (e) => {
        // actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario da un submit al formulario
    const handleSubmit = e => {
        e.preventDefault()

        // validar que esten todos los datos

        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true)
            return
        }

        guardarError(false)

        guardarConsulta(true)




        // pasarlo al componente principal
    }


    return (
        <form onSubmit={handleSubmit}
        >
            {
                error
                    ?
                    <p className="red darken-4">Todos los campos son obligatorios</p>
                    :
                    null


            }


            <div className="input-field col s12">
                <input
                    name="ciudad"
                    type="text"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select
                    className="browser-default"
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="disabled selected">--Selecione un Pais--</option>
                    <option value="AR">Argentina</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais"></label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

