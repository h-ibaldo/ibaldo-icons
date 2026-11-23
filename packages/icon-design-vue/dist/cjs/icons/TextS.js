'use strict';

const { defineComponent, h } = require('vue');

const TextS = defineComponent({
  name: 'TextS',
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
          h('path', {"d":"M17 2L10.953 2C8.195 2 5.953 4.238 5.953 7C5.953 9.762 8.195 12 10.953 12L13 12C15.762 12 18 14.238 18 17C18 19.762 15.762 22 13 22L6 22"})
        ]
      );
  }
});

module.exports = TextS;
module.exports.TextS = TextS;
module.exports.default = TextS;
