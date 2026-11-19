'use strict';

const { defineComponent, h } = require('vue');

const GridOddCircle = defineComponent({
  name: 'GridOddCircle',
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
          h('circle', {"cx":"18.00000000018008","cy":"6.000000000447017","r":"3.999999999999773"}),
          h('rect', {"x":"2.00000000018008","y":"2.000000000446562","width":"8","height":"8"}),
          h('rect', {"x":"14.00000000018008","y":"14.000000000446562","width":"8","height":"8"}),
          h('rect', {"x":"2.00000000018008","y":"14.000000000446562","width":"8","height":"8"})
        ]
      );
  }
});

module.exports = GridOddCircle;
module.exports.GridOddCircle = GridOddCircle;
module.exports.default = GridOddCircle;
