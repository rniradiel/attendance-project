<template>
     <ul class="filter-menu">
            <li v-for="(item, index) in filterItems" :key="index">
                <a :href="`#${item.text.toLowerCase()}`">
                    <span class="filter-icon">
                        <font-awesome-icon :icon="[item.iconPrefix, item.icon]" />
                    </span>
                    {{ item.text }}
                </a>
            </li>
        </ul>
</template>

<script>
export default {
  data() {
    return {
      filterItems: [
        { text: "Sprout Solutions", iconPrefix: "fa-solid", icon: "fa-building" },
        { text: "All", iconPrefix: "fa-solid", icon: "fa-users" },
        { text: "All", iconPrefix: "fa-solid", icon: "fa-location-dot" },
        { text: "All", iconPrefix: "fa-solid", icon: "fa-user" },
    ]
    }
  }
};
</script>

<style>
ul {
    list-style: none;
    padding: 0;
}

.filter-menu a {
    color: #3C5B51;
    text-transform: uppercase;
    font-size: 12px;
}

.filter-icon {
    margin-right: 5px;
}
</style>