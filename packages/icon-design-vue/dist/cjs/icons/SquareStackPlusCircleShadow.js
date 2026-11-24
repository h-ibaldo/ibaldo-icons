'use strict';

const { defineComponent, h } = require('vue');

const SquareStackPlusCircleShadow = defineComponent({
  name: 'SquareStackPlusCircleShadow',
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
          h('path', {"d":"M7.999999993639904,21.998779299956368h-1c-.552284749829596,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250170404-1,1-1h14c.552284749829596,0,1,.447715250167676,1,1v1"}),
          h('circle', {"cx":"15.999999993639904","cy":"15.998779299959097","r":"5.999999999998636"}),
          h('g', {}, [
            h('line', {"x1":"15.999999993639904","y1":"13.498779299956368","x2":"15.999999993639904","y2":"18.498779299956368"}),
            h('line', {"x1":"18.499999993639904","y1":"15.998779299865419","x2":"13.499999993639904","y2":"15.99877930004368"})
          ]),
          h('path', {"d":"M1.999999993639904,16.998779299956368V2.998779299956368c0-.552284749832324.447715250170404-1,1-1h14"})
        ]
      );
  }
});

module.exports = SquareStackPlusCircleShadow;
module.exports.SquareStackPlusCircleShadow = SquareStackPlusCircleShadow;
module.exports.default = SquareStackPlusCircleShadow;
