'use strict';

const { defineComponent, h } = require('vue');

const ArrowUpToDotCircle = defineComponent({
  name: 'ArrowUpToDotCircle',
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
          h('path', {"d":"M9 13L12 10L15 13"}),
          h('path', {"d":"M12 17L12 10"}),
          h('path', {"d":"M10 4C10 5.105 10.895 6 12 6C13.105 6 14 5.105 14 4C14 2.895 13.105 2 12 2C10.895 2 10 2.895 10 4Z"}),
          h('path', {"d":"M6 4.016C3.574 5.84 2 8.73 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 8.73 20.426 5.84 18 4.016"})
        ]
      );
  }
});

module.exports = ArrowUpToDotCircle;
module.exports.ArrowUpToDotCircle = ArrowUpToDotCircle;
module.exports.default = ArrowUpToDotCircle;
