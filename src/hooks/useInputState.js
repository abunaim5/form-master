import { useState } from "react"

const useInputState = (inputValue = null) => {
    const [value, setValue] = useState(inputValue);

    const onChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange
    }
}

export default useInputState;