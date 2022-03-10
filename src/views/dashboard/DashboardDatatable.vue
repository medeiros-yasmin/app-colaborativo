<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="usreList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <template #[`item.full_name`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
      <template #[`item.salary`]="{item}">
        {{ `$${item.salary}` }}
      </template>
      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          class="font-weight-medium"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from './datatable-data'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Texto: 'primary',
      Podcast: 'success',
      Vídeo: 'error',
      Auxílio: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NOME', value: 'full_name' },
        { text: 'DESCRIÇÃO', value: 'email' },
        { text: 'PUBLICAÇÃO', value: 'start_date' },
        { text: 'AUTOR', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'TIPO', value: 'status' },
      ],
      usreList: data,
      status: {
        1: 'Texto',
        2: 'Podcast',
        3: 'Vídeo',
        4: 'Auxílio',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
