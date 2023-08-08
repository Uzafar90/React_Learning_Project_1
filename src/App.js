import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackData';

import { useState } from 'react';

function App(props) {
	const [feedback, setFeedback] = useState(FeedbackData);
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}

export default App;
