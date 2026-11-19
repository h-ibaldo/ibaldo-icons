'use strict';

const { defineComponent, h } = require('vue');

const SelfieBezel = defineComponent({
  name: 'SelfieBezel',
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
          h('rect', {"x":"2.000487617352974","y":"4.999487295037852","width":"20","height":"14.000975271515017","rx":"2.160322141989778","ry":"2.160322141989778","transform":"translate(.000512685929762 24.00046254752051) rotate(-89.999999997002348)"}),
          h('line', {"x1":"4.99999998128078","y1":"17.99997493052615","x2":"19.000975252789431","y2":"17.999974931064571"}),
          h('line', {"x1":"4.99999998191015","y1":"5.99997493052615","x2":"19.00097525342062","y2":"5.999974931064571"}),
          h('circle', {"cx":"12.001029198860124","cy":"10.999996564258254","r":"2"}),
          h('path', {"d":"M15.001029198860124,17.999996564258254v-2.000003000001016c0-1.656852592637733-1.343144407359432-2.999996999998984-2.999997000000803-2.999996999998984h-.000005999998393c-1.656852592630457,0-2.999997000000803,1.343144407361251-2.999997000000803,2.999996999998984v2.000003000001016"})
        ]
      );
  }
});

module.exports = SelfieBezel;
module.exports.SelfieBezel = SelfieBezel;
module.exports.default = SelfieBezel;
