'use strict';

const { defineComponent, h } = require('vue');

const AlignCenterVerticalSplit = defineComponent({
  name: 'AlignCenterVerticalSplit',
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
          h('path', {"d":"M12 2L12 22"}),
          h('path', {"d":"M15 14L19 14C19.551 14 20 14.449 20 15L20 19C20 19.551 19.551 20 19 20L15 20"}),
          h('path', {"d":"M9 20L5 20C4.449 20 4 19.551 4 19L4 15C4 14.449 4.449 14 5 14L9 14"}),
          h('path', {"d":"M15 4L21 4C21.551 4 22 4.449 22 5L22 9C22 9.551 21.551 10 21 10L15 10"}),
          h('path', {"d":"M9 10L3 10C2.449 10 2 9.551 2 9L2 5C2 4.449 2.449 4 3 4L9 4"})
        ]
      );
  }
});

module.exports = AlignCenterVerticalSplit;
module.exports.AlignCenterVerticalSplit = AlignCenterVerticalSplit;
module.exports.default = AlignCenterVerticalSplit;
