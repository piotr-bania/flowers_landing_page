import { useGLTF } from '@react-three/drei'

const Plant_3 = ({ scale }) => {
    const plant_3 = useGLTF('/models/plant_3.glb')

    return (
        <primitive
            object={plant_3.scene}
            position={plant_3.position}
            rotation={plant_3.rotation}
            scale={scale}
        />
    )
}

export default Plant_3