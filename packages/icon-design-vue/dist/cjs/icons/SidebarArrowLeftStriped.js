'use strict';

const { defineComponent, h } = require('vue');

const SidebarArrowLeftStriped = defineComponent({
  name: 'SidebarArrowLeftStriped',
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
          h('rect', {"x":"2.025268564202634","y":"4.000000000716682","width":"20","height":"16","rx":"2.000000000000304","ry":"2.000000000000304","transform":"translate(24.050537127327516 24.000000002513382) rotate(-180)"}),
          h('line', {"x1":"8.025268563484133","y1":"20.000000000357431","x2":"8.025268564921134","y2":"4.000000000357431"}),
          h('line', {"x1":"18.025268564202634","y1":"12.000000001255103","x2":"12.025268564202634","y2":"12.000000000717591"}),
          h('polyline', {"points":"15.025268563933423 15.000000000985892 12.025268564202634 12.000000000717591 15.025268564471844 9.000000000985892"}),
          h('line', {"x1":"8.025268564471844","y1":"9.000000000357431","x2":"2.025268563933423","y2":"14.999999999819011"}),
          h('line', {"x1":"2.204956063590544","y1":"18.820190429521972","x2":"8.025268564112594","y2":"13.000000000357431"}),
          h('line', {"x1":"8.025268563753343","y1":"17.000000000357431","x2":"5.025268563484133","y2":"20.000000000088221"}),
          h('line', {"x1":"8.025268564831094","y1":"5.000000000357431","x2":"2.025268564292674","y2":"10.999999999819011"}),
          h('line', {"x1":"5.025268564921134","y1":"4.000000000088221","x2":"2.025268564651924","y2":"6.999999999819011"})
        ]
      );
  }
});

module.exports = SidebarArrowLeftStriped;
module.exports.SidebarArrowLeftStriped = SidebarArrowLeftStriped;
module.exports.default = SidebarArrowLeftStriped;
