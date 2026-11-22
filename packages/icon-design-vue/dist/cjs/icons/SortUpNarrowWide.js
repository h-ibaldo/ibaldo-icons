'use strict';

const { defineComponent, h } = require('vue');

const SortUpNarrowWide = defineComponent({
  name: 'SortUpNarrowWide',
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
          h('path', {"d":"M7 22L7 2"}),
          h('path', {"d":"M22 22L11 22"}),
          h('path', {"d":"M19 17L11 17"}),
          h('path', {"d":"M16 12L11 12"}),
          h('path', {"d":"M12 7L7 2L2 7"})
        ]
      );
  }
});

module.exports = SortUpNarrowWide;
module.exports.SortUpNarrowWide = SortUpNarrowWide;
module.exports.default = SortUpNarrowWide;
