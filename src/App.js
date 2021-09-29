import { useState, useEffect } from 'react'

const useContador = (inicial) => {
	const [contador, setContador] = useState(inicial)

	const incrementar = () => {
		setContador(contador + 1)
	}

	return [contador, incrementar]
}

// Componente funcional
const App = () => {
	const [contador, incrementar] = useContador(0)

	return (
		<div>
			Contador: {contador}
			<button onClick={incrementar}>Incrementar</button>
		</div>
	)
}
export default App
