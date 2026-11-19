'use strict';

const { defineComponent, h } = require('vue');

const CursorRippleDoubleUpRightStem = defineComponent({
  name: 'CursorRippleDoubleUpRightStem',
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
          h('path', {"d":"M7 17L2 22"}),
          h('path', {"d":"M15 15.578C16.766 14.805 18 13.051 18 11C18 8.238 15.762 6 13 6C10.949 6 9.195 7.234 8.422 9"}),
          h('path', {"d":"M13 11L3.23 14.555C2.801 14.711 2.789 15.316 3.215 15.484L7 17L8.516 20.785C8.684 21.211 9.289 21.199 9.445 20.77Z"}),
          h('path', {"d":"M4.059 10C4.555 5.5 8.367 2 13 2C17.969 2 22 6.027 22 11C22 15.633 18.5 19.441 14 19.941"})
        ]
      );
  }
});

module.exports = CursorRippleDoubleUpRightStem;
module.exports.CursorRippleDoubleUpRightStem = CursorRippleDoubleUpRightStem;
module.exports.default = CursorRippleDoubleUpRightStem;
