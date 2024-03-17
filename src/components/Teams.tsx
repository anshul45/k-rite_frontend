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



    return (<div className="border-[1px] px-2 py-2 my-3 rounded-md">
        {team.map((data, index) => (
            <div className="flex justify-between py-0.5" key={index}>{data} <div className='border-[1px] px-1 rounded-md cursor-pointer text-sm bg-gray-50'>
                <i className="ri-apps-line"></i> + {index + 1}
            </div></div>
        ))}


        <hr className="m-2" />

        {isOpenTeam ? <>
            <div className="absolute top-0 left-0 h-screen w-full" onClick={() => setIsOpenTeam(false)}></div>
            <input className="border-[1px] focus:outline-none px-1 rounded-md relative -left-1 z-10" type="text" value={inputTeam} onChange={(e) => setInputTeam(e.target.value)} onKeyPress={handleKeyPress} />
        </>
            : <button className="text-gray-400" onClick={() => setIsOpenTeam(!isOpenTeam)}><i className="ri-add-box-line mr-2"></i>Create a team</button>
        }

    </div >
    )
}

export default Teams;