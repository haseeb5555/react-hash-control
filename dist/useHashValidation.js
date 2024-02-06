"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashValidation = void 0;
const react_1 = require("react");
// Hook to validate the structure or content of the URL hash
function useHashValidation(expectedPattern) {
    const [isValid, setIsValid] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        const hash = window.location.hash.slice(1);
        setIsValid(expectedPattern.test(hash));
    }, [expectedPattern]);
    return isValid;
}
exports.useHashValidation = useHashValidation;
