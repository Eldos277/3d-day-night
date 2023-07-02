import ArchitecturalVisualization from "../components/ArchitecturalVisualization/ArchitecturalVisualization";
import CharacterModeling from "../components/CharacterModeling/CharacterModeling";


const Scheduler = ({activeTab}) => {

    if (activeTab){
        return (
            <ArchitecturalVisualization/>
        )
    }

    return (
        <CharacterModeling/>
    )
}

export default Scheduler