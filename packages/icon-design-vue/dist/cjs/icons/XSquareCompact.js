'use strict';

const { defineComponent, h } = require('vue');

const XSquareCompact = defineComponent({
  name: 'XSquareCompact',
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
          h('rect', {"x":"3.999999990779543","y":"4.000000000448381","width":"16","height":"16","rx":"3","ry":"3"}),
          h('line', {"x1":"9.999999990870492","y1":"14.000000000357431","x2":"13.999999990690412","y2":"10.000000000538421"}),
          h('line', {"x1":"13.999999990590368","y1":"14.000000000446562","x2":"9.999999990959623","y2":"10.000000000448381"})
        ]
      );
  }
});

module.exports = XSquareCompact;
module.exports.XSquareCompact = XSquareCompact;
module.exports.default = XSquareCompact;
