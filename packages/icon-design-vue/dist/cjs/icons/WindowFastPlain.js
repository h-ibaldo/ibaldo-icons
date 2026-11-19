'use strict';

const { defineComponent, h } = require('vue');

const WindowFastPlain = defineComponent({
  name: 'WindowFastPlain',
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
          h('path', {"d":"M14.999999993642632,21.998779299956368l5.00000000044929-.00000000026921c1.104569499661011-.000000000050932,1.999999999959982-.895430500429939,1.99999999991087-2.000000000090949l-.00000000072032-16.000000000090949c-.000000000049113-1.104569499661011-.895430500420844-1.999999999959982-2.00000000008913-1.999999999909051l-15.99999999963984.000000000721229c-1.104569499661011.000000000046384-1.999999999959982.895430500425391-1.99999999991087,2.000000000086402l.00000000036016,5.999999999552529"}),
          h('line', {"x1":"21.999999993642632","y1":"6.998779299956368","x2":"1.999999993642632","y2":"6.998779299956368"}),
          h('line', {"x1":"10.999999993642632","y1":"21.998779299956368","x2":"5.999999993642632","y2":"21.998779299956368"}),
          h('line', {"x1":"10.999999993642632","y1":"17.998779299956368","x2":"3.999999993642632","y2":"17.998779299956368"}),
          h('line', {"x1":"10.999999993642632","y1":"13.998779299956368","x2":"1.999999993642632","y2":"13.998779299956368"})
        ]
      );
  }
});

module.exports = WindowFastPlain;
module.exports.WindowFastPlain = WindowFastPlain;
module.exports.default = WindowFastPlain;
