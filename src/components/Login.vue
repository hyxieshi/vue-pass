<template>
  <div class="login">
    <div class="yonghu">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yonghu" />
      </svg>
      <input type="text" ref="getName" />
    </div>
    <div class="hj">
      <svg class="icon" aria-hidden="true" @mousedown="magic">
        <use xlink:href="#icon-hj" />
      </svg>
      <input :type="inputtpye" ref="getPass" />
    </div>
    <button @click="login" to="/home">登陆</button>
  </div>
</template>

<script>
import { postUser } from "@/db/db";

export default {
  data() {
    return {
      inputtpye: "password",
    };
  },
  methods: {
    magic() {
      (this.inputtpye = "text"),
        setTimeout(() => {
          if (this.inputtpye == "text") {
            this.inputtpye = "password";
          }
        }, 2000);
    },
    login() {
      let dataUser = postUser(
        this.$refs.getName.value,
        this.$refs.getPass.value
      );
      // console.log(dataUser.user)
      this.$store.state.data = dataUser;
      this.$router.push({path: '/home'})
    },
  },
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  padding: 10px;
  width: 5.8rem;
  justify-content: space-evenly;
}
.login {
  width: 6.5rem;
  height: 5rem;
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
    flex: 6;
    line-height: 0.5rem;
    border-style: none;
    border-bottom: 1px solid rgb(147, 147, 147);
    background-color: transparent;
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