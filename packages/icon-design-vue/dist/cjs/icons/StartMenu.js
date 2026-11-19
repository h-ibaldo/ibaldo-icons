'use strict';

const { defineComponent, h } = require('vue');

const StartMenu = defineComponent({
  name: 'StartMenu',
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
          h('rect', {"x":"1.999999997440682","y":"17.999996544170244","width":"20","height":"3.999999999678039","rx":".999999999992127","ry":".999999999992127","transform":"translate(23.999999995039055 39.999993087923912) rotate(180)"}),
          h('path', {"d":"M18.999999988429408,17.999996566718437l-.000000000489308-14.999999986845069c-.000000000020009-.5522847498396-.447715250220426-1-1.000000000060027-.999999999967258l-15.000000007410563.000000000560249c-.552284749819592.000000000029104-.999999999959982.447715250207693-.999999999939973,1.000000000029104l.000000000491127,15.999999986885086"}),
          h('line', {"x1":"15.999999972060323","y1":"14.989996564600915","x2":"15.999999972060323","y2":"14.999996564601133"}),
          h('line', {"x1":"12.999999972060323","y1":"1.999996564601133","x2":"12.999999972060323","y2":"17.999996564601133"}),
          h('line', {"x1":"5.999999972060323","y1":"5.999996564601133","x2":"8.999999972060323","y2":"5.999996564601133"}),
          h('line', {"x1":"5.999999972060323","y1":"8.999996564601133","x2":"8.999999972060323","y2":"8.999996564601133"})
        ]
      );
  }
});

module.exports = StartMenu;
module.exports.StartMenu = StartMenu;
module.exports.default = StartMenu;
