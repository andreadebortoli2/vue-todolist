// console.log('test');

const { createApp } = Vue

createApp({
    data() {
        return {
            toDos: [
                {
                    text: 'MILESTONE 1',
                    done: false,
                },
                {
                    text: 'MILESTONE 2',
                    done: false,
                },
                {
                    text: 'MILESTONE 3',
                    done: false,
                },
            ]
        }
    }
}).mount('#app')