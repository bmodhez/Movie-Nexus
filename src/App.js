import React from 'react';
import logo from './hero-bg.jpg';
import img1 from './images/12th Fail.jpeg';
import img2 from './images/angrezimedium.jpeg';
import img3 from './images/tu jhoothi me makar.webp';
import img4 from './images/thappad.jpg';
import img5 from './service-bg.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">

          <div className="overlay" data-overlay></div>

          <a href="index.html" className="logo">
            <img src={logo} alt="Filmlane logo" />
          </a>

          <div className="header-actions">

            <button className="search-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <div className="lang-wrapper">
              <label htmlFor="language">
                <ion-icon name="globe-outline"></ion-icon>
              </label>

              <select name="language" id="language">
                <option value="en">EN</option>
                <option value="au">AU</option>
                <option value="ar">AR</option>
                <option value="tu">TU</option>
              </select>
            </div>

            <button className="btn btn-primary">Sign in</button>

          </div>

          <button className="menu-open-btn" data-menu-open-btn>
            <ion-icon name="reorder-two"></ion-icon>
          </button>

          <nav className="navbar" data-navbar>

            <div className="navbar-top">

              <a href="index.html" className="logo">
                <img src={logo} alt="Filmlane logo" />
              </a>

              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

            </div>

            <ul className="navbar-list">

              <li>
                <a href="movie.html" className="navbar-link">Home</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Movies</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Tv Shows</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Web Series</a>
              </li>

              <li>
                <a href="#" className="navbar-link">Pricing</a>
              </li>

            </ul>

            <ul className="navbar-social-list">

              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="navbar-social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>

            </ul>

          </nav>

        </div>
      </header>
      <main>
    <article>

      <section class="hero">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">CinemaNexus</p>

            <h1 class="h1 hero-title">
              Unlimited <strong>Movie</strong>, TVs Shows, & More.<br/>For <strong>FREE!</strong>
            </h1>

            <div class="meta-wrapper">

              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 18</div>

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="ganre-wrapper">
                <a href="#">Romance,</a>

                <a href="#">Drama</a>
              </div>

              <div class="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time datetime="2022">2022</time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT128M">128 min</time>
                </div>

              </div>

            </div>

            <button class="btn btn-primary">
              <ion-icon name="play"></ion-icon>

              <span>Watch now</span>
            </button>

          </div>

        </div>
      </section>

      <section class="upcoming">
        <div class="container">

          <div class="flex-wrapper">

            <div class="title-wrapper">
              <p class="section-subtitle">Online Streaming</p>

              <h2 class="h2 section-title">Must Watch</h2>
            </div>

            <ul class="filter-list">

              <li>
                <button class="filter-btn">Movies</button>
              </li>

              <li>
                <button class="filter-btn">TV Shows</button>
              </li>

              <li>
                <button class="filter-btn">Anime</button>
              </li>

            </ul>

          </div>

          <ul class="movies-list  has-scrollbar">

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img1} alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">12Th Fail</h3>
                  </a>

                  <time datetime="2022">2023</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT137M">2hr 27min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>9.0</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img2}
                      alt="Doctor Strange in the Multiverse of Madness movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Angrezi Medium</h3>
                  </a>

                  <time datetime="2022">2020</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT126M">2hr 25min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.2</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img3} alt="Memory movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Tu Jhoothi Main Makkaar</h3>
                  </a>

                  <time datetime="2022">2023</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">1080p</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="">2hr 30min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>6.2</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img4}
                      alt="The Unbearable Weight of Massive Talent movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Thappad</h3>
                  </a>

                  <time datetime="2022">2020</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT107M">2hr 22min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>NR</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section class="service">
        <div class="container">

          <div class="service-banner">
            <figure>
              <img src={img3} alt="HD 4k resolution! only $3.99"/>
            </figure>

            <a href="service-banner.jpg" download class="service-btn">
              <span>Download</span>

              <ion-icon name="download-outline"></ion-icon>
            </a>
          </div>

          <div class="service-content">

            <p class="service-subtitle">Our Services</p>

            <h2 class="h2 service-title">Download Your Shows Watch Offline.</h2>

            <p class="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
              passages of lorem
              Ipsum available, but the majority have suffered alteration in some injected humour.
            </p>

            <ul class="service-list">

              <li>
                <div class="service-card">

                  <div class="card-icon">
                    <ion-icon name="tv"></ion-icon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Enjoy on Your TV.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="service-card">

                  <div class="card-icon">
                    <ion-icon name="videocam"></ion-icon>
                  </div>

                  <div class="card-content">
                    <h3 class="h3 card-title">Watch Everywhere.</h3>

                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
                    //Top rated

      <section class="top-rated">
        <div class="container">

          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Top Rated Movies</h2>

          <ul class="filter-list">

            <li>
              <button class="filter-btn">Movies</button>
            </li>

            <li>
              <button class="filter-btn">TV Shows</button>
            </li>

            <li>
              <button class="filter-btn">Documentary</button>
            </li>

            <li>
              <button class="filter-btn">Sports</button>
            </li>

          </ul>

          <ul class="movies-list">

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img1} alt="Sonic the Hedgehog 2 movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Sonic the Hedgehog 2</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT122M">122 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.8</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img2} alt="Morbius movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Morbius</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT104M">104 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>5.9</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img3} alt="The Adam Project movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">The Adam Project</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT106M">106 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.0</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img4} alt="Free Guy movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Free Guy</h3>
                  </a>

                  <time datetime="2021">2021</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT115M">115 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.7</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img4} alt="The Batman movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">The Batman</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT176M">176 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.9</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img2} alt="Uncharted movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Uncharted</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT116M">116 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.0</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img1} alt="Death on the Nile movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Death on the Nile</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT127M">127 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>6.5</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img4} alt="The King's Man movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">The King's Man</h3>
                  </a>

                  <time datetime="2021">2021</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">HD</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT131M">131 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>7.0</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
                                      //TV Series

      <section class="tv-series">
        <div class="container">

          <p class="section-subtitle">Best TV Series</p>

          <h2 class="h2 section-title">World Best TV Series</h2>

          <ul class="movies-list">

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img3} alt="Moon Knight movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Moon Knight</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT47M">47 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.6</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img3} alt="Halo movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Halo</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT59M">59 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.8</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img2} alt="Vikings: Valhalla movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Vikings: Valhalla</h3>
                  </a>

                  <time datetime="2022">2022</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">2K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT51M">51 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div class="movie-card">

                <a href="movie-details.html">
                  <figure class="card-banner">
                    <img src={img2} alt="Money Heist movie poster"/>
                  </figure>
                </a>

                <div class="title-wrapper">
                  <a href="movie-details.html">
                    <h3 class="card-title">Money Heist</h3>
                  </a>

                  <time datetime="2017">2017</time>
                </div>

                <div class="card-meta">
                  <div class="badge badge-outline">4K</div>

                  <div class="duration">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="PT70M">70 min</time>
                  </div>

                  <div class="rating">
                    <ion-icon name="star"></ion-icon>

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
                        // CTA

      <section class="cta">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="cta-title">Trial start first 30 days.</h2>

            <p class="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" class="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" class="email-field"/>

            <button type="submit" class="cta-form-btn">Get started</button>
          </form>

        </div>
      </section>

    </article>
  </main>
                  // FOOTER

  <footer class="footer">

    <div class="footer-top">
      <div class="container">

        <div class="footer-brand-wrapper">

          <a href="index.html" class="logo">
            <img src="logo.svg" alt="Filmlane logo"/>
          </a>

          <ul class="footer-list">

            <li>
              <a href="index.html" class="footer-link">Home</a>
            </li>

            <li>
              <a href="#" class="footer-link">Movie</a>
            </li>

            <li>
              <a href="#" class="footer-link">TV Show</a>
            </li>

            <li>
              <a href="#" class="footer-link">Web Series</a>
            </li>

            <li>
              <a href="#" class="footer-link">Pricing</a>
            </li>

          </ul>

        </div>

        <div class="divider"></div>

        <div class="quicklink-wrapper">

          <ul class="quicklink-list">

            <li>
              <a href="#" class="quicklink-link">Faq</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Help center</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Terms of use</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Privacy</a>
            </li>

          </ul>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">

        <p class="copyright">
          &copy; 2022 <a href="#">CinemaNexus</a>. All Rights Reserved
        </p>

        <img src={img4} alt="Online banking companies logo" class="footer-bottom-img"/>

      </div>
    </div>

  </footer>
    </div>
  );
}

export default App;
