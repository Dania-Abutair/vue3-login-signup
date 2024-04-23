<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="12">
        <v-card class="elevation-12" variant="outlined" color="purple">
          <div class="image-container">
            <img src="@/assets/login.png" height="100" width="100" aspect-ratio="16/9" />
          </div>
          <v-card-text>
            <h2 class="mb-4">Login</h2>
            <v-form @submit.prevent="login" v-model="valid">
              <v-text-field
                v-model="email"
                label="Email"
                required
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :rules="passwordRules"
              ></v-text-field>
              <div class="d-flex submit-sction">
                <v-btn type="submit" color="purple" :disabled="!valid">Login</v-btn>
                <div>
                  Don't have an account? <router-link to="/signup">Sign up</router-link>
                </div>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const email = ref("");
    const password = ref("");
    const valid = ref(false);

    const emailRules = [
      (v: string) => !!v || "Email is required",
      (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
    ];

    const passwordRules = [
      (v: string) => !!v || "Password is required",
      (v: string) => v.length >= 6 || "Password must be at least 6 characters",
    ];

    const login = () => {
      if (!email.value || !password.value) {
        return;
      }

      console.log("User logged in successfully:");
      console.log("Email:", email.value);

      // Redirect the user to the home page
      router.push("/");
    };

    return { email, password, valid, emailRules, passwordRules, login };
  },
});
</script>

<style scoped>
</style>
