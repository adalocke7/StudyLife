import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

//Sets up the root layout for the app
export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
    <StatusBar style='light' />
    </>
  );
}

