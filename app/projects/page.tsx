import React from 'react'
import SectionHeading from '../components/helper/sectionHeading'
import { projectsData } from '../components/home/data/data'
import Link from 'next/link'
import Image from 'next/image'

const projects = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
      <SectionHeading>My Projects</SectionHeading>
      <div className='w-[60%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 :lg:grid:col-3 gap-12 items-center'>
        {projectsData.map((Project)=>{
            return(
                <div key={Project.id} className='bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300'>
                    <Link href={Project.url} target='_blank'>
                    < Image
                    src={Project.image}
                    alt='project'
                    width={250}
                    height={250}
                    className='w-full'
                    /> </Link>
                </div>
            )
        }
        )}
      </div>
    </div>
  )
}

export default projects
