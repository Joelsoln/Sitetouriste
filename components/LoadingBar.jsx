// LoadingBar.jsx
'use client'
import React, { useState, useEffect } from 'react';
import styles from './LoadingBar.module.css';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress === 100) {
                    clearInterval(interval);
                    return 0;
                } else {
                    return prevProgress + 10;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div className={styles.progressBar} style={{ width: `${progress}%` }} />;
};

export default LoadingBar;
