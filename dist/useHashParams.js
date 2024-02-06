"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashParams = void 0;
const react_1 = require("react");
// Hook to parse and manage URL hash parameters
function useHashParams() {
    const [hashParams, setHashParams] = (0, react_1.useState)({});
    (0, react_1.useEffect)(() => {
        const hash = window.location.hash.slice(1);
        const params = new URLSearchParams(hash);
        const paramsObj = {};
        params.forEach((value, key) => {
            paramsObj[key] = value;
        });
        setHashParams(paramsObj);
        const handleHashChange = () => {
            const newParams = new URLSearchParams(window.location.hash.slice(1));
            const newParamsObj = {};
            newParams.forEach((value, key) => {
                newParamsObj[key] = value;
            });
            setHashParams(newParamsObj);
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    return hashParams;
}
exports.useHashParams = useHashParams;
