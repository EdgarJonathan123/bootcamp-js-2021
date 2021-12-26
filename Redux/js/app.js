//Logica en middleware
const preloadedState = {
  producto: {},
  productos: [],
};

const middlewares = Redux.applyMiddleware(
  loggerMiddleware,
  agregarOModificarProductoMiddleware,
  generadorCodigoProductoBuilder(0)
);

const store = Redux.createStore(reducer, preloadedState, middlewares);


store.subscribe(dispatchOnChange(store,(state) =>{
    ui.renderForm(state.producto);
    ui.renderTable(state.productos);
}));

function dispatchOnChange(store, dispatch) {
  let latestState;
  return function () {
    let currentState = store.getState();
    if (currentState != latestState) {
      latestState = currentState;
      dispatch(currentState);
    }
  };
}

ui.onFormSubmit = (producto) =>
  store.dispatch(agregarOModificarProducto(producto));
ui.onEliminarClick = (codigo) => store.dispatch(productoEliminado(codigo));
ui.onEditarClick = (codigo) => store.dispatch(productoSeleccionado(codigo));

