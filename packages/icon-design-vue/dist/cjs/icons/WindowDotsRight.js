'use strict';

const { defineComponent, h } = require('vue');

const WindowDotsRight = defineComponent({
  name: 'WindowDotsRight',
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
          h('rect', {"x":"2.00000000018008","y":"2.000000000448836","width":"20","height":"20","rx":"1.999999999999068","ry":"1.999999999999068"}),
          h('line', {"x1":"22","y1":"8","x2":"2","y2":"8.000000000897671"}),
          h('line', {"x1":"19.009999999870161","y1":"5.000000000133696","x2":"18.999999999869942","y2":"5.000000000133696"}),
          h('line', {"x1":"16.009999999870161","y1":"5.000000000268301","x2":"15.999999999869942","y2":"5.000000000268301"}),
          h('line', {"x1":"13.009999999870161","y1":"5.000000000403816","x2":"12.999999999869942","y2":"5.000000000403816"})
        ]
      );
  }
});

module.exports = WindowDotsRight;
module.exports.WindowDotsRight = WindowDotsRight;
module.exports.default = WindowDotsRight;
