import { useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedFadeIn({ children }) {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref}>
            <span
                style={{
                    transform: isInView ? "none" : "",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
                }}
            >
                {children}
            </span>
        </div>
    );
}

export default AnimatedFadeIn;