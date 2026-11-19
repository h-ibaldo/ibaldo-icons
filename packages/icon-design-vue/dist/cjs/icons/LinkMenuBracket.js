'use strict';

const { defineComponent, h } = require('vue');

const LinkMenuBracket = defineComponent({
  name: 'LinkMenuBracket',
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
          h('path', {"d":"M9 22L7 22C4.238 22 2 19.762 2 17C2 14.238 4.238 12 7 12L9 12"}),
          h('path', {"d":"M15 12L17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22L15 22"}),
          h('path', {"d":"M8 17L16 17"}),
          h('path', {"d":"M2 2L9 2"}),
          h('path', {"d":"M2 5L9 5"}),
          h('path', {"d":"M2 8L6 8"})
        ]
      );
  }
});

module.exports = LinkMenuBracket;
module.exports.LinkMenuBracket = LinkMenuBracket;
module.exports.default = LinkMenuBracket;
