const age = async function() {
  const dateOfBirth = new Date('1995-05-04 00:00:00')
  const ageDifference = Date.now() - dateOfBirth.getTime()
  const ageDate = new Date(ageDifference)
  return `${Math.abs(ageDate.getUTCFullYear() - 1970)} years`
}

module.exports = age
