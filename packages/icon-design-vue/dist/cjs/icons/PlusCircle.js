'use strict';

const { defineComponent, h } = require('vue');

const PlusCircle = defineComponent({
  name: 'PlusCircle',
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
          h('line', {"x1":"11.974731445219732","y1":"8.0000000004502","x2":"11.974731445219732","y2":"16.0000000004502"}),
          h('line', {"x1":"15.974731445219732","y1":"12.0000000004502","x2":"7.974731445219732","y2":"12.0000000004502"}),
          h('circle', {"cx":"11.974731445219732","cy":"12.000000000446562","r":"10"})
        ]
      );
  }
});

module.exports = PlusCircle;
module.exports.PlusCircle = PlusCircle;
module.exports.default = PlusCircle;
