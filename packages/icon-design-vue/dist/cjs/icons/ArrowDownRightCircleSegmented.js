'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownRightCircleSegmented = defineComponent({
  name: 'ArrowDownRightCircleSegmented',
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
          h('path', {"d":"M15 10L15 15L10 15"}),
          h('path', {"d":"M9 9L15 15"}),
          h('path', {"d":"M2.004 11.906C2.004 11.938 2 11.969 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C11.969 2 11.938 2.004 11.902 2.004"}),
          h('path', {"d":"M8.352 2.695C5.766 3.711 3.711 5.766 2.695 8.352"})
        ]
      );
  }
});

module.exports = ArrowDownRightCircleSegmented;
module.exports.ArrowDownRightCircleSegmented = ArrowDownRightCircleSegmented;
module.exports.default = ArrowDownRightCircleSegmented;
