import { useEffect, useState } from "react"
import getUserInformation from "../../API/userSettings"
import PasswordUpdater from "../../components/passwordUpdater"
import SettingsForm from "../../components/settingsForm"

function Settings() {
  const [userInfo, setUserInfo] = useState(null)

  const fetchInfo = async () => {
    const fetchedInfo = await getUserInformation()
    setUserInfo(fetchedInfo)
  }

  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <main className="w-screen min-h-screen bg-bone flex justify-center pt-10">
      <div className="w-11/12">
        {userInfo && <SettingsForm userInfo={userInfo}></SettingsForm>}
        {userInfo && (
          <div className="mt-10">
            <PasswordUpdater userInfo={userInfo}></PasswordUpdater>
          </div>
        )}
      </div>
    </main>
  )
}
export default Settings
