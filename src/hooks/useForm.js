import { useState, useEffect } from "react";

const useForm = (initialState = {}) => {
  
	const [state, setState] = useState(initialState); 

	useEffect( () => { 

		return(
			console.log(`componente desmontado`)
		)

	}, [])

	const handleInputChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value 
		})
	};

	return([state, handleInputChange])

};

export default useForm; 
