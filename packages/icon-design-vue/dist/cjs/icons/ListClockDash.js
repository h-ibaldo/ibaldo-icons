'use strict';

const { defineComponent, h } = require('vue');

const ListClockDash = defineComponent({
  name: 'ListClockDash',
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
          h('path', {"d":"M20 9L16 9"}),
          h('path', {"d":"M20 13L16 13"}),
          h('path', {"d":"M20 17L9 17"}),
          h('path', {"d":"M20 21L9 21"}),
          h('path', {"d":"M5 17L4 17"}),
          h('path', {"d":"M5 21L4 21"}),
          h('path', {"d":"M12 8C12 10.762 9.762 13 7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3C9.762 3 12 5.238 12 8Z"}),
          h('path', {"d":"M7 6L7 8L9 8"})
        ]
      );
  }
});

module.exports = ListClockDash;
module.exports.ListClockDash = ListClockDash;
module.exports.default = ListClockDash;
