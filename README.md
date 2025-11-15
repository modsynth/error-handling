# Error Handling

[![npm version](https://badge.fury.io/js/%40modsynth%2Ferror-handling.svg)](https://www.npmjs.com/package/@modsynth/error-handling)
[![npm downloads](https://img.shields.io/npm/dm/@modsynth/error-handling.svg)](https://www.npmjs.com/package/@modsynth/error-handling)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> React Error Boundary component with error logging

Part of the [Modsynth](https://github.com/modsynth) ecosystem.

## Features

- React Error Boundary
- Error fallback UI
- TypeScript support
- ✨ **ErrorLogger Class**: Client-side error logging (v0.2.0)
- ✨ **Server Integration**: Send errors to backend (v0.2.0)

## What's New in v0.2.0

- **ErrorLogger Class**: Log and track client-side errors
- **Error Reporting**: `sendToServer()` method for backend integration

## Installation

```bash
npm install @modsynth/error-handling
```

## Usage

```tsx
import { ErrorBoundary } from '@modsynth/error-handling';

<ErrorBoundary fallback={<div>Error occurred</div>}>
  <App />
</ErrorBoundary>
```

## Version

Current version: `v0.2.0`

## License

MIT
