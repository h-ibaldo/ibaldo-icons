'use strict';

const { defineComponent, h } = require('vue');

const SunDotted = defineComponent({
  name: 'SunDotted',
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
          h('circle', {"cx":"12","cy":"12","r":"4"}),
          h('line', {"x1":"12","y1":"21.989999999997963","x2":"12","y2":"21.999999999998181"}),
          h('line', {"x1":"12","y1":"2.009999999998399","x2":"12","y2":"1.999999999998181"}),
          h('line', {"x1":"2.010000000000218","y1":"11.999999999998181","x2":"2","y2":"11.999999999998181"}),
          h('line', {"x1":"21.989999999999782","y1":"11.999999999998181","x2":"22","y2":"11.999999999998181"}),
          h('line', {"x1":"4.93893218829362","y1":"19.061067812022884","x2":"4.928932188293402","y2":"19.071067812023102"}),
          h('line', {"x1":"19.06106781170638","y1":"4.938932187975297","x2":"19.071067811706598","y2":"4.928932187975079"}),
          h('line', {"x1":"4.938932187977116","y1":"4.938932188291801","x2":"4.928932187976898","y2":"4.928932188291583"}),
          h('line', {"x1":"19.061067812024703","y1":"19.061067811704561","x2":"19.071067812024921","y2":"19.071067811704779"})
        ]
      );
  }
});

module.exports = SunDotted;
module.exports.SunDotted = SunDotted;
module.exports.default = SunDotted;
