'use strict';

const { defineComponent, h } = require('vue');

const WindowBoltWideBare = defineComponent({
  name: 'WindowBoltWideBare',
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
          h('path', {"d":"M11.000000000183718,22.000000000448381l-7,.000000000001819c-1.104569499661011,0-2-.895430500338989-2-2V4.000000000448381c0-1.104569499661011.895430500338989-1.999999999998181,2-1.999999999998181l16-.000000000001819c1.104569499661011,0,2,.89543050033808,2,2v2"}),
          h('polygon', {"points":"16.000000000183718 10.000000000448381 13.000000000183718 16.000000000448381 16.000000000183718 16.000000000448381 15.000000000183718 22.000000000448381 22.000000000183718 15.000000000448381 19.000000000183718 15.000000000448381 22.000000000183718 10.000000000448381 16.000000000183718 10.000000000448381"}),
          h('line', {"x1":"5.010000000183936","y1":"5.000000000448381","x2":"5.000000000183718","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000183936","y1":"5.000000000448381","x2":"8.000000000183718","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000183936","y1":"5.000000000448381","x2":"11.000000000183718","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowBoltWideBare;
module.exports.WindowBoltWideBare = WindowBoltWideBare;
module.exports.default = WindowBoltWideBare;
