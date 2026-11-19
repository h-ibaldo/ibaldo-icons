'use strict';

const { defineComponent, h } = require('vue');

const DockRight = defineComponent({
  name: 'DockRight',
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
          h('rect', {"x":"5.974731417777548","y":"5.998779298355657","width":"20","height":"12","rx":".999999999997684","ry":".999999999997684","transform":"translate(27.973510715414747 -3.975952119961534) rotate(89.999999997423146)"}),
          h('polyline', {"points":"1.974731418182273 14.998779299121452 4.974731417782095 11.998779298717636 1.974731417372823 8.998779299121452"}),
          h('line', {"x1":"21.974731417511066","y1":"5.998779298088266","x2":"9.974731417511066","y2":"5.998779298626687"})
        ]
      );
  }
});

module.exports = DockRight;
module.exports.DockRight = DockRight;
module.exports.default = DockRight;
