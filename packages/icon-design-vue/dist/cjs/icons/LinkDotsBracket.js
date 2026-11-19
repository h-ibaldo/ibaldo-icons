'use strict';

const { defineComponent, h } = require('vue');

const LinkDotsBracket = defineComponent({
  name: 'LinkDotsBracket',
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
          h('path', {"d":"M9 19L7 19C4.238 19 2 16.762 2 14C2 11.238 4.238 9 7 9L9 9"}),
          h('path', {"d":"M15 9L17 9C19.762 9 22 11.238 22 14C22 16.762 19.762 19 17 19L15 19"}),
          h('path', {"d":"M8 14L16 14"}),
          h('path', {"d":"M3 4L3 4"}),
          h('path', {"d":"M7 4L7 4"})
        ]
      );
  }
});

module.exports = LinkDotsBracket;
module.exports.LinkDotsBracket = LinkDotsBracket;
module.exports.default = LinkDotsBracket;
