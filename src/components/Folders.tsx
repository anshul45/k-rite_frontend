import { useState } from "react";

const Folders = () => {
    const [folderData, setFolderData] = useState([
        { name: "Folder1", children: ["Folder1Child", "Folder1Child2", "Folder1Child3"] },
        { name: "Folder2", children: ["Folder2Child", "Folder2Child2", "Folder2Child3"] },
        { name: "Folder3", children: ["Folder3Child", "Folder3Child2", "Folder3Child3"] }
    ]);

    const [openAddFolder, setOpenAddFolder] = useState(false);
    const [openAddnewsub, setOpenAddnewsub] = useState(false);
    const [openFolder, setOpenFolder] = useState("");

    const [folderNameInput, setFolderNameInput] = useState("");
    const [subNameInput, setSubNameInput] = useState("");

    const setIsOpenFolder = (folderName: string) => {
        setOpenFolder(folderName === openFolder ? "" : folderName);
    };

    const addFolder = (folderName: string) => {
        setFolderData([...folderData, { name: folderName, children: [] }]);
        setFolderNameInput("");
        setOpenAddFolder(false);
    };

    const handleFolderInputKeyPress = (e: any) => {
        if (e.key === "Enter") {
            addFolder(folderNameInput);
        }
    };

    const handleSubInputKeyPress = (e: any, folderName: string) => {
        if (e.key === "Enter") {
            addSub(subNameInput, folderName);
        }
    };

    const addSub = (subname: string, folderName: string) => {
        const updatedFolderData = folderData.map((folder) => {
            if (folder.name === folderName) {
                return {
                    ...folder,
                    children: [...folder.children, subname]
                };
            }
            return folder;
        });
        setFolderData(updatedFolderData);
        setSubNameInput("");
    };


    return (
        <div>
            <div className="flex justify-between">
                <div>FOLDERS</div>
                {openAddFolder ? (
                    "") : (
                    <i className="ri-add-large-fill cursor-pointer" onClick={() => setOpenAddFolder(!openAddFolder)}></i>
                )}
            </div>
            {openAddFolder && (
                <>
                    <div className="absolute top-0 left-0 h-screen w-full" onClick={() => setOpenAddFolder(false)}></div>
                    <input className="border-2 focus:outline-none px-1 rounded-md relative z-10" type="text" value={folderNameInput} onChange={(e) => setFolderNameInput(e.target.value)} onKeyPress={handleFolderInputKeyPress} />
                </>
            )}
            {folderData.map((data, index) => (
                <div key={index} onClick={() => setIsOpenFolder(data.name)}>
                    <div className="flex justify-between cursor-pointer">
                        <div>
                            <i className="ri-folder-line"></i> {data.name}
                        </div>
                        {data.name === openFolder ? <i className="ri-arrow-up-s-fill"></i> : <i className="ri-arrow-down-s-fill"></i>}
                    </div>
                    {data.name === openFolder && (
                        <div onClick={(e) => e.stopPropagation()}>
                            <div className="flex flex-col px-3">
                                {data.children.map((child, childIndex) => (
                                    <div key={childIndex}>{child}</div>
                                ))}
                            </div>
                            {openAddnewsub ? (
                                <>
                                    <div className="absolute top-0 left-0 h-screen w-full" onClick={() => { setOpenAddnewsub(false); setSubNameInput(""); }}></div>
                                    <input className="relative z-10 border-2 rounded-md focus:outline-none px-1" type="text" value={subNameInput} onChange={(e) => setSubNameInput(e.target.value)} onKeyPress={(e) => handleSubInputKeyPress(e, data.name)} />
                                </>
                            ) : (
                                <button className="text-gray-400" onClick={() => setOpenAddnewsub(true)}><i className="ri-add-box-line mr-2"></i>Add new sub</button>
                            )}
                        </div>
                    )}
                </div>
            ))
            }
        </div >
    );
};

export default Folders;
