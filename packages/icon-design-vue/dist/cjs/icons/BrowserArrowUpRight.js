'use strict';

const { defineComponent, h } = require('vue');

const BrowserArrowUpRight = defineComponent({
  name: 'BrowserArrowUpRight',
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
          h('path', {"d":"M1.999999993642632,17.075561526518868V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v16c0,1.104569499661011-.895430500340808,2-2,2H6.999999993642632"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368"}),
          h('line', {"x1":"5.00999999364285","y1":"4.921997073393868","x2":"4.999999993642632","y2":"4.921997073393868"}),
          h('line', {"x1":"8.00999999364285","y1":"4.921997073393868","x2":"7.999999993642632","y2":"4.921997073393868"}),
          h('line', {"x1":"19","y1":"4.921997073393868","x2":"10.999999993642632","y2":"4.921997073393868"}),
          h('polyline', {"points":"6.999999993642632 12.998779299956368 10.999999993642632 12.998779299956368 10.999999993642632 16.998779299956368"}),
          h('line', {"x1":"1.999999993642632","y1":"21.998779299956368","x2":"10.999999993642632","y2":"12.998779299956368"})
        ]
      );
  }
});

module.exports = BrowserArrowUpRight;
module.exports.BrowserArrowUpRight = BrowserArrowUpRight;
module.exports.default = BrowserArrowUpRight;
