<template lang="">
   

         <ul class="tab-nav d-flex" > 
            <li v-for="(tab,i) in tabs" :key="i" @click="onSelect(i)"  class="col">
               <a class="nav-link" :class="{on : i === selected}" >{{tab}}</a>
            </li>
         
        </ul>

       <slot></slot>

    
</template>


<style scoped>
.tab-nav li {
    position: -webkit-sticky;
    position: sticky;
    top: 0;

}

li {
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    text-align: center;
}

.on {

    background: yellow;
}
</style>

<script>
import { ref } from 'vue';

export default {


    props: {
        tabs: [],
        selected: Number
    },

    emits: ["onSelect"],
    setup(props, { emit }) {

        const selected = ref(0)




        function onSelect(i) {
            selected.value = i
            emit("onSelect", i);
        }


        return { onSelect }

    }

}
</script>