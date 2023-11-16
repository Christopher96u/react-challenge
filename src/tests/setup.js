import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import '@testing-library/jest-dom';
// Runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});