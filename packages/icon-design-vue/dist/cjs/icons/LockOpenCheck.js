'use strict';

const { defineComponent, h } = require('vue');

const LockOpenCheck = defineComponent({
  name: 'LockOpenCheck',
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
          h('polyline', {"points":"8.949462885139837 16.000000006628397 10.949462885139837 18.000000000298314 14.949462885139837 14.000000000480213"}),
          h('rect', {"x":"3.949462885139837","y":"10.000000000480213","width":"16","height":"12","rx":"1","ry":"1"}),
          h('path', {"d":"M16.527343744520294,5.000000000480213c-.772216796880457-1.764404296875-2.528686523440228-3-4.577880859380457-3-2.761474609369543,0-5,2.23858642578125-5,5v3"})
        ]
      );
  }
});

module.exports = LockOpenCheck;
module.exports.LockOpenCheck = LockOpenCheck;
module.exports.default = LockOpenCheck;
