'use strict';

const { defineComponent, h } = require('vue');

const Menu = defineComponent({
  name: 'Menu',
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
          h('line', {"x1":"4.000000004889444","y1":"11.999999995256076","x2":"20.000000004889444","y2":"11.999999995256076"}),
          h('line', {"x1":"4.000000004889444","y1":"4.999999995256076","x2":"20.000000004889444","y2":"4.999999995256076"}),
          h('line', {"x1":"4.000000004889444","y1":"18.999999995256076","x2":"20.000000004889444","y2":"18.999999995256076"})
        ]
      );
  }
});

module.exports = Menu;
module.exports.Menu = Menu;
module.exports.default = Menu;
