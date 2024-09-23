import { useState } from "react";
import { UpdateMode } from "../../utils/types.d";

interface Props {
    setUpdateMode: React.Dispatch<React.SetStateAction<UpdateMode>>
}

const EditProfile = ({ setUpdateMode }: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        alert('Save updated profile and close form')
    }

    const handleClickClose = () => {
        alert('Close edit profile without save')
        setUpdateMode(UpdateMode.DEFAULT);
    }

    return (
        <div>
            <label>First name:
                <input onChange={e => setFirstName(e.target.value)} value={firstName} type="text" />
            </label>
            <label>Last name:
                <input onChange={e => setLastName(e.target.value)} value={lastName} type="text" />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </div>
    )
}

export default EditProfile