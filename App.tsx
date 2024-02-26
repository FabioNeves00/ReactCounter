import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  const [imageClick, setImageClicks] = useState(0);
  const [image, setImage] = useState(
    "https://reactnative.dev/docs/assets/p_cat2.png",
  );
  const [bgColor, setBgColor] = useState("white");

  const handleImageClick = () => {
    setImageClicks((prev) => prev + 1);
    if (imageClick === 2) {
      setImage("https://avatars.githubusercontent.com/u/71830780?v=4");
    }
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const handleBgColor = () => {
    setBgColor("blue");
  };

  return (
    <TouchableWithoutFeedback onPress={handleBgColor}>
      <View
        style={{
          backgroundColor: bgColor,
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text onPress={handleDecrement} style={styles.text}>
          {count}
        </Text>
        <Button title="somar" onPress={handleIncrement} />
        <TouchableWithoutFeedback onPress={handleImageClick}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    padding: 5,
  },
});
