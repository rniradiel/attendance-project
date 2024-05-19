<template>
     <ul class="filter-menu">
            <li v-for="(item, index) in navbarItems" :key="index">
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
      navbarItems: [
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
.filter-header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
}

.title {
    font-size: 14px;
    text-transform: uppercase;
    color: #3C5B51;
    margin-bottom: 1rem;
}

.filter-header a {
    font-weight: 500;
}

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