'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeFourLarge = defineComponent({
  name: 'ArrowConvergeFourLarge',
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
          h('path', {"d":"M15 4L12 7L9 4"}),
          h('path', {"d":"M12 2L12 7"}),
          h('path', {"d":"M9 20L12 17L15 20"}),
          h('path', {"d":"M12 22L12 17"}),
          h('path', {"d":"M4 9L7 12L4 15"}),
          h('path', {"d":"M2 12L7 12"}),
          h('path', {"d":"M20 15L17 12L20 9"}),
          h('path', {"d":"M22 12L17 12"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

module.exports = ArrowConvergeFourLarge;
module.exports.ArrowConvergeFourLarge = ArrowConvergeFourLarge;
module.exports.default = ArrowConvergeFourLarge;
