'use strict';

const { defineComponent, h } = require('vue');

const WindowStack = defineComponent({
  name: 'WindowStack',
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
          h('rect', {"x":"2","y":"2","width":"16","height":"16","rx":"2","ry":"2"}),
          h('path', {"d":"M18,6h2c1.104569499670106,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500329894,2-2,2h-12c-1.104569499659192,0-2-.895430500338989-2-2v-2"}),
          h('line', {"x1":"2","y1":"8","x2":"18","y2":"8"}),
          h('line', {"x1":"5.035268548598651","y1":"4.998779303362426","x2":"5.025268548599342","y2":"4.998779303362426"}),
          h('line', {"x1":"8.035268548598651","y1":"4.998779303362426","x2":"8.025268548599342","y2":"4.998779303362426"})
        ]
      );
  }
});

module.exports = WindowStack;
module.exports.WindowStack = WindowStack;
module.exports.default = WindowStack;
