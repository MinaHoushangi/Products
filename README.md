# Products Application

A simple React Native application that displays a list of products fetched from any
API.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Known Issues and Proposed Fixes](#Known-Issues-and-Proposed-Fixes)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (LTS recommended, current version used: 20.11.1)
- **Yarn** package manager
- **JDK** (Java Development Kit, version 17.0.0; higher versions may cause issues)
- **React Native CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/
cd Products
```

2. Install dependencies

```bash
yarn install
```

## Running the Application

To start the application, follow these steps:

### Step1: Start Metro

Metro is the JavaScript bundler for React Native. Run the following command from the root of the project:

```bash
yarn start
```

### Step2: Start the App

Run the following command to start the app on your desired platform.

#### For Android

Ensure you have an Android emulator running or an Android device connected.

```bash
yarn android
```

#### For iOS

Ensure you have an iOS simulator running or an iOS device connected.

```bash
yarn ios
```

If everything is set up correctly, you should see the app running on your Android Emulator or iOS Simulator shortly.

## Troubleshooting

If you encounter any issues, refer to the following:

- Ensure all prerequisites are installed and properly configured.
- Check for any error messages in the terminal and follow the suggested fixes.
- Consult the [React Native](https://reactnative.dev/docs/environment-setup) documentation for detailed setup instructions and troubleshooting tips.

- If you encounter _java.io.UncheckedIOException: Could not move temporary workspace_ error in the first execution, follow these steps:

```bash
npx react-native doctor
yarn start --reset-cache
```

## Known Issues and Proposed Fixes

### Issue: State Management Bug

**Description:**
There is a bug in the application caused by the inclusion of `allProducts` in the dependency array of the `useEffect` that filters products based on the search text. This leads to unnecessary re-renders and incorrect state updates.

**Impact:**
This bug can cause performance issues and incorrect filtering behavior when searching for products.

**Proposed Fix:**
1. **Remove `allProducts` from the dependency array:**
   ```bash
   useEffect(() => {
     const searchString = getSeatchText(searchText);

     if (searchString.length === 0) {
       setProducts(allProducts);
       setHasMoreData(true);
       return;
     }

     const searchedProducts = allProducts.filter(p =>
       getSeatchText(p.name).includes(searchString),
     );

     setHasMoreData(false);
     setProducts(searchedProducts);
   }, [searchText]);
   ```


