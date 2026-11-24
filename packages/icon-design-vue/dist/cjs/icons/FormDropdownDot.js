'use strict';

const { defineComponent, h } = require('vue');

const FormDropdownDot = defineComponent({
  name: 'FormDropdownDot',
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
          h('rect', {"x":"1.974731444101053","y":"7.99999999557258","width":"20","height":"7.999999999996362","rx":"1","ry":"1"}),
          h('line', {"x1":"13.974731444101053","y1":"7.999999995576218","x2":"13.974731444101053","y2":"15.999999995568942"}),
          h('line', {"x1":"17.964731444100835","y1":"11.99999999557258","x2":"17.974731444101053","y2":"11.99999999557258"})
        ]
      );
  }
});

module.exports = FormDropdownDot;
module.exports.FormDropdownDot = FormDropdownDot;
module.exports.default = FormDropdownDot;
