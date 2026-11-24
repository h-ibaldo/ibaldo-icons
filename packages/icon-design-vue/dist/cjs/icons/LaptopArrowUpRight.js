'use strict';

const { defineComponent, h } = require('vue');

const LaptopArrowUpRight = defineComponent({
  name: 'LaptopArrowUpRight',
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
          h('line', {"x1":"1.974731440099276","y1":"20.000000003885361","x2":"21.974731440099276","y2":"20.000000003885361"}),
          h('polyline', {"points":"15.974735233239699 4.000000003885361 19.974731440099276 4.000000003885361 19.974731440099276 7.999997600407369"}),
          h('path', {"d":"M19.974731440099276,12.000000003885361v2c0,1.104569499661011-.895430500329894,2-2,2H5.974731440099276c-1.104569499659192,0-2-.895430500338989-2-2V6.000000003885361c0-1.104569499661011.895430500340808-2,2-2h5.999995110101736"}),
          h('line', {"x1":"13.974731440099276","y1":"10.000000003885361","x2":"19.974731440099276","y2":"4.000000003885361"})
        ]
      );
  }
});

module.exports = LaptopArrowUpRight;
module.exports.LaptopArrowUpRight = LaptopArrowUpRight;
module.exports.default = LaptopArrowUpRight;
