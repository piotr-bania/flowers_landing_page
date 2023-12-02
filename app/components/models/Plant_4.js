import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

const Plant_4 = ({ scale }) => {
    const plant_4 = useGLTF('/models/plant_4.glb')
    const plant_4_ref = useRef()

    useFrame(() => {
        plant_4_ref.current.rotation.y -= 0.001
    })

    return (
        <primitive
            ref={plant_4_ref}
            object={plant_4.scene}
            position={plant_4.position}
            rotation={plant_4.rotation}
            scale={scale}
        />
    )
}

export default Plant_4