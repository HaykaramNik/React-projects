function PetInfo(props) {
  const { animal, age, hasPet } = props;

  return <h1>{hasPet ? `My ${animal} is ${age} years old` : "I don't have a animal"}</h1>;
}

export default PetInfo;