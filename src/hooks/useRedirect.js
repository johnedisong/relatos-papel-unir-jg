import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useRedirect(path, delay) {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(path);
        }, delay);

        return () => clearTimeout(timer);
    }, [navigate, path, delay]);
}

export default useRedirect;