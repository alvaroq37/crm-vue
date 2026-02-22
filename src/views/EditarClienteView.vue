<script setup>
import { onMounted, reactive } from "vue";
import ClienteService from "@/service/ClienteService";
import { useRouter,useRoute } from "vue-router";
import { FormKit } from "@formkit/vue";
import RouterLink from "@/components/UI/RouterLink.vue";
import Heading from "@/components/UI/HeadingView.vue";

const router = useRouter();
const route = useRoute();

const {id} = route.params;

const formData = reactive({});

onMounted(() => {
  ClienteService.getClienteById(id)
    .then((response) => {
      Object.assign(formData, response.data);
    })
    .catch((error) => {
      console.error("Hubo un error al obtener el cliente:", error);
      alert("Hubo un error al obtener el cliente. Por favor, inténtalo de nuevo.");
    });
});

defineProps({
  titulo: {
    type: String,
    required: true,
  },
});

const handleFormSubmit = (data) => {
  ClienteService.updateCliente(id, data)
    .then(() => {
      router.push({ name: "listado-clientes" });
    })
    .catch((error) => {
      console.error("Hubo un error al actualizar el cliente:", error);
      alert("Hubo un error al actualizar el cliente. Por favor, inténtalo de nuevo.");
    });
};


</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="listado-clientes">Volver</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Guardar Cliente"
          incomplete-message="Por favor completa el formulario"
          @submit="handleFormSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre Completo"
            validation="required"
            placeholder="Nombre completo"
            v-model="formData.nombre"
            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          />
          <FormKit
            type="text"
            name="apellido"
            label="Apellido"
            validation="required"
            placeholder="Nombre completo"
            prefix-icon="person"
            v-model="formData.apellido"
            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            validation="required | email"
            placeholder="Email"
            v-model="formData.email"
            :validation-messages="{
              required: 'El email del cliente es obligatorio',
              email: 'El email no es válido',
            }"
          />
          <FormKit
            type="text"
            name="telefono"
            label="Teléfono del cliente"
            validation="*matches:/^[0-9]{8}$/"
            placeholder="Teléfono: XXXXXXXX"
            v-model="formData.telefono"
            :validation-messages="{
              matches: 'El teléfono debe tener 8 dígitos',
            }"
          />
          <FormKit
            type="text"
            name="empresa"
            label="Empresa del cliente"
            placeholder="Nombre de la empresa"
            v-model="formData.empresa"
          />
          <FormKit
            type="text"
            name="puesto"
            label="Puesto del cliente"
            placeholder="Nombre del puesto"
            v-model="formData.puesto"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
