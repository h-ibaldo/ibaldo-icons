'use strict';

const { defineComponent, h } = require('vue');

const DockTop = defineComponent({
  name: 'DockTop',
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
          h('rect', {"x":"1.974731417872135","y":"1.998779298535737","width":"20","height":"12","rx":".999999999999706","ry":".999999999999706"}),
          h('polyline', {"points":"8.974731416881696 21.998779297997316 11.974731417150906 18.998779298266527 14.974731416881696 21.998779298535737"}),
          h('line', {"x1":"1.974731418051306","y1":"5.998779297637157","x2":"21.974731418051306","y2":"5.998779299434318"})
        ]
      );
  }
});

module.exports = DockTop;
module.exports.DockTop = DockTop;
module.exports.default = DockTop;
