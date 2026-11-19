'use strict';

const { defineComponent, h } = require('vue');

const PaneArrowRightList = defineComponent({
  name: 'PaneArrowRightList',
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
          h('line', {"x1":"7.9747314392107","y1":"16.000000004040885","x2":"1.9747314392107","y2":"16.000000003501555"}),
          h('line', {"x1":"7.97473143956995","y1":"12.000000004040885","x2":"1.97473143956995","y2":"12.000000003501555"}),
          h('line', {"x1":"7.974731439929201","y1":"8.000000004040885","x2":"1.974731439929201","y2":"8.000000003501555"}),
          h('rect', {"x":"1.974731439570405","y":"4.000000004400135","width":"20","height":"16","rx":"1.999999999999245","ry":"1.999999999999245","transform":"translate(23.949462878063059 24.000000009875752) rotate(-180)"}),
          h('line', {"x1":"7.97473143885145","y1":"20.000000004040885","x2":"7.974731440288451","y2":"4.000000004040885"}),
          h('line', {"x1":"11.97473143957086","y1":"12.000000005073161","x2":"17.97473143957086","y2":"12.00000000426553"}),
          h('polyline', {"points":"14.974731439974676 15.000000004669346 17.97473143957086 12.00000000426553 14.974731439167044 9.000000004669346"})
        ]
      );
  }
});

module.exports = PaneArrowRightList;
module.exports.PaneArrowRightList = PaneArrowRightList;
module.exports.default = PaneArrowRightList;
