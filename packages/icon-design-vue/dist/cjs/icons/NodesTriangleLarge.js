'use strict';

const { defineComponent, h } = require('vue');

const NodesTriangleLarge = defineComponent({
  name: 'NodesTriangleLarge',
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
          h('circle', {"cx":"5","cy":"11.999999999998181","r":"3"}),
          h('circle', {"cx":"19","cy":"4.999999999998181","r":"3"}),
          h('circle', {"cx":"19","cy":"18.999999999998181","r":"3"}),
          h('line', {"x1":"7.6728515625","y1":"13.336425781248181","x2":"16.3271484375","y2":"17.663574218748181"}),
          h('line', {"x1":"16.3271484375","y1":"6.336425781248181","x2":"7.6728515625","y2":"10.663574218748181"}),
          h('line', {"x1":"19","y1":"7.999999999998181","x2":"19","y2":"15.999999999998181"})
        ]
      );
  }
});

module.exports = NodesTriangleLarge;
module.exports.NodesTriangleLarge = NodesTriangleLarge;
module.exports.default = NodesTriangleLarge;
