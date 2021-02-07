'use strict';
const React = require('react');
const { Text, Box } = require('ink');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');

const App = () => {
	const durationInSeconds = 10;
	const gradients = ['vice', 'passion', 'teen', 'passion']
	const breathingStates = ['Breathe in', 'Hold', 'Breathe out', 'Hold']
	const [current, setCurrent] = React.useState(0);
	const [timer, setTimer] = React.useState(durationInSeconds);

	React.useEffect(() => {
		const timerId = setInterval(() => {
			const newValue = timer - 1;
			setTimer(newValue || durationInSeconds);

			if (newValue == 0) {
				setCurrent((current + 1) % 4);
			}
		}, 1000);

		return () => clearInterval(timerId);
	});

	return (
		<>
			<Box alignItems="center" flexDirection="column">
				<Box>
					<Gradient name={gradients[current]}>
						<BigText text={breathingStates[current]} font="block" />
					</Gradient>
				</Box>
				<Box>
					<Gradient name={gradients[current]}>
						<BigText text={timer.toString()} font="block" />
					</Gradient>
				</Box>
			</Box>
		</>
	);
};

module.exports = App;
