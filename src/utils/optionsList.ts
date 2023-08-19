export const optionsList = {
    item: {
      // css class to inject into each individual item
      class: "",
      // padding between each item
      padding: 12,
    },
    list: {
      // css class for the parent of item
      class: "",
      // maximum width of the list it can extend to before switching to windowed mode, basically think of the bootstrap container max-width
      // windowed is used to toggle between full-screen mode and container mode
      windowed: 1200,
      // padding of the list, if container < windowed what is the left-right padding of the list
      // during full-screen mode the padding will added to left & right to centralise the item
      padding: 24,
    },
    responsive: [
      // responsive breakpoints to calculate how many items to show in the list at each width interval
      // it will always fall back to these:
      { end: 576, size: 1 },
      { start: 576, end: 768, size: 2 },
      { start: 768, end: 992, size: 3 },
      { start: 992, end: 1200, size: 4 },
      { start: 1200, size: 5 },
    ],
    navigation: {
      // when to show navigation
      start: 992,
      color: "#000",
    },
    position: {
      // Start from '1' on mounted.
      start: 1,
    },
    autoplay: {
      // enable/disable playing slideshow
      play: true,
      // the delay duration between slides in milliseconds
      speed: 1800,
      // if setup, the slideshow will be in the loop.
      repeat: true,
    },
  };