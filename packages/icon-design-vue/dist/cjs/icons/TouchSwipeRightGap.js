'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeRightGap = defineComponent({
  name: 'TouchSwipeRightGap',
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
          h('polyline', {"points":"19.025268535095165 8.998779304496566 22.025268534956922 11.998779304631171 19.025268534836869 14.998779304496566"}),
          h('line', {"x1":"14.025268534956922","y1":"11.998779304274649","x2":"22.025268534956922","y2":"11.998779304631171"}),
          h('circle', {"cx":"6.025268534961469","cy":"11.998779303913579","r":"3.999999999997272"})
        ]
      );
  }
});

module.exports = TouchSwipeRightGap;
module.exports.TouchSwipeRightGap = TouchSwipeRightGap;
module.exports.default = TouchSwipeRightGap;
