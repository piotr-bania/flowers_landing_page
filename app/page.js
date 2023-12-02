'use client'

import { useRef } from 'react'
import Hero_Canvas from './components/canvas/Hero_Canvas'
import Section_1 from './sections/Section_1'
import Section_2 from './sections/Section_2'
import Section_3 from './sections/Section_3'

export default function Home() {
    const scrollRef = useRef()

    return (
        <main ref={scrollRef}>
            <div className='hero_canvas'>
                <Hero_Canvas scrollRef={scrollRef} />
            </div>

            <Section_1 />
            <Section_2 />
            <Section_3 />
        </main>
    )
}
