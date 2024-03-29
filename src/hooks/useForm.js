import { useState } from 'react';

export const useForm = (initState) => {

	const [state, setState] = useState(initState);

	const onChange = (value, field) => {
		setState({
			...state,
			[field]: value
		});
	}

	const setFormValue = (form) => {
		setState(form)
	}

	const resetForm = () => {
		setState({
			...initState
		})
	}

	return {
		...state,
		form: state,
		onChange,
		setFormValue,
		resetForm
	}

}