'use strict';

const { defineComponent, h } = require('vue');

const CircleCrescentDashed = defineComponent({
  name: 'CircleCrescentDashed',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M9.203 3.469C8.813 3.234 8.406 3.02 7.988 2.836"}),
          h('path', {"d":"M12.531 17.199C13.207 16.09 13.672 14.84 13.875 13.5"}),
          h('path', {"d":"M13.672 9.5C13.359 8.297 12.836 7.18 12.133 6.195"}),
          h('path', {"d":"M7.992 21.164C8.637 20.883 9.242 20.535 9.805 20.133"})
        ]
      );
  }
});

module.exports = CircleCrescentDashed;
module.exports.CircleCrescentDashed = CircleCrescentDashed;
module.exports.default = CircleCrescentDashed;
