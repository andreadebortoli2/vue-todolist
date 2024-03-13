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
            ],
            message: null,
        }
    },
    methods: {
        remove(index) {
            // console.log('remove ' + index);
            this.toDos.splice(index,1)
        },
        addToDoList(text){
            const newToDo = {
                text: text,
                done: false,
            };
            text !== '' ? (this.toDos.push(newToDo), this.message = '') : null;
        },
    }
}).mount('#app')