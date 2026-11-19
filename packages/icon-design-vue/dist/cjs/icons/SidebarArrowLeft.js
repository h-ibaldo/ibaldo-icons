'use strict';

const { defineComponent, h } = require('vue');

const SidebarArrowLeft = defineComponent({
  name: 'SidebarArrowLeft',
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
          h('rect', {"x":"1.999999999461579","y":"4.000000005698439","width":"20","height":"16","rx":"1.999999999999394","ry":"1.999999999999394","transform":"translate(23.999999997846089 24.000000012473947) rotate(-180)"}),
          h('line', {"x1":"7.999999998743078","y1":"20.000000005338734","x2":"8.00000000018008","y2":"4.000000005338734"}),
          h('line', {"x1":"17.999999999461579","y1":"12.000000006237315","x2":"11.999999999461579","y2":"12.000000005698894"}),
          h('polyline', {"points":"14.999999999192369 15.000000005968104 11.999999999461579 12.000000005698894 14.99999999973079 9.000000005968104"})
        ]
      );
  }
});

module.exports = SidebarArrowLeft;
module.exports.SidebarArrowLeft = SidebarArrowLeft;
module.exports.default = SidebarArrowLeft;
