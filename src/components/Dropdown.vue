<template>
    <button @click="showUsers" class="flex max-h-52 w-full overflow-auto py-2 pl-3 pr-9 text-sm font-semibold lg:inline-flex lg:w-32">
            Users
        </button>
        <div v-show="usersToggle" class="mt-1 w-full rounded-xl bg-blue-100 py-2">
            <a href="#" class="block mt-1 w-full rounded-xl bg-blue-100 py-2">
                Testing
            </a>
        </div>
</template>

<script>
export default {
    data() {
        return {
            usersToggle: false,
        };
    },
    methods: {
        showUsers() {
            this.usersToggle =!this.usersToggle;
        },
    },
};
</script>