'use strict';

const { defineComponent, h } = require('vue');

const PilcrowArrowRight = defineComponent({
  name: 'PilcrowArrowRight',
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
          h('path', {"d":"M10 14L10 2L8.5 2C6.566 2 5 3.566 5 5.5C5 7.434 6.566 9 8.5 9L10 9"}),
          h('path', {"d":"M14 2L14 14.102"}),
          h('path', {"d":"M2 18L22 18"}),
          h('path', {"d":"M18 22L22 18L18 14"})
        ]
      );
  }
});

module.exports = PilcrowArrowRight;
module.exports.PilcrowArrowRight = PilcrowArrowRight;
module.exports.default = PilcrowArrowRight;
