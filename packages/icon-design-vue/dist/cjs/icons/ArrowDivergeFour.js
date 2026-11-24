'use strict';

const { defineComponent, h } = require('vue');

const ArrowDivergeFour = defineComponent({
  name: 'ArrowDivergeFour',
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
          h('path', {"d":"M10 4L12 2L14 4"}),
          h('path', {"d":"M12 7L12 2"}),
          h('path', {"d":"M14 20L12 22L10 20"}),
          h('path', {"d":"M12 17L12 22"}),
          h('path', {"d":"M20 10L22 12L20 14"}),
          h('path', {"d":"M17 12L22 12"}),
          h('path', {"d":"M4 14L2 12L4 10"}),
          h('path', {"d":"M7 12L2 12"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

module.exports = ArrowDivergeFour;
module.exports.ArrowDivergeFour = ArrowDivergeFour;
module.exports.default = ArrowDivergeFour;
