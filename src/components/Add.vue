<template>
  <div class="add">
    <h2>添加信息</h2>
    <div class="mingcheng">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-mingcheng" />
      </svg>
      <input type="text" ref="getBt" />
    </div>
    <div class="yonghu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yonghu" />
      </svg>
      <input type="text" ref="getUser" />
    </div>
    <div class="hj">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-hj" />
      </svg>
      <input type="text" ref="getPass" />
    </div>
    <div class="biaoqian">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-biaoqian" />
      </svg>
      <input type="text" :value="mag.YXbiaoqian" ref="getBq" />
    </div>
    <div class="fuxuan">
      <span>
        <input type="checkbox" name="vehicle" value="QQ" v-model="mag.YXbiaoqian" />QQ
        <input type="checkbox" name="vehicle" value="WX" v-model="mag.YXbiaoqian" />WX
        <input type="checkbox" name="vehicle" value="emile" v-model="mag.YXbiaoqian" />EMILE
        <input type="checkbox" name="vehicle" value="google" v-model="mag.YXbiaoqian" />GOOGLE
      </span>
    </div>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import { postMag } from "@/db/db";

export default {
  name: "Add",
  data() {
    return {
      mag: {
        YXbiaoqian: [],
      },
    };
  },
  methods: {
    add() {
      // console.log(`你的标题${this.$refs.getBt.value}用户名${this.$refs.getUser.value}密码${this.$refs.getPass.value}标签${this.$refs.getBq.value}`)
      let title = this.$refs.getBt.value;
      let name = this.$refs.getUser.value;
      let pass = this.$refs.getPass.value;
      let label = this.$refs.getBq.value.split(",");
      let user = this.$route.params.user;
      if (title != "" || name != "" || pass != "" || label != "") {
        postMag(title, name, pass, label, user);
      }
    },
  },
};
</script>


<style lang="less" scoped>
div {
  display: flex;
  padding: 6px;
  width: 6rem;
  justify-content: space-evenly;
}
.add {
  width: 6.5rem;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  svg {
    flex: 1;
    font-size: 0.4rem;
  }
  input {
    flex: 5;
    width: 0.2rem;
    height: 0.2rem;
    line-height: 0.5rem;
    border-style: none;
    border-bottom: 1px solid rgb(147, 147, 147);
    background-color: transparent;
  }
  .fuxuan {
    margin: 10px 0;
  }
  input:focus {
    outline: none;
  }
  button {
    width: 2rem;
    height: 0.8rem;
    border-style: none;
    border-radius: 20px;
    font-size: 0.3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  button:active {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>