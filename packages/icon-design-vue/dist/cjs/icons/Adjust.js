'use strict';

const { defineComponent, h } = require('vue');

const Adjust = defineComponent({
  name: 'Adjust',
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
          h('circle', {"cx":"8.00000001495664","cy":"12.000000015211299","r":"3"}),
          h('line', {"x1":"11.00000001495664","y1":"12.000000015211299","x2":"21.999999995498911","y2":"12.000000015211299"}),
          h('line', {"x1":"1.99999999550073","y1":"12.000000015211299","x2":"5.00000001495664","y2":"12.000000015211299"}),
          h('circle', {"cx":"16.000000014954821","cy":"5.000000024597284","r":"3"}),
          h('line', {"x1":"13.000000014954821","y1":"5.000000024597284","x2":"1.999999995501639","y2":"5.000000024597284"}),
          h('line', {"x1":"21.99999999550073","y1":"5.000000024597284","x2":"19.00000001495664","y2":"5.000000024597284"}),
          h('circle', {"cx":"16.000000014954821","cy":"19.000000015211299","r":"3"}),
          h('line', {"x1":"13.000000014954821","y1":"19.000000015211299","x2":"1.999999995501639","y2":"19.000000015211299"}),
          h('line', {"x1":"21.99999999550073","y1":"19.000000015211299","x2":"19.00000001495664","y2":"19.000000015211299"})
        ]
      );
  }
});

module.exports = Adjust;
module.exports.Adjust = Adjust;
module.exports.default = Adjust;
