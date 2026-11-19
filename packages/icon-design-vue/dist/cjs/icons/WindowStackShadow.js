'use strict';

const { defineComponent, h } = require('vue');

const WindowStackShadow = defineComponent({
  name: 'WindowStackShadow',
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
          h('path', {"d":"M22,8v11.866666666672245c0,1.178207466298772-.955125867019888,2.133333333327755-2.133333333329574,2.133333333327755h-11.866666666669516"}),
          h('line', {"x1":"2","y1":"8","x2":"17.999999999999091","y2":"8"}),
          h('line', {"x1":"5.035268548598651","y1":"4.998779303362426","x2":"5.025268548599342","y2":"4.998779303362426"}),
          h('line', {"x1":"8.035268548598651","y1":"4.998779303362426","x2":"8.025268548599342","y2":"4.998779303362426"})
        ]
      );
  }
});

module.exports = WindowStackShadow;
module.exports.WindowStackShadow = WindowStackShadow;
module.exports.default = WindowStackShadow;
