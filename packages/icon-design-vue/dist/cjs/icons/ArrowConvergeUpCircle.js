'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeUpCircle = defineComponent({
  name: 'ArrowConvergeUpCircle',
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
          h('path', {"d":"M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2Z"}),
          h('path', {"d":"M6 14L8 12L10 14"}),
          h('path', {"d":"M10 8L12 10L14 8"}),
          h('path', {"d":"M14 14L16 12L18 14"}),
          h('path', {"d":"M12 5L12 10"}),
          h('path', {"d":"M8 12L8 17"}),
          h('path', {"d":"M16 12L16 17"})
        ]
      );
  }
});

module.exports = ArrowConvergeUpCircle;
module.exports.ArrowConvergeUpCircle = ArrowConvergeUpCircle;
module.exports.default = ArrowConvergeUpCircle;
