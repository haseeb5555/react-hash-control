"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashPersistence = void 0;
const react_1 = require("react");
// Hook to persist state variables in the URL hash
function useHashPersistence(initialState, key) {
    const [state, setState] = (0, react_1.useState)(() => {
        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(hash);
        const storedState = params.get(key);
        if (storedState) {
            try {
                return JSON.parse(storedState);
            }
            catch (error) {
                console.error("Error parsing stored state from hash:", error);
            }
        }
        return initialState;
    });
    const updateState = (newState) => {
        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(hash);
        params.set(key, JSON.stringify(newState));
        window.location.hash = params.toString();
        setState(newState);
    };
    return [state, updateState];
}
exports.useHashPersistence = useHashPersistence;
