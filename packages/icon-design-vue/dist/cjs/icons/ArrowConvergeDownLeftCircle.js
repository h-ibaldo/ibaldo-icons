'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeDownLeftCircle = defineComponent({
  name: 'ArrowConvergeDownLeftCircle',
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
          h('path', {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z"}),
          h('path', {"d":"M9 6L9 9L12 9"}),
          h('path', {"d":"M11 16L11 13L8 13"}),
          h('path', {"d":"M15 12L15 15L18 15"}),
          h('path', {"d":"M7 17L11 13"}),
          h('path', {"d":"M9 9L13 5"}),
          h('path', {"d":"M15 15L19 11"})
        ]
      );
  }
});

module.exports = ArrowConvergeDownLeftCircle;
module.exports.ArrowConvergeDownLeftCircle = ArrowConvergeDownLeftCircle;
module.exports.default = ArrowConvergeDownLeftCircle;
