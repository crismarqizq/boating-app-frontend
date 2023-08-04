import axios from "axios"

async function updateUserSettings(userId, userInfo) {
  const response = await axios.patch(
    `http://localhost:8080/settings/${userId}`,
    userInfo,
  )
  return response.data
}

export default updateUserSettings
