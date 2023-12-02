import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Plant_1 = ({ scale }) => {
    const plant_1 = useGLTF('/models/plant_1.glb')
    const plant_1_ref = useRef()

    useFrame(() => {
        plant_1_ref.current.rotation.y += 0.001
    })

    return (
        <primitive
            ref={plant_1_ref}
            object={plant_1.scene}
            position={plant_1.position}
            rotation={plant_1.rotation}
            scale={scale}
        />
    )
}

export default Plant_1