'use strict';

const { defineComponent, h } = require('vue');

const BriefcaseFlap = defineComponent({
  name: 'BriefcaseFlap',
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
          h('path', {"d":"M9,2.999999999998181h6c.551915024494001,0,1,.448084975506,1,1v3h-8v-3c0-.551915024494.448084975505999-1,1-1Z"}),
          h('polyline', {"points":"2 10.999999999998181 12 15.999999999998181 22 10.999999999998181"})
        ]
      );
  }
});

module.exports = BriefcaseFlap;
module.exports.BriefcaseFlap = BriefcaseFlap;
module.exports.default = BriefcaseFlap;
