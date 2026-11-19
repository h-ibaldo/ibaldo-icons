'use strict';

const { defineComponent, h } = require('vue');

const BasketBar = defineComponent({
  name: 'BasketBar',
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
          h('polygon', {"points":"19 21.999999999998181 5 21.999999999998181 4 14.999999999998181 2 13.999999999998181 2 9.999999999998181 22 9.999999999998181 22 13.999999999998181 20 14.999999999998181 19 21.999999999998181"}),
          h('line', {"x1":"12","y1":"13.999999999998181","x2":"12","y2":"17.999999999998181"}),
          h('line', {"x1":"8","y1":"13.999999999998181","x2":"8","y2":"17.999999999998181"}),
          h('line', {"x1":"16","y1":"13.999999999998181","x2":"16","y2":"17.999999999998181"}),
          h('path', {"d":"M4.279240779940665,6.999999999998181l.772075922010117-2.3162277660158c.136114046368675-.408342139111483.518252889978612-.6837722339842.948683298049218-.6837722339842h12c.430430408070606,0,.812569251680543.275430094872718.948683298049218.6837722339842l.772075922010117,2.3162277660158"}),
          h('polyline', {"points":"9 3.999999999998181 9 2.999999999998181 15 2.999999999998181 15 3.999999999998181"})
        ]
      );
  }
});

module.exports = BasketBar;
module.exports.BasketBar = BasketBar;
module.exports.default = BasketBar;
