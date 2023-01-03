import { AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
    return (
        <AnimatePresence
            mode='wait'
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}>
            {children}
        </AnimatePresence>
    );
}
