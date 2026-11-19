'use strict';

const { defineComponent, h } = require('vue');

const WindowCheck = defineComponent({
  name: 'WindowCheck',
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
          h('path', {"d":"M9.999999993642632,21.998779299956368H3.999999993642632c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v8"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368"}),
          h('polyline', {"points":"21.999999993642632 16.998779299956368 16.999999993642632 21.998779299956368 13.999999993642632 18.998779299956368"}),
          h('line', {"x1":"5.00999999364285","y1":"4.998779299956368","x2":"4.999999993642632","y2":"4.998779299956368"}),
          h('line', {"x1":"8.00999999364285","y1":"4.998779299956368","x2":"7.999999993642632","y2":"4.998779299956368"}),
          h('line', {"x1":"11.00999999364285","y1":"4.998779299956368","x2":"10.999999993642632","y2":"4.998779299956368"})
        ]
      );
  }
});

module.exports = WindowCheck;
module.exports.WindowCheck = WindowCheck;
module.exports.default = WindowCheck;
