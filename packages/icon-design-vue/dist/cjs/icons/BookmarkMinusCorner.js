'use strict';

const { defineComponent, h } = require('vue');

const BookmarkMinusCorner = defineComponent({
  name: 'BookmarkMinusCorner',
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
          h('path', {"d":"M10.000000000012733,2.999999999998181h-4.000000000003638c-.552284749830505,0-1,.447715250169495-1,1v18l7-4,7,4v-12.000000000009095"}),
          h('line', {"x1":"14.000000000012733","y1":"4.999999999989086","x2":"20.000000000012733","y2":"4.999999999989086"})
        ]
      );
  }
});

module.exports = BookmarkMinusCorner;
module.exports.BookmarkMinusCorner = BookmarkMinusCorner;
module.exports.default = BookmarkMinusCorner;
