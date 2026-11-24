'use strict';

const { defineComponent, h } = require('vue');

const MenuGridDots = defineComponent({
  name: 'MenuGridDots',
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
          h('rect', {"x":"4.000000034390609","y":"3.99999999373847","width":"1.999999941003125","height":"2.000000003035268","rx":".99999897146503","ry":".99999897146503"}),
          h('rect', {"x":"11.000000024728138","y":"3.99999999373847","width":"1.999999960328068","height":"2.000000003035268","rx":".999998981127271","ry":".999998981127271"}),
          h('rect', {"x":"18.000000044867988","y":"3.99999999373847","width":"1.999999920048367","height":"2.000000003035268","rx":".999998960987559","ry":".999998960987559"}),
          h('rect', {"x":"4.000000034390609","y":"10.999999995906698","width":"1.999999941003125","height":"1.999999998698812","rx":".999998971101232","ry":".999998971101232"}),
          h('rect', {"x":"11.000000024728138","y":"10.999999995906698","width":"1.999999960328068","height":"1.999999998698813","rx":".999998980763701","ry":".999998980763701"}),
          h('rect', {"x":"18.000000044867988","y":"10.999999995906698","width":"1.999999920048367","height":"1.999999998698812","rx":".999998960623761","ry":".999998960623761"}),
          h('rect', {"x":"4.000000034390609","y":"17.999999994349601","width":"1.999999941003125","height":"2.00000000181295","rx":".999998967012148","ry":".999998967012148"}),
          h('rect', {"x":"11.000000024728138","y":"17.999999994349601","width":"1.999999960328068","height":"2.00000000181295","rx":".999998976674617","ry":".999998976674617"}),
          h('rect', {"x":"18.000000044867988","y":"17.999999994349601","width":"1.999999920048367","height":"2.00000000181295","rx":".999998956534677","ry":".999998956534677"})
        ]
      );
  }
});

module.exports = MenuGridDots;
module.exports.MenuGridDots = MenuGridDots;
module.exports.default = MenuGridDots;
