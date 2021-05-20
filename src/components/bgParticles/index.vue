<template>
    <Particles
        :id="domName"
        
        :options="{
            background: {
                color: {
                    value: '#87CEFA'
                }
            },
            fpsLimit: 20,
            fullScreen:{
                enable:true
            },
            interactivity: {
                detectsOn: 'canvas',
                events: {
                    onHover: {
                        enable: true,
                        mode: 'connect'
                    },
                    resize: true
                },
                modes: {
                    connect: {
                        distance: 150,
                        radius: 60,
                        lineLinked:{
                            opacity:0.7
                        }
                    },
                }
            },
            particles: {
                color: {
                    value: '#ffffff'
                },
                links: {
                    color: '#FDF5E6',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                collisions: {
                    enable: true
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outMode: 'bounce',
                    random: false,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }"
    />
</template>
<script lang="ts">
/**
 * Particles 自定义封装
 * 使用说明：
 *   1、使用Demo：
 *      import bgParticles from '@/components/bgParticles';
 *      import { defineComponent } from "vue";
 *      export default defineComponent({
 *          components: {
 *              bgParticles
 *          }
 *      })
 *      <bgParticles :id="元素id"/>
 */
import { defineComponent } from "vue";
export default defineComponent({
    name: 'bgParticles',
    props: {
        domName: {
            type: String,
            required: true
        }
    },
    setup(){
        //:particlesInit="particlesInit"
        //:particlesLoaded="particlesLoaded"
        const particlesInit = (val:any)=>{
            
        }
        const particlesLoaded = (val:any)=>{
            
        }
        return {
            particlesInit,
            particlesLoaded
        }
    }
});
</script>
<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>