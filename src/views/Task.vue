<template>
  <div class="task">
    
    

    <v-container>
      <v-row>
        <v-col cols="12" md="8" class="mx-auto ">
          <v-btn small @click="$router.push('/')">Back to Tasks</v-btn>
        </v-col>
        <v-col cols="12" md="8" class="mx-auto">
          <app-form 
            v-if="isItemEditing"
            :task="item" 
            @onTaskUpdated="updateTask" 
            @onCancel="cancel" 
          />

          <v-card v-if="item && !isItemEditing">
            <v-card-title class="text-center">{{ item.title }}</v-card-title>

            <v-card-text class="text--primary">
              <v-container>  
                <v-row>
                  <v-col cols="6">Priority</v-col>
                  <v-col cols="6" class="text-right">{{ item.priority }}</v-col>

                  <v-col cols="6">Time</v-col>
                  <v-col cols="6" class="text-right">{{ item.time }}</v-col>
                  
                  <v-col cols="6">CPU</v-col>
                  <v-col cols="6" class="text-right">{{ item.cpu }}</v-col>
                  
                  <v-col cols="6">Memory</v-col>
                  <v-col cols="6" class="text-right">{{ item.memory }}</v-col>
                  
                  <v-col cols="6">Disk</v-col>
                  <v-col cols="6" class="text-right">{{ item.disk }}</v-col>
                  
                  <v-col cols="6">Network</v-col>
                  <v-col cols="6" class="text-right">{{ item.network }}</v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions class="justify-center py-4">
              <v-btn small color="primary" @click="onEdit(item)">Edit Task</v-btn>
              <v-btn small color="error" @click="onDelete(item)">Delete Task</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
  import AppForm from '../components/AppForm';

  export default {
    name: 'Task',
    components: {
      'app-form': AppForm
    },
    data() {
      return {
        item: {},
        isItemEditing: false
      }
    },
    mounted() {
      this.getFromStorage()
    },
    methods: {
      onEdit() {
        this.isItemEditing = true
      },
      onDelete(item) {
        const arr = JSON.parse(localStorage.getItem('tasks'));
        console.log('arr', arr);
        const newArr = arr.filter( i => i.id !== item.id);
        console.log('newArr', newArr);
        this.addToStorage(newArr);
        this.$router.push('/')
      },
      cancel() {
        this.isItemEditing = false
      },
      updateTask(updatedTask) {
        const arr = JSON.parse(localStorage.getItem('tasks'));
        const item = arr.findIndex( i => i.id === this.item.id);

        const upadatedTash = {
          id: updatedTask.id,
          title: updatedTask.title,
          priority: updatedTask.priority,
          time: updatedTask.time,
          cpu: updatedTask.cpu,
          memory: updatedTask.memory,
          disk: updatedTask.disk,
          network: updatedTask.network,
        }

        arr.splice(item, 1, upadatedTash);
        this.addToStorage(arr);
        this.$router.push('/');
      },
      getFromStorage() {
        const arr = JSON.parse(localStorage.getItem('tasks'))
        const item = arr.filter( i => i.id === this.$route.params.id);
        this.item = item[0];
      },
      addToStorage(data) {
        localStorage.setItem('tasks', JSON.stringify(data));
      },
    }
  }
</script>

<style lang="sass" scoped>

</style>