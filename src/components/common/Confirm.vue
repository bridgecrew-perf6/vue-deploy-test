<template lang="">
 
	<transition name="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
			
					<div class="modal-header">
						{{title}}
					</div>

					<div class="modal-body">
							{{message}} 
					</div>

					<div class="modal-footer">
							<button class="modal-default-button" @click="goToYes">
								확인
							</button>

						   <button v-if="type === 'confirm'" class="modal-default-button" @click="goToNo">
								아니요
							</button>


					</div>
				</div>
			</div>
		</div>
	</transition>
</template>



<script>
import { computed, inject, onMounted } from 'vue'


import { useRouter } from 'vue-router';

export default {

    setup() {
        const router = useRouter();


        const isModal = inject("isModal")

        const title = inject("title")
        const message = inject("message")
        const confirm = inject("confirm")
        const closeModal = inject("closeModal")



        onMounted(() => {


            console.log('asdfa', title, confirm);

        });




        const goToNo = () => {
            closeModal()



        };

        const goToYes = () => {

            closeModal()




        };

        return { title, message, goToNo, goToYes };
    },
};


</script>


<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 1s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 1s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
