import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
const App = () => {
	return (
		<ChatEngine
			height="100vh"
			projectID="5d530162-b84b-4b81-b000-aef317bee353"
			userName={process.env.REACT_APP_ROOT}
			userSecret={process.env.REACT_APP_SECRET}
			renderChatFeed={(props) => <ChatFeed {...props} />}
		/>
	);
};

export default App;
