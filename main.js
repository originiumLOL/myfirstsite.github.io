Fancybox.bind('[data-fancybox="gallery"]', {
  animated: false,
  showClass: false,
  hideClass: false,

  Toolbar: false,

  closeButton: "top",
  click: false,
  dragToClose: false,

  Carousel: {
    // Disable content slide animation
    friction: 0,

    // Disable touch guestures
    Panzoom: {
      touch: false,
    },

    Navigation: false,
  },

  Image: {
    // Disable animation from/to thumbnail on start/close
    zoom: false,

    // Disable zoom on scroll event
    wheel: false,

    // Disable zoom on image click
    click: false,

    // Fit image horizontally only
    fit: "contain-w",
  },

  // Center thumbnails only if draggable
  Thumbs: {
    minScreenHeight: 0,
    Carousel: {
      center: function () {
        return this.elemDimWidth > this.wrapDimWidth;
      },
    },
  },
});