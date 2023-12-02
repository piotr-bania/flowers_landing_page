import { useGLTF } from '@react-three/drei'

const Plant_5 = ({ scale }) => {
    const plant_5 = useGLTF('/models/plant_5.glb')

    return (
        <primitive
            object={plant_5.scene}
            position={plant_5.position}
            rotation={plant_5.rotation}
            scale={scale}
        />
    )
}

export default Plant_5