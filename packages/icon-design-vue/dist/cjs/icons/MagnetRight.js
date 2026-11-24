'use strict';

const { defineComponent, h } = require('vue');

const MagnetRight = defineComponent({
  name: 'MagnetRight',
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
          h('path', {"d":"M17 22L17 15"}),
          h('path', {"d":"M17 9L17 2"}),
          h('path', {"d":"M22 22L12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2L22 2L22 9L12 9C10.344 9 9 10.344 9 12C9 13.656 10.344 15 12 15L22 15Z"})
        ]
      );
  }
});

module.exports = MagnetRight;
module.exports.MagnetRight = MagnetRight;
module.exports.default = MagnetRight;
