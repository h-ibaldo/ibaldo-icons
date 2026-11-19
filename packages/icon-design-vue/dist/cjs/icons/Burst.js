'use strict';

const { defineComponent, h } = require('vue');

const Burst = defineComponent({
  name: 'Burst',
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
          h('polyline', {"points":"21.99999999981992 8.999999999012289 22 20.999999999012289 8 20.99999999919055"}),
          h('polyline', {"points":"18.99999999945976 5.999999998386556 18.99999999963984 17.999999998382918 4.99999999963984 17.999999998561179"}),
          h('rect', {"x":"2.000000002654815","y":"2.999999998606654","width":"14.00000000027012","height":"11.999999999641659","transform":"translate(18.000000005554021 17.999999996880696) rotate(-180)"})
        ]
      );
  }
});

module.exports = Burst;
module.exports.Burst = Burst;
module.exports.default = Burst;
