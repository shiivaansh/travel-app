<template>
    <h2>
       <section class="destination">
           <h1> {{destination.name}} </h1>
           <div class="destination-details">
               <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name"/>
               <p>{{destination.description}}</p>
           </div>
       </section>
    </h2>    
</template>
<script>
import store from '@/store';
 export default{
     data(){
         return{
             destinationId: this.$route.params.id, // store the destination id in specific var
         }
     },
     computed: {
         destination(){
             return store.destinations.find(
                 destination => {
                 return destination.id===this.destinationId;
               }
             )
         }
     }
 }
</script>