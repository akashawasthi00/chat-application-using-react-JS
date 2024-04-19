import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import  './App.css';

const App = () => {
    return (
    <ChatEngine
        height="100vh"
        projectID="df1fb941-575c-48f1-aba9-1aeabf432311"
        userName="reactJsMastery"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />    

    );
}

export default App;
  