<template>
    <footer class="footer">
        <div class="container text-left" v-once>
            <ul>
                <li>有戏网 Copyright (c) 2018&nbsp;
                    <a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank">
                        {{systemConfig.data[0].registrationNo}}
                    </a>
                </li>
                <li class="sitemap">
                    <router-link to="/sitemap.html" class="">站点地图</router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
  let packageJson = require("../../../package.json");

  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "Footer",
    async asyncData({store, route}, config = {}) {
      const {params: path} = route;
      const base = {
        ...config,
        path
      };
      await store.dispatch("global/footerConfigs/getSystemConfig");
    },
    serverCacheKey: props => "footer",
    computed: {
      ...mapGetters({
        systemConfig: "global/footerConfigs/getSystemConfig"
      }),
      codeVersion() {
        return "DoraCMS " + packageJson.version;
      }
    }
  };
</script>
<style lang="scss">

</style>
