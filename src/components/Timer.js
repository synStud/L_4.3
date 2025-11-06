import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = () => {
	
	const [time, setTime] = useState(0); // Стартовое значение таймера.
	const [intervalTime, setIntervalTime] = useState(1000); // Интервал обновления таймера.
	const [isRunning, setIsRunning] = useState(false); // Состояние таймера.
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);

	useEffect(() => {

		if (!isRunning) return;

		const timer = setInterval(() => {
            if (time > 0) {
                setTime((prev) => prev - 1);
            } else {
                reset()
                alert('Значение должно быть больше ноля')
            }
            // Изменение значения таймера.
		}, intervalTime);

		return () => clearInterval(timer);
		
	}, [isRunning, intervalTime, time]);

    const reset = () => {
        setTime(0)
        setIntervalTime(1000)
        setIsRunning(false)
        if (inputRef.current || inputRef1.current) {
            inputRef.current.value = '';
            inputRef1.current.value = '';
        }
    }

	return (

		<div className="timer">
			<h2>Таймер</h2>
			<p>Прошло времени: {time} секунд</p>
			<button onClick={() => setIsRunning(!isRunning)}>
				{isRunning ? "Пауза" : "Запустить"}
			</button>
			<button onClick={() => {reset()}}>Сброс</button>
			<input ref={inputRef1} type="number" placeholder="Интервал (мс)"
				onChange={(e) => setIntervalTime(Number(e.target.value))} />
            <input ref={inputRef} type="number" size="20" placeholder="Количество времени (с)"
				onChange={(e) => setTime(Number(e.target.value))} />
		</div>
	);
};

export default Timer;