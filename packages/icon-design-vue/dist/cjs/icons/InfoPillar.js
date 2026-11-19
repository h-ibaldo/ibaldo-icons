'use strict';

const { defineComponent, h } = require('vue');

const InfoPillar = defineComponent({
  name: 'InfoPillar',
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
          h('polyline', {"points":"7.025268553439673 10.99999656424734 10.025268553439673 10.99999656424734 10.025268553439673 21.999996564243702"}),
          h('polyline', {"points":"10.025268553439673 10.99999656424734 14.025268553439673 10.99999656424734 14.025268553439673 21.999996564243702"}),
          h('line', {"x1":"7.025268553439673","y1":"21.999996564243702","x2":"17.025268553439673","y2":"21.999996564243702"}),
          h('circle', {"cx":"12.025268553439673","cy":"4.99999656424734","r":"3"})
        ]
      );
  }
});

module.exports = InfoPillar;
module.exports.InfoPillar = InfoPillar;
module.exports.default = InfoPillar;
