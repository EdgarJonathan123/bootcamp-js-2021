import React from "react";

const ProductForm = () => (
  <form action="index.html">
    <input type="hidden" name="codigo" id="codigo" />
    <div className="mb-3">
      <label htmlFor="nombre" className="form-label">
        Nombre
      </label>
      <input type="text" name="nombre" id="nombre" className="form-control" />
    </div>
    <div className="mb-3">
      <label htmlFor="cantidad" className="form-label">
        Cantidad
      </label>
      <input
        type="number"
        name="cantidad"
        id="cantidad"
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="precio" className="form-label">
        Precio
      </label>
      <input
        type="number"
        name="cantidad"
        id="precio"
        className="form-control"
      />
    </div>
    <div>
      <label htmlFor="categoria" className="form-label">
        Categoria
      </label>
      <select name="categoria" id="categoria" className="form-control">
        <option value="1">Categoria 1</option>
        <option value="2">Categoria 2</option>
        <option value="3">Categoria 3</option>
        <option value="4">Categoria 4</option>
      </select>
    </div>
    <div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </div>
  </form>
);

export default ProductForm;
