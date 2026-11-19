'use strict';

const { defineComponent, h } = require('vue');

const ShapeNested = defineComponent({
  name: 'ShapeNested',
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
          h('rect', {"x":"2.00000000018008","y":"2.000000000446562","width":"20","height":"20"}),
          h('polygon', {"points":"10.00000000018008 13.000000000448381 12.00000000018008 10.000000000448381 14.00000000018008 13.000000000448381 10.00000000018008 13.000000000448381"}),
          h('polygon', {"points":"8.50000000018008 18.000000000448381 15.50000000018008 18.000000000448381 19.00000000018008 12.000000000448381 15.50000000018008 6.000000000448381 8.50000000018008 6.000000000448381 5.00000000018008 12.000000000448381 8.50000000018008 18.000000000448381"})
        ]
      );
  }
});

module.exports = ShapeNested;
module.exports.ShapeNested = ShapeNested;
module.exports.default = ShapeNested;
