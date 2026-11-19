'use strict';

const { defineComponent, h } = require('vue');

const LinkMinusCompact = defineComponent({
  name: 'LinkMinusCompact',
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
          h('path', {"d":"M8 16L16 8"}),
          h('path', {"d":"M10.051 6.949L12.551 4.449C14.484 2.516 17.617 2.516 19.551 4.449C21.484 6.383 21.484 9.516 19.551 11.449L17.051 13.949"}),
          h('path', {"d":"M13.949 17.051L11.449 19.551C9.516 21.484 6.383 21.484 4.449 19.551C2.516 17.617 2.516 14.484 4.449 12.551L6.949 10.051"}),
          h('path', {"d":"M22 19.5L17 19.5"})
        ]
      );
  }
});

module.exports = LinkMinusCompact;
module.exports.LinkMinusCompact = LinkMinusCompact;
module.exports.default = LinkMinusCompact;
