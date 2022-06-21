<template lang="">
        <h1>page2</h1>
    <button @click="onClick">클릭
        </button>

     <section class="sticky-wrap">


        

    </section>


</template>


<script lang="ts">
import { defineComponent } from 'vue'
import qs from 'qs';
import axios from 'axios';

export default defineComponent({

    setup(){





//주소검색
 const addressSchExec = async () => {

    		const params = {
				addrType: 'K',
				addr: '신도림',
				page: 1,
				pagesize: 10,
			}
	try {
		const response = await axios.post('http://localhost:9000/app.php?m=addressSchExec', qs.stringify(params));
		console.log(response);
		return response.data;
	} catch (error) {
		return console.log('error addressSchExec', error);
	}
};

function onClick(){
    addressSchExec();
}



	const aBannerList = fetch("http://127.0.0.1:9000/app/homeApi.php?p=aBannerList");

    	aBannerList
			.then((response) => {
				return response.json();
			})
			.then((datas) => {
				console.log("baner", datas);
			})

        return{onClick}
    }


})
</script>