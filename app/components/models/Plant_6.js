import { useGLTF } from '@react-three/drei'

const Plant_6 = ({ scale }) => {
    const plant_6 = useGLTF('/models/plant_6.glb')

    return (
        <primitive
            object={plant_6.scene}
            position={plant_6.position}
            rotation={plant_6.rotation}
            scale={scale}
        />
    )
}

export default Plant_6