'use strict';

const { defineComponent, h } = require('vue');

const WheelchairSquare3 = defineComponent({
  name: 'WheelchairSquare3',
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
          h('rect', {"x":"2.025268548975873","y":"1.997565476117416","width":"20","height":"20.000000000003638","rx":"1.999999999999636","ry":"1.999999999999636"}),
          h('circle', {"cx":"10.025268548975873","cy":"6.997565476121054","r":"1"}),
          h('circle', {"cx":"10.525268548975873","cy":"14.497565476121054","r":"3.5"}),
          h('polyline', {"points":"13.675659173975873 12.997565476121054 16.025268548975873 12.997565476121054 18.025268548975873 16.997565476121054"}),
          h('line', {"x1":"10.025268548975873","y1":"6.997565476121054","x2":"10.694702142725873","y2":"11.014655319871054"}),
          h('line', {"x1":"11.025268548975873","y1":"9.997565476121054","x2":"14.025268548975873","y2":"9.997565476121054"})
        ]
      );
  }
});

module.exports = WheelchairSquare3;
module.exports.WheelchairSquare3 = WheelchairSquare3;
module.exports.default = WheelchairSquare3;
