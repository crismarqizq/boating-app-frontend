import axios from "axios"

async function getUserInformation() {
  const response = await axios.get("http://localhost:8080/settings")
  return response.data
}

export default getUserInformation
