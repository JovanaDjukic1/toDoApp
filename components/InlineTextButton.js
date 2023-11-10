import { Text, Pressable,StyleSheet } from 'react-native';

export default function InlineTextButton(props) {
  let style = {};
  if (props.color) {
    style.color = props.color
  };
  return (
    <Pressable onPress={props.onPress}>
      {({ pressed }) => (
        <Text 
          style={[pressed ? styles.pressedInlineTextButton : styles.inlineTextButton, style]}>
            {props.text}
        </Text>
      )}
    </Pressable>
  )
}
const styles=StyleSheet.create({
  pressedInlineTextButton: {
    color: "#87F1FF",
    opacity: 0.6
  },
  inlineTextButton: {
    color: "#87F1FF"
  },
})