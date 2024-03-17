import { useState } from "react"

const Teams = () => {
    const [team, setTeam] = useState(["hii", "hello", "hey"]);
    const [isOpenTeam, setIsOpenTeam] = useState(false);
    const [inputTeam, setInputTeam] = useState("");

    const handleKeyPress = (e: any) => {
        if (e.key === "Enter") {
            createTeam();
        }
    };

    const createTeam = () => {
        if (inputTeam.trim() !== "") {
            setTeam([...team, inputTeam]);
            setInputTeam("");
            setIsOpenTeam(false);
        }
    };



    return (<div className="border-2 px-2 py-2 my-3 rounded-md">
        {team.map((data, index) => (
            <div key={index}>{data}</div>
        ))}


        {isOpenTeam ? <>
            <div className="absolute top-0 left-0 h-screen w-full" onClick={() => setIsOpenTeam(false)}></div>
            <input className="border-2 focus:outline-none px-1 rounded-md relative z-10" type="text" value={inputTeam} onChange={(e) => setInputTeam(e.target.value)} onKeyPress={handleKeyPress} />
        </>
            : <button className="text-gray-400" onClick={() => setIsOpenTeam(!isOpenTeam)}><i className="ri-add-box-line mr-2"></i>Create a team</button>
        }

    </div >
    )
}

export default Teams;