function Wrapper(props) {
  console.log(props.children);
  return <div style={{ backgroundColor: props.color }}>{props.children[1]}{props.children[2]}</div>;
}

export default Wrapper;
