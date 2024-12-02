"use client"

import Image, { StaticImageData } from 'next/image'
import spruce from '@/public/day-1/annie-spratt-zh7GEuORbUw-unsplash.jpg'
import board from '@/public/day-1/brooke-lark-F_IST8bKxhI-unsplash.jpg'
import wreath from '@/public/day-1/erwan-hesry-e9jV1ZyrOmg-unsplash.jpg'
import gaslight from '@/public/day-1/josh-harrison-jY_fTS7ZE98-unsplash.jpg'
import cookies from '@/public/day-1/monika-grabkowska-yuAEcsAe4lk-unsplash.jpg'
import coffee from '@/public/day-1/toa-heftiba-WsDF95mSUsI-unsplash.jpg'
import { useEffect, useState } from 'react'
import PictureCard from './card'

const allPictures = [spruce, board, wreath, gaslight, cookies, coffee]
const fivePictures = [spruce, board, wreath, gaslight, cookies ]
const fourPictures = [spruce, board, wreath, gaslight ]
const threePictures = [spruce, board, wreath ]
const twoPictures = [spruce, board]
const onePicture = [spruce]
const plusNumber = [{
	src: '',
    height: 50,
    width: 50,
}]


const DayOnePage = () => {

	const [extraNumber, setExtraNumber] = useState(0)
	const [pictures, setPictures] = useState<StaticImageData[]>([])

	useEffect(() =>{
		const pictureArrayTotaling = (pictureArray: StaticImageData[] ) => {
			if(pictureArray.length > 5){
				setExtraNumber(pictureArray.length - 5)
				return [...fivePictures, ...plusNumber]
			}
		}
		
		const newPictureArray = pictureArrayTotaling(allPictures)
		if(!newPictureArray) return

		setPictures(newPictureArray)
		
	}, [])
	
	return (
		<div className='grid grid-cols-3 grid-rows-2 gap-10 mx-20' >
			<PictureCard pictures={pictures} />
			<PictureCard pictures={fivePictures} />
			<PictureCard pictures={fourPictures} />
			<PictureCard pictures={threePictures} />
			<PictureCard pictures={twoPictures} />
			<PictureCard pictures={onePicture} />
		</div>
	)
}

export default DayOnePage