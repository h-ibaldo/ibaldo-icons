'use strict';

const { defineComponent, h } = require('vue');

const StopCircle = defineComponent({
  name: 'StopCircle',
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
          h('path', {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12Z"}),
          h('path', {"d":"M15 16L9 16C8.445 16 8 15.551 8 15L8 9C8 8.449 8.445 8 9 8L15 8C15.555 8 16 8.449 16 9L16 15C16 15.551 15.555 16 15 16Z"})
        ]
      );
  }
});

module.exports = StopCircle;
module.exports.StopCircle = StopCircle;
module.exports.default = StopCircle;
