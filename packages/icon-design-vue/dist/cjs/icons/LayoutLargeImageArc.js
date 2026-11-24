'use strict';

const { defineComponent, h } = require('vue');

const LayoutLargeImageArc = defineComponent({
  name: 'LayoutLargeImageArc',
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
          h('rect', {"x":"9.000000000776865","y":"8.998779293414614","width":"1.999999999939774","height":"1.999999998869015","rx":".999998993246465","ry":".999998993246465"}),
          h('rect', {"x":"1.999999993642632","y":"1.998779299956368","width":"20","height":"20","rx":"1","ry":"1"}),
          h('rect', {"x":"5.999999993642632","y":"5.998779299956368","width":"12","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M17.999999993642632,10.998779299956368c-3.865993248600716,0-7,3.134006751399284-7,7"})
        ]
      );
  }
});

module.exports = LayoutLargeImageArc;
module.exports.LayoutLargeImageArc = LayoutLargeImageArc;
module.exports.default = LayoutLargeImageArc;
