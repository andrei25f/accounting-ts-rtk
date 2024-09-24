import { useState } from "react"
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import { UpdateMode } from "../../utils/types.d";

const UpdateUser = () => {
    const [updateMode, setUpdateMode] = useState(UpdateMode.DEFAULT);

    const close = () => {
        setUpdateMode(UpdateMode.DEFAULT);
    }

    switch (updateMode) {
        case UpdateMode.EDITPROFILE:
            return <EditProfile close={close} />
        case UpdateMode.CHANGEPASSWORD:
            return <ChangePassword close={close} />
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