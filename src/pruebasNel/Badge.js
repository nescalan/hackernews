import React from 'react';
import '../App.css';

class Badge extends React.Component {
    render(){
        const personOfInterest = {Titulo: 'Ing.', Nombre: 'Nelson', Apellido: 'González'}
        const title = 'Ing';
        const firstName = 'Nelson';
        const lastName = 'González';
        return(
            <div>
                <h1 className="App">Primer Ejemplo Creado por {title} {firstName} {lastName}  </h1>
                <h2 className="App">Segundo Ejemplo Creado por {title} {personOfInterest.Nombre} {personOfInterest.Apellido}</h2>
            </div>
        );
    };
};

export default Badge;