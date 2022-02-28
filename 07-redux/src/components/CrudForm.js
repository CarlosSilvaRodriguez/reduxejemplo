import React, { useState, useEffect } from "react";

const initailForm = {
  id: null,
  contenido: "",
  autor:"",
};


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("AUTOR :" + form.autor);
    console.log("CONTENIDO :" + form.contenido);
    if (!form.autor || !form.contenido) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
      console.log("cONTENDIO:" + form.contenido +
      " AUTOR " + form.autor );
    } else { 
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="autor"
          placeholder="autor.."
          onChange={handleChange}
          value={form.autor}
        />
        <input
          type="text"
          name="contenido"
          placeholder="contenido"
          onChange={handleChange}
          value={form.contenido}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
