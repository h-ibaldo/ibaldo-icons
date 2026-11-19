'use strict';

const { defineComponent, h } = require('vue');

const TextAaSquareBoxy = defineComponent({
  name: 'TextAaSquareBoxy',
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
          h('path', {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M6 14L10 14"}),
          h('path', {"d":"M5 17L6.84 7.805C6.934 7.336 7.344 7 7.82 7L8.18 7C8.656 7 9.066 7.336 9.16 7.805L11 17"}),
          h('path', {"d":"M18 17L16 17C14.895 17 14 16.105 14 15L14 12C14 10.895 14.895 10 16 10C17.105 10 18 10.895 18 12Z"}),
          h('path', {"d":"M18 15L18 10"})
        ]
      );
  }
});

module.exports = TextAaSquareBoxy;
module.exports.TextAaSquareBoxy = TextAaSquareBoxy;
module.exports.default = TextAaSquareBoxy;
