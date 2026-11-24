'use strict';

const { defineComponent, h } = require('vue');

const SquareStackBracketsShadow = defineComponent({
  name: 'SquareStackBracketsShadow',
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
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2"}),
          h('path', {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z"}),
          h('path', {"d":"M16 12L18 14L16 16"}),
          h('path', {"d":"M12 12L10 14L12 16"})
        ]
      );
  }
});

module.exports = SquareStackBracketsShadow;
module.exports.SquareStackBracketsShadow = SquareStackBracketsShadow;
module.exports.default = SquareStackBracketsShadow;
