'use strict';

const { defineComponent, h } = require('vue');

const LinkImageBracket = defineComponent({
  name: 'LinkImageBracket',
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
          h('path', {"d":"M22 19.949C22 21.082 21.082 22 19.949 22"}),
          h('path', {"d":"M19.789 22L13.211 22C11.988 22 11 21.012 11 19.789L11 13.211C11 11.988 11.988 11 13.211 11L19.789 11C21.012 11 22 11.988 22 13.211L22 19.789C22 21.012 21.012 22 19.789 22Z"}),
          h('path', {"d":"M16 22C16 18.688 18.688 16 22 16"}),
          h('path', {"d":"M15 15L15 15"}),
          h('path', {"d":"M7 12C4.238 12 2 9.762 2 7C2 4.238 4.238 2 7 2L9 2"}),
          h('path', {"d":"M15 2L17 2C19.762 2 22 4.238 22 7"}),
          h('path', {"d":"M8 7L16 7"})
        ]
      );
  }
});

module.exports = LinkImageBracket;
module.exports.LinkImageBracket = LinkImageBracket;
module.exports.default = LinkImageBracket;
