'use strict';

const { defineComponent, h } = require('vue');

const LinkMenuFlat = defineComponent({
  name: 'LinkMenuFlat',
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
          h('path', {"d":"M6.5 12C4.016 12 2 14.016 2 16.5C2 18.984 4.016 21 6.5 21L10.5 21C12.984 21 15 18.984 15 16.5C15 16.328 14.973 16.164 14.949 16"}),
          h('path', {"d":"M17.5 21C19.984 21 22 18.984 22 16.5C22 14.016 19.984 12 17.5 12L13.5 12C11.016 12 9 14.016 9 16.5C9 16.672 9.027 16.836 9.051 17"}),
          h('path', {"d":"M2 2L9 2"}),
          h('path', {"d":"M2 5L9 5"}),
          h('path', {"d":"M2 8L6 8"})
        ]
      );
  }
});

module.exports = LinkMenuFlat;
module.exports.LinkMenuFlat = LinkMenuFlat;
module.exports.default = LinkMenuFlat;
