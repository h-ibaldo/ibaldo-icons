'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownArc = defineComponent({
  name: 'ArrowDownArc',
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
          h('path', {"d":"M21.00000000018008,12.000000000842192c0,4.970562748196244-4.029437251800118,9-9,9S3.00000000018008,16.970562749038436,3.00000000018008,12.000000000842192"}),
          h('polyline', {"points":"8.00000000018008 11.000000000842192 12.00000000018008 15.000000000842192 16.00000000018008 11.000000000842192"}),
          h('line', {"x1":"12.00000000018008","y1":"3.000000000842192","x2":"12.00000000018008","y2":"15.000000000842192"})
        ]
      );
  }
});

module.exports = ArrowDownArc;
module.exports.ArrowDownArc = ArrowDownArc;
module.exports.default = ArrowDownArc;
