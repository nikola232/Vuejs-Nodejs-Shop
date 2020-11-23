<template>
  <div>
    <div class="text-container">
      <p class="text-categories text-center">CATEGORIES</p>
      <p class="text-seeAll text-center">See All ></p>
    </div>
    <div class="sidebar-container" v-for="(category, index) in categories" :key="index">
      <b-dropdown id="dropdown-dropright"  dropright :text="category.categoryName" variant="primary" class="m-2">
        <div style="display: flex;">
          <b-dropdown-item href="#" v-for="(item, index) in category.items" :key="index">
            {{item.itemName}}
            <div v-for="(data, index) in item.itemList" :key="index">
              <p class="item-name-text">{{ data.name }}</p>
            </div>
          </b-dropdown-item>
        </div>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
      categories: this.$store.getters.getCategories
    }
  }
}
</script>