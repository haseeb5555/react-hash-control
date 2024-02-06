"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashHistory = void 0;
const react_1 = require("react");
// Hook to track hash history
function useHashHistory() {
    const [history, setHistory] = (0, react_1.useState)([window.location.hash]);
    (0, react_1.useEffect)(() => {
        const handleHashChange = () => {
            setHistory((prevHistory) => [...prevHistory, window.location.hash]);
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    return history;
}
exports.useHashHistory = useHashHistory;
