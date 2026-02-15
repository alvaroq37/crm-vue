<script setup>
import { FormKit } from "@formkit/vue";
import RouterLink from "@/components/UI/RouterLink.vue";
import Heading from "@/components/UI/HeadingView.vue";
defineProps({
  titulo: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="inicio">Volver</RouterLink>
    </div>
    <Heading>{{ titulo }}</Heading>
    <div class="mx-auto mt-10 bg-white shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit
          type="form"
          submit-label="Agregar Cliente"
          incomplete-message="Por favor completa el formulario"
        >
          <FormKit
            type="text"
            name="nombre"
            label="Nombre Completo"
            validation="required"
            placeholder="Nombre completo"
            :validation-messages="{ required: 'El nombre del cliente es obligatorio' }"
          />
          <FormKit
            type="text"
            name="apellido"
            label="Apellido"
            validation="required"
            placeholder="Nombre completo"
            prefix-icon="person"
            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            validation="required | email"
            placeholder="Email"
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
            :validation-messages="{
              matches: 'El teléfono debe tener 8 dígitos',
            }"
          />
          <FormKit
            type="text"
            name="empresa"
            label="Empresa del cliente"
            placeholder="Nombre de la empresa"
          />
          <FormKit
            type="text"
            name="puesto"
            label="Puesto del cliente"
            placeholder="Nombre del puesto"
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
