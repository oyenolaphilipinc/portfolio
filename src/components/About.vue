<template>
  <section id="sobre" ref="target">
    <div class="title-section">
      <h1>About Me</h1>
    </div>
    <div class="container">
      <div class="profile" data-aos="fade-right"></div>
      <div class="about" data-aos="fade-left">
        <h2>Hi there I am Philip</h2>
        <p>
          I am a young Programmer trying to solve world problems. I have expertise in Web development and Artificial Intelligence. I am a young developer improving on myself and also helping others out there. I love programming and building with the skills I have. I love exploring Machine Learning, Deep learning and Computer Vision in general. I love building projects to improve my skills and also learn from other developers along the way.
        </p>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/oyenolaphilip/" target="_blank">
            <span class="social__span">
              Linkedin
            </span>
            <img src="../assets/linkedin-icon.svg" alt="Icone Linkedin" />
          </a>

          <a href="https://github.com/oyenolaphilipinc" target="_blank">
            <span class="social__span">
              GitHub
            </span>
            <img src="../assets/github-icon.svg" alt="Icone GitHub" />
          </a>

          <a href="https://www.instagram.com/webdevphilip/" target="_blank">
            <span class="social__span">
              Instagram
            </span>
            <img src="../assets/instagram-icon.svg" alt="Icone Instagram" />
          </a>
        </div>
        <a class="btn" href="./resume.pdf" download="resume.pdf"
          >Check My Cv
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  background: var(--white);
  color: var(--black);
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.profile {
  background-image: url("../assets/philip.jpeg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 45rem;
}
.about {
  text-align: left;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}
.about p {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
}
.btn {
  padding: 1.8rem;
  border-radius: 0.8rem;
  margin-top: 3rem;
  align-self: flex-start;
  transition: 0.25s;
}
.btn:hover {
  background: var(--purple);
}
.social-links {
  display: flex;
  gap: 2rem;
}
.social-links a {
  width: 3.4rem;
  height: 4rem;
  position: relative;
}
.social-links .social__span {
  opacity: 0;
  visibility: hidden;
  top: 0;
  position: absolute;
  left: 50%;
  font-weight: 600;
  transform: translateX(-50%);
  color: var(--white);
  background: var(--purple);
  padding: 1rem;
  font-size: 1.3rem;
  border-radius: 0.4rem;
  transition: 0.25s;
}
.social-links .social__span::after {
  content: "";
  border: solid var(--purple);
  border-width: 0 3px 3px 0;
  display: inline-block;
  position: absolute;
  right: 50%;
  top: -0.5rem;
  padding: 3px;
  transform: rotate(-135deg) translate(-50%);
}
.social-links a:hover .social__span {
  top: 110%;
  opacity: 1;
  visibility: visible;
}
@media (max-width: 700px) {
  .container {
    display: block;
  }
  .about {
    text-align: center;
    margin-top: 4rem;
  }
  .btn {
    align-self: center;
  }
  .social-links {
    justify-content: center;
  }
  .profile {
    background-size: cover;
  }
}
</style>
