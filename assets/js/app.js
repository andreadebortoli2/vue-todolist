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
            text !== null ? (this.toDos.push(newToDo), this.message = null) : null;
        },
        toggleDone(index) {
            this.toDos[index].done === false ? this.toDos[index].done = true : this.toDos[index].done === true ? this.toDos[index].done = false : null
        },
    }
}).mount('#app')