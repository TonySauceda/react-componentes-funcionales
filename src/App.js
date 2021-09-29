import { Component, useState } from 'react'

// Reglas de los hooks
// No utilizarlos en loops
// Siempre utilizarlos en el nivel mas alto del componente
// Solo se llaman en 2 partes:
//  1. En componentes de react
//  2. Custom hooks
// Cuando creemos un custom hook su nombre debe empezar con 'use'

// Componente basado en clase
// class App extends Component {
// 	state = {
// 		contador: 0,
// 	}
// 	render() {
// 		return (
// 			<div>
// 				Contador: {this.state.contador}
// 				<button onClick={() => this.incrementar(this.state.contador + 1)}>Incrementar</button>
// 			</div>
// 		)
// 	}

// 	incrementar = () => {
// 		this.setState({ contador: this.state.contador + 1 })
// 	}
// }

// Componente funcional
const App = () => {
	const [contador, setContador] = useState(0)
	return (
		<div>
			Contador: {contador}
			<button onClick={() => setContador(contador + 1)}>Incrementar</button>
		</div>
	)
}
export default App
