<!-- src/App.vue -->
<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Gallery</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </nav>
    <div class="hero">
      <div class="overlay">
      
        <div class="social-icons">
        
          <a href="https://open.spotify.com/artist/2DHGsoZWpcTUcY8x6tct8n?si=JmSFgAOUR3OnLlOIN-L6sQ" target="_blank">
            <font-awesome-icon :icon="['fab', 'spotify']" />
        </a>
          <a href="https://soundcloud.com/pamela-svart" target="_blank">
            <font-awesome-icon :icon="['fab', 'soundcloud']" />
          </a>
          <a href="https://www.instagram.com/pamelasvart" target="_blank">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
          <!-- Add more social media links as needed -->
        </div>
      </div>
    </div>
     <!-- Bio Section -->
     <section class="bio-section">
      <div class="bio-container">
        <div class="bio-image">
          <img src="./assets/bio-image.jpg" alt="Pamela Svart" />
        </div>
        <div class="bio-text">
          <h2>Bio</h2>  
          <p>
            Pamela is a Chilean-born producer and DJ based in Berlin, known for her electrifying style that fuse dark, ethereal and hypnotic elements. Her music creates an energetic and groovy sonic journey that resonates with the essence of the underground scene.
Her music shows the power of electronic sound to evoke emotions, spark introspection, and connect people on a profound level.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Reset and global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  font-family: 'Arial', sans-serif;
}

html {
  scroll-behavior: smooth;
}
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
}

.navbar ul {
  list-style: none;
  display: flex;
}

.navbar li {
  margin-left: 1.5rem;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #cccccc;
}

.hero {
  background-image: url('./assets/background.jpeg');
  background-size: cover;
  background-position: center;
  height: 100%;
  position: relative;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #ffffff;
}

.overlay h1 {
  font-size: 4rem;
}

.overlay p {
  font-size: 1.5rem;
  margin-top: 1rem;
}

.social-icons {
  position: fixed; /* Fixes the icons in place even when scrolling */
  top: 50%;        /* Positions icons vertically centered */
  right: -650px;     /* Positions icons 20px from the right edge */
  transform: translateY(-100%); /* Centers icons vertically */
  display: flex;
  flex-direction: column; /* Arranges icons vertically */
  align-items: center;    /* Centers icons horizontally */
}

.social-icons a {
  color: #ffffff;
  margin: 10px 0; /* Adds vertical spacing between icons */
  font-size: 2rem;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #000000; /* Change to your desired hover color */
}

.social-icons .fa-icon {
  font-size: 40px; /* Adjust icon size as needed */
}

@media (max-width: 768px) {
  .social-links .fa-icon {
    font-size: 30px; /* Reduce icon size on smaller screens */
  }
  .social-links {
    top: 10px; /* Adjust positioning */
    right: 10px;
  }
}

/* Bio Section Styles */
.bio-section {
  background-color: #0d0d0d; /* Dark background */
  color: #f2f2f2; /* Light text color */
  padding: 60px 20px;
  border-top: 1px solid #1a1a1a;
}

.bio-container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.bio-image {
  flex: 1;
  text-align: center;
}

.bio-image img {
  max-width: 90%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
}

.bio-text {
  flex: 1;
  padding: 20px;
}

.bio-text h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #242c30; /* Cyan accent color */
  font-family: 'Roboto Mono', monospace;
}

.bio-text p {
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Roboto Mono', monospace;
}

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  background-color: #121212; /* Dark mode background */
  color: #f2f2f2; /* Light text color */
  }
.bio-section {
  background-color: #0d0d0d;
  background-size: 20px 20px;
}

.bio-image img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
  .bio-container {
    flex-direction: column;
  }
  .bio-text {
    padding: 20px 0;
  }

  
}
</style>
