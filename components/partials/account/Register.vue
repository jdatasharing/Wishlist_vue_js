<template>
    <div>
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <!-- <li>404 Not Found</li> -->
                </ul>
            </div>
        </div>

        <section class="signup-area ptb-60">
            <div class="container">
                <div class="signup-content">
                    <div class="section-title">
                        <h2><span class="dot"></span> <center>Create an Account</center></h2>
                    </div>

                    <form class="signup-form" @submit.prevent='register'>
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" class="form-control" placeholder="Enter your Fname" id="fname" name="fname" v-model="form.fname" pattern="[A-Za-z]{2,30}" required> 
                        </div>

                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" class="form-control" placeholder="Enter your Lname" id="lname" name="lname" v-model='form.lname' pattern="[A-Za-z]{2,30}" required>
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" placeholder="Enter your Email" id="name" name="email" v-model='form.email' required>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter your Password" id="password" name="password" v-model='form.password' required>
                        </div>
                         <div class="form-group">
                            <label>Contact Number</label>
                            <input type="text" class="form-control" placeholder="Enter your Mobile Number" id="password" name="phone" v-model='form.phone' pattern="[0-9]{10,11}" required>
                        </div>

                        <br>

                       <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                   
                >
                    Register
                </button>

                        <nuxt-link to="/" class="return-store">or Return to Store</nuxt-link>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          fname: '',
          lname:'',
          password:'',
          phone:''


        },

      }
    },
  methods: {
    async register() {
        
     try{  
         
          let d =  await this.$axios.post('http://127.0.0.1:8000/api/v1/register', 
          this.form
        );
        // console.log("the value is "+d);

        if(d.status == 200)
        {
            alert("Registration Sucessfully done");
            this.$router.push('/account/login');

        }
        if(d.status == 401)
        {
            alert("Something went Wrong ");
             this.$router.push('account/signup');
        }
     }catch(e){
            // console.log("busagterffubsf"+d);
            alert("Email  Must Be unique");
     }
        
      

      

  
    
    }
  }
}
</script>
