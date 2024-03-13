const swiperWrapper = document.querySelector('.swiper-wrapper')
fetch('https://cf9e6a773374a714.mokky.dev/cards')
.then((res) => res.json())
.then(data => {
  data.forEach(item => {
    swiperWrapper.insertAdjacentHTML('beforeend', `
      <div class="swiper-slide">
        <img src="${item.image}" alt="image">
        <div class="content">
          <div class="title">
            <h1>
              <span class="point-white"></span>
              ${item.title}
              <span class="point-white"></span>
              <h3>${item.subtitle}</h2>
            </h1>
          </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet expedita autem dolorem iusto cumque pariatur, modi iure assumenda perspiciatis mollitia, inventore velit natus obcaecati id, eos consectetur ea illum. Quasi!</p>
        </div>
      </div>
    `)
  })
})