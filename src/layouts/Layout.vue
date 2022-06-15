<template>
    <div class="layout-wrap">
        <header>header</header>

        <Transition name="bounce1">

            <div v-show="setInfo" class="info-section mb-4">

                <div class="row text-center">
                    <div class="col-8">

                        <div class="line-box">
                            영업중
                            <br>
                            영업시간 ~~

                        </div>
                    </div>

                    <div class="col-4">
                        <div class="line-box">
                            phone num

                        </div>

                        <div class="line-box">
                            지도

                        </div>
                    </div>
                </div>

            </div>
        </Transition>

        <nav>

            <ul class="nav d-flex">
                <li class="col">
                    <router-link to="/">main</router-link>

                </li>

                <li class="col">
                    <router-link to="/page2">page2</router-link>

                </li>

                <li class="col">
                    <router-link to="/page3">page3</router-link>

                </li>

                <li class="col">
                    <router-link to="/page4">page4</router-link>

                </li>

            </ul>
        </nav>
        <main class="contents">

            <!-- <router-view v-slot="{ Component }">
                <transition appear :name="routerAnimation" mode="out-in">

                    <component :is="Component"></component>
                </transition>

            </router-view> -->

              <router-view />
        </main>

    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head'

export default defineComponent({
    data() {
        return {
            routerAnimation: "slide-fade",
        };
    },

    // watch: {
    //     $route(to, from) {
    //         const toDepth = to.path === "/" ? 1 : to.path.split("/").length;
    //         const fromDepth = from.path === "/" ? 1 : from.path.split("/").length;
    //         this.routerAnimation = toDepth < fromDepth ? "slide-right" : "slide-left";
    //         console.log(
    //             to.path,
    //             toDepth,
    //             from.path,
    //             fromDepth,
    //             "apply ",
    //             this.routerAnimation
    //         );
    //     },
    // },

    setup() {
        const route = useRoute();



        const setInfo = ref(
            computed(() => {
                if (route.name === 'main') {
                    return true;
                } else {
                    return false;
                }
            })
        );
        
		const siteData = ref({
			title: `타이틀`,
			description: `description`,
			keywords: `keywords`,
		})


         const cssLink = ref(
            computed(() => {
                if (route.name === 'main') {
                    return './css/variable-demo-1.css';
                } else {
                    return './css/variable-demo-2.css';
                }
            })
        );

		useHead({
			// Can be static or computed
			title: computed(() => siteData.value.title),
			meta: [
				{
					name: `description`,
					content: computed(() => siteData.value.description),
				},
				{
					name: `keywords`,
					content: computed(() => siteData.value.keywords),
				},
			],
			link: [{ rel: 'stylesheet', href: cssLink }],
		})

        return { setInfo };
    },
});
</script>
<style scoped>
header {
    border-bottom: 1px solid #ddd;
}

.layout-wrap {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
 
    background: #fff;
}

.nav li {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #eee;


}

.info-section .line-box {
    padding: 10px;

    border: 1px solid #ddd;

}

.contents {
    padding: 30px 0;
}

a {
    text-decoration: none;
    display: block;
    color: #333;
}

a.router-link-active {
    border-bottom: 2px solid blueviolet;
}

/* animation */

/* basic */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
} */


.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
}

.slide-right-enter,
.slide-left-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}

.slide-left-enter,
.slide-right-leave-to {
    transform: translateX(100px);
    opacity: 0;
}






.router-animation-enter-active {
    animation: coming 0.5s;
    /* animation-delay: 0.5s; */
    opacity: 0;
}

.router-animation-leave-active {
    animation: going 0.3s;
    opacity: 0;
}

@keyframes going {
    from {
        transform: translateX(0);
        opacity: 1;
    }

    to {
        transform: translateX(-100px);
        opacity: 0;
    }
}

@keyframes coming {
    from {
        transform: translateX(100px);
        opacity: 1;
    }

    to {

        transform: translateX(0px);
        opacity: 1;
    }
}
</style>