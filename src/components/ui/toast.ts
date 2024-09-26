import { Platform, ToastAndroid } from "react-native";

export default function showToast(text: string) {
  if (Platform.OS == "android") ToastAndroid.show(text, ToastAndroid.SHORT);
}
