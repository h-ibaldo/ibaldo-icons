'use strict';

const { defineComponent, h } = require('vue');

const WindowGlobePlain = defineComponent({
  name: 'WindowGlobePlain',
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
          h('path', {"d":"M9.499999993639904,21.998779299956368h-4.5c-1.656854249489697,0-3-1.343145750510303-3-3V4.998779299956368c0-1.656854249493335,1.343145750510303-3,3-3h14c1.656854249479693,0,3,1.343145750506665,3,3v4.5"}),
          h('line', {"x1":"1.999999993639904","y1":"7.998779299956368","x2":"21.999999993639904","y2":"7.998779299956368"}),
          h('circle', {"cx":"16.499999993657411","cy":"16.498779299955459","r":"5.499999999995794"}),
          h('line', {"x1":"10.999999993639904","y1":"16.498779299956368","x2":"21.999999993639904","y2":"16.498779299956368"}),
          h('path', {"d":"M17.619506829580132,21.884155276518868l.312927246090112-1.1474609375c.756774902340112-2.77459716796875.756774902340112-5.70123291015625,0-8.475830078125l-.312927246090112-1.1474609375"}),
          h('path', {"d":"M15.472900384260356,11.098083499175118l-.317077636710565,1.16278076171875c-.756713867190228,2.77459716796875-.756713867190228,5.70123291015625,0,8.475830078125l.317077636710565,1.16278076171875"})
        ]
      );
  }
});

module.exports = WindowGlobePlain;
module.exports.WindowGlobePlain = WindowGlobePlain;
module.exports.default = WindowGlobePlain;
