'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpLeftSquareIn = defineComponent({
  name: 'ArrowUpLeftSquareIn',
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
          h('path', {"d":"M21.004 9.98L21.004 4.98C21.004 3.875 20.109 2.98 19.004 2.98L5.004 2.98C3.898 2.98 3.004 3.875 3.004 4.98L3.004 18.98C3.004 20.082 3.898 20.98 5.004 20.98L10.004 20.98"}),
          h('path', {"d":"M16.004 9.98L10.004 9.98L10.004 15.98"}),
          h('path', {"d":"M11.004 10.98L19.004 18.98"})
        ]
      );
  }
});

module.exports = ArrowUpLeftSquareIn;
module.exports.ArrowUpLeftSquareIn = ArrowUpLeftSquareIn;
module.exports.default = ArrowUpLeftSquareIn;
