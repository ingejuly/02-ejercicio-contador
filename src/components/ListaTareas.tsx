
import { useState } from "react";

// Interfaz de la tarea
interface Tarea {
  id: number;
  nombre: string;
  completed: boolean;
}

function ListaTareas() {
  // Estados
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Función para agregar tareas
  const addTask = () => {
    if (nuevaTarea.trim() === "") {
      return;
    }

    const nueva: Tarea = {
      id: Date.now(),
      nombre: nuevaTarea,
      completed: false,
    };

    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  // Función para eliminar una tarea
  const removeTask = (id: number) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  // Función para limpiar toda la lista
  const resetList = () => {
    setTareas([]);
  };

  // Función para cambiar el estado de una tarea
  const toggleTask = (id: number) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completed: !tarea.completed }
          : tarea
      )
    );
  };

  return (
    <div>
      <h1>Lista de tareas</h1>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />

      <button onClick={addTask}>Agregar tarea</button>

      <button onClick={resetList}>Limpiar lista</button>

      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            onClick={() => toggleTask(tarea.id)}
            style={{
              textDecoration: tarea.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {tarea.nombre}

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeTask(tarea.id);
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
