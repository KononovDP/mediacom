<template>
  <v-list class="pb-0" two-line subheader>
    <v-list-item
      v-for="item in items"
      :key="item.title"
      @click="$router.push({ name: 'Task', params: { id: item.id } })"
    >

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>

      <v-icon 
        class="ml-4"
        :color="item.priority === 'low' 
          ? 'green' : item.priority === 'middle' 
          ? 'orange' : 'red'"
        >mdi-fire
      </v-icon>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'TaskList',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  }
</script>