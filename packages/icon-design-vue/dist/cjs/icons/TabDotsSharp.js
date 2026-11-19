'use strict';

const { defineComponent, h } = require('vue');

const TabDotsSharp = defineComponent({
  name: 'TabDotsSharp',
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
          h('polygon', {"points":"22.000000004678441 21.999999999999091 2.000000004678441 21.999999999999091 2.000000004678441 1.999999999999091 10.000000004678441 1.999999999999091 13.000000004678441 5.999999999999091 22.000000004678441 5.999999999999091 22.000000004678441 21.999999999999091"}),
          h('polyline', {"points":"15.000000004678441 1.999999999999091 22.000000004678441 1.999999999999091 22.000000004678441 5.999999999999091"}),
          h('line', {"x1":"8.000000004678441","y1":"14.009999999999309","x2":"8.000000004678441","y2":"13.999999999999091"}),
          h('line', {"x1":"12.000000004678441","y1":"14.009999999999309","x2":"12.000000004678441","y2":"13.999999999999091"}),
          h('line', {"x1":"16.000000004678441","y1":"14.009999999999309","x2":"16.000000004678441","y2":"13.999999999999091"})
        ]
      );
  }
});

module.exports = TabDotsSharp;
module.exports.TabDotsSharp = TabDotsSharp;
module.exports.default = TabDotsSharp;
