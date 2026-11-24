'use strict';

const { defineComponent, h } = require('vue');

const ArrowRepeatVerticalCompactOff = defineComponent({
  name: 'ArrowRepeatVerticalCompactOff',
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
          h('polyline', {"points":"22 15 19.000000000130967 18.000000000141881 16 15.000000000271029"}),
          h('line', {"x1":"21.999999999596184","y1":"2","x2":"1.999999999596184","y2":"22"}),
          h('g', {}, [
            h('line', {"x1":"14.99999999973079","y1":"4","x2":"8.99999999973079","y2":"4"}),
            h('path', {"d":"M18.99999999973079,18V7c0-.5712890625-.16839599609375-1.099853515619543-.445617675782159-1.554443359369543"})
          ]),
          h('polyline', {"points":"1.99999999973079 9.000000000141881 4.999999999599822 6 7.99999999973079 8.999999999870852"}),
          h('g', {}, [
            h('line', {"x1":"9","y1":"20.000000000141881","x2":"15","y2":"20.000000000141881"}),
            h('path', {"d":"M5,6.000000000141881v11c0,.5712890625.16839599609375,1.099853515628638.44561767578125,1.554443359378638"})
          ])
        ]
      );
  }
});

module.exports = ArrowRepeatVerticalCompactOff;
module.exports.ArrowRepeatVerticalCompactOff = ArrowRepeatVerticalCompactOff;
module.exports.default = ArrowRepeatVerticalCompactOff;
