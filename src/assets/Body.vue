<template>
  <div class="card" v-for="(item,i) in list" :key="i">
    <div class="biaoti">
      <h3>{{item.title}}</h3>
      <h6>{{Date(item.date)}}</h6>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-0genggaimima-05" />
      </svg>
      <svg class="icon" aria-hidden="true" @click="dele">
        <use xlink:href="#icon-shanchu1" />
      </svg>
    </div>
    <div class="list">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yonghu" />
      </svg>
      <p>{{item.username}}</p>
    </div>
    <div class="list">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hj" />
      </svg>
      <p>{{item.userpass}}</p>
    </div>
    <div class="tag">
      <p v-for="(biaoqian,i) in item.label" :key="i">{{biaoqian}}</p>
    </div>
  </div>
</template>

<script>
// import axios from '@/api/request'

export default {
  data() {
    return {
      list: this.$store.state.data.data,
    };
  },
  methods: {
    dele() {},
  },
};
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 6.5rem;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 0.3rem;
  padding: 10px;
  .biaoti {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 6.5rem;
    h3 {
      flex: 3;
    }
    h6 {
      flex: 1;
    }
    svg {
      flex: 1;
    }
  }
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 6.5rem;
    svg {
      flex: 1;
    }
    p {
      flex: 5;
      text-align: left;
    }
  }
  .tag {
    display: flex;
    justify-content: space-evenly;
    p {
      font-size: 0.2rem;
      color: rgba(0, 0, 0, 0.589);
      padding: 0.1rem;
      border-radius: 0.78rem;
      border: 1px solid rgba(0, 0, 0, 0.19);
    }
  }
}
</style>