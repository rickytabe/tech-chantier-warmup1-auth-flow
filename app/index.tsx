
import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "./components/CustomButton";
import colors from "./constants/colors";

const { width } = Dimensions.get("window");

// Onboarding slides
const slides = [
  {
    id: "1",
    title: "Team work all",
    subtitle:
      "Collaborate with your team, manage projects, and achieve goals together all in one place.",
    image: require("../assets/my-assets/colab.png"),
  },
  {
    id: "2",
    title: "Fast Collaboration",
    subtitle: "Work seamlessly with your colleagues from anywhere.",
    image: require("../assets/my-assets/colab.png"), // replace with your image
  },
  {
    id: "3",
    title: "Achieve Goals",
    subtitle: "Stay productive and organized with the right tools.",
    image: require("../assets/my-assets/colab.png"), // replace with your image
  },
];

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(slideIndex);
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({ index: slides.length - 1 });
    setCurrentIndex(slides.length - 1);
  };

  return (
    <View style={styles.container}>
      {/* Onboarding slides */}
      <FlatList
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
      />

      {/* Bottom section (dots + buttons) */}
      <View style={styles.bottomContainer}>
        
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { opacity: currentIndex === index ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Sign in"
            onPress={() => router.push("/auth/sign-in")}
            backgroundColor={colors.secondary}
            width='47%'
          />
          <CustomButton
            title="Register"
            onPress={() => router.push("/auth/register")}
             width='47%'
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    marginTop: 60,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom:5,
  },
  title: { fontSize: 34, fontWeight: "700", textAlign: "center", marginBottom: 10 },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 60,
  },
});
