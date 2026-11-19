'use strict';

const { defineComponent, h } = require('vue');

const TextAlignRightLarge = defineComponent({
  name: 'TextAlignRightLarge',
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
          h('path', {"d":"M20 5L4 5"}),
          h('path', {"d":"M20 10L8 10"}),
          h('path', {"d":"M20 15L4 15"}),
          h('path', {"d":"M20 20L11 20"})
        ]
      );
  }
});

module.exports = TextAlignRightLarge;
module.exports.TextAlignRightLarge = TextAlignRightLarge;
module.exports.default = TextAlignRightLarge;
