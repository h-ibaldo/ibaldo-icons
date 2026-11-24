'use strict';

const { defineComponent, h } = require('vue');

const TextBold = defineComponent({
  name: 'TextBold',
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
          h('path', {"d":"M6 11L14.5 11C16.984 11 19 13.016 19 15.5C19 17.984 16.984 20 14.5 20L6 20L6 4L13.5 4C15.434 4 17 5.566 17 7.5C17 9.434 15.434 11 13.5 11"})
        ]
      );
  }
});

module.exports = TextBold;
module.exports.TextBold = TextBold;
module.exports.default = TextBold;
