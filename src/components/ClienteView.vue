<script setup>
import { computed } from "vue";
const props = defineProps({
  cliente: {
    type: Object,
    required: true,
  },
});

defineEmits(["actualizar-estado", "eliminar-cliente"]);

const nombreCompleto = computed(() => `${props.cliente.nombre} ${props.cliente.apellido}`);
const estado = computed(() => (props.cliente.estado ? "Activo" : "Inactivo"));
</script>
<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ nombreCompleto }}</p>
      <p class="text-gray-500">{{ props.cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ props.cliente.empresa }}</p>
      <p class="text-gray-600">{{ props.cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <button
        @click="$emit('actualizar-estado', {id: props.cliente.id, estado: props.cliente.estado})"
        class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
        :class="[
          estado === 'Activo'
            ? 'bg-green-100 text-green-800 hover:text-green-900'
            : 'bg-red-100 text-red-800 hover:text-red-900',
        ]"
      >
        {{ estado }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <RouterLink class="text-indigo-600 hover:text-indigo-900 mr-5" :to="{ name: 'editar-cliente', params: { id: props.cliente.id } }"
        >Editar</RouterLink
      >
      <button class="text-red-600 hover:text-red-900" @click="$emit('eliminar-cliente', props.cliente.id)">Eliminar</button>
    </td>
  </tr>
</template>
