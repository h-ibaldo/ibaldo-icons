'use strict';

const { defineComponent, h } = require('vue');

const FolderArrowRightCorner = defineComponent({
  name: 'FolderArrowRightCorner',
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
          h('path', {"d":"M11 21L4 21C2.895 21 2 20.105 2 19L2 5C2 3.895 2.895 3 4 3L7.93 3C8.598 3 9.223 3.336 9.594 3.891L10.406 5.109C10.777 5.664 11.402 6 12.07 6L20 6C21.105 6 22 6.895 22 8L22 12"}),
          h('path', {"d":"M14 18L22 18"}),
          h('path', {"d":"M19 21L22 18L19 15"})
        ]
      );
  }
});

module.exports = FolderArrowRightCorner;
module.exports.FolderArrowRightCorner = FolderArrowRightCorner;
module.exports.default = FolderArrowRightCorner;
