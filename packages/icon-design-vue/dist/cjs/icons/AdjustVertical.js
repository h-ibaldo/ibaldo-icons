'use strict';

const { defineComponent, h } = require('vue');

const AdjustVertical = defineComponent({
  name: 'AdjustVertical',
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
          h('circle', {"cx":"11.999999990798642","cy":"16.000000000446562","r":"3"}),
          h('line', {"x1":"11.999999990798642","y1":"13.000000000446562","x2":"11.999999990798642","y2":"2.000000019906111"}),
          h('line', {"x1":"11.999999990798642","y1":"22.000000019904292","x2":"11.999999990798642","y2":"19.000000000448381"}),
          h('circle', {"cx":"5.000000000184627","cy":"8.0000000004502","r":"3"}),
          h('line', {"x1":"5.000000000184627","y1":"11.0000000004502","x2":"5.000000000184627","y2":"22.000000019901563"}),
          h('line', {"x1":"5.000000000184627","y1":"2.000000019904292","x2":"5.000000000184627","y2":"5.000000000448381"}),
          h('circle', {"cx":"18.999999990798642","cy":"8.0000000004502","r":"3"}),
          h('line', {"x1":"18.999999990798642","y1":"11.0000000004502","x2":"18.999999990798642","y2":"22.000000019901563"}),
          h('line', {"x1":"18.999999990798642","y1":"2.000000019904292","x2":"18.999999990798642","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = AdjustVertical;
module.exports.AdjustVertical = AdjustVertical;
module.exports.default = AdjustVertical;
