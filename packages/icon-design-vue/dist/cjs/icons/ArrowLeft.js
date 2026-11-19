'use strict';

const { defineComponent, h } = require('vue');

const ArrowLeft = defineComponent({
  name: 'ArrowLeft',
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
          h('path', {"d":"M12 20L4 12L12 4"}),
          h('path', {"d":"M4 12L20 12"})
        ]
      );
  }
});

module.exports = ArrowLeft;
module.exports.ArrowLeft = ArrowLeft;
module.exports.default = ArrowLeft;
