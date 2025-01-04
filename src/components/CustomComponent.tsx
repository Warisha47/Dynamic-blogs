import {PortableTextComponents} from '@portabletext/react'

export const components:PortableTextComponents={
    block:{
        h2:({children})=><h2 className='text-3xl text-cyan-800 font-bold py-5'>{children}</h2>,
        h3:({children})=><h3 className='text-2xl py-5 text-cyan-800 font-bold'>{children}</h3>

    }
}