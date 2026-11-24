'use strict';

const { defineComponent, h } = require('vue');

const ArrowCornerRightDown = defineComponent({
  name: 'ArrowCornerRightDown',
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
          h('path', {"d":"M12 17L16 21L20 17"}),
          h('path', {"d":"M16 21L16 11C16 6.582 12.418 3 8 3L4 3"})
        ]
      );
  }
});

module.exports = ArrowCornerRightDown;
module.exports.ArrowCornerRightDown = ArrowCornerRightDown;
module.exports.default = ArrowCornerRightDown;
