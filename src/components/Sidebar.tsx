import Folders from "./Folders";
import Logo from "./Logo";
import Teams from "./Teams";

const Sidebar = () => {
    return (<div className="w-64 h-screen border-2 rounded-md px-2 py-2 flex flex-col justify-between overflow-y-scroll no-scrollbar">
        <div>

            <Logo />
            <Teams />
            <Folders />
        </div>
        <div className="flex flex-col gap-3">
            <div><i className="ri-user-add-line"></i> Invite teammates</div>
            <div><i className="ri-question-line"></i> Help and first steps</div>
            <div className="border-2 bg-gray-100 px-3  flex items-center justify-between rounded-md">
                <div className="text-xs bg-white px-1 rounded-md">7</div>
                <div>days left on trial</div>
                <div className="bg-black text-white text-xs rounded-md px-1 py-0.5 my-0.5">Add biling</div>
            </div>
        </div>
    </div>);
}
export default Sidebar;