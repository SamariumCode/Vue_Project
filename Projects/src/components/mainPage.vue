<template>
  <div>
    <header>
      <div class="header container">
        <div class="logo_img-dev">
          <img class="logo_omg" src="../assets/Logo.png" alt="" />
        </div>
        <div class="left_site-header">
          <img class="search_icon" src="../assets/searchIcon.png" alt="" />
          <div class="btns_leftHeader-side">
            <button @click.prevent="loginbtn" class="btn">ورود</button
            ><span>/</span
            ><button @click.prevent="regisretbtn" class="btn">ثبت نام</button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="slider-section">
        <Slider />
      </div>
      <div class="cards">
        <PhotoCard
          v-for="(photo, index) in photos"
          :key="index"
          :title="photo.title"
          :description="photo.description"
          :author="photo.author"
          :imageSrc="photo.imageSrc"
        />
      </div>
    </main>

    <footer>
      <div class="footer_form">
        <div class="right_sec">
          <div class="logo_section-img">
            <img
              class="footer_logo-img"
              src="../assets/footerLogo.png"
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
import Slider from "./Slider.vue";
import PhotoCard from "./photoCards/PhotoCard.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const photos = [
  {
    title: "جنگل های بارانی",
    description: "جنگل های بارانی گرمسیری با پوشش گیاهی متنوع.",
    author: "آنا جانسون",
    imageSrc: "https://picsum.photos/200/300?random=1",
  },
  {
    title: "کوه‌های آلپ",
    description: "مناظر دیدنی کوه‌های آلپ در فصل زمستان.",
    author: "جان دو",
    imageSrc: "https://picsum.photos/200/300?random=2",
  },
  {
    title: "دریای آبی",
    description: "دریای آبی و شفاف در کنار ساحل سفید.",
    author: "لورا اسمیت",
    imageSrc: "https://picsum.photos/200/300?random=3",
  },
  {
    title: "صحرای ساهارا",
    description: "دنیای بی‌پایان صحرای ساهارا با تپه‌های شن.",
    author: "محمد علی",
    imageSrc: "https://picsum.photos/200/300?random=4",
  },
  {
    title: "باران پاییزی",
    description: "باران پاییزی که برگ‌ها را به زمین می‌ریزد.",
    author: "ایوان کلارک",
    imageSrc: "https://picsum.photos/200/300?random=5",
  },
  {
    title: "شفق قطبی",
    description: "شفق قطبی در آسمان شب شمالی.",
    author: "الکس کرن",
    imageSrc: "https://picsum.photos/200/300?random=6",
  },
];

function loginbtn() {
  router.push("/");
}

function regisretbtn(){
  router.push("/register")
}
</script>

<style scoped>
@font-face {
  font-family: "Kalameh Black";
  src: url("../assets/fonts/KalamehWeb_Black.woff") format("woff");
}

@font-face {
  font-family: "Kalameh Bold";
  src: url("../assets/fonts/KalamehWeb_Bold.woff") format("woff");
}

@font-face {
  font-family: "kalameh Regular";
  src: url("../assets/fonts/KalamehWeb_Regular.woff") format("woff");
}

@font-face {
  font-family: "Kalameh Thin";
  src: url("../assets/fonts/KalamehWeb_thin.woff") format("woff");
}
* {
  box-sizing: border-box;
  margin: 0;
}
.container {
  width: 930px;
  margin: 0 auto;
}

/* header section */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo_img-dev {
}
.logo_omg {
}
.left_site-header {
  display: flex;
  align-items: center;
}
.btns_leftHeader-side {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #208bee;
  font-family: "kalameh Regular";
  font-weight: 700;
}
.btn {
  all: unset;
}
.search_icon {
}

/* main section */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
