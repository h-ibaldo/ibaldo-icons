'use strict';

const { defineComponent, h } = require('vue');

const VideoSquareLarge = defineComponent({
  name: 'VideoSquareLarge',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M14 10L14 9.156C14 8.516 13.484 8 12.844 8L7.156 8C6.516 8 6 8.516 6 9.156L6 14.844C6 15.484 6.516 16 7.156 16L12.844 16C13.484 16 14 15.484 14 14.844L14 14L17.277 15.637C17.609 15.805 18 15.563 18 15.191L18 8.809C18 8.438 17.609 8.195 17.277 8.363Z"})
        ]
      );
  }
});

module.exports = VideoSquareLarge;
module.exports.VideoSquareLarge = VideoSquareLarge;
module.exports.default = VideoSquareLarge;
