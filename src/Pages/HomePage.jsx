import { Link} from "react-router-dom";
import {useState} from 'react';

function HomePage() {

    const [electionType, setElectionType] = useState();
    const [state,setState ] = useState();
    const [constituency, setConstituency ] = useState();

    return(
        <>
            <div className="flex justify-center w-full h-screen py-3 bg-gradient-to-r from-violet-600 to-purple-500">
                <div className=" flex gap-3 items-center justify-around w-2/3 px-10 h-full bg-white rounded-xl">
                    <div className=" text-xl flex flex-col gap-4 w-2/3 ">
                        <div className="flex gap-5 items-center ">
                            <label for="election-type" className="font-bold text-2xl ">Election Type</label>
                            <select name="election-type" id="election-type" value={electionType} onChange={e => setElectionType(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="assembly-elections">Assembly Elections</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <label for="states" className="font-bold text-2xl ">Choose your State</label>
                            <select name="states" id="states" value={state} onChange={e => setState(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="punjab">Punjab</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <label for="constituency" className="font-bold text-2xl ">Choose your Constituency</label>
                            <select name="constituency" id="constituency" value={constituency} onChange={e=> setConstituency(e.target.value)}>
                                <option value="none" selected={true} disabled="disabled">Choose</option>
                                <option value="rajpura">Rajpura</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <Link to = {`/CandidateList/${electionType}/${state}/${constituency}`} >
                            <button className=" mt-4 py-2 text-white bg-green-600 rounded-full w-56" >Submit</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;