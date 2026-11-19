'use strict';

const { defineComponent, h } = require('vue');

const GlobeArrowUpRight = defineComponent({
  name: 'GlobeArrowUpRight',
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
          h('path', {"d":"M8 12C8 16.093 9.575 19.715 12 22C14.425 19.715 16 16.093 16 12C16 7.907 14.425 4.285 12 2C9.575 4.285 8 7.907 8 12Z"}),
          h('path', {"d":"M2 12L22 12"}),
          h('path', {"d":"M2 22L5 19"}),
          h('path', {"d":"M2 19L6 18L5 22"}),
          h('path', {"d":"M9 21.541C9.947 21.838 10.955 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 13.045 2.162 14.053 2.459 15"})
        ]
      );
  }
});

module.exports = GlobeArrowUpRight;
module.exports.GlobeArrowUpRight = GlobeArrowUpRight;
module.exports.default = GlobeArrowUpRight;
