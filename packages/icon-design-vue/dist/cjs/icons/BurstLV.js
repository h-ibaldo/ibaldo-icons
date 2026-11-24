'use strict';

const { defineComponent, h } = require('vue');

const BurstLV = defineComponent({
  name: 'BurstLV',
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
          h('polyline', {"points":"22.000000000090949 9.000000000896762 21.99999999919055 21.000000000896762 7.99999999919055 20.99999999981992"}),
          h('polyline', {"points":"19 6.000000000001819 18.9999999990996 17.999999999998181 4.9999999990996 17.999999998921339"}),
          h('polyline', {"points":"2.000000003439709 12.999999999998181 2.000000002399247 14.999999998321073 16.000000002659363 14.999999999612555 16 2.999999999998181"}),
          h('polyline', {"points":"1.999999999869033 3.000000000067303 2.000000000140062 9.000000000067303 5.000000000130967 8.999999999932697"}),
          h('polyline', {"points":"7 2.999999999998181 9.000000003050445 8.999999999790816 11 2.999999999998181"})
        ]
      );
  }
});

module.exports = BurstLV;
module.exports.BurstLV = BurstLV;
module.exports.default = BurstLV;
