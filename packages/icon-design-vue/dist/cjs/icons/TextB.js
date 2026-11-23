'use strict';

const { defineComponent, h } = require('vue');

const TextB = defineComponent({
  name: 'TextB',
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
          h('path', {"d":"M5 11L13.5 11C16.539 11 19 13.461 19 16.5C19 19.539 16.539 22 13.5 22L5 22L5 2L13.5 2C15.984 2 18 4.016 18 6.5C18 8.984 15.984 11 13.5 11L5 11"})
        ]
      );
  }
});

module.exports = TextB;
module.exports.TextB = TextB;
module.exports.default = TextB;
