'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpFromPointCircle = defineComponent({
  name: 'ArrowUpFromPointCircle',
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
          h('path', {"d":"M9 5L12 2L15 5"}),
          h('path', {"d":"M12 11L12 2"}),
          h('path', {"d":"M12 15L12 15"}),
          h('path', {"d":"M5 4.883C3.152 6.695 2 9.207 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 9.207 20.848 6.695 19 4.883"})
        ]
      );
  }
});

module.exports = ArrowUpFromPointCircle;
module.exports.ArrowUpFromPointCircle = ArrowUpFromPointCircle;
module.exports.default = ArrowUpFromPointCircle;
