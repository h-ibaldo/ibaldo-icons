'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpRightSquareIn = defineComponent({
  name: 'ArrowUpRightSquareIn',
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
          h('path', {"d":"M14.004 20.98L19.004 20.98C20.109 20.98 21.004 20.082 21.004 18.98L21.004 4.98C21.004 3.875 20.109 2.98 19.004 2.98L5.004 2.98C3.898 2.98 3.004 3.875 3.004 4.98L3.004 9.98"}),
          h('path', {"d":"M14.004 15.98L14.004 9.98L8.004 9.98"}),
          h('path', {"d":"M13.004 10.98L5.004 18.98"})
        ]
      );
  }
});

module.exports = ArrowUpRightSquareIn;
module.exports.ArrowUpRightSquareIn = ArrowUpRightSquareIn;
module.exports.default = ArrowUpRightSquareIn;
