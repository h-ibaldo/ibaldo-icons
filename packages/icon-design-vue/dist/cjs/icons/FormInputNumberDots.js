'use strict';

const { defineComponent, h } = require('vue');

const FormInputNumberDots = defineComponent({
  name: 'FormInputNumberDots',
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
          h('rect', {"x":"2","y":"6","width":"20","height":"12.000000000003638","rx":"2","ry":"2"}),
          h('polyline', {"points":"6 10 7 10 7 14"}),
          h('line', {"x1":"11","y1":"13.989999999999782","x2":"11","y2":"14"}),
          h('line', {"x1":"15","y1":"13.989999999999782","x2":"15","y2":"14"})
        ]
      );
  }
});

module.exports = FormInputNumberDots;
module.exports.FormInputNumberDots = FormInputNumberDots;
module.exports.default = FormInputNumberDots;
