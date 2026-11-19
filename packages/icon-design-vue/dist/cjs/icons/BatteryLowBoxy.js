'use strict';

const { defineComponent, h } = require('vue');

const BatteryLowBoxy = defineComponent({
  name: 'BatteryLowBoxy',
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
          h('path', {"d":"M17 19L5 19C3.895 19 3 18.105 3 17L3 7C3 5.895 3.895 5 5 5L17 5C18.105 5 19 5.895 19 7L19 17C19 18.105 18.105 19 17 19Z"}),
          h('path', {"d":"M19 9L21 9C21.551 9 22 9.336 22 9.75L22 14.25C22 14.664 21.551 15 21 15L19 15"}),
          h('path', {"d":"M7 9L7 15"})
        ]
      );
  }
});

module.exports = BatteryLowBoxy;
module.exports.BatteryLowBoxy = BatteryLowBoxy;
module.exports.default = BatteryLowBoxy;
