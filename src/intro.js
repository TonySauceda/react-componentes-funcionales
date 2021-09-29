const MyComponent = ({ myProp }) => {
	return <div>Mensaje: {myProp}</div>
}

const App = () => {
	return <MyComponent myProp={'Hola Mundo'} />
}

export default App
