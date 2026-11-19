'use strict';

const { defineComponent, h } = require('vue');

const ClockAngled = defineComponent({
  name: 'ClockAngled',
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
          h('circle', {"cx":"12","cy":"11.999999999998181","r":"10"}),
          h('polyline', {"points":"12.000000006790287 6.999999999998181 12.000000006790287 11.999999999998181 17.000000006790287 13.999999999998181"})
        ]
      );
  }
});

module.exports = ClockAngled;
module.exports.ClockAngled = ClockAngled;
module.exports.default = ClockAngled;
