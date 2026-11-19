'use strict';

const { defineComponent, h } = require('vue');

const FormDropdown = defineComponent({
  name: 'FormDropdown',
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
          h('rect', {"x":"1.974731444090139","y":"6.99999999557258","width":"20","height":"9.999999999996362","rx":"1","ry":"1"}),
          h('path', {"d":"M15.974731444090139,11.49999999557258l.792893218811514.792893218811514c.390524291749898.390524291753536,1.023689270620707.390524291753536,1.414213562389705,0l.792893218798781-.792893218811514"}),
          h('line', {"x1":"12.974731444090139","y1":"6.999999995576218","x2":"12.974731444090139","y2":"16.999999995568942"})
        ]
      );
  }
});

module.exports = FormDropdown;
module.exports.FormDropdown = FormDropdown;
module.exports.default = FormDropdown;
