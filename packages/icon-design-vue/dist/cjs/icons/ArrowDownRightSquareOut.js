'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownRightSquareOut = defineComponent({
  name: 'ArrowDownRightSquareOut',
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
          h('path', {"d":"M15 21L21 21L21 15"}),
          h('path', {"d":"M13 13L21 21"}),
          h('path', {"d":"M11.004 17.98L5.004 17.98C3.898 17.98 3.004 17.082 3.004 15.98L3.004 4.98C3.004 3.875 3.898 2.98 5.004 2.98L16.004 2.98C17.109 2.98 18.004 3.875 18.004 4.98L18.004 10.98"})
        ]
      );
  }
});

module.exports = ArrowDownRightSquareOut;
module.exports.ArrowDownRightSquareOut = ArrowDownRightSquareOut;
module.exports.default = ArrowDownRightSquareOut;
