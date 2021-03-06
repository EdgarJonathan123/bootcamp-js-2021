const ActionTypes = {
  ProductoAgregado: "producto-agregado",
  ProductoModificado: "producto-modificado",
  ProductoEliminado: "producto-eliminado",
  productoSeleccionado: "producto-seleccionado",
  ProductoAgregadoOModificado: "producto-agregado-o-modificado",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.ProductoAgregado:
      return productoAgregadoReducer(state, action);
    case ActionTypes.ProductoModificado:
      return productoModificadoReducer(state, action);
    case ActionTypes.ProductoEliminado:
      return productoEliminadoReducer(state, action);
    case ActionTypes.productoSeleccionado:
      return productoSelecionadoReducer(state, action);
    default:
      return state;
  }
};

export const productoSeleccionado = (codigo) => ({
  type: ActionTypes.productoSeleccionado,
  payload: { codigo },
});

export const productoEliminado = (codigo) => ({
  type: ActionTypes.ProductoEliminado,
  payload: { codigo },
});

export const productoModificado = (payload) => ({
  type: ActionTypes.ProductoModificado,
  payload,
});

export const productoAgregado = (payload) => ({
  type: ActionTypes.ProductoAgregado,
  payload,
});

export const agregarOModificarProducto = (payload) => ({
  type: ActionTypes.ProductoAgregadoOModificado,
  payload,
});

export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const agregarOModificarProductoMiddleware = (store) => (next) => (action) => {

  if (action.type !== ActionTypes.ProductoAgregadoOModificado) {
    return next(action);
  }
  const producto = action.payload;
  const actionToDispatch = producto.codigo
    ? productoModificado(producto)
    : productoAgregado(producto);

  store.dispatch(actionToDispatch);
  return store.dispatch(productoSeleccionado(null));
};

export function generadorCodigoProductoBuilder  (codigoInicial){
  let codigo = codigoInicial;
  return (store) => (next) => (action) => {
    if (action.type != ActionTypes.ProductoAgregado) {
      return next(action);
    }
    codigo++;
    const actionToDispatch = {
      ...action,
      payload: {
        ...action.payload,
        codigo,
      },
    };

    return next(actionToDispatch);
  };
}

function productoSelecionadoReducer(state, action) {
  const codigo = action.payload.codigo;
  return {
    ...state,
    producto: state.productos.find((x) => x.codigo === codigo) || {},
  };
}

function productoEliminadoReducer(state, action) {
  const codigo = action.payload.codigo;
  const productos = state.productos.filter((item) => item.codigo !== codigo);
  return {
    ...state,
    productos,
  };
}

function productoModificadoReducer(state, action) {
  const producto = action.payload;
  const total = producto.cantidad * producto.precio;
  const productos = state.productos.slice(); //crea una copia del arreglo original
  const codigo = action.payload.codigo;
  const old = productos.find((item) => item.codigo === codigo);
  const index = productos.indexOf(old);

  productos[index] = { ...producto, total };

  return {
    ...state,
    productos,
  };
}

function productoAgregadoReducer(state, action) {
  const producto = action.payload;
  const total = producto.cantidad * producto.precio;
  return {
    ...state,
    productos: [
      ...state.productos,
      {
        ...producto,
        total,
      },
    ],
  };
}
