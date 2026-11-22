'use strict';

const { defineComponent, h } = require('vue');

const LayerStackOpenTwo = defineComponent({
  name: 'LayerStackOpenTwo',
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
          h('path', {"d":"M12 2L2 8L12 14L22 8Z"}),
          h('path', {"d":"M18.668 14L22 16L12 22L2 16L5.332 14"})
        ]
      );
  }
});

module.exports = LayerStackOpenTwo;
module.exports.LayerStackOpenTwo = LayerStackOpenTwo;
module.exports.default = LayerStackOpenTwo;
