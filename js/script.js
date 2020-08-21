// pengaturan pada side navabr
const nav = document.querySelectorAll('.sidenav');
M.Sidenav.init(nav);

// pengauran pada slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 550,
    transiton: 600,
    interval: 3000
});

// pengaturan pada parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// pengaturan pada materialbox
const materialbox  = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

// pengaturan pada scrollspy
const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll, {
    scrollOffset: 60
});