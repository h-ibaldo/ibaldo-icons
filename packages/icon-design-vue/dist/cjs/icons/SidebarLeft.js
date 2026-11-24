'use strict';

const { defineComponent, h } = require('vue');

const SidebarLeft = defineComponent({
  name: 'SidebarLeft',
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
          h('rect', {"x":"1.99999997206578","y":"1.997697219891506","width":"20","height":"19.999864816289573","rx":"1.999999999975455","ry":"1.999999999975455"}),
          h('line', {"x1":"8.999999972054866","y1":"1.997562036587624","x2":"8.999999972054866","y2":"21.997562036587624"}),
          h('line', {"x1":"8.999999972054866","y1":"6.997562036587624","x2":"1.999999972054866","y2":"6.997562036587624"})
        ]
      );
  }
});

module.exports = SidebarLeft;
module.exports.SidebarLeft = SidebarLeft;
module.exports.default = SidebarLeft;
