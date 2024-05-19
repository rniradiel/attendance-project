<template>
    <div class="log-header">
        <h2>
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-calendar-week" />  
            </span>
            Date Range
        </h2>
        <div class="log-actions">
            <button class="active">Active Logs</button>
            <button>Deleted Logs</button>
        </div>
    </div>
</template>

<style scoped>
.log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

h2 {
    font-size: 16px;
}

.icon {
    color: #17AD49;
}

.log-actions button {
    padding: 8px;
    background-color: #fff;
    border: 1px solid #17AD49;
    color: #17AD49;
}

.log-actions button:nth-child(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.log-actions button:nth-child(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.log-actions button.active {
    background: #17AD49;
    color: #fff;
}

</style>