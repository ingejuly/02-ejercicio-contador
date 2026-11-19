
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetear = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>

      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={resetear}>Reiniciar</button>
    </div>
  );
}

export default Contador;
