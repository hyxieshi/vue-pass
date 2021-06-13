<template>
  <div>
    <input type="text" class="text" />
    <svg class="icon search" aria-hidden="true" @click="search">
      <use xlink:href="#icon-sousuo" />
    </svg>
    <svg class="icon add" aria-hidden="true" @click="add()">
      <use xlink:href="#icon-tianjia" />
    </svg>
    <!-- <svg class="icon" aria-hidden="true" @click="refresh">
      <use xlink:href="#icon-shuaxin" />
    </svg>-->
  </div>
</template>

<script>
// import axios from '@/api/request'
export default {
  name: "Head",
  data(){
    return{
    }
  },
  created(){
    
},
  methods: {
    add() {
      this.$router.push({
        path:`/add/${this.$store.state.data.user}`
        // params: {
        //   user: this.$store.state.data.user,
        // },
      });
    },
  },
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.5rem;
  .text {
    flex: 4;
    border-style: none;
    border-bottom: 1px solid rgb(147, 147, 147);
    background-color: transparent;
    height: 0.4rem;
    padding: 10px;
  }
  .text:focus {
    outline: none;
  }
  .icon {
    flex: 1;
    font-size: 0.42rem;
  }
}
</style>