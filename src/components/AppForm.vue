<template>
  <v-form @submit.prevent="submitForm">
    <v-text-field
      v-model="title"
      label="Title"
      required
    ></v-text-field>

    <v-subheader class="pl-0">Priority</v-subheader>
    <v-radio-group v-model="priority" row>
      <v-radio label="low" color="success" value="low"></v-radio>
      <v-radio label="middle" color="warning" value="middle"></v-radio>
      <v-radio label="high" color="error" value="high"></v-radio>
    </v-radio-group>

    <v-text-field
      v-model.number="time"
      type="number" 
      label="Time, s"
      required
    ></v-text-field>

    <v-subheader class="pl-0">CPU, %</v-subheader>
    <v-slider
      v-model="cpu"
      :thumb-size="20"
      thumb-label="always"
    ></v-slider>

    <v-text-field
      v-model="memory"
      label="Memory"
      required
    ></v-text-field>

    <v-text-field
      v-model="disk"
      label="Disk"
      required
    ></v-text-field>

    <v-text-field
      v-model="network"
      label="Network"
      required
    ></v-text-field>

    <div class="d-flex">
      <v-btn class="mx-auto" color="primary" type="submit">{{ submitButtonText }}</v-btn>
      <v-btn v-if="task" class="mx-auto" @click="$emit('onCancel')" type="submit">Cancel</v-btn>
    </div>
  </v-form>
</template>

<script>
  import { v4 as uuidv4 } from 'uuid';

  export default {
    name: 'AppForm',
    props: {
      task: {
        type: Object
      }
    },
    data() {
      return {
        title: this.task ? this.task.title : '',
        priority: this.task ? this.task.priority : 'middle',
        time: this.task ? this.task.time : null,
        cpu: this.task ? this.task.cpu : 0,
        memory: this.task ? this.task.memory : '',
        disk: this.task ? this.task.disk : '',
        network: this.task ? this.task.network : '',
      }
    },
    computed: {
      submitButtonText() {
        return this.task ? 'Update Task' : 'Add New Task'
      },
    },
    methods: {
      prepareData() {
        return {
          id: uuidv4(),
          title: this.title,
          priority: this.priority,
          time: this.time,
          cpu: this.cpu,
          memory: this.memory,
          disk: this.disk,
          network: this.network,
        }
      },      
      submitForm() {
        const data = this.prepareData();
        this.task ? this.updateTask(data) : this.addTask(data)
      },
      addTask(data) {
        this.$emit('onTaskAdded', data);
        this.resetForm();
      },
      updateTask(data) {        
        this.$emit('onTaskUpdated', data);
        this.resetForm();
      },
      resetForm() {
        this.title = '';
        this.priority = 'middle';
        this.time = null;
        this.cpu = 0;
        this.memory = '';
        this.disk = '';
        this.network = '';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>