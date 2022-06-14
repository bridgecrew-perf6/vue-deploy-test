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
							<button class="modal-default-button" @click="onCloseMoal">
								예
							</button>
<!-- 
						   <button v-if="type === 'confirm'" class="modal-default-button" @click="gotoNo">
								아니요
							</button> -->

             <!-- <input type="text" class="input-form" ref="input1"> -->


					</div>
				</div>
			</div>
		</div>
	</transition>
</template>



<script>
//  import { useSelector, useDispatch } from 'react-redux';
// import { popupBottomAction } from '../../../reducer/popup';
import { computed, onMounted } from 'vue'


import { useRouter } from 'vue-router';
import { useStore } from 'vuex'


export default {
	props: {
	},

	emits: ["onCloseMoal"],

	setup(props, { emit }) {
		const router = useRouter();

		const store = useStore()

		const modal = computed(() => store.state.modal);
		console.log(modal.value.title);

		onMounted(() => {
			console.log("Mounted!");
			// onFocus();

		});


		// function onFocus() {

		// 	if (modal.value.focus !== '') {

		// 		const input = modal.value.focus;
		// 		document.querySelector(input).focus();

		// 	}


		// }



		const onCloseMoal = () => {

			// onFocus();


			if (callback !== '') {

				modal.value.callback();

			}

			store.dispatch('modalOpen', {
				isShow: false,
				type: 'confirm',
				confirm: true
			})



		};

		const gotoNo = () => {

			store.dispatch('modalClose', false)
		};

		const gotoYes = () => {


			store.dispatch('modalClose', true)
		};

		return { onCloseMoal, modal, gotoNo };
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
	transition: opacity 0.3s ease;
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
	transition: all 0.3s ease;
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
