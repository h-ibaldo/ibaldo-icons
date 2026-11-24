'use strict';

const { defineComponent, h } = require('vue');

const PaintRoller = defineComponent({
  name: 'PaintRoller',
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
          h('path', {"d":"M5 2L21 2L21 8L5 8Z"}),
          h('path', {"d":"M11 16L15 16L15 22L11 22Z"}),
          h('path', {"d":"M5 5L4 5C2.895 5 2 5.895 2 7L2 9.391C2 10.363 2.699 11.195 3.656 11.359L11.344 12.711C12.301 12.879 13 13.707 13 14.68L13 16"})
        ]
      );
  }
});

module.exports = PaintRoller;
module.exports.PaintRoller = PaintRoller;
module.exports.default = PaintRoller;
