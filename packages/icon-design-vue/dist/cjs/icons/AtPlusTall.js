'use strict';

const { defineComponent, h } = require('vue');

const AtPlusTall = defineComponent({
  name: 'AtPlusTall',
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
          h('rect', {"x":"10.474727789446149","y":"7.000000000250623","width":"5.999999950122515","height":"9.999999999999659","rx":"2.999996961486414","ry":"2.999996961486414"}),
          h('line', {"x1":"18.474731450040053","y1":"22.000000000478394","x2":"13.474731450040053","y2":"22.000000000479304"}),
          h('path', {"d":"M5.474731450040053,12.00000000046839v2.000008000009984c0,4.418273580367895,3.581718419629397,7.99999200000002,7.99999200000002,7.99999200000002h.00001599999996"}),
          h('path', {"d":"M21.474731450040053,14.000008000478374v-4.00001599999996c0-4.418273580366986-3.581718419630306-7.99999200000002-7.99999200000002-7.99999200000002"}),
          h('path', {"d":"M16.474731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1"}),
          h('line', {"x1":"4.974731450040053","y1":"2.00000000046839","x2":"4.974731450040053","y2":"8.00000000046839"}),
          h('line', {"x1":"7.974731450040053","y1":"5.00000000046839","x2":"1.974731450040053","y2":"5.00000000046839"}),
          h('path', {"d":"M13.474731450070067,2.000000000448381c-.692321777340112,0-1.359924316399884.097900390625-2,.2646484375"})
        ]
      );
  }
});

module.exports = AtPlusTall;
module.exports.AtPlusTall = AtPlusTall;
module.exports.default = AtPlusTall;
