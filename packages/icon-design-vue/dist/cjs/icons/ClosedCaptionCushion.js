'use strict';

const { defineComponent, h } = require('vue');

const ClosedCaptionCushion = defineComponent({
  name: 'ClosedCaptionCushion',
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
          h('path', {"d":"M21.121 6.336C20.926 5.719 20.418 5.234 19.789 5.063C17.313 4.371 14.699 4 12 4C9.301 4 6.687 4.371 4.207 5.063C3.582 5.234 3.074 5.719 2.879 6.336C2.316 8.125 2 10.023 2 12C2 13.977 2.316 15.875 2.879 17.664C3.074 18.281 3.582 18.766 4.207 18.938C6.687 19.629 9.301 20 12 20C14.699 20 17.313 19.629 19.789 18.938C20.418 18.766 20.926 18.281 21.121 17.664C21.684 15.875 22 13.977 22 12C22 10.023 21.684 8.125 21.121 6.336Z"}),
          h('path', {"d":"M10.223 10C9.875 9.402 9.238 9 8.5 9C7.395 9 6.5 9.895 6.5 11L6.5 13C6.5 14.105 7.395 15 8.5 15C9.238 15 9.875 14.598 10.223 14"}),
          h('path', {"d":"M17.5 10C17.152 9.402 16.516 9 15.777 9C14.672 9 13.777 9.895 13.777 11L13.777 13C13.777 14.105 14.672 15 15.777 15C16.516 15 17.152 14.598 17.5 14"})
        ]
      );
  }
});

module.exports = ClosedCaptionCushion;
module.exports.ClosedCaptionCushion = ClosedCaptionCushion;
module.exports.default = ClosedCaptionCushion;
