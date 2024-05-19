<template>
    <li>
        <form action="">
            <input type="text" placeholder="Search Employee...">
            <button>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>
    </li>
</template>

<style scoped>
form {
    height: 100%;
}

input {
    background: none;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #ddd;
    height: 100%;
    padding: 0 6px;
}

button {
    background: no-repeat;
    border: none;
    color: #fff;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>