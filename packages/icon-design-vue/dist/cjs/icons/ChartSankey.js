'use strict';

const { defineComponent, h } = require('vue');

const ChartSankey = defineComponent({
  name: 'ChartSankey',
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
          h('path', {"d":"M21 12C15 12 10 16 3 16C2.449 16 2 16.449 2 17L2 21C2 21.551 2.449 22 3 22C10 22 15 18 21 18C21.551 18 22 17.551 22 17L22 13C22 12.449 21.551 12 21 12Z"}),
          h('path', {"d":"M13.195 13.715C10.07 11 6.836 8 3 8C2.449 8 2 7.551 2 7L2 3C2 2.449 2.449 2 3 2C10 2 15 12 21 12"}),
          h('path', {"d":"M3 2L21 2C21.551 2 22 2.449 22 3L22 7C22 7.551 21.551 8 21 8L13.527 8"})
        ]
      );
  }
});

module.exports = ChartSankey;
module.exports.ChartSankey = ChartSankey;
module.exports.default = ChartSankey;
