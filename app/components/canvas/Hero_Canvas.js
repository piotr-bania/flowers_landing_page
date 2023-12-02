'use client'

import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Experience from './Experience'
import { useScroll } from 'framer-motion'
import { motion as m } from 'framer-motion-3d'

const Hero_Canvas = ({ scrollRef }) => {
    const scene = useRef()
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start end', 'end start'],
    })

    return (
        <Canvas ref={scene} >
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 7]}
            />
            <Environment files='./environment/studio_garden_1k.hdr' />

            <Experience />
            {/* <OrbitControls /> */}
        </Canvas>
    )
}

export default Hero_Canvas