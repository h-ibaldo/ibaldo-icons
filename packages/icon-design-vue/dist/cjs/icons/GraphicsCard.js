'use strict';

const { defineComponent, h } = require('vue');

const GraphicsCard = defineComponent({
  name: 'GraphicsCard',
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
          h('path', {"d":"M2 3L5 3L5 20.035"}),
          h('path', {"d":"M5 6L2 6L2 10L5 10"}),
          h('path', {"d":"M5 18L22 18L22 5L5 5"}),
          h('path', {"d":"M5 13L2 13L2 17L5 17"}),
          h('path', {"d":"M8 18L8 21L11 21L11 18"}),
          h('path', {"d":"M14 18L14 21L20 21L20 18"}),
          h('path', {"d":"M14 18L14 21"})
        ]
      );
  }
});

module.exports = GraphicsCard;
module.exports.GraphicsCard = GraphicsCard;
module.exports.default = GraphicsCard;
