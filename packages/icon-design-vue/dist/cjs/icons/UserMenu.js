'use strict';

const { defineComponent, h } = require('vue');

const UserMenu = defineComponent({
  name: 'UserMenu',
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
          h('line', {"x1":"22.000000004900357","y1":"6.999999995256076","x2":"17.000000004900357","y2":"6.999999995256076"}),
          h('line', {"x1":"22.000000004900357","y1":"11.999999995256076","x2":"17.000000004900357","y2":"11.999999995256076"}),
          h('line', {"x1":"22.000000004900357","y1":"16.999999995256076","x2":"17.000000004900357","y2":"16.999999995256076"}),
          h('circle', {"cx":"7.500000004900357","cy":"8.499999995256076","r":"3.5"}),
          h('path', {"d":"M13.000000004900357,18.999999995256076v-2c0-2.761423749154346-2.238576250849292-5-5-5h-1c-2.761423749159803,0-5,2.238576250845654-5,5v2"})
        ]
      );
  }
});

module.exports = UserMenu;
module.exports.UserMenu = UserMenu;
module.exports.default = UserMenu;
