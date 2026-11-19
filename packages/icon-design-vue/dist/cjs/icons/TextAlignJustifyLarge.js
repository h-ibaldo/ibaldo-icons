'use strict';

const { defineComponent, h } = require('vue');

const TextAlignJustifyLarge = defineComponent({
  name: 'TextAlignJustifyLarge',
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
          h('path', {"d":"M4 5L20 5"}),
          h('path', {"d":"M4 10L20 10"}),
          h('path', {"d":"M4 15L20 15"}),
          h('path', {"d":"M4 20L20 20"})
        ]
      );
  }
});

module.exports = TextAlignJustifyLarge;
module.exports.TextAlignJustifyLarge = TextAlignJustifyLarge;
module.exports.default = TextAlignJustifyLarge;
