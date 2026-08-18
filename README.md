# SocialChain 🚀

Full-Stack MERN (MongoDB, Express, React, Node.js) Social Media Application with **Capacitor** cross-platform native runtime for **iOS** and **Android**.

---

## 📋 Prerequisites

Before running the application, make sure you have the following installed:
* **Node.js** (v18+ recommended) & **Yarn** / **npm**
* **MongoDB** (Atlas connection string or local instance)
* **Xcode & CocoaPods** (for iOS simulator / device builds on macOS)
* **Android Studio & SDK** (for Android emulator / device builds)

---

## ⚙️ Initial Setup & Installation

### 1. Backend Server Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Create a `.env` file in `server/` with the following configuration:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=3001
   ```

### 2. Frontend Client Setup
1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```

---

## 💻 Running the Web Application (Development)

Open two terminal windows:

### Terminal 1: Backend Server
```bash
cd server
yarn start
```
*Server will be live on: `http://localhost:3001`*

### Terminal 2: Web Client
```bash
cd client
yarn start
```
*Client will be live on: `http://localhost:3000`*

---

## 📱 Building & Running on Native Mobile (Capacitor)

All mobile and Capacitor commands should be run inside the `client` folder:

```bash
cd client
```

### 1. Initialize Native Platforms (First time or after fresh clone)
Generate the native Android and iOS projects on demand:
```bash
yarn cap:add
```

### 2. Build & Sync Web Assets
Builds the optimized React bundle and synchronizes it with the native Android and iOS projects:
```bash
yarn cap:build
```

### 3. Run Directly in Simulators / Emulators (CLI)

* **iOS Simulator:**
  ```bash
  yarn cap:run:ios
  ```
  *(Select your desired iOS simulator from the interactive terminal list, or run `npx cap run ios --target <TARGET_ID>`)*

* **Android Emulator:**
  ```bash
  yarn cap:run:android
  ```

### 4. Open in Native IDEs (Xcode / Android Studio)

* **Open Xcode (iOS):**
  ```bash
  yarn cap:open:ios
  ```
  *In Xcode, pick your simulator or physical device from the top toolbar and press `Cmd + R`.*

* **Open Android Studio (Android):**
  ```bash
  yarn cap:open:android
  ```
  *In Android Studio, select your emulator and click the green `Run ▶️` button.*

---

## 🛠️ Handy Capacitor Client Scripts

| Command | Description |
| :--- | :--- |
| `yarn cap:add` | Generates both `android` and `ios` native project directories |
| `yarn cap:build` | Compiles React app (`react-scripts build`) & syncs native assets (`cap sync`) |
| `yarn cap:sync` | Syncs web build and plugins to iOS & Android |
| `yarn cap:run:ios` | Builds and launches native app on iOS Simulator |
| `yarn cap:run:android` | Builds and launches native app on Android Emulator |
| `yarn cap:open:ios` | Opens the iOS project in Xcode |
| `yarn cap:open:android` | Opens the Android project in Android Studio |