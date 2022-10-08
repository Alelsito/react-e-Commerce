const replaceNoNumber = (number) => {
  return parseInt(number.toString().replace(/\D/g, ''))
}

export default replaceNoNumber
