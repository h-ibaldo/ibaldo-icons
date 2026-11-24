'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeRight = defineComponent({
  name: 'TouchSwipeRight',
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
          h('polyline', {"points":"17.075805664055224 8.998782737457077 20.075805663656865 11.998782737860893 17.075805663256688 14.998782737457077"}),
          h('line', {"x1":"12.075805663656865","y1":"11.998782736780413","x2":"20.075805663656865","y2":"11.998782737860893"}),
          h('circle', {"cx":"8.075805663656411","cy":"11.998782736241992","r":"4.000000000000227"})
        ]
      );
  }
});

module.exports = TouchSwipeRight;
module.exports.TouchSwipeRight = TouchSwipeRight;
module.exports.default = TouchSwipeRight;
