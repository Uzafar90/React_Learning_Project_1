import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStat from './components/FeedbackStat';
import FeedbackData from './data/feedbackData';
import FeedbackForm from './components/FeedbackForm';

function App(props) {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStat feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;
