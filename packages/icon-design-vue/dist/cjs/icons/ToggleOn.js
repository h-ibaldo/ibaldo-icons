'use strict';

const { defineComponent, h } = require('vue');

const ToggleOn = defineComponent({
  name: 'ToggleOn',
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
          h('rect', {"x":"1.999999988019908","y":"5.999996563894001","width":"20","height":"12.000000004577942","rx":"5.999993987784006","ry":"5.999993987784006","transform":"translate(23.999999973447217 23.999993134958544) rotate(-180)"}),
          h('path', {"d":"M15.999999977100742,17.999996563434252c-3.313708498801134,0-6-2.686291501198866-6-6,0-3.313708498797496,2.686291501198866-6,6-6"})
        ]
      );
  }
});

module.exports = ToggleOn;
module.exports.ToggleOn = ToggleOn;
module.exports.default = ToggleOn;
