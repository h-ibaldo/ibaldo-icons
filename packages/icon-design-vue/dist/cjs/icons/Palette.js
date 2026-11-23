'use strict';

const { defineComponent, h } = require('vue');

const Palette = defineComponent({
  name: 'Palette',
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
          h('path', {"d":"M16 18.5L16 18C16 16.344 17.344 15 19 15C20.656 15 22 13.656 22 12L22 11.5C22 6.254 17.746 2 12.5 2L12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22L12.5 22C14.434 22 16 20.434 16 18.5Z"}),
          h('path', {"d":"M16 9C16 8.449 16.449 8 17 8C17.551 8 18 8.449 18 9C18 9.551 17.551 10 17 10C16.449 10 16 9.551 16 9Z"}),
          h('path', {"d":"M11 7C11 6.449 11.449 6 12 6C12.551 6 13 6.449 13 7C13 7.551 12.551 8 12 8C11.449 8 11 7.551 11 7Z"}),
          h('path', {"d":"M6 10C6 9.449 6.449 9 7 9C7.551 9 8 9.449 8 10C8 10.551 7.551 11 7 11C6.449 11 6 10.551 6 10Z"}),
          h('path', {"d":"M6 15C6 14.449 6.449 14 7 14C7.551 14 8 14.449 8 15C8 15.551 7.551 16 7 16C6.449 16 6 15.551 6 15Z"}),
          h('path', {"d":"M10 18C10 17.449 10.449 17 11 17C11.551 17 12 17.449 12 18C12 18.551 11.551 19 11 19C10.449 19 10 18.551 10 18Z"})
        ]
      );
  }
});

module.exports = Palette;
module.exports.Palette = Palette;
module.exports.default = Palette;
