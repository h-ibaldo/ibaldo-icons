'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpFromBar = defineComponent({
  name: 'ArrowUpFromBar',
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
          h('path', {"d":"M8 7L12 3L16 7"}),
          h('path', {"d":"M17 21L7 21"}),
          h('path', {"d":"M12 3L12 21"})
        ]
      );
  }
});

module.exports = ArrowUpFromBar;
module.exports.ArrowUpFromBar = ArrowUpFromBar;
module.exports.default = ArrowUpFromBar;
