'use strict';

const { defineComponent, h } = require('vue');

const BriefcaseStriped = defineComponent({
  name: 'BriefcaseStriped',
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
          h('rect', {"x":"2","y":"6.999999999998181","width":"20","height":"14","rx":"1","ry":"1"}),
          h('path', {"d":"M8.999999999989086,2.999999999998181h6.000000000010914c.551915024494001,0,1,.448084975506,1,1v3H7.999999999989086v-3c0-.551915024494.448084975505999-1,1-1Z"}),
          h('line', {"x1":"7","y1":"9.999999999998181","x2":"7","y2":"17.999999999998181"}),
          h('line', {"x1":"17","y1":"9.999999999998181","x2":"17","y2":"17.999999999998181"})
        ]
      );
  }
});

module.exports = BriefcaseStriped;
module.exports.BriefcaseStriped = BriefcaseStriped;
module.exports.default = BriefcaseStriped;
