'use strict';

const { defineComponent, h } = require('vue');

const TrendUpDownSmall = defineComponent({
  name: 'TrendUpDownSmall',
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
          h('path', {"d":"M17 15L22 20"}),
          h('path', {"d":"M22 16L22 20L18 20"}),
          h('path', {"d":"M2 15L10 8L14 12L22 4"}),
          h('path', {"d":"M22 8L22 4L18 4"})
        ]
      );
  }
});

module.exports = TrendUpDownSmall;
module.exports.TrendUpDownSmall = TrendUpDownSmall;
module.exports.default = TrendUpDownSmall;
