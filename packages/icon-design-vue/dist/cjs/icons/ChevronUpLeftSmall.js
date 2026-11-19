'use strict';

const { defineComponent, h } = require('vue');

const ChevronUpLeftSmall = defineComponent({
  name: 'ChevronUpLeftSmall',
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
          h('path', {"d":"M10 15L10 10L15 10"})
        ]
      );
  }
});

module.exports = ChevronUpLeftSmall;
module.exports.ChevronUpLeftSmall = ChevronUpLeftSmall;
module.exports.default = ChevronUpLeftSmall;
