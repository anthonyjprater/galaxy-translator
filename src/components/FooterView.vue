<template>
  <div class="footer__wrapper pt-5 mt-5">
    <footer
      class="footer mt-5 col-12 d-flex flex-column flex-md-row align-items-center"
    >
      <div class="footer__cr flex-fill text-center">
        <div class="footer__contact">
          Created by AP for
          <div class="footer__contact_link">UW-HTML300</div>
        </div>
      </div>
      <div class="icons d-flex flex-nowrap flex-fill">
        <a href="https://www.facebook.com/">
          <div class="layer">
            <span />
            <span />
            <span />
            <span />
            <span class="fab fa-facebook-f"
              ><font-awesome-icon icon="fa-brands fa-facebook" size="2xl"
            /></span>
          </div>
          <div class="text">Facebook</div>
        </a>
        <a href="https://www.github.com/">
          <div class="layer">
            <span />
            <span />
            <span />
            <span />
            <span class="fab fa-github"
              ><font-awesome-icon icon="fa-brands fa-github" size="2xl"
            /></span>
          </div>
          <div class="text">Github</div>
        </a>
        <a href="https://www.instagram.com/">
          <div class="layer">
            <span />
            <span />
            <span />
            <span />
            <span class="fab fa-instagram"
              ><font-awesome-icon icon="fa-brands fa-instagram" size="xl"
            /></span>
          </div>
          <div class="text">Instagram</div>
        </a>
        <a href="https://www.youtube.com/">
          <div class="layer">
            <span />
            <span />
            <span />
            <span />
            <span class="fab fa-youtube"
              ><font-awesome-icon icon="fa-brands fa-youtube" size="xl"
            /></span>
          </div>
          <div class="text">YouTube</div>
        </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer__wrapper {
  margin: 3rem 1rem;
}
.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0.5rem 0.5rem 3rem;
}
@media only screen and (max-width: 767px) {
  .footer {
    flex-flow: column nowrap;
  }
  .icons {
    justify-content: center;
    margin: 3rem 0rem;
  }
}
.footer__cr {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.footer__contact {
  letter-spacing: 0.2rem;
  color: #969696;
}
.footer__contact_link {
  text-decoration: none;
  text-shadow: 0px 0px 0px #957ec4;
}
.footer__contact_link:hover {
  color: #fff;
}
/*social media links requiring font awesome update*/
.icons {
  display: flex;
  align-items: center;
}
.icons a {
  margin: 0 16px;
  text-decoration: none;
  color: #fff;
  display: block;
  position: relative;
}
.icons a .layer {
  width: 2.5rem;
  height: 2.5rem;
  transition: transform 0.3s;
}
.icons a:hover .layer {
  transform: rotate(-35deg) skew(20deg);
}
.icons a .layer span {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 5px solid #fff;
  border-radius: 30px;
  transition: all 0.3s;
}
.icons a .layer span.fab {
  font-size: 0.8rem;
  line-height: 2.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 700ms infinite;
}
.icons a:hover .layer span:nth-child(1) {
  opacity: 0.2;
  width: 2.2rem;
  height: 2.2rem;
}
.icons a:hover .layer span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -10px);
  width: 2.4rem;
  height: 2.4rem;
}
.icons a:hover .layer span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -20px);
  width: 2.6rem;
  height: 2.6rem;
}
.icons a:hover .layer span:nth-child(4) {
  opacity: 0.8;
  transform: translate(15px, -35px);
  width: 2.8rem;
  height: 2.8rem;
}
.icons a:hover .layer span:nth-child(5) {
  opacity: 1;
  transform: translate(20px, -50px);
  width: 3rem;
  height: 3rem;
}
.icons a:hover .layer span:nth-child(5).fab {
  font-size: 1.5rem;
  line-height: 3rem;
}
.icons a:nth-child(1) .layer span,
.icons a:nth-child(1) .text {
  color: #4c75ff;
  border-color: #4267b2;
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to right, #4267ff, #fff) border-box;
  border-radius: 50em;
  padding: 5px;
  border: 4px solid transparent;
  box-shadow: inset 1px -1px 4px #aaa;
}
.icons a:nth-child(2) .layer span,
.icons a:nth-child(2) .text {
  color: #c0c0c0;
  border-color: #c0c0c0;
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to bottom, #c0c0c0, #000) border-box;
  border-radius: 50em;
  padding: 5px;
  border: 4px solid transparent;
  box-shadow: inset 1px -1px 2px #aaa;
}
.icons a:nth-child(3) .layer span,
.icons a:nth-child(3) .text {
  color: #fcaf45;
  border-color: #405de6;
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to bottom right, #405de6, #e1306c, #ffdc80) border-box;
  border-radius: 50em;
  padding: 5px;
  border: 4px solid transparent;
  box-shadow: inset 1px -1px 2px #aaa;
}
.icons a:nth-child(4) .layer span,
.icons a:nth-child(4) .text {
  color: #f00;
  border-color: #f00;
  background: linear-gradient(#000, #000) padding-box,
    linear-gradient(to bottom, #f00, #fff) border-box;
  border-radius: 50em;
  padding: 5px;
  border: 4px solid transparent;
  box-shadow: inset 1px -1px 2px #aaa;
}
.icons a:nth-child(5) .layer span,
.icons a:nth-child(5) .text {
  color: #ff0000;
  border-color: #ff0000;
}
.icons a:hover:nth-child(1) .layer span {
  box-shadow: -1px 1px 3px #4267b2;
}
.icons a:hover:nth-child(2) .layer span {
  box-shadow: -1px 1px 3px #c0c0c0;
}
.icons a:hover:nth-child(3) .layer span {
  box-shadow: -1px 1px 3px #405de6;
}
.icons a:hover:nth-child(4) .layer span {
  box-shadow: -1px 1px 3px #2867b2;
}
.icons a:hover:nth-child(5) .layer span {
  box-shadow: -1px 1px 3px #ff0000;
}
.icons a .text {
  position: absolute;
  left: 50%;
  bottom: -5px;
  opacity: 0;
  font-weight: 500;
  transform: translateX(-50%);
  transition: bottom 0.3s ease, opacity 0.3s ease;
}
.icons a:hover .text {
  bottom: -35px;
  opacity: 1;
  text-shadow: 1px 1px 20px #fff;
}
@keyframes pulse {
  0% {
    border: 1px solid;
    box-shadow: 3px 0px 15px 1px;
  }
  10% {
    border: 1px solid;
    box-shadow: 2px 0px 15px 1px;
  }
  20% {
    border: 1px solid;
    box-shadow: 1px 2px 15px 1px;
  }
  30% {
    border: 1px solid;
    box-shadow: 0px 4px 15px 1px;
  }
  40% {
    border: 1px solid;
    box-shadow: -1px 6px 15px 1px;
  }
  50% {
    border: 1px solid;
    box-shadow: -2px 2px 15px 1px;
  }
  60% {
    border: 1px solid;
    box-shadow: -3px 0px 15px 5px;
  }
  70% {
    border: 1px solid;
    box-shadow: -2px -2px 15px 1px;
  }
  80% {
    border: 1px solid;
    box-shadow: -1px 0px 15px 1px;
  }
  90% {
    border: 1px solid;
    box-shadow: 0px 0px 15px 1px;
  }
  100% {
    border: px solid;
    box-shadow: 0px 0px 15px 1px;
  }
}
</style>
