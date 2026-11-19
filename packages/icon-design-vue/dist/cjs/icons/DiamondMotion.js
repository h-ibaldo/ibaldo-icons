'use strict';

const { defineComponent, h } = require('vue');

const DiamondMotion = defineComponent({
  name: 'DiamondMotion',
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
          h('polyline', {"points":"16.999999981000656 2.999996564421963 11.999999981000656 11.999996564421963 16.999999981000656 20.999996564421963"}),
          h('polyline', {"points":"11.999999981000656 2.999996564421963 6.999999981000656 11.999996564421963 11.999999981000656 20.999996564421963"}),
          h('polyline', {"points":"6.999999981000656 2.999996564421963 1.999999981000656 11.999996564421963 6.999999981000656 20.999996564421963"}),
          h('polyline', {"points":"16.999999981000656 20.999996564421963 21.999999981000656 11.999996564425601 16.999999981000656 2.999996564421963"})
        ]
      );
  }
});

module.exports = DiamondMotion;
module.exports.DiamondMotion = DiamondMotion;
module.exports.default = DiamondMotion;
