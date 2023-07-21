export default function AI() {
    return (
        <div className="w-[44vw] max-w-[44vw] m-3 ml-0 border bg-primary border-white border-opacity-25 rounded-md">
            <div className=" bg-gradient-to-r from-secondary to-tertiary flex flex-row  justify-between rounded-t-md">
                <h1 className="text-black text-center text-xl flex mt-auto mb-auto ml-4">AI</h1>
                <div className="text-black flex flex-row">
                    <button className="aibutton p-3 border-l border-black border-opacity-25 h-full w-[6rem]">Context</button>
                    <button className="aibutton p-2 border-l border-black border-opacity-25 h-full w-[6rem]">Reception</button>
                    <button className="aibutton p-2 border-l border-black border-opacity-25 h-full w-[6rem]">Insights</button>
                </div>
            </div>
            <p></p>
        </div>
    )
}