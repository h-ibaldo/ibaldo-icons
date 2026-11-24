'use strict';

const { defineComponent, h } = require('vue');

const TagBars = defineComponent({
  name: 'TagBars',
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
          h('path', {"d":"M20 19L7.957 19C7.352 19 6.777 18.727 6.398 18.254L2.375 13.254C1.785 12.523 1.785 11.477 2.375 10.746L6.398 5.746C6.777 5.273 7.352 5 7.957 5L20 5C21.105 5 22 5.895 22 7L22 17C22 18.105 21.105 19 20 19Z"}),
          h('path', {"d":"M8 13C7.449 13 7 12.551 7 12C7 11.449 7.449 11 8 11C8.551 11 9 11.449 9 12C9 12.551 8.551 13 8 13Z"}),
          h('path', {"d":"M18 9L18 15"}),
          h('path', {"d":"M14 9L14 15"})
        ]
      );
  }
});

module.exports = TagBars;
module.exports.TagBars = TagBars;
module.exports.default = TagBars;
