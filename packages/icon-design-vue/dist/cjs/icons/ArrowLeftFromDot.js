'use strict';

const { defineComponent, h } = require('vue');

const ArrowLeftFromDot = defineComponent({
  name: 'ArrowLeftFromDot',
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
          h('path', {"d":"M5 15L2 12L5 9"}),
          h('path', {"d":"M12 12L2 12"}),
          h('path', {"d":"M19 9C17.344 9 16 10.344 16 12C16 13.656 17.344 15 19 15C20.656 15 22 13.656 22 12C22 10.344 20.656 9 19 9Z"})
        ]
      );
  }
});

module.exports = ArrowLeftFromDot;
module.exports.ArrowLeftFromDot = ArrowLeftFromDot;
module.exports.default = ArrowLeftFromDot;
