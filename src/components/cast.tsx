import Image from "next/image"

interface CastProps {
    name: string
    image: string
    id: number
}

export default function Cast({name, image, id}: CastProps) {
    let castURL = 'https://www.themoviedb.org/person/' + id.toString()
    return (
        <div className="hover:scale-95 transition-all text-xs flex flex-col m-1 border border-white border-opacity-25 rounded-md justify-between whitespace-normal w-24 bg-primary">
            <a href={castURL} target="_blank" className="flex flex-col overflow-auto">
                <div className="w-20 h-24 relative overflow-clip rounded-t-md">
                    <img
                        alt='no image'
                        src={image}
                    />
                </div>
                <p className="w-20 p-1 text-center">{name}</p>
            </a>
        </div>
    )
}