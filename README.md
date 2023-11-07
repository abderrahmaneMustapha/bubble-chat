# ChatBubble Component

The `ChatBubble` component is a  chat interface designed to provide a seamless chat experience for users. It's draggable, expandable, responsive, and supports RTL languages.

## Features

- **Draggable & Droppable**: move the chat bubble around the screen.
- **Expandable**: Click on the chat bubble to expand and view the full chat interface.
- **Responsive**: Adapts to various screen sizes ensuring a consistent user experience.
- **RTL Support**: supports right-to-left languages.
- **Container-Presenter Pattern**: The architecture follows the Container-Presenter pattern, ensuring a clear separation of logic and presentation.

---

## Requirements

Before you start, ensure you have the following installed:

1. **Node.js**: This project requires Node.js version `v16.19.0` or higher. If you don't have it installed, you can download and install it from [Node.js official website](https://nodejs.org/).

2. **React**: This project is built with React version `18`. If you need more details on React, you can refer to the [official React documentation](https://react.dev/).

### Installation

Once you have the above prerequisites:

1. Clone the repository:

   ```bash
   git clone https://github.com/abderrahmaneMustapha/bubble-chat
   ```

2. Navigate to the project directory:

   ```bash
   cd bubble-chat
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Directory Structure

- **Containers**: This directory contains the logic and state management for the components. It's where the main `ChatBubbleContainer` resides.
- **Components**: This directory contains the presentational components. It's where the `ChatBubbleComponent` (presenter) resides.

## Usage Example

Here's a simple example of how the `ChatBubble` component can be integrated
into an application:

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Main />);
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the `ChatBubble` component.
