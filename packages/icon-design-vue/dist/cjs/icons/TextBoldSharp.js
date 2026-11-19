'use strict';

const { defineComponent, h } = require('vue');

const TextBoldSharp = defineComponent({
  name: 'TextBoldSharp',
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
          h('path', {"d":"M6 12L15 12C17.211 12 19 13.789 19 16C19 18.211 17.211 20 15 20L6 20L6 4L14 4C16.211 4 18 5.789 18 8C18 10.211 16.211 12 14 12"})
        ]
      );
  }
});

module.exports = TextBoldSharp;
module.exports.TextBoldSharp = TextBoldSharp;
module.exports.default = TextBoldSharp;
