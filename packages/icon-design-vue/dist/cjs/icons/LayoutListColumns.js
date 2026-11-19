'use strict';

const { defineComponent, h } = require('vue');

const LayoutListColumns = defineComponent({
  name: 'LayoutListColumns',
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
          h('rect', {"x":"1.999999994000973","y":"1.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"8.999999994000973","y1":"3.998779299956368","x2":"9.999999994000973","y2":"3.998779299956368"}),
          h('rect', {"x":"13.999999994000973","y":"1.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"20.999999994000973","y1":"3.998779299956368","x2":"21.999999994000973","y2":"3.998779299956368"}),
          h('rect', {"x":"1.999999994000973","y":"9.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"8.999999994000973","y1":"11.998779299956368","x2":"9.999999994000973","y2":"11.998779299956368"}),
          h('rect', {"x":"13.999999994000973","y":"9.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"20.999999994000973","y1":"11.998779299956368","x2":"21.999999994000973","y2":"11.998779299956368"}),
          h('rect', {"x":"1.999999994000973","y":"17.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"8.999999994000973","y1":"19.998779299956368","x2":"9.999999994000973","y2":"19.998779299956368"}),
          h('rect', {"x":"13.999999994000973","y":"17.998779299956368","width":"4","height":"4","rx":"1","ry":"1"}),
          h('line', {"x1":"20.999999994000973","y1":"19.998779299956368","x2":"21.999999994000973","y2":"19.998779299956368"})
        ]
      );
  }
});

module.exports = LayoutListColumns;
module.exports.LayoutListColumns = LayoutListColumns;
module.exports.default = LayoutListColumns;
