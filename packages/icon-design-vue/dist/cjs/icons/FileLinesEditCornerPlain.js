'use strict';

const { defineComponent, h } = require('vue');

const FileLinesEditCornerPlain = defineComponent({
  name: 'FileLinesEditCornerPlain',
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
          h('path', {"d":"M21.414 21.276C22.195 20.495 22.195 19.229 21.414 18.448L15 12.034L12 12.034L12 15.034L18.414 21.448C19.195 22.229 20.462 22.229 21.243 21.448L21.414 21.276Z"}),
          h('path', {"d":"M17 20.034L20 17.034"}),
          h('path', {"d":"M17 21.034"}),
          h('path', {"d":"M14 22.034L4 22.034C2.895 22.034 2 21.138 2 20.034L2 4.034C2 2.929 2.895 2.034 4 2.034L16 2.034C17.105 2.034 18 2.929 18 4.034L18 9.034"}),
          h('path', {"d":"M6 8.034L14 8.034"}),
          h('path', {"d":"M6 12.034L8 12.034"}),
          h('path', {"d":"M6 16.034L8 16.034"})
        ]
      );
  }
});

module.exports = FileLinesEditCornerPlain;
module.exports.FileLinesEditCornerPlain = FileLinesEditCornerPlain;
module.exports.default = FileLinesEditCornerPlain;
