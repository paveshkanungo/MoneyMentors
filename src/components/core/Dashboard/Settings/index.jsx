import ChangeProfilePicture from "./ChangeProfilePicture";
import DeleteAccount from "./DeleteAccount";
import EditProfile from "./EditProfile";
import UpdatePassword from "./UpdatePassword";

const Settings = () => {
    return (
        <>
            <h1 className="mb-14 text-3xl font-medium text-richblack-25">
                Edit Profile
            </h1>

            {/* Change Profile Picture */}
            <ChangeProfilePicture />

            {/* Profile */}
            <EditProfile />
            
            {/* UpdatePassword */}
            <UpdatePassword />

            {/* Delete Account */}
            <DeleteAccount />

        </>
    )
}

export default Settings;