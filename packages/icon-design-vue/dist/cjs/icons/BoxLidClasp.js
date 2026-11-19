'use strict';

const { defineComponent, h } = require('vue');

const BoxLidClasp = defineComponent({
  name: 'BoxLidClasp',
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
          h('rect', {"x":"2","y":"2.999999999998181","width":"20","height":"5","rx":"1","ry":"1"}),
          h('path', {"d":"M21,7.999999999998181v12c0,.552284749830505-.503679656439999,1-1.125,1H4.125c-.621320343560001,0-1.125-.447715250169495-1.125-1V7.999999999998181"}),
          h('line', {"x1":"10","y1":"15.999999999998181","x2":"14","y2":"15.999999999998181"}),
          h('path', {"d":"M9,7.999999999998181l-.000000004929461,1c0,1.656854249400567,1.343145750599433,3,3,3,1.656854249399657,0,3-1.343145750599433,3-3l.000000004929461-1"})
        ]
      );
  }
});

module.exports = BoxLidClasp;
module.exports.BoxLidClasp = BoxLidClasp;
module.exports.default = BoxLidClasp;
