import { Text } from '@react-three/drei'

const Text_1a = ({ position }) => {
    return (
        <Text
            color='#4D4F4E'
            fontSize={.035}
            maxWidth={2}
            lineHeight={1}
            textAlign='left'
            font='/fonts/Josefin_Sans/Josefin_Sans.ttf'
            position={position}
        >
            There are many variations of passages.
        </Text>
    )
}

export default Text_1a