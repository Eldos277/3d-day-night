import React, {useState} from 'react';
import SideBar from "../../components/SideBar/SideBar";
import ProfileHoc from "../../hoc/ProfileHoc";

const Profile = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <SideBar setActiveTab={setActiveTab}/>
            <ProfileHoc activeTab={activeTab}/>
        </div>
    );
};

export default Profile;