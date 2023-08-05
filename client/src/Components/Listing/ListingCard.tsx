import React from 'react'

interface ListingCardProps {
    image: string,
    title: string,
}

const ListingCard: React.FC<ListingCardProps> = ({image, title}) => {
  return (
    <figure className=''>
        <img className='w-full rounded-[10px] object-cover' src={image} alt="" />
        <figcaption className='py-[20px]'>
            <p className='text-[14px] font-bold'>{title}</p>
        </figcaption>
    </figure>
  )
}

export default ListingCard