'use strict';

const { defineComponent, h } = require('vue');

const PowerCircle = defineComponent({
  name: 'PowerCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M12 5L12 12"}),
          h('path', {"d":"M15 8C16.215 8.91 17 10.363 17 12C17 14.762 14.762 17 12 17C9.238 17 7 14.762 7 12C7 10.363 7.785 8.91 9 8"})
        ]
      );
  }
});

module.exports = PowerCircle;
module.exports.PowerCircle = PowerCircle;
module.exports.default = PowerCircle;
