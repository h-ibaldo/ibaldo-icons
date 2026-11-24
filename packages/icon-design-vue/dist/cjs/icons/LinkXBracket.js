'use strict';

const { defineComponent, h } = require('vue');

const LinkXBracket = defineComponent({
  name: 'LinkXBracket',
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
          h('path', {"d":"M9 13L7 13C4.238 13 2 10.762 2 8C2 5.238 4.238 3 7 3L9 3"}),
          h('path', {"d":"M15 3L17 3C19.762 3 22 5.238 22 8C22 10.762 19.762 13 17 13L15 13"}),
          h('path', {"d":"M8 8L16 8"}),
          h('path', {"d":"M18 21L22 17"}),
          h('path', {"d":"M18 17L22 21"})
        ]
      );
  }
});

module.exports = LinkXBracket;
module.exports.LinkXBracket = LinkXBracket;
module.exports.default = LinkXBracket;
