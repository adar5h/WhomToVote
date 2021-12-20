import { Link} from "react-router-dom";
import {useState} from 'react';

function HomePage() {

    const [electionType, setElectionType] = useState();
    const [state,setState ] = useState();
    const [constituency, setConstituency ] = useState();

    return(
        <>
            <div className="flex justify-center w-full ">
                <div className=" flex gap-3 w-full items-center p-10 h-full rounded-xl">
                    <div className=" text-md flex gap-4 flex-col md:flex-row lg:gap-7 ">
                        <div className="flex gap-5 items-center ">
                            <label for="election-type" className="font-bold text-lg ">Election Type</label>
                            <select name="election-type" id="election-type" value={electionType} onChange={e => setElectionType(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="assembly-elections">Assembly Elections</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <label for="states" className="font-bold text-lg ">Choose your State</label>
                            <select name="states" id="states" value={state} onChange={e => setState(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="punjab">Punjab</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <label for="constituency" className="font-bold text-lg ">Choose your Constituency</label>
                            <select name="constituency" id="constituency" value={constituency} onChange={e=> setConstituency(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="rajpura">Rajpura</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <Link to = {`/CandidateList/${electionType}/${state}/${constituency}`} >
                            <button className=" py-2 text-white bg-green-600 rounded-full w-56" >Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;