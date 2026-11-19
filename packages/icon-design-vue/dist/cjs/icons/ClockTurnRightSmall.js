'use strict';

const { defineComponent, h } = require('vue');

const ClockTurnRightSmall = defineComponent({
  name: 'ClockTurnRightSmall',
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
          h('path', {"d":"M18 2L21 5L18 8"}),
          h('path', {"d":"M11 5C6.582 5 3 8.582 3 13C3 17.418 6.582 21 11 21C15.418 21 19 17.418 19 13"}),
          h('path', {"d":"M11 9L11 13L15 13"}),
          h('path', {"d":"M21 5L11 5"})
        ]
      );
  }
});

module.exports = ClockTurnRightSmall;
module.exports.ClockTurnRightSmall = ClockTurnRightSmall;
module.exports.default = ClockTurnRightSmall;
