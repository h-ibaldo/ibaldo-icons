'use strict';

const { defineComponent, h } = require('vue');

const ArrowDownCircleIn = defineComponent({
  name: 'ArrowDownCircleIn',
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
          h('path', {"d":"M9 12L12 15L15 12"}),
          h('path', {"d":"M12 2L12 15"}),
          h('path', {"d":"M17 3.352C19.984 5.082 22 8.301 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 8.301 4.016 5.082 7 3.352"})
        ]
      );
  }
});

module.exports = ArrowDownCircleIn;
module.exports.ArrowDownCircleIn = ArrowDownCircleIn;
module.exports.default = ArrowDownCircleIn;
