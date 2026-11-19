'use strict';

const { defineComponent, h } = require('vue');

const MenuGridSquaresSmall = defineComponent({
  name: 'MenuGridSquaresSmall',
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
          h('rect', {"x":"4.000000004889444","y":"3.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"11.000000004889444","y":"3.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"18.000000004889444","y":"3.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"4.000000004889444","y":"10.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"11.000000004889444","y":"10.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"18.000000004889444","y":"10.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"4.000000004889444","y":"17.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"11.000000004889444","y":"17.999999995256076","width":"2","height":"2"}),
          h('rect', {"x":"18.000000004889444","y":"17.999999995256076","width":"2","height":"2"})
        ]
      );
  }
});

module.exports = MenuGridSquaresSmall;
module.exports.MenuGridSquaresSmall = MenuGridSquaresSmall;
module.exports.default = MenuGridSquaresSmall;
