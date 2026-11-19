'use strict';

const { defineComponent, h } = require('vue');

const BookmarkOffRound = defineComponent({
  name: 'BookmarkOffRound',
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
          h('path', {"d":"M19.000000026691851,8.999999999998181v-4c0-1.656854249490607-1.343145750508484-3-3-3h-7.999999999996362"}),
          h('polyline', {"points":"5.000000026691851 5.752474922528563 5.000000026691851 21.999999999998181 12.000000026691851 17.999999999998181 19.000000026691851 21.999999999998181 19.000000026691851 13.349999999998545"}),
          h('line', {"x1":"2.000000026695488","y1":"3.999999999998181","x2":"22.000000026695488","y2":"14.999999999998181"})
        ]
      );
  }
});

module.exports = BookmarkOffRound;
module.exports.BookmarkOffRound = BookmarkOffRound;
module.exports.default = BookmarkOffRound;
