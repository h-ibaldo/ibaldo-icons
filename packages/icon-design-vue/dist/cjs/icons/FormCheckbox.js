'use strict';

const { defineComponent, h } = require('vue');

const FormCheckbox = defineComponent({
  name: 'FormCheckbox',
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
          h('line', {"x1":"15.999999978659616","y1":"11.99877586740331","x2":"21.999999978659616","y2":"11.99877586740331"}),
          h('rect', {"x":"1.999999978659616","y":"6.99877586740331","width":"10","height":"10","rx":"1","ry":"1"})
        ]
      );
  }
});

module.exports = FormCheckbox;
module.exports.FormCheckbox = FormCheckbox;
module.exports.default = FormCheckbox;
