'use strict';

const { defineComponent, h } = require('vue');

const WindowOverlapLeft = defineComponent({
  name: 'WindowOverlapLeft',
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
          h('g', {}, [
            h('rect', {"x":"1.999999993602614","y":"1.998779299956368","width":"13.000000000020009","height":"13","rx":"2","ry":"2"}),
            h('line', {"x1":"1.999999993602614","y1":"5.998779299956368","x2":"14.999999993631718","y2":"5.998779299956368"})
          ]),
          h('g', {}, [
            h('path', {"d":"M17.999999993622623,8.998779299956368h2.000000000009095c1.104569499661011,0,2,.895430500335351,2,1.999999999996362v9.000000000003638c0,1.104569499661011-.895430500338989,2-2,2h-9.000000000009095c-1.104569499671015,0-2-.895430500338989-2-2v-2"}),
            h('line', {"x1":"17.999999993622623","y1":"12.998779299956368","x2":"21.999999993642632","y2":"12.998779299956368"})
          ])
        ]
      );
  }
});

module.exports = WindowOverlapLeft;
module.exports.WindowOverlapLeft = WindowOverlapLeft;
module.exports.default = WindowOverlapLeft;
