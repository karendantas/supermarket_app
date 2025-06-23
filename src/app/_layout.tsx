import { Slot } from "expo-router";

import {
  Sen_400Regular,
  Sen_500Medium,
  Sen_700Bold,
  useFonts,
} from "@expo-google-fonts/sen";
import { ActivityIndicator, SafeAreaView } from "react-native";
export default function RootLayout() {
  const [isLoading] = useFonts({
    Sen_400Regular,
    Sen_500Medium,
    Sen_700Bold,
    useFonts,
  });

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return <Slot />;
}
