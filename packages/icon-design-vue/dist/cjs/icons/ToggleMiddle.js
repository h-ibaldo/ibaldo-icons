'use strict';

const { defineComponent, h } = require('vue');

const ToggleMiddle = defineComponent({
  name: 'ToggleMiddle',
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
          h('rect', {"x":"1.999999988019965","y":"5.999996563894001","width":"19.999999999999886","height":"12.000000004577942","rx":"5.999993987784044","ry":"5.999993987784044","transform":"translate(23.999999973447217 23.999993134958544) rotate(-180)"}),
          h('path', {"d":"M11.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6"}),
          h('path', {"d":"M11.999999977100742,5.999996563434252c3.313708498799315,0,6,2.686291501202504,6,6,0,3.313708498801134-2.686291501200685,6-6,6"})
        ]
      );
  }
});

module.exports = ToggleMiddle;
module.exports.ToggleMiddle = ToggleMiddle;
module.exports.default = ToggleMiddle;
