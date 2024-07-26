<template>
  <div id="credentials">
    
    <form class="grid center">
      <img src="../assets/img/cute-cat-surprised.jpeg" alt="Cute cat surprised" />
      <input type="email" placeholder="E-mail" v-model="email" class="input" />
      <input type="password" placeholder="Password" v-model="password" class="input" />
      <input type="password" placeholder="Confirm Password" v-model="passwordConfirmation" v-if="signUp" class="input" />
      <input type="button" @click="calculateCredentials" :value="`${signUp ? 'Register me' : 'Login into my account'}`" class="input submit" />
    </form>

    <p class="text-center">
      <a @click="signUpToggle()">I want to {{ !signUp ? 'sign up' : 'sign in' }}</a>
    </p>
  </div>
</template>

<script>
import callAPI from '@/helpers/callAPI'

export default {
  name: 'Credentials',
  props: {
    title: String
  },
  data() {
    return {
      email: {
        type: String,
        default: ''
      },
      password: {
        type: String,
        default: ''
      },
      passwordConfirmation: {
        type: String,
        default: ''
      },
      signUp: {
        type: Boolean,
        default: false
      },
      url: 'user/register',
      method: 'post',
    }
  },
  methods: {
    signUpToggle() {
      this.signUp = !this.signUp;
    },
    async calculateCredentials() {
      if(this.signUp)
        this.url = 'user/register';
      else
        this.url = 'user/login';

      const result = await callAPI(this.data);
      console.log(result);
    }
  }
}
</script>

<style>
  #credentials {
    padding: var(--gap-xxxl);
    border: 2px solid var(--black);
    border-style: solid dashed solid dashed;
    border-radius: var(--gap-sm);
  }
  #credentials form img {
    max-width: 256px;
    margin: 0 auto var(--gap) auto;
    border-radius: 100%;
    border: 1px solid var(--black);
    box-shadow: 4px 4px 4px var(--black);
  }
  #credentials form .input {
    display: block;
    max-width: 300px;
    margin: var(--gap) auto;
  }
</style>
