<template>
  <section id="portfolio">
    <div class="title-section">
      <h1>Projects</h1>
    </div>
    <div class="container">
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="../assets/app.png"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Gpt3</h3>
          <p>
            Gpt3 app built in Javscript and React and tailwind for styling.
          </p>
          <a
            href="https://gpt3-ten.vercel.app"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Visit</a
          >
        </div>
      </div>

      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="https://camo.githubusercontent.com/c47a38088a558e3f8246bce9f759b498f1f336eb39ce230c2fb9a776347b52fc/68747470733a2f2f696d6775722e636f6d2f69704c484646622e676966"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Music Library Page</h3>
          <p>
            A music library page built in HTML and CSS. This project is also fun and great.
          </p>
          <a
            href="https://oyenolaphilipinc.github.io/music-library/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Visit</a
          >
        </div>
      </div>

      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img
            src="https://github.com/joaotuliojt/sunnyside-agency/raw/main/design/desktop-preview.jpg"
            alt=""
          />
        </div>
        <div class="description">
          <h3>Frontend Mentor - Sunnyside agency landing page</h3>
          <p>
           Frontend mentor project oriented. This project is built in JavaScript
          </p>
          <a
            href="https://oyenolaphilipinc.github.io/sunnyside-agency/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Visit</a
          >
        </div>
      </div>
    </div>
    <div class="title-section">
      <h2>Real time Projects</h2>
    </div>
    <div class="container">
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img src="../assets/Relógio.gif" alt="" />
        </div>
        <div class="description">
          <h3>Relógio Digital</h3>
          <p>
            Built in Html, CSS and Javascript
          </p>
          <a
            href="https://joaotuliojt.github.io/relogio-digital-js/"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Visit</a
          >
        </div>
      </div>
      <div class="project" data-aos="fade-up">
        <div class="project__image">
          <img src="../assets/hoobank.png" alt="" />
        </div>
        <div class="description">
          <h3>Hoobank</h3>
          <p>
            This app was built in React and Tailwind
          </p>
          <a
            href="https://hoobank-slic.vercel.app"
            target="_blank"
            class="btn"
            title="Veja o site"
            aria-labelledby="Veja mais"
            >Visit</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
  display: block;
  padding: 1rem 3rem;
  transition: 0.25s;
  margin-top: 1.4rem;
}
.btn:hover {
  background: var(--purple);
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
}
.project {
  max-width: 40rem;
  margin: 0 auto;
  border-radius: 0.8rem;
}
.project:hover .project__image img {
  transform: scale(1.05);
}
.project:hover {
  box-shadow: 0 0 10px 0px rgb(0 0 0 / 60%);
}
.project__image {
  overflow: hidden;
  height: 20rem;
}
.project__image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: 0.25s;
}
.description {
  text-align: center;
  padding: 2rem 2rem;
}
</style>
