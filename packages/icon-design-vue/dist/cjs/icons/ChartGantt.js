'use strict';

const { defineComponent, h } = require('vue');

const ChartGantt = defineComponent({
  name: 'ChartGantt',
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
          h('path', {"d":"M2 2L2 22L22.023 22"}),
          h('path', {"d":"M12.965 12L7 12"}),
          h('path', {"d":"M16.965 16L11 16"}),
          h('path', {"d":"M20.965 8L11 8"})
        ]
      );
  }
});

module.exports = ChartGantt;
module.exports.ChartGantt = ChartGantt;
module.exports.default = ChartGantt;
