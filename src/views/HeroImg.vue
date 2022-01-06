<template>

<div class="heroimg">
  <div class="herotxt">
    <h1>Welcome To Galaxy!</h1>
  </div>
</div>

</template>

<script>

export default {
    name: "HeroImg"
}

</script>

<style scoped>

h1 {
  font-size: 100px;
}

.heroimg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url("https://upload.wikimedia.org/wikipedia/commons/8/8c/Andromeda_Galaxy_560mm_FL.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 70%;
}

.herotxt {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color: white;
}

</style>