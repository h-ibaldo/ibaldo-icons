'use strict';

const { defineComponent, h } = require('vue');

const LinkSquareShort = defineComponent({
  name: 'LinkSquareShort',
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
          h('path', {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z"}),
          h('path', {"d":"M15.172 12.828C16.277 11.723 16.277 9.934 15.172 8.828C14.066 7.723 12.277 7.723 11.172 8.828"}),
          h('path', {"d":"M8.828 11.172C7.723 12.277 7.723 14.066 8.828 15.172C9.934 16.277 11.723 16.277 12.828 15.172"}),
          h('path', {"d":"M11.328 12.672L12.672 11.328"})
        ]
      );
  }
});

module.exports = LinkSquareShort;
module.exports.LinkSquareShort = LinkSquareShort;
module.exports.default = LinkSquareShort;
