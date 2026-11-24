'use strict';

const { defineComponent, h } = require('vue');

const LinkSplitBracket = defineComponent({
  name: 'LinkSplitBracket',
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
          h('path', {"d":"M9 17L7 17C4.238 17 2 14.762 2 12C2 9.238 4.238 7 7 7L9 7"}),
          h('path', {"d":"M19.121 9L20.535 10.414C22.488 12.367 22.488 15.531 20.535 17.484C18.582 19.438 15.418 19.438 13.465 17.484L12.051 16"}),
          h('path', {"d":"M8 12L16 12"})
        ]
      );
  }
});

module.exports = LinkSplitBracket;
module.exports.LinkSplitBracket = LinkSplitBracket;
module.exports.default = LinkSplitBracket;
