<template>
  <v-container>
    <v-row align="center">
      <v-col v-if="items.length" cols="12" md="8" class="mx-auto">
        <div class="my-2">
          <v-btn color="primary" small @click="isFormShown = !isFormShown">Add New Task</v-btn>
        </div>
      </v-col>

      <v-col v-if="isFormShown" class="text-center mx-auto" cols="12" md="8">
        <app-form @onTaskAdded="addTask" />
      </v-col>

      <v-col cols="12" md="8" class="mx-auto">

        <div class="text-center" v-if="!items.length && !isFormShown">
          <p>There are no existing tasks. Add <a @click.prevent="isFormShown = true">New Task</a></p>
        </div>

        <v-card v-if="items.length">
          <v-list two-line subheader>
            <v-list-item
              v-for="item in items"
              :key="item.title"
            >
              <v-icon 
                class="mr-4"
                :color="item.priority === 'low' 
                  ? 'green' : item.priority === 'middle' 
                  ? 'orange' : 'red'"
                >mdi-fire
              </v-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn 
                  icon 
                  @click="$router.push({ name: 'Task', params: { id: item.id } })"> 
                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AppForm from '../components/AppForm';


export default {
  name: 'Home',
  components: {
    'app-form': AppForm
  },
  data() {
    return {
      isFormShown: false,
      isLoading: true,
      items: [],
    }
  },
  mounted() {
    this.getFromStorage()
  },
  methods: {
    addTask(data) {
      this.items.push(data);
      this.addToStorage(this.items);
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
