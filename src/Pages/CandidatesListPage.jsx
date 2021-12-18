import { useParams } from "react-router-dom";

function CandidatesListPage(){

    const { electiontype } = useParams();
    const { state } = useParams();
    const { constituency } = useParams();

    const Candidates = [
        {
            name: "kamboj1",
            photo_url : "http://punjabassembly.nic.in/administrator/components/com_members/memeber/2baa27f59e38ca8e9d784dfd3a05d3dc-Hardyal-Singh-Kamboj.png",
            party_name : "INC",
        },
        {
            name: "kamboj2",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "kamboj3",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        },
        {
            name: "kamboj1",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "INC",
        },
        {
            name: "kamboj2",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "kamboj3",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        },
        {
            name: "kamboj1",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "INC",
        },
        {
            name: "kamboj2",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "kamboj3",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        },
        {
            name: "kamboj1",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "INC",
        },
        {
            name: "kamboj2",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "kamboj3",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        },
        {
            name: "kamboj1",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "INC",
        },
        {
            name: "kamboj2",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "BJP",
        },
        {
            name: "kamboj3",
            photo_url : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            party_name : "AAP",
        }
    ];


    return (
        <>  
        <div className="flex justify-center w-full h-full py-3">
            <div className=" flex flex-col gap-10 pt-5 items-center justify-around "> 
                <h1 className="text-2xl font-bold"> Candidates list for {electiontype},{state},{constituency}</h1>
                <div className="grid grid-cols-4 gap-10">
                    {Candidates.map( (person)=>(
                        <div className="flex-col gap-3 items-center justify-center bg-blue-900 p-4 rounded-xl">
                            <div className="h-36 w-36 ">
                                <img className="h-full w-full rounded-full" src={person.photo_url} alt="Profile pic"/>
                            </div>
                            <h1 className="text-lg text-white font-bold text-center">{person.name}</h1>
                            <h1 className="text-md text-gray-400 text-center">{person.party_name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )

}
export default CandidatesListPage;