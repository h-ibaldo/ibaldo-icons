'use strict';

const { defineComponent, h } = require('vue');

const CursorRectangleDashed = defineComponent({
  name: 'CursorRectangleDashed',
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
          h('path', {"d":"M16.258 15.883L13.895 16.703L15.859 20.305L12.77 21.988L10.809 18.387L8.836 19.93C8.496 20.195 8 19.953 8 19.523L8 10.52C8 10.109 8.453 9.859 8.797 10.082L16.367 14.957C16.73 15.191 16.664 15.738 16.258 15.883Z"}),
          h('path', {"d":"M2 4L2 3C2 2.445 2.449 2 3 2L4 2"}),
          h('path', {"d":"M20 2L21 2C21.551 2 22 2.445 22 3L22 4"}),
          h('path', {"d":"M8 2L10 2"}),
          h('path', {"d":"M14 2L16 2"}),
          h('path', {"d":"M4 16L3 16C2.449 16 2 15.555 2 15L2 14"}),
          h('path', {"d":"M20 16L21 16C21.551 16 22 15.555 22 15L22 14"}),
          h('path', {"d":"M2 10L2 8"}),
          h('path', {"d":"M22 10L22 8"})
        ]
      );
  }
});

module.exports = CursorRectangleDashed;
module.exports.CursorRectangleDashed = CursorRectangleDashed;
module.exports.default = CursorRectangleDashed;
