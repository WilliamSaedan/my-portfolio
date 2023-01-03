import { useEffect, useState } from 'react';

export default function ColoredText({ text }) {
    const styles = ['text-red', 'text-blue', 'text-yellow'];
    const [randomIndex, setRandomIndex] = useState([]);

    useEffect(() => {
        const numWords = text.split(' ').length;
        const temp = [...Array(Math.ceil(numWords / 7))].map(() =>
            Math.floor(Math.random() * numWords)
        );
        setRandomIndex(temp);
    }, [text]);

    return (
        <span>
            {text.split(' ').map((word, index) => {
                if (randomIndex.includes(index)) {
                    return (
                        <span
                            key={index}
                            className={styles[index % styles.length]}>
                            {word}{' '}
                        </span>
                    );
                } else {
                    return `${word} `;
                }
            })}
        </span>
    );
}
