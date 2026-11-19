'use strict';

const { defineComponent, h } = require('vue');

const TabMinusSharp = defineComponent({
  name: 'TabMinusSharp',
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
          h('polyline', {"points":"12.149805223290059 21.998782740736715 2.050537109160359 21.998782740736715 2.050537109160359 1.998782740736715 10.050537109160359 1.998782740736715 13.050537109160359 5.998782740736715 22.050537109160359 5.998782740736715 22.050537109160359 13.998782740736715"}),
          h('polyline', {"points":"15.050537109160359 1.998782740736715 22.050537109160359 1.998782740736715 22.050537109160359 5.998782740736715"}),
          h('line', {"x1":"16.050537109160359","y1":"18.998782740733986","x2":"22.050537109160359","y2":"18.998782740733986"})
        ]
      );
  }
});

module.exports = TabMinusSharp;
module.exports.TabMinusSharp = TabMinusSharp;
module.exports.default = TabMinusSharp;
