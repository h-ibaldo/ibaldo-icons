'use strict';

const { defineComponent, h } = require('vue');

const BookBookmarkSpineRounded = defineComponent({
  name: 'BookBookmarkSpineRounded',
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
          h('polyline', {"points":"17.000000026699126 1.999999999998181 17.000000026699126 10.999999999998181 14.000000026699126 8.999999999998181 11.000000026699126 10.999999999998181 11.000000026699126 1.999999999998181"}),
          h('rect', {"x":"2.500000026699126","y":"1.999999999998181","width":"19","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"6.000000026699126","y1":"1.999999999998181","x2":"6.000000026699126","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = BookBookmarkSpineRounded;
module.exports.BookBookmarkSpineRounded = BookBookmarkSpineRounded;
module.exports.default = BookBookmarkSpineRounded;
