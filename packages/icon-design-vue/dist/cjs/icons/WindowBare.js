'use strict';

const { defineComponent, h } = require('vue');

const WindowBare = defineComponent({
  name: 'WindowBare',
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
          h('rect', {"x":"2.00000000018008","y":"2.00000000044929","width":"20","height":"20","rx":"1.999999999999977","ry":"1.999999999999977"}),
          h('line', {"x1":"6.010000000180298","y1":"6.000000000448381","x2":"6.00000000018008","y2":"6.000000000448381"}),
          h('line', {"x1":"9.010000000180298","y1":"6.000000000448381","x2":"9.00000000018008","y2":"6.000000000448381"}),
          h('line', {"x1":"12.010000000180298","y1":"6.000000000448381","x2":"12.00000000018008","y2":"6.000000000448381"})
        ]
      );
  }
});

module.exports = WindowBare;
module.exports.WindowBare = WindowBare;
module.exports.default = WindowBare;
