"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashId = void 0;
const react_1 = require("react");
function useHashId() {
    const [activeId, setActiveId] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const handleHashChange = () => {
            const id = +window.location.hash.slice(1);
            setActiveId(id);
        };
        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    return activeId;
}
exports.useHashId = useHashId;
