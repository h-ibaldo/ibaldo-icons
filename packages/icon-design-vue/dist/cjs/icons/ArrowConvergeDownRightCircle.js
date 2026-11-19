'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeDownRightCircle = defineComponent({
  name: 'ArrowConvergeDownRightCircle',
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
          h('path', {"d":"M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"}),
          h('path', {"d":"M15 6L15 9L12 9"}),
          h('path', {"d":"M13 16L13 13L16 13"}),
          h('path', {"d":"M9 12L9 15L6 15"}),
          h('path', {"d":"M17 17L13 13"}),
          h('path', {"d":"M15 9L11 5"}),
          h('path', {"d":"M9 15L5 11"})
        ]
      );
  }
});

module.exports = ArrowConvergeDownRightCircle;
module.exports.ArrowConvergeDownRightCircle = ArrowConvergeDownRightCircle;
module.exports.default = ArrowConvergeDownRightCircle;
