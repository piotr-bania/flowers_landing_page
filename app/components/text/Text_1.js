import { Text } from '@react-three/drei'

const Text_1 = ({ position }) => {
    return (
        <Text
            color='#000000'
            fontSize={.2}
            maxWidth={2}
            lineHeight={1}
            textAlign='left'
            font='/fonts/Josefin_Sans/Josefin_Sans_Bold.ttf'
            position={position}
        >
            PLANTS
        </Text>
    )
}

export default Text_1