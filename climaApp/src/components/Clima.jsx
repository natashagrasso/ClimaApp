import React from 'react'

export const Clima = ({ resultado }) => {
    const { name, wind, main } = resultado
    if (!name) return null
    return (
        <div className="card-panel white col s12">
            <div className='black-text'>
                <h2>Temperatura de {name}:</h2>
                <p className='temperatura'>
                    {main.temp} °C
                    <p></p>
                    <h2>Viento:</h2>
                    {wind.speed} km/h
                </p>

            </div>
        </div>
    )
}