'use strict';

const { defineComponent, h } = require('vue');

const Screwdriver = defineComponent({
  name: 'Screwdriver',
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
          h('polygon', {"points":"22 2.998779302921321 20.999999999959982 1.998779302972252 16.000000000050932 3.998779303190531 16.000000000231012 7.998779303190531 20.000000000231012 7.99877930301227 22 2.998779302921321"}),
          h('rect', {"x":"2.050252532323929","y":"14.877458960039665","width":"9.899494936615202","height":"4.24264068711414","rx":"1.000000000003308","ry":"1.000000000003308","transform":"translate(-9.969699585904227 9.928574655642173) rotate(-45.000000002565471)"}),
          h('line', {"x1":"16.000000000231012","y1":"7.998779303190531","x2":"10.500000000471118","y2":"13.498779303441552"})
        ]
      );
  }
});

module.exports = Screwdriver;
module.exports.Screwdriver = Screwdriver;
module.exports.default = Screwdriver;
