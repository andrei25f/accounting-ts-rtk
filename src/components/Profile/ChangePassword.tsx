import { useState } from "react";
import { UpdateMode } from "../../utils/types.d";

interface Props {
    setUpdateMode: React.Dispatch<React.SetStateAction<UpdateMode>>
}

const ChangePassword = ({ setUpdateMode }: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setRepeatPassword('');
    }

    const handleClickSave = () => {
        if (newPassword === repeatPassword) {
            alert('Save updated password and close form')
        } else { 
            alert('New password and repeat password are different')
        }
    }

    const handleClickClose = () => {
        alert('Close change password without save')
        setUpdateMode(UpdateMode.DEFAULT);
    }

    return (
        <div>
            <label>Old password:
                <input onChange={e => setOldPassword(e.target.value)} value={oldPassword} type="password" />
            </label>
            <label>New password:
                <input onChange={e => setNewPassword(e.target.value)} value={newPassword} type="password" />
            </label>
            <label>Repeat new password:
                <input onChange={e => setRepeatPassword(e.target.value)} value={repeatPassword} type="password" />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default ChangePassword