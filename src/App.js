import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props) => {
  return ReactDOM.createPortal(
    <div className='modal-portal'>
      <div className='modal-content'>{props.children}</div>
    </div>,
    document.getElementById('portal')
  );
};

function App() {
  const [state, setState] = React.useState(false);

  const openModal = () => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

  return (
    <div>
      <h1>React Portal</h1>
      <button onClick={openModal}>Open Modal</button>
      {state && (
        <ModalPortal>
          <p>This text is opened in a Portal.</p>
          <button onClick={closeModal}>Close Modal</button>
        </ModalPortal>
      )}
    </div>
  );
}

export default App;
