'use strict';

const { defineComponent, h } = require('vue');

const BookmarkPage = defineComponent({
  name: 'BookmarkPage',
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
          h('polyline', {"points":"2.000000026695488 1.999999999998181 22.000000026695488 1.999999999998181 22.000000026695488 21.999999999998181"}),
          h('polyline', {"points":"9.000000026695488 1.999999999998181 9.000000026695488 17.999999999998181 13.000000026695488 14.999999999998181 17.000000026695488 17.999999999998181 17.000000026695488 1.999999999998181"}),
          h('line', {"x1":"2.000000026695488","y1":"9.999999999998181","x2":"5.000000026695488","y2":"9.999999999998181"}),
          h('line', {"x1":"2.000000026695488","y1":"13.999999999998181","x2":"5.000000026695488","y2":"13.999999999998181"}),
          h('line', {"x1":"2.000000026695488","y1":"17.999999999998181","x2":"5.000000026695488","y2":"17.999999999998181"}),
          h('line', {"x1":"2.000000026695488","y1":"21.999999999998181","x2":"17.000000026695488","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkPage;
module.exports.BookmarkPage = BookmarkPage;
module.exports.default = BookmarkPage;
