<template>
  <v-container>
    <v-row align="center">
      <v-col v-if="items.length && !isFormShown" cols="12" md="8" class="mx-auto">
        <div class="my-2">
          <v-btn color="primary" small @click="isFormShown = !isFormShown">Add New Task</v-btn>
        </div>
      </v-col>

      <v-col v-if="isFormShown" class="text-center mx-auto" cols="12" md="8">
        <app-form 
          @onTaskAdded="addTask"
          @onCancel="cancel"
        />
      </v-col>

      <v-col cols="12" md="8" class="mx-auto">

        <div class="text-center" v-if="!items.length && !isFormShown">
          <p>There are no existing tasks. Add <a @click.prevent="isFormShown = true">New Task</a></p>
        </div>

        <v-card v-if="items.length">
          <task-list :items="items" />
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppForm from '../components/AppForm';
import TaskList from '../components/TaskList';
// import { getTasks, postTask, updateTask } from '../servces/taskService.service';


export default {
  name: 'Home',
  components: {
    'app-form': AppForm,
    'task-list': TaskList,
  },
  data() {
    return {
      isFormShown: false,
      isLoading: true,
      items: [],
    }
  },
  mounted() {
    this.getFromStorage();
    // getTasks();
  },
  methods: {
    addTask(data) {
      this.items.push(data);
      // postTask(data);
      this.addToStorage(this.items);
      this.isFormShown = false;
    },
    cancel() {
      this.isFormShown = false
    },

    addToStorage(data) {
      localStorage.setItem('tasks', JSON.stringify(data));
    },
    getFromStorage() {
      this.items = JSON.parse(localStorage.getItem('tasks'));
    }
  }
}
</script>
