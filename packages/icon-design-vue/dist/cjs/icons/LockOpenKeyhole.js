'use strict';

const { defineComponent, h } = require('vue');

const LockOpenKeyhole = defineComponent({
  name: 'LockOpenKeyhole',
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
          h('rect', {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.527343744520294,5.000000000480213c-.772216796880457-1.764404296875-2.528686523440228-3-4.577880859380457-3-2.761474609369543,0-5,2.23858642578125-5,5v3"}),
          h('line', {"x1":"11.949462885139837","y1":"18.000000000480213","x2":"11.949462885139837","y2":"16.000000000480213"}),
          h('circle', {"cx":"11.949462885139837","cy":"15.000000000480213","r":"1"})
        ]
      );
  }
});

module.exports = LockOpenKeyhole;
module.exports.LockOpenKeyhole = LockOpenKeyhole;
module.exports.default = LockOpenKeyhole;
