'use strict';

const { defineComponent, h } = require('vue');

const FileArrowDownPlain = defineComponent({
  name: 'FileArrowDownPlain',
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
          h('path', {"d":"M6 22.034C4.895 22.034 4 21.138 4 20.034L4 4.034C4 2.929 4.895 2.034 6 2.034L18 2.034C19.105 2.034 20 2.929 20 4.034L20 20.034C20 21.138 19.105 22.034 18 22.034"}),
          h('path', {"d":"M9 19.034L12 22.034L15 19.034"}),
          h('path', {"d":"M12 15.034L12 22.034"})
        ]
      );
  }
});

module.exports = FileArrowDownPlain;
module.exports.FileArrowDownPlain = FileArrowDownPlain;
module.exports.default = FileArrowDownPlain;
