

const Logo = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <img className="rounded-xl bg-black w-8 h-8" />
                <div className="leading-4">
                    <h1 className="font-extralight text-xs">INC</h1>
                    <h1 className="font-semibold">InnovationHub</h1>
                </div>
            </div>
            <img className="rounded-full bg-black w-6 h-6" />
        </div>
    )
}

export default Logo