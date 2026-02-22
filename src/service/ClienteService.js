import api from "@/lib/axios";

export default {
  getClientes() {
    return api.get("/clientes");
  },
  addCliente(cliente) {
    return api.post("/clientes", cliente);
  },
  updateCliente(id, cliente) {
    return api.patch(`/clientes/${id}`, cliente);
  },
  deleteCliente(id) {
    return api.delete(`/clientes/${id}`);
  },
  getClienteById(id) {
    return api.get(`/clientes/${id}`);
  },
  changeState(id, data){
    return api.patch(`/clientes/${id}`, data);
  }
};
