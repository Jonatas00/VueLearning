<template>
  <footer>
    <p>Make Your Burger &copy; 2023</p>
    <p>Projeto feito durante o <a :href="link_curso" target="_blank">curso de Vue3 do Matheus Battisti</a></p>
    <a :href="link_repo" target="_blank">Link do repositório</a>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    data() {
      return {
        link_curso: 'https://youtube.com/playlist?list=PLnDvRpP8BnezDglaAvtWgQXzsOmXUuRHL',
        link_repo: 'https://github.com/Jonatas00/VueLearning/tree/main/4ProjetoVue'
      }
    }
  }
</script>
<style scoped>
  footer {
    width: 100%;
    position: static;
    left: 0;
    bottom: 0;
    height: 200px;
    background-color: #222;
    border-top: 4px solid #111;
    color: #FCBA03;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  }
  p {
    padding: 10px;
  }
  a {
    color: #FFF;
    text-decoration: none;
  }
  a:hover {
    color: #f5d680;
  }
</style>