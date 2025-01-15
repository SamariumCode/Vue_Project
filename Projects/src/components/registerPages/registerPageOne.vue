<template>
  <div class="checkLogin_component">
    <header>
      <div class="header">
        <div class="logo_img-dev">
          <img class="logo_omg" src="../../assets/Logo.png" alt="" />
        </div>
      </div>
    </header>

    <main>
      <div class="main_form">
        <form class="form" @submit.prevent="submitBtn">
          <div class="main_topform-text">
            <p class="loginRegister_text">شما هنوز در هلیوم ثبت نام نکرده اید.</p>
            <p class="loginRegister_sub">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</p>
          </div>

          <div class="checkNumber">
            <p class="checkNumber_text">شماره تلفن همراه شما</p>
            <input
              v-model="phoneNumber"
              class="inputNumber"
              type="text"
              placeholder="مثال:   09152025065"
            />
            <p v-if="errors.phoneNumber" class="error">{{ errors.phoneNumber }}</p>
          </div>

          <div class="checkNumber">
            <p class="checkNumber_text">رمز عبور</p>
            <input
              v-model="password"
              class="inputNumber"
              type="password"
            />
            <p v-if="errors.password" class="error">{{ errors.password }}</p>
          </div>

          <div class="checkNumber">
            <p class="checkNumber_text">پست الکترونیک</p>
            <input
              v-model="email"
              class="inputNumber"
              type="text"
              placeholder="مثال:   example@heliu.com"
            />
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </div>

          <button class="continue_btn" type="submit">ثبت</button>
        </form>
      </div>
    </main>

    <footer>
      <div class="footer_form">
        <div class="right_sec">
          <div class="logo_section-img">
            <img class="footer_logo-img" src="../../assets/footerLogo.png" alt="" />
          </div>
          <p class="footer_text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است...
          </p>
        </div>

        <div class="left_sec">
          <span class="linkFor_shot">بنویسید</span>
          <span class="linkFor_shot">راهنما</span>
          <span class="linkFor_shot">معرفی به دوستان</span>
          <span class="linkFor_shot">قوانین</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Reactive data for form fields
const phoneNumber = ref('');
const password = ref('');
const email = ref('');

// Error messages
const errors = ref({
  phoneNumber: '',
  password: '',
  email: ''
});

// Form submission
function submitBtn() {
  // Reset errors
  errors.value = {
    phoneNumber: '',
    password: '',
    email: ''
  };

  let isValid = true;

  // Check phone number
  if (!phoneNumber.value) {
    errors.value.phoneNumber = 'لطفا شماره تلفن خود را وارد کنید';
    isValid = false;
  }

  // Check password
  if (!password.value) {
    errors.value.password = 'لطفا رمز عبور خود را وارد کنید';
    isValid = false;
  }

  // Check email
  if (!email.value) {
    errors.value.email = 'لطفا پست الکترونیک خود را وارد کنید';
    isValid = false;
  }

  if (isValid) {
    router.push("/mainPage");
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  margin-top: 4px;
}

* {
  box-sizing: border-box;
  margin: 0;
}

.checkLogin_component {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.header {
  width: 100%;
  height: 65px;
  background-color: #fafafad9;
  box-shadow: 0px 4px 8px 0px #131d260d;
  backdrop-filter: blur(50px);
}

.logo_img-dev {
  width: 146px;
  height: 41px;
  margin-top: 9px;
  margin-right: 496px;
}

.logo_omg {
  width: 100%;
  object-fit: cover;
}

.main_form {
  background-color: #fafbfc;
  box-shadow: 0px 8px 16px 0px #20304026;
  width: 478px;
  height: 388px;
  margin: 0 auto;
  border-radius: 12px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 388px;
}

.loginRegister_text {
  color: #28394f;
  font-family: "Kalameh Black";
  font-weight: 700;
  font-size: 20px;
}

.loginRegister_sub {
  color: #8593A6;
  font-size: 18px;
  font-family: "kalameh Regular";
  font-weight: 600;
  margin-top: 8px;
}

.checkNumber {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.checkNumber_text {
  font-family: "Kalameh Bold";
  color: #243447;
  font-size: 16px;
}

.inputNumber {
  all: unset;
  border-bottom: 2px solid #406080;
  border-radius: 2px;
  padding: 7px 16px;
  width: 100%;
}

.inputNumber::placeholder {
  color: #b8c1cd;
  font-family: "Kalameh Thin";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}

.continue_btn {
  background-color: #208bee;
  border: none;
  padding: 8px 24px;
  color: #ffffff;
  font-family: "Kalameh Bold";
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  width: 167px;
  height: 46px;
}

.footer_form {
  width: 100%;
  height: 131px;
  background-color: #232f3d;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.right_sec {
  display: flex;
  align-items: center;
  gap: 40px;
}

.footer_logo-img {
  width: 100%;
  object-fit: cover;
}

.footer_text {
  color: #ffffff;
  line-height: 28px;
  font-family: "kalameh Regular";
  font-weight: 400;
  font-size: 14px;
  width: 620px;
  height: 56px;
}

.left_sec {
  width: 432px;
  height: 31px;
  display: flex;
  justify-content: space-between;
}

.linkFor_shot {
  color: #ffffff;
  font-family: "kalameh Regular";
  font-weight: 400;
  font-size: 18px;
}
</style>
