'use strict';

const { defineComponent, h } = require('vue');

const ClockSquared = defineComponent({
  name: 'ClockSquared',
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
          h('path', {"d":"M18 21L6 21C4.344 21 3 19.656 3 18L3 6C3 4.344 4.344 3 6 3L18 3C19.656 3 21 4.344 21 6L21 18C21 19.656 19.656 21 18 21Z"}),
          h('path', {"d":"M12 7L12 12L16 12"})
        ]
      );
  }
});

module.exports = ClockSquared;
module.exports.ClockSquared = ClockSquared;
module.exports.default = ClockSquared;
