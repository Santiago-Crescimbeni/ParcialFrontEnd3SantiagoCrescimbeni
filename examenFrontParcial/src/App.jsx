import { useState } from 'react'
import './App.css'
import Card from './Componentes/Card'

function App() {
  
  const [animales, setAnimales] = useState({
    nombre: '',
    sonido: '',
    raza: '',
    tipo: ''
})
const [show, setShow] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
     
    if(animales.nombre.length > 3 && animales.sonido.length >6 ) {     
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
        setShow(false)
    }

}
  return (
    <div className="App">
         <form onSubmit={handleSubmit} className="formulario">

            <label>Nombre Completo</label>
            <input type="text"  onChange={(e) => setAnimales({...animales, nombre: e.target.value})}/>

            <label>Sonido</label>
            <input type="text"onChange={(e) => setAnimales({...animales, sonido: e.target.value})}/>

            <label>Raza</label>
            <input type="text"  onChange={(e) => setAnimales({...animales, raza: e.target.value})}/>
            <label >Tipo</label>
            <select  onChange={(e) => setAnimales({...animales, tipo: e.target.value})}>
                <option value="">Seleccione una opción</option>
                <option value="Terrestres">Terrestres</option>
                <option value="acuaticos">acuaticos</option>
                <option value="Aereos">Aereos</option>
            </select>
            <button>Enviar</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card animales={animales}/>}      
    </div>
  )
}

export default App
