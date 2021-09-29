import { useRef } from 'react'

const App = () => {
	const ref = useRef()
	const inputRef = useRef()
	const click = () => {
		console.log(ref.current)
		ref.current.innerHTML = 'Prueba'
	}

	const focus = () => {
		inputRef.current.focus()
	}

	return (
		<div>
			<input ref={inputRef} />
			<button onClick={focus}>Focus</button>
			<div onClick={click} ref={ref}>
				Hola Mundo
			</div>
		</div>
	)
}

export default App
