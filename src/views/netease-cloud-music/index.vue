<template>
  <div>
    <input v-model="phone"
           type="text" />

    <button @click="handlerSendCaptcha">发送验证码</button>
  </div>
</template>

<script>
import { getLoginCellPhone, getCaptcha } from "@/api/neteaseCloudMusicApi";
export default {
  name: "NeteaseCloudMusic",
  data() {
    return {
      phone: "",
    };
  },

  methods: {
    handlerSendCaptcha() {
      let options = {
        phone: this.phone,
      };

      getCaptcha(options).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>