const App = ({ initialButtonText, initialClassName }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [changeClassName, setClassName] = React.useState(initialClassName);

  const onButtonClick = () => {
    setButtonText("Click");
    setClassName("green-btn");
  }
  return (
    <div className="app">
      <button className={changeClassName} onClick={onButtonClick}>{buttonText}</button>
    </div>
  )
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me please" initialClassName="" />);