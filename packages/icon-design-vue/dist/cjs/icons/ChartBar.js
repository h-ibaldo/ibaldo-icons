'use strict';

const { defineComponent, h } = require('vue');

const ChartBar = defineComponent({
  name: 'ChartBar',
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
          h('rect', {"x":"2","y":"13","width":"4","height":"8"}),
          h('rect', {"x":"10","y":"8","width":"4","height":"13"}),
          h('rect', {"x":"18","y":"3","width":"4","height":"18"})
        ]
      );
  }
});

module.exports = ChartBar;
module.exports.ChartBar = ChartBar;
module.exports.default = ChartBar;
