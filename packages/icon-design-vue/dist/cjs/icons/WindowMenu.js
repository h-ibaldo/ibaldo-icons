'use strict';

const { defineComponent, h } = require('vue');

const WindowMenu = defineComponent({
  name: 'WindowMenu',
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
          h('rect', {"x":"2.000000004900357","y":"1.999999995256076","width":"20","height":"20","rx":"2","ry":"2"}),
          h('line', {"x1":"2.000000004900357","y1":"7.999999995256076","x2":"22.000000004900357","y2":"7.999999995256076"}),
          h('line', {"x1":"5.010000004900576","y1":"4.999999995256076","x2":"5.000000004900357","y2":"4.999999995256076"}),
          h('line', {"x1":"8.010000004900576","y1":"4.999999995256076","x2":"8.000000004900357","y2":"4.999999995256076"}),
          h('line', {"x1":"11.010000004900576","y1":"4.999999995256076","x2":"11.000000004900357","y2":"4.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"11.999999995256076","x2":"9.000000004900357","y2":"11.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"14.999999995256076","x2":"9.000000004900357","y2":"14.999999995256076"}),
          h('line', {"x1":"6.000000004900357","y1":"17.999999995256076","x2":"9.000000004900357","y2":"17.999999995256076"})
        ]
      );
  }
});

module.exports = WindowMenu;
module.exports.WindowMenu = WindowMenu;
module.exports.default = WindowMenu;
