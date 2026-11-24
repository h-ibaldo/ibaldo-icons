'use strict';

const { defineComponent, h } = require('vue');

const BatteryAlertBoxy = defineComponent({
  name: 'BatteryAlertBoxy',
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
          h('path', {"d":"M19 15L21 15C21.551 15 22 14.555 22 14L22 10C22 9.445 21.551 9 21 9L19 9"}),
          h('path', {"d":"M11 12L11 9"}),
          h('path', {"d":"M11 15L11 15"})
        ]
      );
  }
});

module.exports = BatteryAlertBoxy;
module.exports.BatteryAlertBoxy = BatteryAlertBoxy;
module.exports.default = BatteryAlertBoxy;
