import PropTypes from 'prop-types';
import Feedbackitem from './Feedbackitem';

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback yet</p>;
	}
	return (
		<div className="feedback-list">
			{feedback.map((item) => (
				<Feedbackitem key={item.id} item={item} />
			))}
		</div>
	);
}

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.isRequired
		})
	)
};

export default FeedbackList;