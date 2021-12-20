import { useParams } from "react-router-dom";
import HomePage from "./HomePage";

function CandidatesListPage(){

    const { electiontype } = useParams();
    const { state } = useParams();
    const { constituency } = useParams();

    const Candidates = [
        {
            name: "Hardial Singh Kamboj",
            photo_url : "http://punjabassembly.nic.in/administrator/components/com_members/memeber/2baa27f59e38ca8e9d784dfd3a05d3dc-Hardyal-Singh-Kamboj.png",
            party_name : "INC",
        },
        {
            name: "Ashutosh Joshi",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        },
        {
            name: "Harjit Singh Grewal",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "Jagdish Kumar",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "Independent",
        },
        {
            name: "Nirmaljit Singh",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "Independent",
        },
        {
            name: "Ravinder Jain",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BSP",
        },
        {
            name: "Sobha Singh",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "SAD",
        },
        {
            name: "Mahesh Kumar",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "Independent",
        },
        {
            name: "Dalbir Singh",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "Independent",
        },
        {
            name: "Rajinder Kumar",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "APP",
        },
        {
            name: "Sher Singh",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "JJJKP",
        },
    ];


    return (
        <div className="flex flex-col gap-5"> 
        <HomePage />
        <div className="flex justify-center w-full h-full py-3">
            <div className=" flex flex-col gap-10 pt-5 items-center justify-around "> 
                <h1 className="text-2xl font-bold text-center"> Candidates list for {electiontype} , {state} , {constituency}</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {Candidates.map( (person)=>(
                        <div className="flex-col gap-3 items-center justify-center bg-blue-900 p-4 rounded-xl">
                            <div className="flex flex-col items-center justify-center h-36 w-36 ml-4 ">
                                <img className="h-full w-full rounded-full text-center" src={person.photo_url} alt="Profile pic"/>
                            </div>
                            <h1 className="text-lg text-white font-bold text-center">{person.name}</h1>
                            <h1 className="text-md text-gray-400 text-center">{person.party_name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )

}
export default CandidatesListPage;