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
          <p class="loginRegister_text">ورود</p>
          <div class="checkNumber">
            <p class="checkNumber_text">رمز عبور</p>
            <input
              v-model="pass"
              class="inputNumber"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>

          <button @click.prevent="submitBtn" class="continue_btn" type="submit">
            ورود
          </button>
        </form>
      </div>
    </main>
    <router-view />

    <footer>
      <div class="footer_form">
        <div class="right_sec">
          <div class="logo_section-img">
            <img
              class="footer_logo-img"
              src="../../assets/footerLogo.png"
              alt=""
            />
          </div>
          <p class="footer_text">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
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

const pass = ref("");
const correctPass = "123456789";

const router = useRouter();

function submitBtn() {
  if (pass.value === correctPass) {
    router.push("/mainPage");
  } else {
    alert("رمز عبور اشتباه است!");
  }
}
</script>

<style scoped>
@font-face {
  font-family: "Kalameh Black";
  src: url("../../assets/fonts/KalamehWeb_Black.woff") format("woff");
}

@font-face {
  font-family: "Kalameh Bold";
  src: url("../../assets/fonts/KalamehWeb_Bold.woff") format("woff");
}

@font-face {
  font-family: "kalameh Regular";
  src: url("../../assets/fonts/KalamehWeb_Regular.woff") format("woff");
}

@font-face {
  font-family: "Kalameh Thin";
  src: url("../../assets/fonts/KalamehWeb_thin.woff") format("woff");
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
/* header section */
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

/* main form section */
.main_form {
  background-color: #fafbfc;
  box-shadow: 0px 8px 16px 0px #20304026;
  width: 478px;
  height: 388px;
  margin: 0 auto;
  border-radius: 12px;
  padding: 51px 59px 51px 59px;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
}
.loginRegister_text {
  color: #28394f;
  font-family: "Kalameh Black";
  font-weight: 700;
  font-size: 20px;
  height: 40px;
}
.checkNumber {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 360px;
  height: 80px;
}
.checkNumber_text {
  font-family: "Kalameh Bold";
  color: #243447;
  font-size: 16px;
  font-weight: 400;
}
.inputNumber {
  all: unset;
  border-bottom: 2px solid #406080;
  border-radius: 2px;
  padding: 7px 16px 7px 16px;
}
.inputNumber::placeholder {
  color: #b8c1cd;
  font-family: "Kalameh Thin";
  font-weight: 400;
  font-size: 16px;
  text-align: right;
}

.continue_btn {
  background-color: #208bee;
  border: none;
  padding: 8px 24px 8px 24px;
  color: #ffffff;
  font-family: "Kalameh Bold";
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  width: 167px;
  height: 46px;
}

/* footer section */
.footer_form {
  width: 100%;
  height: 131px;
  /* background-image: url("../assets/footerBgc.png"); */
  background-color: #232f3d;
}

.footer_form {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.right_sec {
  display: flex;
  align-items: center;
  gap: 40px;
}
.logo_section-img {
  width: 130px;
  height: 42px;
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