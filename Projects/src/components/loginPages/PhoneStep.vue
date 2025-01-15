<template>
  <div class="step-container">
    <header>
      <div class="header">
        <div class="logo_img-dev">
          <img class="logo_omg" src="../../assets/Logo.png" alt="لوگو" />
        </div>
      </div>
    </header>

    <main>
      <div class="main_form">
        <form class="form" @submit.prevent="submitPhone">
          <p class="loginRegister_text">ورود / ثبت نام</p>
          <div class="checkNumber">
            <p class="checkNumber_text">لطفا شماره همراه خود را وارد کنید</p>
            <input
              v-model="phone"
              class="inputNumber"
              type="text"
              placeholder="مثال: 123456789"
              required
            />
          </div>

          <button class="continue_btn" type="submit">
            ادامه
          </button>
        </form>
      </div>
    </main>

    <footer>
      <div class="footer_form">
        <div class="right_sec">
          <div class="logo_section-img">
            <img
              class="footer_logo-img"
              src="../../assets/footerLogo.png"
              alt="لوگو فوتر"
            />
          </div>
          <p class="footer_text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
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
import { ref } from "vue";
import { useRouter } from "vue-router";

const phone = ref("");
const router = useRouter();

function submitPhone() {
  if (phone.value === "12345678") {
    alert("رمز عبور شما: 123456789");
    router.push({ name: "CheckPassword", query: { phone: phone.value } });
  } else {
    router.push("/register");
  }
}
</script>



<style scoped>
.step-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  font-family: "Kalameh Regular";
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
  margin: 9px auto;
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
  padding: 51px 59px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.loginRegister_text {
  color: #28394f;
  font-family: "Kalameh Black";
  font-weight: 700;
  font-size: 20px;
}

.checkNumber {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 360px;
}

.checkNumber_text {
  font-family: "Kalameh Bold";
  color: #243447;
  font-size: 16px;
}

.inputNumber {
  all: unset;
  border-bottom: 2px solid #406080;
  padding: 7px 16px;
  width: 100%;
}

.inputNumber::placeholder {
  color: #b8c1cd;
  font-family: "Kalameh Thin";
  font-size: 16px;
  text-align: right;
}

.continue_btn {
  background-color: #208bee;
  border: none;
  padding: 8px 24px;
  color: #ffffff;
  font-family: "Kalameh Bold";
  font-size: 14px;
  border-radius: 4px;
  width: 167px;
  height: 46px;
}

/* فوتر */
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
  font-family: "Kalameh Regular";
  font-size: 14px;
  width: 620px;
}

.left_sec {
  display: flex;
  justify-content: space-between;
}

.linkFor_shot {
  color: #ffffff;
  font-family: "Kalameh Regular";
  font-size: 18px;
}
</style>
