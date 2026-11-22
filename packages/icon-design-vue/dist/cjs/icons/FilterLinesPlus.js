'use strict';

const { defineComponent, h } = require('vue');

const FilterLinesPlus = defineComponent({
  name: 'FilterLinesPlus',
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
          h('path', {"d":"M2 5L12 5"}),
          h('path', {"d":"M16 5L22 5"}),
          h('path', {"d":"M19 2L19 8"}),
          h('path', {"d":"M6 13L18 13"}),
          h('path', {"d":"M10 20L14 20"})
        ]
      );
  }
});

module.exports = FilterLinesPlus;
module.exports.FilterLinesPlus = FilterLinesPlus;
module.exports.default = FilterLinesPlus;
