# Golf Scoring App - Frontend Setup

## Project Structure

```
app/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── hooks/            # Custom hooks for API calls
│   │   └── useAuth.ts
│   ├── services/         # REST API services
│   │   └── authService.ts
│   ├── screens/          # Screens (pages)
│   │   ├── LoginScreen.tsx
│   │   ├── QRScannerScreen.tsx
│   │   └── HomeScreen.tsx
│   ├── navigation/       # React Navigation stacks
│   │   └── AuthNavigator.tsx
│   ├── contexts/         # Global auth or app state
│   │   └── AuthContext.tsx
│   └── utils/            # Validators, helpers
│       └── validators.ts
├── assets/               # Images and assets
│   └── logo.png          # Your golf logo
└── App.tsx               # Root component
```

## Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Run on device/emulator**
   - For Android: `npm run android`
   - For iOS: `npm run ios`
   - Scan QR code with Expo Go app

## Features

### ✅ Login Screen
- Beautiful UI matching the design with golf illustration
- Email and password validation
- "Forgot Password" link
- QR Code scanner button
- Uses logo from `assets/logo.png`

### ✅ QR Scanner
- Functional camera-based QR code scanning
- Live camera preview
- Visual scan area with corner indicators
- Permission handling
- Scan result display

### ✅ Components
- **Button**: Primary, secondary, and outline variants with loading states
- **Input**: Text input with icons, validation, and error messages
- **Card**: Reusable card component with shadow

### ✅ Authentication
- Auth context for global state management
- Persistent login with AsyncStorage
- REST API integration with Axios
- Login/logout functionality

## API Configuration

Update the API base URL in `src/services/authService.ts`:

```typescript
const API_BASE_URL = 'https://your-api-url.com/api';
```

### Expected API Endpoints

**Login**
- POST `/auth/login`
- Body: `{ email: string, password: string }`
- Response: `{ token: string, user: { id, email, name } }`

**Logout**
- POST `/auth/logout`
- Headers: `Authorization: Bearer <token>`

**Verify Token**
- GET `/auth/verify`
- Headers: `Authorization: Bearer <token>`

## Color Scheme

- Primary Green: `#2D7E3E` (buttons, accents)
- Background: `#E8EEE9` (light green-gray)
- Text Dark: `#1F2937`
- Text Gray: `#6B7280`
- Border: `#E5E7EB`
- Error: `#EF4444`

## Navigation Flow

1. **Unauthenticated**: Login → QR Scanner (modal)
2. **Authenticated**: Home Screen

## Next Steps

1. Connect to your backend API
2. Add more screens as needed
3. Customize the home screen
4. Add error handling and loading states
5. Test on physical devices
