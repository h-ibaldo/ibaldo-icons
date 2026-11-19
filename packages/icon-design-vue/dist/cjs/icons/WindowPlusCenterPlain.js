'use strict';

const { defineComponent, h } = require('vue');

const WindowPlusCenterPlain = defineComponent({
  name: 'WindowPlusCenterPlain',
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
            h('line', {"x1":"11.999999993642632","y1":"11.99877929995273","x2":"11.999999993642632","y2":"17.998779299956368"}),
            h('line', {"x1":"14.999999993642632","y1":"14.99877929995273","x2":"8.999999993642632","y2":"14.99877929995273"})
          ]),
          h('rect', {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"3","ry":"3"}),
          h('line', {"x1":"1.999999993642632","y1":"7.998779299956368","x2":"21.999999993642632","y2":"7.998779299956368"})
        ]
      );
  }
});

module.exports = WindowPlusCenterPlain;
module.exports.WindowPlusCenterPlain = WindowPlusCenterPlain;
module.exports.default = WindowPlusCenterPlain;
