# ChatBubble Component

The `ChatBubble` component is a  chat interface designed to provide a seamless chat experience for users. It's draggable, expandable, responsive, and supports RTL languages.

## Features

- **Draggable & Droppable**: move the chat bubble around the screen.
- **Expandable**: Click on the chat bubble to expand and view the full chat interface.
- **Responsive**: Adapts to various screen sizes ensuring a consistent user experience.
- **RTL Support**: supports right-to-left languages.
- **Container-Presenter Pattern**: The architecture follows the Container-Presenter pattern, ensuring a clear separation of logic and presentation.

## Directory Structure

- **Containers**: This directory contains the logic and state management for the components. It's where the main `ChatBubbleContainer` resides.
- **Components**: This directory contains the presentational components. It's where the `ChatBubbleComponent` (presenter) resides.

## Usage Example

Here's a simple example of how the `ChatBubble` component was integrated into the main application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBubbleContainer from './containers/ChatBubbleContainer';

const sampleMessages = [
  { sender: 'user', type: 'text', content: 'Hello!' },
  { sender: 'support', type: 'text', content: 'Hi there! How can I assist you today?' }
];

function Main() {
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ChatBubbleContainer 
        title="Chat Support"
        avatar="path_to_avatar_image"
        accentColor="#007bff"
        currentUser="user"
        messages={sampleMessages}
      />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the `ChatBubble` component.
