'use strict';

const { defineComponent, h } = require('vue');

const FileArrowUpRightCornerPlain = defineComponent({
  name: 'FileArrowUpRightCornerPlain',
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
          h('path', {"d":"M20 20.034L20 16.034L16 16.034"}),
          h('path', {"d":"M14 22.034L20 16.034"}),
          h('path', {"d":"M20 12.034L20 4.034C20 2.929 19.105 2.034 18 2.034L6 2.034C4.895 2.034 4 2.929 4 4.034L4 20.034C4 21.138 4.895 22.034 6 22.034L10 22.034"})
        ]
      );
  }
});

module.exports = FileArrowUpRightCornerPlain;
module.exports.FileArrowUpRightCornerPlain = FileArrowUpRightCornerPlain;
module.exports.default = FileArrowUpRightCornerPlain;
