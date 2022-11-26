import * as React from "react";
import {
  Animated,
  View,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
} from "react-native";

export const Carousel = () => {
  const { width } = useWindowDimensions();

  const images = React.useMemo(
    () => [
      "https://media.discordapp.net/attachments/1008797656270782546/1044784443308642395/tamagotchi.png",
      "https://media.discordapp.net/attachments/1008797656270782546/1044785976821678121/gradiente.png",
      "https://media.discordapp.net/attachments/1008797656270782546/1044786433786908712/carmen.png",
      "https://media.discordapp.net/attachments/1008797656270782546/1044786434114068570/sonic.png",
      "https://media.discordapp.net/attachments/1008797656270782546/1044786434499952691/bombons.png",
      "https://media.discordapp.net/attachments/1008797656270782546/1044786434885816371/chocolate.png",
    ],
    []
  );

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <>
      <StatusBar style="auto" />

      <View style={styles.container}>
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const opacity = scrollX.interpolate({
              inputRange: [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ],
              outputRange: [0, 1, 0],
            });

            return (
              <>
                <View style={StyleSheet.absoluteFillObject}>
                  <Animated.Image
                    blurRadius={20}
                    source={{ uri: item }}
                    style={[StyleSheet.absoluteFillObject, { opacity }]}
                  />
                </View>
                <View
                  style={{
                    // width,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Animated.Image
                    style={{
                      width: "300px",
                      height: "163px",
                      resizeMode: "cover",
                      borderRadius: 16,
                      // opacity,
                    }}
                    source={{ uri: item }}
                  />
                </View>
              </>
            );
          }}
          keyExtractor={(url) => url}
          data={images}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "92%",
    height: 163.62,
    // marginTop: "1px",
  },
});
