'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownRightDouble = defineComponent({
  name: 'ArrowDownRightDouble',
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
          h('path', {"d":"M20 8L20 20L8 20"}),
          h('path', {"d":"M16 4L16 16L4 16"}),
          h('path', {"d":"M16 16L4 4"})
        ]
      );
  }
});

module.exports = ArrowDownRightDouble;
module.exports.ArrowDownRightDouble = ArrowDownRightDouble;
module.exports.default = ArrowDownRightDouble;
