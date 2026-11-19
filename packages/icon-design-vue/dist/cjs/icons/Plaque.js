'use strict';

const { defineComponent, h } = require('vue');

const Plaque = defineComponent({
  name: 'Plaque',
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
          h('path', {"d":"M21.999999981000656,15.999996563432433V7.999996563432433c-1.656860351560681,0-3-1.3431396484375-3-3H4.999999981000656c0,1.6568603515625-1.343139648430224,3-3,3v8c1.656860351569776,0,3,1.3431396484375,3,3h14c0-1.6568603515625,1.343139648439319-3,3-3Z"}),
          h('line', {"x1":"7.999999981000656","y1":"9.999996563432433","x2":"15.999999981000656","y2":"9.999996563432433"}),
          h('line', {"x1":"7.999999981000656","y1":"13.999996563432433","x2":"15.999999981000656","y2":"13.999996563432433"})
        ]
      );
  }
});

module.exports = Plaque;
module.exports.Plaque = Plaque;
module.exports.default = Plaque;
