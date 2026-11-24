'use strict';

const { defineComponent, h } = require('vue');

const ArrowDivergeFourLarge = defineComponent({
  name: 'ArrowDivergeFourLarge',
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
          h('path', {"d":"M12 7L12 2"}),
          h('path', {"d":"M15 19L12 22L9 19"}),
          h('path', {"d":"M12 17L12 22"}),
          h('path', {"d":"M19 9L22 12L19 15"}),
          h('path', {"d":"M17 12L22 12"}),
          h('path', {"d":"M5 15L2 12L5 9"}),
          h('path', {"d":"M7 12L2 12"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

module.exports = ArrowDivergeFourLarge;
module.exports.ArrowDivergeFourLarge = ArrowDivergeFourLarge;
module.exports.default = ArrowDivergeFourLarge;
