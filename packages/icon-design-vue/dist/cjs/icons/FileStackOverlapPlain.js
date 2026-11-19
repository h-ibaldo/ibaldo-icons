'use strict';

const { defineComponent, h } = require('vue');

const FileStackOverlapPlain = defineComponent({
  name: 'FileStackOverlapPlain',
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
          h('path', {"d":"M18 17.034L20 17.034C21.105 17.034 22 16.138 22 15.034L22 4.034C22 2.929 21.105 2.034 20 2.034L11 2.034C9.895 2.034 9 2.929 9 4.034"}),
          h('path', {"d":"M4 22.034L13 22.034C14.105 22.034 15 21.138 15 20.034L15 9.034C15 7.929 14.105 7.034 13 7.034L4 7.034C2.895 7.034 2 7.929 2 9.034L2 20.034C2 21.138 2.895 22.034 4 22.034Z"})
        ]
      );
  }
});

module.exports = FileStackOverlapPlain;
module.exports.FileStackOverlapPlain = FileStackOverlapPlain;
module.exports.default = FileStackOverlapPlain;
