'use strict';

const { defineComponent, h } = require('vue');

const TabDotsStep = defineComponent({
  name: 'TabDotsStep',
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
          h('polygon', {"points":"22 21.999999999999091 2 21.999999999999091 2 1.999999999999091 11 1.999999999999091 11 5.999999999999091 22 5.999999999999091 22 21.999999999999091"}),
          h('line', {"x1":"22","y1":"1.999999999999091","x2":"15","y2":"1.999999999999091"}),
          h('line', {"x1":"8","y1":"14.009999999999309","x2":"8","y2":"13.999999999999091"}),
          h('line', {"x1":"12","y1":"14.009999999999309","x2":"12","y2":"13.999999999999091"}),
          h('line', {"x1":"16","y1":"14.009999999999309","x2":"16","y2":"13.999999999999091"})
        ]
      );
  }
});

module.exports = TabDotsStep;
module.exports.TabDotsStep = TabDotsStep;
module.exports.default = TabDotsStep;
