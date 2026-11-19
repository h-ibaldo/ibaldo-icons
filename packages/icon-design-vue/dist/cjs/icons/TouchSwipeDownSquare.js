'use strict';

const { defineComponent, h } = require('vue');

const TouchSwipeDownSquare = defineComponent({
  name: 'TouchSwipeDownSquare',
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
          h('polyline', {"points":"8.999999994061 18.998779300272872 11.999999994191967 21.998779300138267 14.999999994061 18.998779300003662"}),
          h('line', {"x1":"11.999999993831807","y1":"13.998779300138267","x2":"11.999999994191967","y2":"21.998779300138267"}),
          h('circle', {"cx":"11.999999993644451","cy":"9.998779300137357","r":"4.000000000001364"}),
          h('path', {"d":"M6.999999994461177,21.998779300360184l-3,.000000000134605c-1.104569499668287.000000000047294-2.000000000040018-.89543050024804-2.000000000100044-1.999999999909051l-.000000000718501-16c-.000000000040018-1.104569499661011.895430500258954-2.000000000043656,1.999999999909051-2.000000000090949l16-.00000000072032c1.104569499679201-.000000000047294,2.000000000050932.895430500251678,2.000000000090949,1.999999999912689l.000000000718501,16c.000000000060027,1.104569499661011-.895430500249859,2.000000000040018-1.999999999899956,2.000000000087311l-3,.000000000134605"})
        ]
      );
  }
});

module.exports = TouchSwipeDownSquare;
module.exports.TouchSwipeDownSquare = TouchSwipeDownSquare;
module.exports.default = TouchSwipeDownSquare;
