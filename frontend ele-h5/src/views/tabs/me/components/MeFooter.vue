<script setup lang="ts">

</script>

<template>
    <section id="footer">
        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
      <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
      <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
      <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
      <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
      <div class="copyright">
      <ul class="menu">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </div>
    </section>

</template>

<style lang="scss" scoped>
#footer {
  // 添加你的样式
  .icons {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    
    li {
      margin: 0 10px;
    }
  }

  .copyright {
    text-align: center;
    margin-top: 20px;
    
    .menu {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      
      li {
        margin: 0 10px;
      }
    }
  }
}
</style>