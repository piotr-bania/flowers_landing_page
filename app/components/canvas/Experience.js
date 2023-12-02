import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { motion as m } from 'framer-motion-3d'
import Plant_4 from '../models/Plant_4'
import Plant_1 from '../models/Plant_1'

const Experience = () => {
    const scene = useRef()

    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start'],
    })

    return (
        <group scale={1}>
            <m.group position-y={scrollYProgress} >
                <m.mesh
                    position={[-.5, 1.5, 0]}
                    rotation={[0.35, scrollYProgress, 0]}
                >
                    <Plant_1 />
                </m.mesh>

                <m.mesh
                    position={[.6, .75, 2]}
                    rotation={[0.35, scrollYProgress, 0]}
                >
                    <Plant_4 />
                </m.mesh>
            </m.group>
        </group>
    )
}

export default Experience