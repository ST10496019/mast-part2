Christoffel's Menu Manager (TypeScript) - React Native CLI compatible

This bundle contains the TypeScript source and assets for the app.
To run it as a full React Native CLI project, follow these steps:

1) Create a new React Native CLI project (if you haven't yet):
   npx react-native init ChristoffelsMenuManager --template react-native-template-typescript

2) Replace the generated project's App.tsx and src/ and assets/ contents with the files from this bundle.
   - Copy App.tsx to the project root (overwrite)
   - Copy src/ to the project root (overwrite src/)
   - Copy assets/ to the project root (overwrite assets/)
   - Update package.json dependencies in your project by adding:
     @react-navigation/native, @react-navigation/native-stack, @react-native-picker/picker, react-native-safe-area-context, react-native-screens

3) Install dependencies in your project folder:
   npm install
   npx pod-install ios   # if on macOS and targeting iOS

4) Run the app:
   npx react-native run-android
   or
   npx react-native run-ios

Notes:
- This bundle provides source files (TSX) and will integrate into a real RN CLI project created via the TypeScript template.
- If you want, I can instead generate the full native android/ios folders — but that is large. Most devs create a RN CLI project and replace source files as above.
