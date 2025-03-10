import '@testing-library/jest-dom';

// @ts-expect-error - This is a global variable that is set by React
globalThis.IS_REACT_ACT_ENVIRONMENT = true;