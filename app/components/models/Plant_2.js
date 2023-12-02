import { useGLTF } from '@react-three/drei'

const Plant_2 = ({ position, scale }) => {
    const plant_2 = useGLTF('/models/plant_2.glb')

    return (
        <primitive
            object={plant_2.scene}
            position={position}
            scale={scale}
        />
    )
}

export default Plant_2