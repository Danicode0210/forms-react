import { useState } from "react";
import Swal from "sweetalert2";

const Controlado = ({ addTodo }) => {

  const [todo, setTodo] = useState({
    title: '',
    description: '',
    estado: 'Pendiente',
    priority: true
  })

  const { title, description, estado, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title.trim() || !description.trim()){
      return   Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Titulo y descripción obligatorios',
      })

    }
    addTodo({
      id:Date.now(),
      ...todo,
      estado: estado === 'completado'
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(title, description, estado)

  };

  const hadleChange = e => {

    const { name, type, checked, value } = e.target

    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    })
  }



  return (
    <div className="container mt-2">
      <form
        onSubmit={handleSubmit}
      >
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="title"
          value={title}
          onChange={hadleChange}
        />
        <textarea
          className="form-control mb-2"
          type="text"
          placeholder="Ingrese un TODO"
          name="description"
          value={description}
          onChange={hadleChange}
        />
        <div className="form-check mb-2">
          <input type="checkbox"
            name="priority"
            className="for-check-input"
            id="inputCheck"
            checked={priority}
            onChange={hadleChange}
          />
          <label htmlFor="inputCheck">Dar prioridad</label>
        </div>
        <select
          className="form-control mb-2"
          name="estado"
          value={estado}
          onChange={hadleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button
          className="btn btn-primary"
          type="submit"
        >
          Agregar Todo
        </button>
      </form>
    </div>
  );
};

export default Controlado;
