import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { Text, View } from "react-native";

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./src/assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <View
      className="flex-1 items-center justify-center bg-slate-600"
      onLayout={onLayoutRootView}
    >
      <Text className="font-text">
        Open up App.tsx to start working on dsadsy onbghjvghfghfhur app!
      </Text>
      <StatusBar translucent />
    </View>
  );
}
