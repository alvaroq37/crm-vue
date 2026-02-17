import api from "@/lib/axios";

export default {
  getClientes() {
    return api.get("/clientes");
  },
  addCliente(cliente) {
    return api.post("/clientes", cliente);
  },
  updateCliente(id, cliente) {
    return api.put(`/clientes/${id}`, cliente);
  },
  deleteCliente(id) {
    return api.delete(`/clientes/${id}`);
  },
};
