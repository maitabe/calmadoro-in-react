import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import Mode from './components/ModeButtons';
//the word Clock specify the name of the class
// './Clock' is the file reference of the component
import './index.css';


// JSX that produce the html
const App = () => {
	return (
	<div className="container-fluid">
		<div className="bgImage"> hello calmadoro
			<Clock />
		</div>;
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'))

// ReactDOM.render(
// 	<Clock>
// 	<div clasName="container-fluid">
// 		<div clasName="bgImage">
// 		</div>
// 	</div>
//   </Clock>,
//   document.getElementById('root')
// );
