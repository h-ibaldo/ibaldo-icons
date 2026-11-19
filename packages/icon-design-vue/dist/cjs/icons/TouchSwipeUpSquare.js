'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeUpSquare = defineComponent({
  name: 'TouchSwipeUpSquare',
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
          h('polyline', {"points":"8.99999999845204 4.998779298828595 11.99999999845204 1.998779298828595 14.99999999845204 4.998779298828595"}),
          h('line', {"x1":"11.99999999845204","y1":"9.998779298828595","x2":"11.99999999845204","y2":"1.998779298828595"}),
          h('circle', {"cx":"11.99999999845204","cy":"13.998779298828595","r":"4"}),
          h('path', {"d":"M6.999999998713974,1.998779298828595h-3c-1.104569499661011,0-2,.895430500338989-2,2v16c0,1.104569499661011.895430500338989,2,2,2h16c1.104569499659192,0,2-.895430500338989,2-2V3.998779298828595c0-1.104569499661011-.895430500340808-2-2-2h-3"})
        ]
      );
  }
});

module.exports = TouchSwipeUpSquare;
module.exports.TouchSwipeUpSquare = TouchSwipeUpSquare;
module.exports.default = TouchSwipeUpSquare;
