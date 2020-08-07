<template lang="html">
    <form @submit.prevent='login'>
        <div class="ps-form__content">
            <h5>Log In Your Account</h5>
            <div class="form-group">
                <v-text-field
                    v-model="form.email"
                    class="ps-text-field"
                    placeholder="Email or email"
                    height="50"
                    required
                    outlined
                />
            </div>
            <div class="form-group">
                <v-text-field
                    v-model="form.password"
                    type="password"
                    class="ps-text-field"
                    placeholder="Please enter password"
                    height="50"
                    required
                    outlined
                />
            </div>
            <div class="form-group">
                <v-checkbox label="Remember me" color="warning" />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    
                >
                    Login
                </button>
            </div>
        </div>
       
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';
import jsCookie from 'js-cookie';

export default {
    name: 'Login',
    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('This field is required');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('This field is required');
            return errors;
        }
    },
    data() {
        return {
            form:{
            email: null,
            password: null
            }
        };
    },
    validations: {
        email: { required },
        password: { required }
    },
    methods: {
        login() {

        //  this.$axios.post('logout').then((resp) => {
         
        //   this.$axios.setHeader('Authorization', 'Bearer ' + x)
        // })

        this.$axios.$post('http://127.0.0.1:8000/api/v1/login', this.form)
          .then(({token, expiresIn}) => {
            this.$store.dispatch('auth/setAuthStatus', true)
            
           
            localStorage.setItem('x-token-site', token);
            // let x = cookies.set('auth',token);


            

            

            console.log(token);
            // console.log(user);
            alert('Login Success');
              this.$router.push('/');
       
        //       console.log('token set');

          })
          .catch(errors => {
            console.dir(errors);
            alert('Check Email Or Password is wrong')
          });
      },
       
        }
};
</script>

<style lang="scss" scoped></style>
