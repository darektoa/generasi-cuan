/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import $ from '../../utilities/querySelector-helper';
import SliderBox from '../../utilities/sliderBox-initiator';
import UrlParser from '../../routes/url-parser';
import GeneralDB from '../../data/general-source';
import HomeDB from '../../data/home-source';
import Login from './login';

const path = UrlParser.activeUrl();

const Home = {
  async render() {
    return `
      <section class="hero-box">
          <div class="hero-inner container">
              <div class="text-box">
                  <h2>Bergabung Kami Selalu Menunggu anda Dan siap melayani anda</h2>
                  <p>Generasi Cuan adalah online course terbarik di indonesia dengan fasilitas yang sangat mempuni</p>
                  <div class="box-regis">
                      <div class="box-input">
                          <div class="icon_mail-white" aria-label="Icon Email"></div>
                          <input type="email" placeholder="Your Email Here" aria-label="Your Email Here">
                      </div>
                      <a href="#/login" class="button-regis">Join Now</a>
                  </div>
              </div>
              <div class="slide-box">
                  <button class="icon_left-arrow-black left" aria-label="left-arrow"></button>
                  <button class="icon_right-arrow-black right" aria-label="right-arrow"></button>

                  <div class="box-item">
                      <img src="./images/slide-1.svg" alt="Slide 1">
                      <img src="./images/seminar-1.jpg" alt="Slide 1">
                  </div>
              </div>
          </div>  
      </section>

      <section id="event" class="seminar-box container">
          <div class="icon_half-circle-4d78f9"></div>
          <div class="icon_quarter-circle-e7d9ff"></div>

          <div class="text-box">
              <div class="icon_point7x7-red point7x7-1"></div>
              <div class="icon_point7x7-red point7x7-2"></div>
              <div class="icon_wave-yellow wave-1"></div>
              <div class="icon_wave-red wave-2"></div>

              <button class="icon_left-arrow-black left" aria-label="left arrow"></button>
              <button class="icon_right-arrow-black right" aria-label="right arrow"></button>
              
              <a href="#event${path}" class="label"># Event</a>
              <h2>Jadwal Seminar</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae convallis velit dui quis tellus lectus sem eros, at. Est vel amet, molestie pharetra interdum at rhoncus. Habitant nisl quam eget praesent vulputate rhoncus. Fringilla aliquet aliquet tellus dolor, molestie arcu.</p>
          </div>

          <div class="slide-box">
              <article class="seminar type-android">
                  <img src="./images/seminar-1.jpg" alt="Icon Seminar 1">
                  <div class="text-box">
                      <div class="type-box">
                          <div class="icon_ type-icon"></div>
                          <p class="type-name">Android Developer</p>
                      </div>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dolor, mauris parturient facilisis libero natoque non. Elementum.</p>
                  </div>
                  <button>Lihat Detail</button>
              </article>
              <article class="seminar type-web">
                  <img src="./images/seminar-1.jpg" alt="Icon Seminar 1">
                  <div class="text-box">
                      <div class="type-box">
                          <div class="icon_ type-icon"></div>
                          <p class="type-name">Web Developer</p>
                      </div>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dolor, mauris parturient facilisis libero natoque non. Elementum.</p>
                  </div>
                  <button href="#/detail">Lihat Detail</button>
              </article>
              <article class="seminar type-ui">
                  <img src="./images/seminar-1.jpg" alt="Icon Seminar 1">
                  <div class="text-box">
                      <div class="type-box">
                          <div class="icon_ type-icon"></div>
                          <p class="type-name">UI/UX Developer</p>
                      </div>
                      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dolor, mauris parturient facilisis libero natoque non. Elementum.</p>
                  </div>
                  <button href="#/detail">Lihat Detail</button>
              </article>
          </div>

          <div class="detail-box">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <span class="datetime">Monday, 09.00 AM</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac dolor, mauris parturient facilisis libero natoque non. Elementum.</p>
          </div>
      </section>

      <section id="video" class="course-box container">
          <div class="icon_wave-red wave-1"></div>
          <div class="icon_wave-red wave-2"></div>

          <div class="video-box">
              <article class="course">
                  <div class="icon-play-box">
                      <div class="icon_play-white"></div>
                  </div>
                  <img src="" alt="">
                  <h2>Course</h2>
              </article>
              <article class="course">
                  <div class="icon-play-box">
                      <div class="icon_play-white"></div>
                  </div>
                  <img src="" alt="">
                  <h2>Course</h2>
              </article>
          </div>

          <div class="text-box">
              <button class="icon_left-arrow-black left" aria-label="left arrow"></button>
              <button class="icon_right-arrow-black right" aria-label="right arrow"></button>

              <a href="#video${path}" class="label"># Video</a>
              <h2>Class online from our mentor</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet pellentesque ac enim non augue at cursus ipsum. </p>
          </div>

          <div class="detail-box">
              <div class="content-box">
                  <video controls>
                      <source src="./videos/movie-bunny.mp4" type="video/mp4">
                  </video>

                  <div class="text-box">
                      <span class="type-name">Entertaiment</span>
                      <h2>Movie Bunny</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas fermentum feugiat a adipiscing maecenas at nibh. Tincidunt sem risus mattis tempor nullam porta nibh blandit. Urna nisi, donec lorem hac commodo. Tempor, quis ipsum vestibulum ac justo, id in massa adipiscing. Sit morbi iaculis amet sed ultrices nibh. Scelerisque dui et non eu. Risus eu sit est.</p>
                  </div>
                  
                  <button class="icon_cross-4f4f4f close"></button>
              </div>
          </div>
      </section>

      <section id="feature" class="feature-box container">
          <div class="icon_quarter-circle-e7d9ff"></div>

          <div class="text-box">
              <a href="#feature${path}" class="label"># Feature</a>
              <h2>Subscribe to our platform</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet pellentesque ac enim non augue at cursus ipsum. </p>

              <ul>
                  <li>
                      <div class="icon_checklist-green"></div>
                      <p>Berita terupdate dari mentor</p>
                  </li>
                  <li>
                      <div class="icon_checklist-green"></div>
                      <p>Prioritas info seminar</p>
                  </li>
              </ul>
          </div>
          
          <div class="video-box">
              <div class="background-video-1"></div>
              <video controls></video>
          </div>
      </section>

      <section id="testimonial" class="testimonial-box container">
          <div class="icon_plus-red"></div>
          <div class="icon_point7x7-grey"></div>
          
          <div class="text-box">
              <a href="#testimonial${path}" class="label"># Testimonial</a>
              <h2>What our client says</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tempus sapien placerat nunc ultricies pretium nec. Neque enim bibendum elementum malesuada quam urna euismod neque, nisl.</p>
          </div>

          <div class="slide-box">
              <article class="testimoni">
                  <div class="info-user">
                      <img src="./images/users/user-1.jpg" alt="User 1">
                      <div class="text-box">
                          <h2>Ronald Richards</h2>
                          <p>Bisnis Man</p>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu consequat in lacus ornare aliquam in augue convallis. Donec et amet lorem lectus netus in ultrices. Fames orci lacus.</p>
                  <div class="rating-box">
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                  </div>
              </article>
              <article class="testimoni">
                  <div class="info-user">
                      <img src="./images/users/user-2.jpg" alt="User 1">
                      <div class="text-box">
                          <h2>Robert Fox</h2>
                          <p>Bisnis Man</p>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu consequat in lacus ornare aliquam in augue convallis. Donec et amet lorem lectus netus in ultrices. Fames orci lacus.</p>
                  <div class="rating-box">
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                      <div class="icon_star-yellow star"></div>
                  </div>
              </article>
          </div>
      </section>

      <section id="question" class="question-box container">
          <div class="icon_quarter-circle-e7d9ff"></div>
          <div class="icon_full-circle-4D78F9"></div>
          <div class="icon_plus-red plus-1"></div>
          <div class="icon_plus-red plus-2"></div>

          <div class="text-box">
              <a href="#question${path}" class="label"># Question</a>
              <h2>Get Question For us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et tempus sapien placerat nunc ultricies pretium nec. Neque enim bibendum elementum malesuada quam urna euismod neque, nisl.</p>
          </div>
          <a target="_blank" rel="noopener" href="" class="contact">
              Contact Us
              <div class="icon_simple-arrow-black"></div>
          </a>
      </section>
    `;
  },

  async afterRender() {
    this._dataRender();
    this._contentRender();

    this._buttonRegisHeroInit();
    this._contactQuestionInit();
  },


  async _contentRender() {
    const contents = await HomeDB.content();

    for (const key in contents) {
      const dataList = contents[key].list;

      $(`.${key}-box .text-box > h2`).innerText = contents[key].title;
      $(`.${key}-box .text-box > p`).innerText = contents[key].paragraph;

      if (dataList) {
        const parentList = $(`.${key}-box .text-box > ul`);
        parentList.innerHTML = '';

        dataList.forEach((item) => {
          parentList.innerHTML += `
            <li>
                <div class="icon_checklist-green"></div>
                <p>${item}</p>
            </li>
          `;
        });
      }
    }
  },


  async _dataRender() {
    const data = await HomeDB.data();

    this._heroDataRender(data.hero);
    this._seminarDataRender(data.seminar);
    this._courseDataRender(data.course);
    this._featureDataRender(data.feature);
    this._testimonialDataRender(data.testimonial);
  },


  async _contactQuestionInit() {
    const dataJson = await GeneralDB.data();
    const contact = await dataJson.whatsapp;
    const contactElmnt = $('.question-box > a.contact');

    contactElmnt.href = `https://wa.me/${contact.number}?text=${contact.message}`;
  },


  _buttonRegisHeroInit() {
    const buttonRegis = $('.hero-box .text-box > .box-regis > .button-regis');
    const inputEmail = $('.hero-box .text-box .box-regis .box-input input');

    buttonRegis.addEventListener('click', () => {
      Login.email = inputEmail.value;
    });
  },


  _detailBoxSeminarInit(seminarData) {
    const buttonsDetail = $('.seminar-box > .slide-box > .seminar > button', 'all');
    const detailBox = {
      self: $('.seminar-box > .detail-box'),
      title: $('.seminar-box > .detail-box > h3'),
      datetime: $('.seminar-box > .detail-box > .datetime'),
      description: $('.seminar-box > .detail-box > p'),
    };

    buttonsDetail.forEach((button, index) => {
      button.addEventListener('click', (event) => {
        const { top: targetTop, left: targetLeft } = event.target.getBoundingClientRect();
        const { top: detailBoxParentTop, left: detailBoxParentleft } = detailBox.self.parentElement.getBoundingClientRect();
        const top = targetTop - detailBoxParentTop - 10;
        const left = targetLeft - detailBoxParentleft - 10;

        detailBox.self.style = `
          visibility: visible;
          top: ${top}px;
          left: ${left}px;
        `;

        detailBox.title.innerText = seminarData[index].title;
        detailBox.datetime.innerText = seminarData[index].datetime;
        detailBox.description.innerText = seminarData[index].description;
      });

      button.addEventListener('blur', () => detailBox.removeAttribute('style'));
    });
  },


  _detailBoxCourseInit(courseData) {
    const courses       = $('.course-box > .video-box > .course', 'all');
    const buttonClose   = $('.course-box > .detail-box > .content-box > button.close');
    const detailBox     = {
      self: $('.course-box > .detail-box'),
      video: $('.course-box > .detail-box video > source'),
      type_name: $('.course-box > .detail-box .text-box > .type-name'),
      title: $('.course-box > .detail-box .text-box > h2'),
      description: $('.course-box > .detail-box .text-box > p'),
    };

    courses.forEach((course, index) => {
      course.addEventListener('click', () => {
        document.body.classList.add('overflow-hidden');
        detailBox.self.classList.add('display-detail-box');

        detailBox.video.src = courseData[index].src;
        detailBox.type_name.innerText = courseData[index].type_name;
        detailBox.title.innerText = courseData[index].title;
        detailBox.description.innerText = courseData[index].description;
      });
    });

    buttonClose.addEventListener('click', (event) => {
      document.body.classList.remove('overflow-hidden');
      detailBox.self.classList.remove('display-detail-box');
      event.stopPropagation();
    });
  },


  _testimonialRatingRender(rating, max = 5) {
    let result = '';
    let rate = Number(rating);

    for (let i = 0; i < max; i++) {
      if (rate-- > 0) {
        result += '<div class="icon_star-yellow star"></div>';
        continue;
      }
      result += '<div class="icon_star-grey star"></div>';
    }

    return result;
  },


  _heroDataRender(heroData) {
    const slideBox = $('.hero-box .slide-box > .box-item');
    slideBox.innerHTML = '';

    heroData.forEach((item, index) => {
      slideBox.innerHTML += `<img src="${item}" alt="Slide ${index + 1}">`;
    });

    this._heroSliderInit();
  },


  _seminarDataRender(seminarData) {
    const slideBox = $('.seminar-box > .slide-box');
    slideBox.innerHTML = '';

    seminarData.forEach((item) => {
      slideBox.innerHTML += `
        <article class="seminar type-${item.type}">
            <img src="${item.src}" alt="Icon Seminar">
            <div class="text-box">
                <div class="type-box">
                    <div class="icon_ type-icon"></div>
                    <p class="type-name">${item.type_name}</p>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
            <button href="#/detail">Lihat Detail</button>
        </article>
      `;
    });

    this._seminarSliderInit();
    this._detailBoxSeminarInit(seminarData);
  },


  _courseDataRender(courseData) {
    const videoBox = $('.course-box > .video-box');
    videoBox.innerHTML = '';

    courseData.forEach((item) => {
      videoBox.innerHTML += `
        <article class="course">
            <div class="icon-play-box">
                <div class="icon_play-white"></div>
            </div>
            <img src="${item.thumbnail}" alt="">
            <h2>${item.title}</h2>
        </article>
      `;
    });

    this._courseSliderInit();
    this._detailBoxCourseInit(courseData);
  },


  _featureDataRender(featureData) {
    const video = $('.feature-box > .video-box > video');
    const source = document.createElement('source');

    video.setAttribute('poster', featureData.thumbnail);
    source.setAttribute('src', featureData.src);
    video.appendChild(source);
  },


  _testimonialDataRender(testimonialData) {
    const slideBox = $('.testimonial-box > .slide-box');
    slideBox.innerHTML = '';

    testimonialData.forEach((item, index) => {
      slideBox.innerHTML += `
        <article class="testimoni testimoni-${index}">
            <div class="info-user">
                <img src="${item.src}" alt="User">
                <div class="text-box">
                    <h2>${item.name}</h2>
                    <p>${item.occupation}</p>
                </div>
            </div>
            <p>${item.review}</p>
            <div class="rating-box"></div>
        </article>
      `;

      const ratingBox = $(`.testimonial-box > .slide-box > .testimoni-${index} > .rating-box`);
      ratingBox.innerHTML = this._testimonialRatingRender(item.rating, 5);
    });
  },


  _heroSliderInit() {
    SliderBox.init({
      items: $('.hero-box > .hero-inner > .slide-box > .box-item > img', 'all'),
      nextButtonX: $('.hero-box > .hero-inner > .slide-box > button.right'),
      prevButtonX: $('.hero-box > .hero-inner > .slide-box > button.left'),
      interval: 5000,
    });
  },


  _seminarSliderInit() {
    SliderBox.init({
      items: $('.seminar-box > .slide-box > .seminar', 'all'),
      nextButtonX: $('.seminar-box > .text-box > button.right'),
      prevButtonX: $('.seminar-box > .text-box > button.left'),
    });
  },


  _courseSliderInit() {
    SliderBox.init({
      items: $('.course-box > .video-box > .course', 'all'),
      nextButtonX: $('.course-box > .text-box > button.left'),
      prevButtonX: $('.course-box > .text-box > button.right'),
    });
  },
};

export default Home;