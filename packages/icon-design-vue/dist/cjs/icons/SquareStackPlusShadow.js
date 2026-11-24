'use strict';

const { defineComponent, h } = require('vue');

const SquareStackPlusShadow = defineComponent({
  name: 'SquareStackPlusShadow',
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
          h('path', {"d":"M11.999999994010068,18.998779299956368h-5c-.552284749830505,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250169495-1,1-1h11c.552284749830505,0,1,.447715250167676,1,1v5"}),
          h('path', {"d":"M1.999999994010068,13.998779299956368V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h11"}),
          h('g', {}, [
            h('line', {"x1":"18.999999994010068","y1":"15.998779299956368","x2":"18.999999994010068","y2":"21.998779299956368"}),
            h('line', {"x1":"21.999999994010068","y1":"18.998779299865419","x2":"15.999999994010068","y2":"18.99877930004368"})
          ])
        ]
      );
  }
});

module.exports = SquareStackPlusShadow;
module.exports.SquareStackPlusShadow = SquareStackPlusShadow;
module.exports.default = SquareStackPlusShadow;
