<template>
  <div>
    <Message :msg="msg" v-show="msg"/>
    <form id="burger-form" @submit="createBurger">
      <div class="input-container">
        <label for="name">Nome do cliente:</label>
        <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="bread">Escolha o pão:</label>
        <select name="bread" id="bread" v-model="bread">
          <option value="">Selecione o pão</option>
          <option v-for="bread in breaddata" :key="bread.id" :value="bread.tipo">
            {{ bread.tipo }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="meat">Escolha a carne:</label>
        <select name="meat" id="meat" v-model="meat">
          <option value="">Selecione a carne</option>
          <option v-for="meat in meatdata" :key="meat.id" :value="meat.tipo">
          {{ meat.tipo }}
          </option>
        </select>
      </div>
      <div id="aditions-container" class="input-container">
        <label id="aditions-title" for="aditions">Selecione os opcionais</label>
        <div v-for="adition in aditionsdata" :key="adition.id" class="checkbox-container">
          <input type="checkbox" name="aditions" v-model="aditions" :value="adition.tipo">
          <span>{{ adition.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input type="submit" class="submit-btn" value="Criar meu burger">
      </div>
    </form>
  </div>
</template>
<script>
import Message from './Message.vue';

  export default {
    name: 'BurgerForm',
    data() {
        return {
            breaddata: null,
            meatdata: null,
            aditionsdata: null,
            name: null,
            bread: null,
            meat: null,
            aditions: [],
            msg: null
        };
    },
    methods: {
        async getIngredients() {
            const req = await fetch("http://localhost:3000/ingredientes");
            const data = await req.json();
            this.breaddata = data.paes;
            this.meatdata = data.carnes;
            this.aditionsdata = data.opcionais;
        },
        async createBurger(e) {
            e.preventDefault();
            const data = {
                nome: this.name,
                pao: this.bread,
                carne: this.meat,
                opcionais: Array.from(this.aditions),
                status: "Solicitado"
            };
            const dataJSON = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJSON
            });
            const res = await req.json();

            this.msg = `Pedido Nº${res.id} realizado com sucesso`;

            setTimeout(() => this.msg = "", 3000);

            this.name = "";
            this.bread = "";
            this.meat = "";
            this.aditions = "";
        }
    },
    mounted() {
        this.getIngredients();
    },
    components: { 
      Message 
    }
}
</script>
<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
  }
  input, select {
    padding: 5px 10px;
    widows: 300px;
  }
  #aditions-container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  #aditions-title {
    width: 100%;
  }
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    widows: 50%;
    margin-bottom: 20px;
    margin-left: 5px;
  }
  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }
  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }
  .submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>