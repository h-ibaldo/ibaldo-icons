'use strict';

const { defineComponent, h } = require('vue');

const BurstSkewedOpen = defineComponent({
  name: 'BurstSkewedOpen',
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
          h('polygon', {"points":"9.999999981000656 11.999996563432433 21.999999981000656 7.999996563432433 21.999999981000656 17.999996563432433 9.999999981000656 21.999996563432433 9.999999981000656 11.999996563432433"}),
          h('polyline', {"points":"17.999999981000656 4.999996563432433 5.999999981000656 8.999996563432433 5.999999981000656 18.999996563432433"}),
          h('polyline', {"points":"13.999999981000656 1.999996563432433 1.999999981000656 5.999996563432433 1.999999981000656 15.999996563432433"})
        ]
      );
  }
});

module.exports = BurstSkewedOpen;
module.exports.BurstSkewedOpen = BurstSkewedOpen;
module.exports.default = BurstSkewedOpen;
