<template lang="">

    <div>


        <h1>main</h1>

   업데이트가 되었나?-05:11
        <button @click="onClick">

            <i class="btn-modal-close fas fa-times" >모달 1</i>
        </button>

        

             <br>

             <input type="text" class="input-form" ref="input1">

    </div>

</template>

<script>
import { reactive, ref, inject } from 'vue';

import { useRouter } from 'vue-router';
// import { useStore } from 'vuex'


export default {

    setup(props) {
        const router = useRouter();

        // const store = useStore()

        const input1 = ref(null);

        const showModal = inject("showModal")




        function onClick() {

            function callback() {
                input1.value.focus();
            }


            showModal('제목제목', 'ㅇㅇㅇㅇ', callback)


        }




        return {
            input1, onClick

        }

    }

}
</script>
<style lang="scss">

button{
    color:var(--primary-1);

} 
    
</style>