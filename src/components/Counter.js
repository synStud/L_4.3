import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => { // Создание компонента счётчик

	const [count, setCount] = useState(0); // Объявление хука состояния, с начальным значением ноль.

    useEffect(() => {

        const handleKeyPress = (event) => {
            if (event.key === "ArrowUp") setCount((prev) => prev + 1);
            if (event.key === "ArrowDown") setCount((prev) => prev - 1);
        };
        // Обработчики событий по нажатию клавиш стрелок вверх и вниз.

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

	return (
		<div className="counter">
			<h2>Счетчик</h2>
			<p>Текущее значение: {count}</p>
			<button onClick={() => setCount(count + 1)}>Увеличить</button>
			<button onClick={() => setCount(count - 1)}>Уменьшить</button>
		</div>
	);
};

export default Counter;