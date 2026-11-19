'use strict';

const { defineComponent, h } = require('vue');

const LinkCheckFlat = defineComponent({
  name: 'LinkCheckFlat',
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
          h('path', {"d":"M6.5 4C4.016 4 2 6.016 2 8.5C2 10.984 4.016 13 6.5 13L10.5 13C12.984 13 15 10.984 15 8.5C15 8.328 14.973 8.164 14.949 8"}),
          h('path', {"d":"M17.5 13C19.984 13 22 10.984 22 8.5C22 6.016 19.984 4 17.5 4L13.5 4C11.016 4 9 6.016 9 8.5C9 8.672 9.027 8.836 9.051 9"}),
          h('path', {"d":"M16 19L18 21L22 17"})
        ]
      );
  }
});

module.exports = LinkCheckFlat;
module.exports.LinkCheckFlat = LinkCheckFlat;
module.exports.default = LinkCheckFlat;
