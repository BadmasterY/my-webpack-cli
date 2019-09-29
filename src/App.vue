<template>
  <div id="index">
    {{ msg }}
  </div>
</template>

<style scope>
::-moz-selection {
  background: #515a6e;
  color: #fff;
}
::selection {
  background: #515a6e;
  color: #fff;
}
html {
  user-select: none;
}
html,
body,
#index {
  height: 100%;
  background: #f2f2f2;
}
</style>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!'
    };
  }
};
</script>