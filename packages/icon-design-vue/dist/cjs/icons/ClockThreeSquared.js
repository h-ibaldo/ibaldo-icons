'use strict';

const { defineComponent, h } = require('vue');

const ClockThreeSquared = defineComponent({
  name: 'ClockThreeSquared',
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
          h('path', {"d":"M20 21L4 21C3.449 21 3 20.555 3 20L3 4C3 3.449 3.449 3 4 3L20 3C20.551 3 21 3.449 21 4L21 20C21 20.555 20.551 21 20 21Z"}),
          h('path', {"d":"M12 12C13.105 12 14 12.895 14 14C14 15.105 13.105 16 12 16C11.262 16 10.625 15.598 10.277 15"}),
          h('path', {"d":"M10 9L14 9L12 12"}),
          h('path', {"d":"M12 5L12 3"}),
          h('path', {"d":"M12 21L12 19"}),
          h('path', {"d":"M19 12L21 12"}),
          h('path', {"d":"M3 12L5 12"})
        ]
      );
  }
});

module.exports = ClockThreeSquared;
module.exports.ClockThreeSquared = ClockThreeSquared;
module.exports.default = ClockThreeSquared;
