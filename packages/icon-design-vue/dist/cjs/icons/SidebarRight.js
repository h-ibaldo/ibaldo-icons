'use strict';

const { defineComponent, h } = require('vue');

const SidebarRight = defineComponent({
  name: 'SidebarRight',
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
          h('rect', {"x":"1.99999997206578","y":"1.997697219891961","width":"20","height":"19.999864816289119","rx":"1.99999999997226","ry":"1.99999999997226","transform":"translate(23.999999944603495 23.995259255601013) rotate(180)"}),
          h('line', {"x1":"14.999999971625584","y1":"1.997562036452109","x2":"14.999999972516889","y2":"21.997562036452109"}),
          h('line', {"x1":"14.999999971845682","y1":"6.997562036452109","x2":"21.999999971845682","y2":"6.997562036135605"})
        ]
      );
  }
});

module.exports = SidebarRight;
module.exports.SidebarRight = SidebarRight;
module.exports.default = SidebarRight;
