'use strict';

const { defineComponent, h } = require('vue');

const PopoverListUpBig = defineComponent({
  name: 'PopoverListUpBig',
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
          h('path', {"d":"M19,6h-4l-3-4-3,4h-4c-1.104569499660101,0-2,.895430500338989-2,2v12c0,1.104569499661011.895430500339899,2,2,2h14c1.104569499670106,0,2-.895430500338989,2-2v-12c0-1.104569499661011-.895430500329894-2-2-2Z"}),
          h('line', {"x1":"8.010000000000218","y1":"18","x2":"8","y2":"18"}),
          h('line', {"x1":"8.010000000000218","y1":"14","x2":"8","y2":"14"}),
          h('line', {"x1":"8.010000000000218","y1":"10","x2":"8","y2":"10"}),
          h('line', {"x1":"12","y1":"18","x2":"16","y2":"18"}),
          h('line', {"x1":"12","y1":"14","x2":"16","y2":"14"}),
          h('line', {"x1":"12","y1":"10","x2":"16","y2":"10"})
        ]
      );
  }
});

module.exports = PopoverListUpBig;
module.exports.PopoverListUpBig = PopoverListUpBig;
module.exports.default = PopoverListUpBig;
