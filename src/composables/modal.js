
import { reactive, ref, computed } from 'vue'

export const useModal = () => {

    const state = reactive({
        // type: '', //modal, confirm
        isModal: false,
        isConFirm: false,
        title: '',
        conform: false,
        message: '',

        callback: () => {

            console.log('callback');
        }
    })



    const isModal = computed(() => state.isModal)
    const isConFirm = computed(() => state.isConFirm)
    const title = computed(() => state.title)
    const message = computed(() => state.message)
    const conform = computed(() => state.conform)
    const callback = computed(() => state.callback)






    function closeModal() {

        state.isModal = false;

        state.conform = false;

        state.title = '';
        state.message = '';
        state.focus = null;



        // if (typeof state.focus === 'undefined' || state.focus === null || state.focus === '') {
        //     return;
        // }

        // document.querySelector(state.focus).focus();

        if (typeof state.callback === 'undefined' || state.callback === null || state.callback === '') {
            return;
        }

        state.callback();




    }
    function showModal(title, text, callback) {
        state.isModal = true;
        console.log('state', state);

        state.title = title;
        state.message = text;

        state.callback = callback


    }

    function showConfirm(title, text, callback) {
        state.isConFirm = true;
        console.log('state', state);

        state.title = title;
        state.message = text;

        state.callback = callback


    }


    return {

        isModal,
        conform,
        isConFirm,
        title,
        message,

        showModal,
        showConfirm,
        closeModal,
    }
}
