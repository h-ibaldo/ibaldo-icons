'use strict';

const { defineComponent, h } = require('vue');

const PilcrowArrowLeft = defineComponent({
  name: 'PilcrowArrowLeft',
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
          h('path', {"d":"M12 14L12 2L10.5 2C8.566 2 7 3.566 7 5.5C7 7.434 8.566 9 10.5 9L12 9"}),
          h('path', {"d":"M16 2L16 14.102"}),
          h('path', {"d":"M22 18L2 18"}),
          h('path', {"d":"M6 14L2 18L6 22"})
        ]
      );
  }
});

module.exports = PilcrowArrowLeft;
module.exports.PilcrowArrowLeft = PilcrowArrowLeft;
module.exports.default = PilcrowArrowLeft;
