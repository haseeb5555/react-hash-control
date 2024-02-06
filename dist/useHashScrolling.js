"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHashScrolling = void 0;
const react_1 = require("react");
// Hook to enable smooth scrolling to hash anchors within the page
function useHashScrolling() {
    (0, react_1.useEffect)(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
}
exports.useHashScrolling = useHashScrolling;
