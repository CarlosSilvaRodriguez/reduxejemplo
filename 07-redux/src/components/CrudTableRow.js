import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
//  let { name, constellation, id } = el;
    let { id, contenido, autor, creacion } = el;
    let { _seconds} = creacion;
    
  return (
    <tr>
      <td>{autor}</td>
      <td>{contenido}</td>
      {/* <td>{new Intl.DateTimeFormat('es-PE', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(_seconds)}</td> */}
      <td>{_seconds}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
