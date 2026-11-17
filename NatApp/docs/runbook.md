# Lost-N-Found Runbook

## Overview

Lost-N-Found is currently split into two separate repositories:

### Frontend Repository
React Native / Expo application

https://github.com/438-Lost-N-found/Lost-N-Found-FrontEnd

### Backend Repository
API and server-side application

https://github.com/438-Lost-N-found/Lost-N-Found-backend

## Current Development Status

⚠️ The frontend and backend are currently under active development and are **not yet integrated**.

At this stage:

- The frontend does not depend on the backend.
- The backend does not depend on the frontend.
- Both repositories can be developed, tested, and run independently.
- API communication between the two systems has not yet been implemented.

---

# Frontend Operations

## Purpose

Provides the user interface for the Lost-N-Found application using React Native and Expo.

## Prerequisites

- Node.js
- npm
- Expo CLI (optional)
- Expo Go App (for mobile testing)

## Starting the Frontend

### Clone Repository

```bash
git clone https://github.com/438-Lost-N-found/Lost-N-Found-FrontEnd.git
```

### Navigate to Application

```bash
cd Lost-N-Found-FrontEnd
cd NatApp
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npx expo start
```

### Verify Operation

Successful startup should:

- Open the Expo development dashboard.
- Display a QR code.
- Provide a local web URL.

You should be able to:

- Open the app in a browser.
- Scan the QR code with Expo Go.
- Navigate between available screens.

## Frontend Troubleshooting

### Dependencies Fail to Install

Verify Node.js and npm:

```bash
node --version
npm --version
```

Reinstall dependencies:

```bash
rm -rf node_modules
npm install
```

### Expo Fails to Start

Clear Expo cache:

```bash
npx expo start --clear
```

### Metro Bundler Issues

Stop the server and restart:

```bash
npx expo start --clear
```

---

# Backend Operations

## Purpose

Provides API endpoints, data processing, and database interactions for Lost-N-Found.

## Current Status

The backend is not currently connected to the frontend.

Developers may:

- Develop endpoints
- Test APIs
- Configure databases
- Validate server functionality

without needing the frontend running.

## Starting the Backend

Follow the setup instructions in the backend repository README.

Repository:

https://github.com/438-Lost-N-found/Lost-N-Found-backend

## Verify Backend Operation

Verify that:

- The application starts successfully.
- No startup errors are reported.
- API routes are accessible.
- Database connections are successful (if configured).

---

# Testing

## Frontend Testing

Run application locally:

```bash
npx expo start