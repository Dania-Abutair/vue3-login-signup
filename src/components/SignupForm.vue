<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="12">
        <v-card class="elevation-12" variant="outlined" color="purple">
          <div class="image-container">
            <img
              src="@/assets/signup.png"
              class="mt-3"
              height="100"
              width="100"
              aspect-ratio="16/9"
            />
          </div>
          <v-card-text>
            <h2 class="mb-4">Sign Up</h2>
            <v-form @submit.prevent="signup" v-model="valid">
              <v-text-field
                v-model="fullName"
                label="Full Name"
                :rules="fullNameRules"
                required
              ></v-text-field>
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
              <v-text-field
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                required
                :rules="confirmPasswordRules"
              ></v-text-field>
              <div class="d-flex submit-sction">
                <v-btn type="submit" color="purple" :disabled="!valid">Signup</v-btn>
                <div>
                  Already have an account? <router-link to="/login">Login</router-link>
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

    const fullName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const valid = ref(false);

    const emailRules = [
      (v: string) => !!v || "Email is required",
      (v: string) => /.+@.+\..+/.test(v) || "Email must be valid",
    ];

    const passwordRules = [
      (v: string) => !!v || "Password is required",
      (v: string) => v.length >= 6 || "Password must be at least 6 characters",
    ];

    const confirmPasswordRules = [
      (v: string) => !!v || "Confirm Password is required",
      (v: string) => v === password.value || "Passwords must match",
    ];

    const fullNameRules = [(v: string) => !!v || "Full Name is required"];

    const signup = () => {
      if (!fullName.value || !email.value || !password.value || !confirmPassword.value) {
        return;
      }

      if (password.value !== confirmPassword.value) {
        return;
      }

      console.log("User signed up successfully:");
      console.log("Full Name:", fullName.value);
      console.log("Email:", email.value);
      console.log("Password:", password.value);

      // Redirect the user to the login page
      router.push("/login");
    };

    return {
      fullName,
      email,
      password,
      confirmPassword,
      valid,
      emailRules,
      passwordRules,
      confirmPasswordRules,
      fullNameRules,
      signup,
    };
  },
});
</script>

<style scoped>
</style>
