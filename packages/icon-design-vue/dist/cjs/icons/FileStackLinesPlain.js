'use strict';

const { defineComponent, h } = require('vue');

const FileStackLinesPlain = defineComponent({
  name: 'FileStackLinesPlain',
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
          h('path', {"d":"M11 14.034L17 14.034"}),
          h('path', {"d":"M11 10.034L17 10.034"}),
          h('path', {"d":"M11 6.034L17 6.034"}),
          h('path', {"d":"M3 7.034L3 20.034C3 21.138 3.895 22.034 5 22.034L16 22.034"}),
          h('path', {"d":"M9 18.034L19 18.034C20.105 18.034 21 17.138 21 16.034L21 4.034C21 2.929 20.105 2.034 19 2.034L9 2.034C7.895 2.034 7 2.929 7 4.034L7 16.034C7 17.138 7.895 18.034 9 18.034Z"})
        ]
      );
  }
});

module.exports = FileStackLinesPlain;
module.exports.FileStackLinesPlain = FileStackLinesPlain;
module.exports.default = FileStackLinesPlain;
