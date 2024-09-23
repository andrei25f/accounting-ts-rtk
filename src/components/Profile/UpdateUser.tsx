import { useState } from "react"
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { UpdateMode } from "../../utils/types.d";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);
    switch (updateMode) {
        case UpdateMode.EDITPROFILE:
            return <EditProfile setUpdateMode={setUpdateMode} />
        case UpdateMode.CHANGEPASSWORD:
            return <ChangePassword setUpdateMode={setUpdateMode} />
        default:
            return (
                <div>
                    <button onClick={() => setUpdateMode(UpdateMode.CHANGEPASSWORD)}>Change password</button>
                    <button onClick={() => setUpdateMode(UpdateMode.EDITPROFILE)}>Edit profile</button>
                </div>
            )
    }
}

export default UpdateUser