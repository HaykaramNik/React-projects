import './Info.css';
import Styles from './Info.module.css';

function Info() {
  return (
    <div className={Styles.info}>
      <h1>Hello from the Info component</h1>
      <button className="my-button">Click me</button>
    </div>
  );
}

export default Info;
