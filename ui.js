'use strict';
const React = require('react');
const { Text } = require('ink');

const App = () => {
	const durationInSeconds = 10;
	const breathingStates = ['Breathe in', 'Hold', 'Breathe out']
	const [current, setCurrent] = React.useState(0);
	const [timer, setTimer] = React.useState(durationInSeconds);

	React.useEffect(() => {
		const timerId = setInterval(() => {
			const newValue = timer - 1;
			setTimer(newValue || durationInSeconds);

			if(newValue == 0) {
				setCurrent((current + 1) % 3);
			}
		}, 1000);

		return () => clearInterval(timerId);
	});

	return (
		<>
			<Text>
				{timer}
			</Text>
			<Text>
				{breathingStates[current]}
			</Text>
		</>
	);
};

module.exports = App;
