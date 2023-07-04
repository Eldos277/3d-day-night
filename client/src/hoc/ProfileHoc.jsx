import React from 'react';
import ArchitecturalVisualization from "../components/ArchitecturalVisualization/ArchitecturalVisualization";
import CharacterModeling from "../components/CharacterModeling/CharacterModeling";

const ProfileHoc = ({activeTab}) => {
    if (activeTab == 0) {
        return (
            <div>Основное</div>
        )
    }
    if (activeTab == 1) {
        return (
            <div>Уведомления</div>
        )
    }
    return (
        <div>Команда</div>
    )
};

export default ProfileHoc;