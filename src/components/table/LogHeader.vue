<template>
    <div class="log-header">
        <h2>
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-calendar-week" />  
            </span>
            {{ dateRangeTitle }}
        </h2>
        <div class="log-actions">
            <button class="active">Active Logs</button>
            <button>Deleted Logs</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dateRangeTitle: {
        type: String,
        required: true
      }
    },
}
</script>

<style scoped>
.log-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.log-header h2 {
    font-size: 16px;
    font-weight: 500;
}

.log-header .icon {
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