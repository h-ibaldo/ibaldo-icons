'use strict';

const { defineComponent, h } = require('vue');

const AlertDiamond = defineComponent({
  name: 'AlertDiamond',
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
          h('rect', {"x":"4.221825375546466","y":"4.219387443179009","width":"15.556349186088269","height":"15.556349186088269","rx":"2.49999999999882","ry":"2.49999999999882","transform":"translate(-4.968838856957838 11.999285914730187) rotate(-44.999999999993044)"}),
          h('line', {"x1":"11.999999968586053","y1":"16.023095941721294","x2":"11.999999968586053","y2":"16.033095941721513"}),
          h('line', {"x1":"11.999999968586053","y1":"8.033095941721513","x2":"11.999999968586053","y2":"12.033095941721513"})
        ]
      );
  }
});

module.exports = AlertDiamond;
module.exports.AlertDiamond = AlertDiamond;
module.exports.default = AlertDiamond;
