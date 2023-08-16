import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';
function AboutPage() {
	return (
		<Card>
			<div className="about">
				<h1>About this project</h1>
				<p>
					The purpose of this application is to utilize React technology in
					order to provide a platform for users to submit feedback related to
					products or services they have experienced.
				</p>
				<p>Version 3.2.1</p>
				<p>
					<Link to="/">Back To Home</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
