'use strict';

const { defineComponent, h } = require('vue');

const MobilePlane = defineComponent({
  name: 'MobilePlane',
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
          h('path', {"d":"M17.999999999210559,10.999999999643478V3.999999999643478c0-1.1046142578125-.8955078125-2-2-2H7.999999999210559c-1.1044921875,0-2,.8953857421875-2,2v7"}),
          h('path', {"d":"M5.999999999210559,14.799987792612228v5.20001220703125c0,1.10455322265625.8955078125,2,2,2h8c1.1044921875,0,2-.89544677734375,2-2v-5.20001220703125"}),
          h('polyline', {"points":"5.999999999210559 9.200012206674728 1.999999999210559 11.999999999643478 11.999999999210559 18.999999999643478 21.999999999210559 11.999999999643478 17.999999999210559 9.200012206674728"}),
          h('polyline', {"points":"14.999999999210559 7.099975585580978 11.999999999210559 4.999999999643478 8.999999999210559 7.099975585580978"})
        ]
      );
  }
});

module.exports = MobilePlane;
module.exports.MobilePlane = MobilePlane;
module.exports.default = MobilePlane;
