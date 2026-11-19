'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownLeftSquareOut = defineComponent({
  name: 'ArrowDownLeftSquareOut',
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
          h('path', {"d":"M9.004 21L3.004 21L3.004 15"}),
          h('path', {"d":"M11.004 13L3.004 21"}),
          h('path', {"d":"M13 17.98L19 17.98C20.105 17.98 21 17.082 21 15.98L21 4.98C21 3.875 20.105 2.98 19 2.98L8 2.98C6.895 2.98 6 3.875 6 4.98L6 10.98"})
        ]
      );
  }
});

module.exports = ArrowDownLeftSquareOut;
module.exports.ArrowDownLeftSquareOut = ArrowDownLeftSquareOut;
module.exports.default = ArrowDownLeftSquareOut;
