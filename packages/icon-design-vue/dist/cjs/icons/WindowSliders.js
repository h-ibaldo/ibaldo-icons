'use strict';

const { defineComponent, h } = require('vue');

const WindowSliders = defineComponent({
  name: 'WindowSliders',
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
          h('line', {"x1":"1.999999993990059","y1":"7.998779299956368","x2":"21.999999993990059","y2":"7.998779299956368"}),
          h('line', {"x1":"6.999999993990059","y1":"11.998779299956368","x2":"6.999999993990059","y2":"17.998779299956368"}),
          h('line', {"x1":"11.999999993990059","y1":"11.998779299956368","x2":"11.999999993990059","y2":"17.998779299956368"}),
          h('line', {"x1":"16.999999993990059","y1":"11.998779299956368","x2":"16.999999993990059","y2":"17.998779299956368"}),
          h('line', {"x1":"5.999999993990059","y1":"13.998779299956368","x2":"7.999999993990059","y2":"13.998779299956368"}),
          h('line', {"x1":"10.999999993990059","y1":"15.998779299956368","x2":"12.999999993990059","y2":"15.998779299956368"}),
          h('line', {"x1":"15.999999993990059","y1":"13.998779299956368","x2":"17.999999993990059","y2":"13.998779299956368"}),
          h('line', {"x1":"5.009999993990277","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368"}),
          h('line', {"x1":"8.009999993990277","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368"}),
          h('line', {"x1":"11.009999993990277","y1":"4.998779299956368","x2":"10.999999993990059","y2":"4.998779299956368"})
        ]
      );
  }
});

module.exports = WindowSliders;
module.exports.WindowSliders = WindowSliders;
module.exports.default = WindowSliders;
