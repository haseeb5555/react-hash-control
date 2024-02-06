"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHash = void 0;
const react_1 = require("react");
function useHash() {
    const [hash, setHash] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const handleHashChange = () => {
            setHash(window.location.hash.slice(1));
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    return hash;
}
exports.useHash = useHash;
