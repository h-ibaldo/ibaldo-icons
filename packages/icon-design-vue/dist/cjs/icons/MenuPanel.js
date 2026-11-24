'use strict';

const { defineComponent, h } = require('vue');

const MenuPanel = defineComponent({
  name: 'MenuPanel',
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
          h('path', {"d":"M5.000000004900357,1.999999995256076h13c.552284749819592,0,1,.447715250171314,1,1v18c0,.552284749832324-.447715250180408,1-1,1H4.867867456059685"}),
          h('line', {"x1":"5.000000004900357","y1":"6.999999995256076","x2":"14.000000004900357","y2":"6.999999995256076"}),
          h('line', {"x1":"5.000000004900357","y1":"11.999999995256076","x2":"14.000000004900357","y2":"11.999999995256076"}),
          h('line', {"x1":"5.000000004900357","y1":"16.999999995256076","x2":"14.000000004900357","y2":"16.999999995256076"})
        ]
      );
  }
});

module.exports = MenuPanel;
module.exports.MenuPanel = MenuPanel;
module.exports.default = MenuPanel;
