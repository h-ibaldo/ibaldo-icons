'use strict';

const { defineComponent, h } = require('vue');

const BrowserSliders = defineComponent({
  name: 'BrowserSliders',
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
          h('rect', {"x":"2","y":"2","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"2","y1":"8","x2":"22","y2":"8"}),
          h('line', {"x1":"19","y1":"5","x2":"11","y2":"5"}),
          h('line', {"x1":"7","y1":"12","x2":"7","y2":"18"}),
          h('line', {"x1":"12","y1":"12","x2":"12","y2":"18"}),
          h('line', {"x1":"17","y1":"12","x2":"17","y2":"18"}),
          h('line', {"x1":"6","y1":"14","x2":"8","y2":"14"}),
          h('line', {"x1":"11","y1":"16","x2":"13","y2":"16"}),
          h('line', {"x1":"16","y1":"14","x2":"18","y2":"14"}),
          h('line', {"x1":"5.009999993990277","y1":"4.998779299956368","x2":"4.999999993990059","y2":"4.998779299956368"}),
          h('line', {"x1":"8.009999993990277","y1":"4.998779299956368","x2":"7.999999993990059","y2":"4.998779299956368"})
        ]
      );
  }
});

module.exports = BrowserSliders;
module.exports.BrowserSliders = BrowserSliders;
module.exports.default = BrowserSliders;
