'use strict';

const { defineComponent, h } = require('vue');

const SortDownNarrowWide = defineComponent({
  name: 'SortDownNarrowWide',
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
          h('path', {"d":"M7 2L7 22"}),
          h('path', {"d":"M22 12L11 12"}),
          h('path', {"d":"M19 7L11 7"}),
          h('path', {"d":"M16 2L11 2"}),
          h('path', {"d":"M2 17L7 22L12 17"})
        ]
      );
  }
});

module.exports = SortDownNarrowWide;
module.exports.SortDownNarrowWide = SortDownNarrowWide;
module.exports.default = SortDownNarrowWide;
