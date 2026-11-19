'use strict';

const { defineComponent, h } = require('vue');

const WindowSlidersTwoPlain = defineComponent({
  name: 'WindowSlidersTwoPlain',
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
          h('rect', {"x":"1.999999993990059","y":"1.998779299956368","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"1.999999993990059","y1":"6.998779299956368","x2":"21.999999993990059","y2":"6.998779299956368"}),
          h('line', {"x1":"7.999999994000973","y1":"10.998779299956368","x2":"7.999999994000973","y2":"17.998779299956368"}),
          h('line', {"x1":"15.999999994000973","y1":"10.998779299956368","x2":"15.999999994000973","y2":"17.998779299956368"}),
          h('line', {"x1":"5.999999994000973","y1":"12.998779299956368","x2":"9.999999994000973","y2":"12.998779299956368"}),
          h('line', {"x1":"13.999999994000973","y1":"15.998779299956368","x2":"17.999999994000973","y2":"15.998779299956368"})
        ]
      );
  }
});

module.exports = WindowSlidersTwoPlain;
module.exports.WindowSlidersTwoPlain = WindowSlidersTwoPlain;
module.exports.default = WindowSlidersTwoPlain;
