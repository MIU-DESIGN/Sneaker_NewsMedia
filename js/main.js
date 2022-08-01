'use strict'

{
  //ハンバーガーメニュー
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger__menu');
  const nav = document.querySelector('.header__nav');
  const mask = document.querySelector('.mask');
  hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    mask.classList.toggle('active');
  });

  //スライド
  $('.pickup__slider').slick({
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //feature__itemのフェードイン
  const targets = document.querySelectorAll('.feature__item--pic');
  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);
    });
  }
  const options = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });
}