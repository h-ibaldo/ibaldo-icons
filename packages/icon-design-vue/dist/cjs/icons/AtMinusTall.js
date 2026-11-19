'use strict';

const { defineComponent, h } = require('vue');

const AtMinusTall = defineComponent({
  name: 'AtMinusTall',
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
          h('rect', {"x":"10.474727811215814","y":"7.000000000250623","width":"5.999999906583184","height":"9.999999999999659","rx":"2.999996946189291","ry":"2.999996946189291"}),
          h('line', {"x1":"18.474731450040053","y1":"22.000000000478394","x2":"13.474731450040053","y2":"22.000000000479304"}),
          h('path', {"d":"M16.474731450040053,14.000000000478394v1c0,1.10456949966192.895430500339899,2,2,2h1c1.104569499660101,0,2-.89543050033808,2-2v-1"}),
          h('line', {"x1":"7.974731450040053","y1":"5.00000000046839","x2":"1.974731450040053","y2":"5.00000000046839"}),
          h('path', {"d":"M21.474731450040053,14.00000000046839v-4c0-4.41827392578125-3.581726074220569-8-8-8-.693054199220569,0-1.3603515625.09967041015625-2,.26824951171875"}),
          h('path', {"d":"M5.474731450040053,10.00000000046839v4c0,4.41827392578125,3.581726074219659,8,8,8"})
        ]
      );
  }
});

module.exports = AtMinusTall;
module.exports.AtMinusTall = AtMinusTall;
module.exports.default = AtMinusTall;
