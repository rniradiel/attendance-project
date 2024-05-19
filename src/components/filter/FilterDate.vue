<template>
    <div class="date">
        <h3 class="title">Date Range</h3>
        <input type="date" class="input-date">
        <input type="date" class="input-date">
    </div>
</template>

<style>
.date {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.title {
    font-size: 14px;
    text-transform: uppercase;
    color: #3C5B51;
    margin-bottom: 1rem;
}

.input-date {
    margin-bottom: 5px;
}
</style>