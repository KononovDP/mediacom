<template>
  <v-container>
    <v-row align="center">
      <v-col class="text-center" cols="12">
        <div class="my-2">
          <v-btn small @click="isFormShown = !isFormShown">Add New Task</v-btn>
        </div>
      </v-col>
      <v-col v-if="isFormShown" class="text-center" cols="12">isFormShown</v-col>
      <v-col cols="12">
        <v-card
          max-width="600"
          class="mx-auto"
        >
  
          <v-list two-line subheader>
            <v-list-item
              v-for="item in items"
              :key="item.title"
             
            >
              <v-list-item-avatar>
                <v-icon
                  :class="[item.iconClass]"
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
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

export default {
  name: 'Home',
  data() {
    return {
      isFormShown: false,
      items: [
        { id: 1, icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { id: 2, icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { id: 3, icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
    }
  }
}
</script>
