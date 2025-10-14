## Christoffel’s Menu Manager

Christoffel’s Menu Manager is a mobile application built with React Native (Expo) and TypeScript that helps restaurant owners and staff efficiently manage menu items. It provides an intuitive interface for creating, editing, viewing, and organizing dishes into categories.

## Overview

This app is designed to make restaurant menu management easier and faster. Users can:

Add new dishes with names, prices, and descriptions.

Upload or select images for each dish.

Edit or remove existing items.

Organize dishes by category.

Store data locally for offline access.

## Key Features

 Menu Management: Add, edit, and delete dishes easily.

 Image Uploads: Attach images from device gallery or camera.

 Search and Filter: Quickly find menu items.

 Categorization: Group items by menu sections.

 Local Storage: Save data with AsyncStorage or local state.

 Settings & Context: Manage user preferences and maintain consistent app state.

 ## Project Structure
ChristoffelsMenuManager_TS/
├── App.tsx                 # Main application entry
├── assets/                 # Images and media files
├── src/
│   ├── contexts/           # App-wide state and context management
│   ├── screens/            # App screens (UI for each feature)
│   └── components/         # Reusable visual components
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation

## Tech Stack
Technology	Purpose
React Native (Expo)	Mobile app framework
TypeScript	Type-safe development
React Navigation	Screen navigation
Context API	Global state management
AsyncStorage	Local data storage
Expo Image Picker	Image upload functionality
## Getting Started
1️⃣ Clone the Repository

2️⃣ Install Dependencies
npm install

3️⃣ Start the Expo Development Server
npx expo start

4️⃣ Run the App

📱 Scan the QR code with the Expo Go app, or

💻 Run on emulator:

npm run android


or

npm run ios

## Screens Overview
Screen	Description
Home Screen	Displays all current menu items with images, names, and prices.
Add Item Screen	Allows users to add a new menu item with details and an image.
Edit Item Screen	Used to update or delete existing menu entries.
Category Screen	Filters and displays items by category.
Settings Screen	Allows customization of app preferences and general settings.
## Youtube
https://youtu.be/PgxpBqD6S00?si=_9Jm3EwgmYwZsipy


## References

React Native Documentation — https://reactnative.dev/

Expo Documentation — https://docs.expo.dev/

TypeScript Handbook — https://www.typescriptlang.org/docs/

React Navigation — https://reactnavigation.org/

AsyncStorage — https://react-native-async-storage.github.io/async-storage/
