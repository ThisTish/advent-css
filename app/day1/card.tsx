import { StaticImageData } from "next/image"
import Image from "next/image"

const PictureCard = ({ pictures }: { pictures: StaticImageData[] }) => {
	return (
		<div className="bg-white rounded-md columns-[200px] gap-0 w-fit h-fit">
			{pictures.map((picture) => (
				<Image
					key={picture.src}
					src={picture.src}
					alt={picture.src}
					width={picture.width}
					height={picture.height}
					className='p-3 hover:border'
				/>
				
			))}
		</div>
	)
}

export default PictureCard