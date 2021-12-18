function CandidateInfoPage(){
    return(
        <div className="flex flex-col gap-10 h-full w-full p-16">
            <div className="flex gap-3">
                <div className="h-36 w-36">
                    <img className="h-full w-full" src="http://punjabassembly.nic.in/administrator/components/com_members/memeber/2baa27f59e38ca8e9d784dfd3a05d3dc-Hardyal-Singh-Kamboj.png" alt="Candidate" />
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Hardial Singh Kamboj</h1>
                    <h1>(Indian National Congress)</h1>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold py-4">Contact Information</h1>
                <h1><strong>Permanent Address :</strong> #62, Rose Avenue, Patiala</h1>
                <h1><strong>Mobile Number:</strong> 98725-12000</h1>
                <h1><strong>Email:</strong> hardyalsingh.pvs@punjab.gov.in</h1>
            </div>
        </div>
    );
}
export default CandidateInfoPage;