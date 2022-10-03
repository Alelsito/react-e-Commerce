// React
import { useEffect, useState } from 'react'

// Location
import { useLocation } from 'react-router-dom'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)

  const location = useLocation()

  useEffect(() => {
    setInput({ ...defaults })
  }, [location.pathname])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
