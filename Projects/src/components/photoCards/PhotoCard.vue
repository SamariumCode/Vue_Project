<template>
    <div class="photo-card">
      <img :src="imageSrc" alt="photo" class="photo-image" />
      <div class="photo-content">
        <h3 class="photo-title">{{ title }}</h3>
        <p class="photo-description">{{ description }}</p>
        <small class="photo-author">نویسنده : {{ author }}</small>
      </div>
    </div>
  </template>
  
  <script setup>
  // eslint-disable-next-line no-unused-vars
  const props = defineProps({
    title: String,    
    description: String,   
    author: String,      
    imageSrc: String     
  });
  </script>
  
  
  <style scoped>
  @font-face {
  font-family: "kalameh Regular";
  src: url("../assets/fonts/KalamehWeb_Regular.woff") format("woff");
}
  .photo-card {
    border: 2px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    max-width: 350px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 16px;
    transition: transform 0.3s ease;
    font-family: "kalameh Regular";
  }
  
  .photo-card:hover {
    transform: translateY(-5px);
  }
  
  .photo-image {
    width: 200px;     
    height: 200px;       
    object-fit: cover;
    border-radius: 8px;
  }
  
  .photo-content {
    flex-grow: 1;
  }
  
  .photo-title {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .photo-description {
    font-size: 1rem;
    color: #666;
    margin: 8px 0;
  }
  
  .photo-author {
    font-size: 0.875rem;
    color: #999;
  }
  
  .photo-card:hover .photo-title {
    color: #007BFF;
  }
  </style>
  